// Region-aware wording for statewide races. A text field may be a plain string or an object
// keyed by county name, region id, or "all" (the general version shown when no location is set).
// The app picks the most specific match for the viewer's county.
(function () {
  var G = window.GUIDE;
  var REGION = {};
  var groups = {
    ie: ["Riverside", "San Bernardino"],
    la: ["Los Angeles"],
    oc: ["Orange"],
    sd: ["San Diego", "Imperial"],
    bay: ["Alameda", "Contra Costa", "Marin", "Napa", "San Francisco", "San Mateo", "Santa Clara", "Solano", "Sonoma"],
    valley: ["Fresno", "Kern", "Kings", "Madera", "Merced", "San Joaquin", "Stanislaus", "Tulare"],
    sac: ["Sacramento", "Placer", "El Dorado", "Yolo", "Sutter", "Yuba"],
    coast: ["Ventura", "Santa Barbara", "San Luis Obispo", "Monterey", "San Benito", "Santa Cruz"]
  };
  for (var r in groups) groups[r].forEach(function (c) { REGION[c] = r; });
  G.regionOf = function (county) { return REGION[county] || (county ? "north" : ""); };

  // C.A.R. median sold price, August 2026.
  var PRICE = {
    "Los Angeles": 946950, "Orange": 1452500, "San Diego": 1090000, "Riverside": 632990, "San Bernardino": 522370,
    "Ventura": 925000, "Imperial": 410000, "San Francisco": 1875000, "Alameda": 1285000, "Santa Clara": 1900000,
    "Contra Costa": 875000, "Solano": 575000, "Sacramento": 549000, "Fresno": 430000, "Kern": 400500,
    "San Joaquin": 560000, "Stanislaus": 475000, "Santa Barbara": 1335000, "Monterey": 911000, "Shasta": 389000, "Butte": 418250
  };
  var money = function (n) { return n >= 1e6 ? "$" + (Math.round(n / 1e4) / 100).toFixed(2).replace(/0$/, "") + " million" : "$" + Math.round(n / 1000) + ",000"; };
  var CAR = ["California Association of Realtors: August 2026 home prices", "https://www.car.org/aboutus/mediacenter/newsreleases/2026releases/august2026sales"];
  var ALA = ["American Lung Association: State of the Air 2026", "https://www.lung.org/research/sota"];

  function byId(id) { return G.contests.filter(function (c) { return c.id === id; })[0]; }
  function perCounty(general, fn) { var o = { all: general }; for (var c in PRICE) o[c] = fn(c, PRICE[c]); return o; }

  G.lens.en = G.lens.en.replace("clean air in warehouse-heavy Inland Empire communities", "clean air in neighborhoods next to freeways, ports, refineries and warehouses");
  G.lens.es = G.lens.es.replace("aire limpio en comunidades con muchas bodegas en el Inland Empire", "aire limpio en barrios junto a autopistas, puertos, refinerías y bodegas");

  // Propositions: regional detail goes into the scorecard reasons (see content-choices.js).
  var p1 = byId("p1");
  p1.score.home[1] = perCounty(p1.score.home[1], function (c, p) {
    return "In " + c + " County the median home sold for about " + money(p) + " in August 2026" +
      (p < 700000 ? ", so down-payment help can put owning within reach for families renting now. " : ", out of reach for many working families. ") + p1.score.home[1];
  });
  p1.src.push(CAR);

  var p37 = byId("p37");
  p37.score.home[1] = perCounty(p37.score.home[1] + " Homes must cost under about $1.5 million, which covers most new homes outside the priciest areas.", function (c, p) {
    return p37.score.home[1] + (p < 1100000
      ? " In " + c + " County, where the median home sold for about " + money(p) + " in August 2026, nearly all new homes fall under the price cap."
      : " In " + c + " County, where the median home sold for about " + money(p) + " in August 2026, many new homes cost more than the cap, so it will help fewer buyers here.");
  });
  p37.src.push(CAR);

  var p43 = byId("p43");
  var base43 = p43.score.services[1];
  p43.score.services[1] = {
    all: base43,
    ie: base43 + " Fast-growing Inland Empire cities rely on local measures to build fire stations and keep up with 911 response, parks and roads.",
    la: base43 + " L.A. County's 2024 Measure A homelessness tax passed with about 57% and would have failed under a two-thirds rule.",
    bay: base43 + " San Francisco's 2018 Prop C for homeless housing passed with 61% and would have failed under a two-thirds rule.",
    valley: base43 + " Valley cities with tight budgets rely on local measures for police, fire and road repair.",
    sd: base43 + " San Diego County's 2016 Measure A for transit and roads won about 58% but failed because it needed two-thirds."
  };

  var p45 = byId("p45");
  p45.score.home[1] = perCounty(p45.score.home[1], function (c, p) {
    return p45.score.home[1] + " In " + c + " County the median home sold for about " + money(p) + " in August 2026.";
  });
  var base45 = p45.score.air[1];
  p45.score.air[1] = {
    all: base45,
    ie: "The Inland Empire breathes some of the worst ozone in the country, so faster freeway projects matter here. " + base45,
    la: "Neighborhoods near L.A.'s ports, rail yards and freeways breathe the worst air in the country. " + base45,
    oc: "The Los Angeles–Long Beach air basin, which includes Orange County, has the nation's worst ozone. " + base45,
    valley: "Bakersfield, Visalia and Fresno have some of the nation's worst particle pollution. " + base45,
    bay: "West Oakland and Richmond already carry the Bay Area's heaviest pollution next to ports and freeways. " + base45,
    sd: "Barrio Logan and National City sit beside the port, shipyards and freeways. " + base45
  };
  p45.src.push(CAR, ALA);

  // Attorney General
  var ag = byId("ag");
  ag.why[0] = {
    all: "Enforces laws requiring cities to allow more housing, and has taken on polluters in neighborhoods that already carry more than their share.",
    ie: "Enforces laws requiring cities to allow more housing and has taken on warehouse pollution. His office's 2022 settlement pushed Fontana to adopt stricter warehouse standards.",
    oc: "Enforces laws requiring cities to allow more housing. His office sued Huntington Beach to make it follow state housing law, and he has taken on polluters in overburdened neighborhoods."
  };

  // Insurance Commissioner: wildfire and insurance
  var ins = byId("ins");
  ins.why.push({
    all: "Wildfire risk has pushed insurers to drop or refuse policies across California, so the commissioner's work touches families in every region.",
    la: "The 2025 Eaton Fire destroyed much of Altadena, a historically Black community where families built wealth through homeownership. Getting fair, fast claims and keeping insurance available is personal for LA families.",
    ie: "Many homes in Inland Empire foothill and mountain communities have been dropped by insurers because of wildfire risk. Keeping coverage available protects families' biggest investment.",
    north: "Northern California towns hit by wildfires have seen insurers pull out. Keeping coverage available protects families' biggest investment.",
    sac: "Foothill communities around Sacramento have seen insurers drop policies over wildfire risk. Keeping coverage available protects families' biggest investment."
  });
})();
