// State Senate and Board of Equalization races beyond Riverside and San Bernardino counties.
(function () {
  var WS = ["Wikipedia: 2026 California State Senate election", "https://en.wikipedia.org/wiki/2026_California_State_Senate_election"];
  var CADEM = ["California Democratic Party: 2026 general election endorsements", "https://cadem.org/wp-content/uploads/2026/08/8.5.26-FINAL-2026-General-Election-Endorsements.pdf"];
  var CM = ["CalMatters: Board of Equalization races", "https://calmatters.org/california-voter-guide-2026/board-of-equalization/"];
  var RULE = "In a Democrat-versus-Republican race, this guide picks the Democrat unless the Republican's record is clearly better for our families.";
  var push = function (c) { window.GUIDE.contests.push(c); };

  function s(id, n, sub, pick, quick, quick_es, why, cands, src, extra) {
    var c = { id: id, sec: "senate", scope: "sd", n: n, title: "State Senate, District " + n, sub: sub, pick: pick, quick: quick, quick_es: quick_es, why: why, cands: cands, src: src || [WS, CADEM] };
    for (var k in extra || {}) c[k] = extra[k];
    push(c);
  }

  // ── Board of Equalization ──
  push({ id: "boe2", sec: "state", scope: "boe", n: 2, title: "Board of Equalization, District 2", sub: "Bay Area and Central Coast",
    pick: "Sally J. Lieber", quick: "Incumbent with the party endorsement, against a candidate backed by the anti-tax Howard Jarvis group.",
    quick_es: "Titular con el respaldo del partido, frente a un candidato apoyado por el grupo antiimpuestos Howard Jarvis.",
    why: ["Current board member, former Assemblymember and former Mountain View mayor.", "Endorsed by the California Democratic Party, SEIU California and the California Teachers Association."],
    cands: [{ n: "Sally J. Lieber", p: "Democratic", d: "Incumbent", inc: true, pick: true },
      { n: "John Pimentel", p: "Democratic", d: "Member, Board of Trustees, San Mateo County Community College District", about: "Community college trustee endorsed by the Howard Jarvis Taxpayers Association.", whyNot: "Howard Jarvis backs Prop 43, which would let a minority of voters block local funding for fire, 911 and schools. That backing counts against him." }],
    src: [CM, CADEM], rule: "same-party" });

  push({ id: "boe3", sec: "state", scope: "boe", n: 3, title: "Board of Equalization, District 3", sub: "Most of Los Angeles County",
    pick: "Mike Gipson", quick: "Longtime Assemblymember and Legislative Black Caucus member.",
    quick_es: "Asambleísta veterano y miembro del Caucus Legislativo Afroamericano.",
    why: ["Assemblymember for the Carson–Compton–Watts area since 2014 and a longtime member of the California Legislative Black Caucus.", "Endorsed by the California Democratic Party, the Labor Federation and the California Teachers Association."],
    cands: [{ n: "Mike Gipson", p: "Democratic", d: "State Assemblymember/Father", pick: true },
      { n: "Samuel P. Sukaton", p: "Democratic", d: "Labor Union Organizer", about: "Labor union organizer.", whyNot: "Black Caucus membership and the party endorsement both favor Gipson under the guide's same-party rules." }],
    src: [CM, CADEM, ["CA Legislative Black Caucus Policy Institute: members", "https://cablackcaucus.org/members/"]], rule: "same-party" });

  // ── State Senate ──
  s("sd2", 2, "North Coast: Marin to Humboldt", "Damon Connolly",
    "Assemblymember and former Marin supervisor with broad labor and community support.",
    "Asambleísta y exsupervisor de Marin con amplio apoyo sindical y comunitario.",
    ["Assemblymember since 2022 and a former Marin County supervisor.", "Endorsed by nurses, teachers, SEIU, Moms Demand Action, Equality California and the California Democratic Party.", "Won 73% in the primary."],
    [{ n: "Damon Connolly", p: "Democratic", d: "California State Assemblymember", pick: true },
     { n: "Tief Gibbs", p: "Republican", d: "Small Businesswoman", about: "Office manager who ran for Congress in 2024.", whyNot: RULE }]);

  s("sd4", 4, "Sierra foothills and northern San Joaquin Valley", "Jaron Brandon",
    "County supervisor for an open seat after the incumbent finished third.",
    "Supervisor del condado para un escaño abierto después de que la titular quedara tercera.",
    ["Tuolumne County supervisor since 2020. Endorsed by the California Democratic Party and the Sacramento Bee.", "Led the primary with 41%."],
    [{ n: "Jaron Brandon", p: "Democratic", d: "County Supervisor", pick: true },
     { n: "Alexandra Duarte", p: "Republican", d: "Mother/Farmer", about: "Almond farmer and wife of former Rep. John Duarte.", whyNot: RULE }]);

  s("sd6", 6, "Sacramento suburbs and El Dorado County", "Sean Frame",
    "Former school trustee challenging a Republican incumbent.",
    "Exmiembro de junta escolar que reta a un titular republicano.",
    ["Former Placerville Union School District trustee, endorsed by the California Democratic Party and the Working Families Party."],
    [{ n: "Sean Frame", p: "Democratic", d: "Small Business Owner", pick: true },
     { n: "Roger Niello", p: "Republican", d: "California State Senator", inc: true, about: "Incumbent and former Assemblymember with a business-focused, relatively pragmatic record. Endorsed by the Sacramento Bee.", whyNot: RULE + " Niello is one of the more pragmatic Republicans, but he still votes with his caucus on health care and voting access." }],
    null, { impact: "low" });

  s("sd8", 8, "Sacramento", "Angelique Ashby",
    "Senate Majority Leader and former Sacramento councilmember.",
    "Líder de la mayoría del Senado y exconcejal de Sacramento.",
    ["Senate Majority Leader and a former Sacramento City Councilmember. Won 68% in the primary."],
    [{ n: "Angelique Ashby", p: "Democratic", d: "California State Senator", inc: true, pick: true },
     { n: "Susan A Mason", p: "Republican", d: "Retired Nurse", about: "Retired nurse.", whyNot: RULE }]);

  s("sd10", 10, "Southern Alameda and Santa Clara counties", "Scott Sakakihara",
    "Navy officer and Union City councilmember for an open seat.",
    "Oficial de la Marina y concejal de Union City para un escaño abierto.",
    ["Union City councilmember and Navy officer.", "Endorsed by Rep. Mark Takano, firefighters (IAFF Local 55), Teamsters and Moms Demand Action."],
    [{ n: "Scott Sakakihara", p: "Democratic", d: "Councilmember/Navy Officer", pick: true },
     { n: "Linda R. Price", p: "Republican", d: "Businesswoman", about: "Businesswoman.", whyNot: RULE }]);

  s("sd12", 12, "Fresno, Kern and Sierra counties", "William Brown Jr.",
    "Low-impact race. Brown is a Black social worker and Marine veteran who works with incarcerated people; the Republican is heavily favored.",
    "Contienda de bajo impacto: Brown es trabajador social afroamericano y veterano que trabaja con personas encarceladas; el republicano es gran favorito.",
    ["No Democrat is on the ballot, so this pick uses the guide's priorities directly.", "Brown is a licensed clinical social worker who works with incarcerated people, a Marine Corps veteran and a small business owner. He takes no campaign donations.", "His criminal-justice experience and independence from both parties fit the guide's priorities better than a party-line Republican vote. Magsig won 59% in the primary, so this vote mainly signals priorities."],
    [{ n: "William Brown Jr.", p: "Libertarian", d: "Social Worker/Businessman", pick: true },
     { n: "Nathan Magsig", p: "Republican", d: "County Supervisor/Businessman", about: "Fresno County supervisor, endorsed by the Bakersfield Californian.", whyNot: "Experienced locally, but he would add a vote to the Republican caucus. Brown's Libertarian views on labor rules (he opposes AB 5) are a trade-off, but his justice-system work and independence tip the balance." }],
    [WS, ["KGET: SD-12 candidate questionnaire", "https://www.kget.com/news/politics/your-local-elections/2026-california-senate-district-12-candidate-questionnaire/"]], { impact: "low" });

  s("sd14", 14, "Merced, Madera and Fresno area", "Esmeralda Soria",
    "Assemblymember and former Fresno councilmember in a competitive seat.",
    "Asambleísta y exconcejal de Fresno en un distrito competido.",
    ["Assemblymember since 2022 and a former Fresno City Councilmember.", "Endorsed by the California Democratic Party and Sen. Anna Caballero. The primary was close (46% to 40%)."],
    [{ n: "Esmeralda Soria", p: "Democratic", d: "State Assemblymember", pick: true },
     { n: "Darin S. DuPont", p: "Republican", d: "Councilman/Water Attorney", about: "Merced councilmember since 2024 and a water attorney.", whyNot: RULE }]);

  s("sd16", 16, "Kern, Tulare and Kings counties", "Melissa Hurtado",
    "Incumbent in a tight race where the Republican led the primary.",
    "Titular en una contienda reñida donde el republicano ganó la primaria.",
    ["Elected in 2018 as the youngest woman ever in the State Senate. Endorsed by the California Democratic Party and Xavier Becerra.", "Gonzalez led the primary (45% to 36%), so turnout matters here."],
    [{ n: "Melissa Hurtado", p: "Democratic", d: "State Senator", inc: true, pick: true },
     { n: "Guillermo Asuncion Gonzalez", p: "Republican", d: "Small Business Owner", about: "Delano steakhouse owner, former construction worker and congressional aide.", whyNot: RULE }]);

  s("sd20", 20, "San Fernando Valley", "Caroline Menjivar",
    "Marine veteran and incumbent focused on health care and veterans.",
    "Veterana de la Infantería de Marina enfocada en salud y veteranos.",
    ["Marine Corps veteran first elected in 2022. Endorsed by the California Democratic Party and Working Families Party."],
    [{ n: "Caroline Menjivar", p: "Democratic", d: "State Senator", inc: true, pick: true },
     { n: "Tony Rodriguez", p: "Republican", d: "No Ballot Designation", about: "Republican nominee.", whyNot: RULE }]);

  s("sd24", 24, "Westside Los Angeles, Malibu, West Hollywood, Palos Verdes", "Brian Goldsmith",
    "Two Democrats. Goldsmith is the more pragmatic, center-left choice focused on costs, safety and homelessness.",
    "Dos demócratas; Goldsmith es la opción más pragmática de centro-izquierda, enfocada en costos, seguridad y personas sin hogar.",
    ["Neither candidate has a Black Caucus or grassroots-group endorsement that decides it, and the state party made no endorsement. The next tiebreaker favors the more pragmatic candidate.", "Business owner and former media consultant who focuses on cost of living, homelessness and public safety. Endorsed by the Santa Monica Democratic Club, California Environmental Voters, Assemblymembers Jesse Gabriel and Rick Zbur, and Pete Buttigieg."],
    [{ n: "Brian Goldsmith", p: "Democratic", d: "Small Business Owner", pick: true },
     { n: "John M. Erickson", p: "Democratic", d: "Councilmember", about: "West Hollywood councilmember and former mayor who helped produce a $31 million city surplus. A renter running on expanded rent control and single-payer health care. Endorsed by teachers, firefighters, the LA County Federation of Labor and Hilda Solis. Finished first in the primary.", whyNot: "A strong, experienced progressive, and a reasonable choice. The guide's same-party rules lean to the more pragmatic candidate when nothing else decides it." }],
    [WS, ["Daily Bruin: Erickson and Goldsmith advance", "https://dailybruin.com/2026/06/13/erickson-goldsmith-advance-to-november-general-for-california-senate-district-24"], ["CityWatch: Erickson interview", "https://www.citywatchla.com/neighborhood-politics/33172-the-john-erickson-interview-a-practical-progressive-for-ca-24"]], { rule: "same-party" });

  s("sd26", 26, "East and Northeast Los Angeles", "Sara Hernandez",
    "Two Democrats. Hernandez is a community college trustee and attorney with teacher and labor support.",
    "Dos demócratas; Hernandez es miembro de la junta de colegios comunitarios y abogada con apoyo de maestros y sindicatos.",
    ["Los Angeles Community College District trustee and attorney in housing, immigration and environmental law.", "Endorsed by the California Teachers Association, California Federation of Teachers, Dolores Huerta and sitting state senators. Won the primary 31% to 19%.", "The state party made no endorsement. The guide leans to the more pragmatic candidate."],
    [{ n: "Sara Hernandez", p: "Democratic", d: "Affordable Housing Advocate", pick: true },
     { n: "Sarah Rascón", p: "Democratic", d: "Environmental Protection Director", about: "Former county and regional affairs director for Mayor Karen Bass and East LA planning commissioner. Endorsed by Democratic Socialists of America. Supports single-payer health care and repealing limits on rent control.", whyNot: "A capable public servant with a more left-leaning platform. The guide's same-party rules favor the more pragmatic candidate." }],
    [WS, ["IVN: SD-26 race", "https://ivn.us/east-la-independent-voters-may-decide-whether-or-not-socialists-win-senate-seat/"]], { rule: "same-party" });

  s("sd28", 28, "South Los Angeles, Inglewood, Culver City", "Lola Smallwood-Cuevas",
    "Black Caucus member and labor advocate who has championed reparations and Black workers.",
    "Miembro del Caucus Afroamericano y defensora laboral que impulsa reparaciones y trabajadores afroamericanos.",
    ["Co-founder of the Los Angeles Black Worker Center and a member of the California Legislative Black Caucus, where she has carried reparations and anti-discrimination bills.", "Won 78% in the primary. Endorsed by the California Democratic Party and Working Families Party."],
    [{ n: "Lola Smallwood-Cuevas", p: "Democratic", d: "State Senator", inc: true, pick: true },
     { n: "Joe Lisuzzo", p: "Republican", d: "LA Neighborhood Councilmember", about: "Restaurant owner and neighborhood councilmember.", whyNot: RULE }],
    [WS, CADEM, ["CA Legislative Black Caucus Policy Institute: members", "https://cablackcaucus.org/members/"]]);

  s("sd30", 30, "Southeast Los Angeles County (Pico Rivera, Whittier)", "Bob J. Archuleta",
    "Army veteran and incumbent focused on veterans.",
    "Veterano del Ejército y titular enfocado en veteranos.",
    ["Vietnam-era Army veteran and former Pico Rivera mayor, in the Senate since 2018."],
    [{ n: "Bob J. Archuleta", p: "Democratic", d: "State Senator", inc: true, pick: true },
     { n: "Araceli Martinez", p: "Republican", d: "Small Business Owner", about: "Small business owner.", whyNot: RULE }]);

  s("sd34", 34, "North Orange County and southeast LA County", "Avelino Valencia",
    "Assemblymember and former Anaheim councilmember for an open seat.",
    "Asambleísta y exconcejal de Anaheim para un escaño abierto.",
    ["Assemblymember since 2022 and former Anaheim councilmember. Endorsed by Sen. Adam Schiff and the California Democratic Party."],
    [{ n: "Avelino Valencia", p: "Democratic", d: "California State Assemblymember", pick: true },
     { n: "Rhonda Shader", p: "Republican", d: "Local Small Businesswoman", about: "Former Placentia mayor.", whyNot: RULE }]);

  s("sd36", 36, "South Orange County and North San Diego County coast", "Chris Duncan",
    "Former San Clemente mayor challenging a Republican incumbent in a close race.",
    "Exalcalde de San Clemente que reta a un titular republicano en una contienda cerrada.",
    ["Former San Clemente mayor and attorney. Endorsed by the California Democratic Party.", "The primary was close (53% to 47%)."],
    [{ n: "Chris Duncan", p: "Democratic", d: "Anti-Tariff Attorney", pick: true },
     { n: "Tony Strickland", p: "Republican", d: "State Senator/Businessman", inc: true, about: "Incumbent state senator and former Huntington Beach mayor.", whyNot: RULE }]);

  s("sd38", 38, "North San Diego County", "Catherine S. Blakespear",
    "Incumbent and former Encinitas mayor.",
    "Titular y exalcaldesa de Encinitas.",
    ["Former Encinitas mayor, in the Senate since 2022. Endorsed by the California Democratic Party."],
    [{ n: "Catherine S. Blakespear", p: "Democratic", d: "California State Senator", inc: true, pick: true },
     { n: "Laura Bassett", p: "Republican", d: "Small Business Owner", about: "Professional fiduciary.", whyNot: RULE }]);

  s("sd40", 40, "Inland San Diego County", "Mara Elliott",
    "Former San Diego City Attorney who led on gun safety and consumer protection.",
    "Exfiscal de la ciudad de San Diego, líder en seguridad de armas y protección al consumidor.",
    ["San Diego City Attorney from 2016 to 2024, known for using gun violence restraining orders and fighting consumer fraud.", "Endorsed by the California Democratic Party."],
    [{ n: "Mara Elliott", p: "Democratic", d: "Ethics Attorney", pick: true },
     { n: "Kristie Bruce-Lane", p: "Republican", d: "Businesswoman/Victims Advocate", about: "Former water district director, endorsed by Reform California, the group behind the Prop 39 voter ID measure.", whyNot: RULE + " Her backing from the voter ID campaign runs directly against protecting access to the ballot." }]);
})();
