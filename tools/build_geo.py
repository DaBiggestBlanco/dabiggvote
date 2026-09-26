#!/usr/bin/env python3
"""Build src/geo.js: offline lookup tables from ZIP code or census block to 2026 districts.

Every 2020 census block in California is placed (by its internal point) in:
  - U.S. House districts enacted by Prop 50 (AB 604), used for the 2026 election
  - State Senate and Assembly districts (2021 commission lines, Census TIGER 2024)
  - Board of Equalization districts (2021 commission lines)
  - ZIP Code Tabulation Area, incorporated city / CDP, unified school district

Outputs
  zips   ZIP -> population-weighted shares of each district, county, city and school district
  tracts census tract -> most common district combination
  blocks the few blocks whose districts differ from their tract's majority
The page uses `zips` for ZIP lookups, and tracts/blocks for exact street-address lookups
(the Census geocoder returns the address's block).

Usage: python3 tools/build_geo.py [cache_dir]   (downloads ~1 GB of boundary files on first run)
"""
import json
import sys
import urllib.parse
import urllib.request
from collections import defaultdict
from pathlib import Path

import geopandas as gpd
import pandas as pd
import pyogrio

ROOT = Path(__file__).resolve().parent.parent
CACHE = Path(sys.argv[1] if len(sys.argv) > 1 else ROOT / ".geo-cache")
TIGER = "https://www2.census.gov/geo/tiger/"
FILES = {
    "tabblock": TIGER + "TIGER2020/TABBLOCK20/tl_2020_06_tabblock20.zip",
    "zcta": TIGER + "TIGER2020/ZCTA520/tl_2020_us_zcta520.zip",
    "sldu": TIGER + "TIGER2024/SLDU/tl_2024_06_sldu.zip",
    "sldl": TIGER + "TIGER2024/SLDL/tl_2024_06_sldl.zip",
    "place": TIGER + "TIGER2024/PLACE/tl_2024_06_place.zip",
    "unsd": TIGER + "TIGER2024/UNSD/tl_2024_06_unsd.zip",
    "county": TIGER + "TIGER2024/COUNTY/tl_2024_us_county.zip",
}
ARCGIS = {
    # California State Geoportal: AB 604 congressional districts as enacted by Prop 50
    "cd": "https://services3.arcgis.com/uknczv4rpevve42E/arcgis/rest/services/AB_604_-_California_Congressional_Districts_2027-2032_as_enacted_by_Proposition_50_view/FeatureServer/0",
    # Board of Equalization: 2021 Citizens Redistricting Commission districts
    "boe": "https://services7.arcgis.com/iwxhJVOFEKDxO7gk/arcgis/rest/services/California_State_Board_of_Equalization_Districts_2020/FeatureServer/0",
}
MIN_SHARE = 0.005


def fetch(name: str, url: str) -> Path:
    path = CACHE / Path(urllib.parse.urlparse(url).path).name
    if not path.exists():
        print("downloading", name)
        urllib.request.urlretrieve(url, path)
    return path


def fetch_arcgis(name: str, layer: str) -> Path:
    path = CACHE / f"{name}.geojson"
    if not path.exists():
        feats, offset = [], 0
        while True:
            q = urllib.parse.urlencode({"where": "1=1", "outFields": "DISTRICT", "outSR": 4326,
                                        "f": "geojson", "resultOffset": offset, "resultRecordCount": 10})
            page = json.load(urllib.request.urlopen(f"{layer}/query?{q}"))
            feats += page["features"]
            if len(page["features"]) < 10:
                break
            offset += 10
        path.write_text(json.dumps({"type": "FeatureCollection", "features": feats}))
    return path


def assign_blocks() -> pd.DataFrame:
    paths = {k: fetch(k, u) for k, u in FILES.items()}
    paths.update({k: fetch_arcgis(k, u) for k, u in ARCGIS.items()})
    b = pyogrio.read_dataframe(paths["tabblock"], read_geometry=False,
                               columns=["GEOID20", "POP20", "INTPTLAT20", "INTPTLON20"])
    b = gpd.GeoDataFrame(b, geometry=gpd.points_from_xy(b.INTPTLON20.astype(float), b.INTPTLAT20.astype(float)), crs=4326)
    layers = {"cd": ("cd", "DISTRICT"), "boe": ("boe", "DISTRICT"), "sd": ("sldu", "SLDUST"),
              "ad": ("sldl", "SLDLST"), "place": ("place", "NAME"), "unsd": ("unsd", "NAME"), "zip": ("zcta", "ZCTA5CE20")}
    for key, (src, col) in layers.items():
        g = gpd.read_file(paths[src], bbox=tuple(b.total_bounds)).to_crs(4326)[[col, "geometry"]].rename(columns={col: key})
        j = gpd.sjoin(b[["geometry"]], g, how="left", predicate="within")
        b[key] = j[~j.index.duplicated()][key]
    for key in ("cd", "sd", "ad", "boe"):
        missing = b[key].isna().sum()
        assert missing == 0, f"{missing} blocks without a {key} district"
    b["county"] = b.GEOID20.str[2:5]
    counties = gpd.read_file(paths["county"], ignore_geometry=True)
    names = dict(counties[counties.STATEFP == "06"][["COUNTYFP", "NAME"]].values)
    return pd.DataFrame(b.drop(columns=["geometry", "INTPTLAT20", "INTPTLON20"])), names


def shares(df: pd.DataFrame, col: str, conv=str):
    s = df.groupby(col).POP20.sum()
    s = s / s.sum() if s.sum() else s
    return [[conv(k), round(float(v), 3)] for k, v in s.sort_values(ascending=False).items() if v >= MIN_SHARE]


def main() -> None:
    CACHE.mkdir(exist_ok=True)
    b, county_names = assign_blocks()
    num = lambda v: int(v)

    zips = {}
    for z, df in b[b.zip.notna()].groupby("zip"):
        if df.POP20.sum() == 0:
            continue
        zips[z] = {"c": shares(df, "county"), "cd": shares(df, "cd", num), "sd": shares(df, "sd", num),
                   "ad": shares(df, "ad", num), "boe": shares(df, "boe", num),
                   "pl": shares(df.dropna(subset=["place"]), "place"), "sch": shares(df.dropna(subset=["unsd"]), "unsd")}

    b["key"] = b.cd.astype(int).astype(str) + "." + b.sd.astype(int).astype(str) + "." + b.ad.astype(int).astype(str) + "." + b.boe.astype(str)
    keys = sorted(b.key.unique())
    kidx = {k: i for i, k in enumerate(keys)}
    b["tract"] = b.GEOID20.str[:11]
    majority = b.groupby("tract").key.agg(lambda s: s.value_counts().index[0])
    tracts = defaultdict(dict)
    for tract, key in majority.items():
        tracts[tract[2:5]][tract[5:]] = kidx[key]
    b["maj"] = b.tract.map(majority)
    blocks = defaultdict(list)
    for (tract, key), df in b[b.key != b.maj].groupby(["tract", "key"]):
        blocks[tract[2:]].append([kidx[key], ",".join(df.GEOID20.str[11:])])

    out = {"source": "2020 Census blocks; Prop 50 (AB 604) congressional districts; 2021 Senate, Assembly and BOE districts",
           "counties": county_names, "keys": keys, "tracts": tracts, "blocks": blocks, "zips": zips}
    js = ("// Generated by tools/build_geo.py. Do not edit by hand.\n"
          "window.GEO=" + json.dumps(out, separators=(",", ":"), ensure_ascii=False) + ";\n")
    (ROOT / "src" / "geo.js").write_text(js)
    print(f"zips {len(zips)}, tracts {len(majority)}, exception blocks {int((b.key != b.maj).sum())}, {len(js):,} bytes")


if __name__ == "__main__":
    main()
