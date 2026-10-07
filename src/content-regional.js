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

  // Prop 1: housing bond
  var p1 = byId("p1");
  p1.why[0] = perCounty(
    "Rent and home prices are the biggest squeeze on middle-class families in California, where the median home sold for about $901,000 in August 2026. This bond funds affordable rentals and a path to ownership through down-payment assistance.",
    function (c, p) {
      return "Rent and home prices are the biggest squeeze on middle-class families. In " + c + " County the median home sold for about " + money(p) + " in August 2026" +
        (p < 700000 ? ", so down-payment help can put ownership within reach for families who are paying rent now." : ", which puts ownership out of reach for many working families.") +
        " This bond funds both affordable rentals and down-payment help.";
    });
  p1.src.push(CAR);

  // Prop 37: loans for buyers of new homes under $1.5 million
  var p37 = byId("p37");
  p37.why.push(perCounty(
    "Homes must cost under $1.5 million to qualify, which covers most newly built homes in the state outside the priciest Bay Area and coastal markets.",
    function (c, p) {
      return p < 1100000
        ? "In " + c + " County, where the median home sold for about " + money(p) + " in August 2026, nearly all new homes fall under the program's $1.5 million cap, so local buyers can use it."
        : "In " + c + " County, where the median home sold for about " + money(p) + " in August 2026, many new homes cost more than the $1.5 million cap. The program will help fewer buyers here, but it still reaches newer condos, townhomes and homes in nearby lower-cost areas.";
    }));
  p37.src.push(CAR);

  // Prop 4: public campaign money
  var p4 = byId("p4");
  p4.why[0] = "Every dollar that goes to political campaigns is a dollar not spent on services. The state and many cities and counties are already dealing with budget gaps and federal cuts.";
  p4.other[0].about = p4.other[0].about.replace("the Riverside County Democratic Party", "the California Democratic Party");
  byId("p40").other[0].about = byId("p40").other[0].about.replace("the Riverside County Democratic Party", "the California Democratic Party");
  byId("p41").other[0].about = byId("p41").other[0].about.replace("the Riverside County Democratic Party", "the California Democratic Party");

  // Prop 43: two-thirds vote for local special taxes
  var p43 = byId("p43");
  p43.why[1] = {
    all: "Communities across California depend on local measures for fire stations, 911 response, parks, roads, transit and homeless services.",
    ie: "Fast-growing Inland Empire communities depend on local measures to build fire stations, speed up 911 response and keep up with parks and roads.",
    la: "Los Angeles County's 2024 Measure A homelessness tax passed with about 57% of the vote. Under Prop 43's two-thirds rule, it would have failed.",
    bay: "San Francisco's 2018 Prop C, which funds homeless housing and services, passed with 61% of the vote. Under Prop 43's two-thirds rule, it would have failed. Bay Area transit also leans on voter-approved local taxes.",
    valley: "Valley cities and counties with tight budgets rely on local measures for police, fire and road repair. A two-thirds bar would let a small minority block them.",
    sd: "San Diego County's 2016 Measure A for transit and roads won about 58% of the vote but failed because it needed two-thirds. Prop 43 would bring that same bar to measures voters put on the ballot themselves."
  };

  // Prop 45: CEQA fast-track. Regional home prices on the YES side, regional air quality on the NO side.
  var p45 = byId("p45");
  p45.why[0] = perCounty(p45.why[0], function (c, p) {
    return "In " + c + " County the median home sold for about " + money(p) + " in August 2026. Delays and lawsuits add years and cost to new homes, clinics and transit, and Black and Latino families pay that price.";
  });
  p45.other[0].about = {
    all: p45.other[0].about,
    ie: "The Inland Empire breathes some of the worst ozone in the country. Clean-air and environmental-justice groups say faster review for freeway and transit projects could add pollution near homes and schools. " + p45.other[0].about,
    la: "Neighborhoods near LA's ports, rail yards and freeways breathe the worst air in the country. Clean-air groups say faster review for transportation projects could add to it. " + p45.other[0].about,
    oc: "The Los Angeles–Long Beach air basin, which includes Orange County, has the nation's worst ozone. Clean-air groups say faster review for transportation projects could add to it. " + p45.other[0].about,
    valley: "Bakersfield, Visalia and Fresno have some of the nation's worst particle pollution. Clean-air groups say faster review for transportation projects could add to it. " + p45.other[0].about,
    bay: "West Oakland and Richmond already carry the Bay Area's heaviest pollution next to ports, freeways and refineries. Clean-air groups say faster review for transportation projects could add to it. " + p45.other[0].about,
    sd: "Barrio Logan and National City sit beside the port, shipyards and freeways. Clean-air groups say faster review for transportation projects could add to that burden. " + p45.other[0].about
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
