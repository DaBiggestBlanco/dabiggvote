// State Assembly races beyond Riverside and San Bernardino counties.
(function () {
  var WA = ["Wikipedia: 2026 California State Assembly election", "https://en.wikipedia.org/wiki/2026_California_State_Assembly_election"];
  var CADEM = ["California Democratic Party: 2026 general election endorsements", "https://cadem.org/wp-content/uploads/2026/08/8.5.26-FINAL-2026-General-Election-Endorsements.pdf"];
  var BLK = ["LA Sentinel: Black candidates on California's 2026 ballot", "https://sb-american.com/2026/04/28/california-primary-elections-black-candidates-appearing-on-your-june-2-ballot/"];
  var RULE = "In a Democrat-versus-Republican race, this guide picks the Democrat unless the Republican's record is clearly better for our families.";
  var SAFE = "Incumbent with a steady record, endorsed by the California Democratic Party.";
  var SAFE_ES = "Titular con historial constante, respaldado por el Partido Demócrata de California.";

  function a(id, n, sub, pick, quick, quick_es, why, cands, src, extra) {
    var c = { id: id, sec: "assembly", scope: "ad", n: n, title: "State Assembly, District " + n, sub: sub, pick: pick, quick: quick, quick_es: quick_es, why: why, cands: cands, src: src || [WA, CADEM] };
    for (var k in extra || {}) c[k] = extra[k];
    window.GUIDE.contests.push(c);
  }
  function dr(name, desig, inc, why, rName, rDesig, rAbout, rInc) {
    return { why: why, cands: [{ n: name, p: "Democratic", d: desig, inc: !!inc, pick: true },
      { n: rName, p: "Republican", d: rDesig, inc: !!rInc, about: rAbout, whyNot: RULE }] };
  }
  function std(id, n, sub, name, desig, inc, why, rName, rDesig, rAbout, quick, quick_es, extra) {
    var x = dr(name, desig, inc, why, rName, rDesig, rAbout);
    a(id, n, sub, name, quick || SAFE, quick_es || SAFE_ES, x.why, x.cands, null, extra);
  }
  function unopposed(id, n, sub, name, party, desig) {
    a(id, n, sub, name, "Unopposed. No decision needed.", "Sin oposición; no hace falta decidir.",
      ["Only one candidate is on the ballot. Your vote here won't change the outcome, so you can skip it or vote for the only name listed."],
      [{ n: name, p: party, d: desig, inc: true, pick: true }], [WA], { impact: "low", unopposed: true });
  }

  a("ad1", 1, "Far Northern California (Shasta, Siskiyou, Lassen)", "Dianna Margaret James",
    "Community organizer challenging a first-term Republican.", "Organizadora comunitaria que reta a una republicana de primer periodo.",
    ["Community organizer endorsed by the California Democratic Party. Took 39% in the primary."],
    [{ n: "Dianna Margaret James", p: "Democratic", d: "Community Organizer", pick: true },
     { n: "Heather Hadwick", p: "Republican", d: "Farmer/Assemblywoman", inc: true, about: "First-term Assemblymember and farmer, endorsed by the Sacramento Bee.", whyNot: RULE }], null, { impact: "low" });
  std("ad2", 2, "North Coast (Humboldt, Mendocino, Sonoma coast)", "Chris Rogers", "Assemblymember", true,
    ["Former Santa Rosa mayor, first elected in 2024. Endorsed by the California Democratic Party and Working Families Party."],
    "Michael Greer", "Retired Teacher", "Del Norte County school board trustee and 2024 runner-up.");
  a("ad3", 3, "Sacramento Valley foothills (Yuba, Sutter, Butte)", "No recommendation",
    "Two Republicans with similar platforms. Choose either or skip this race.", "Dos republicanos con plataformas similares; elija cualquiera u omita esta contienda.",
    ["Both candidates are Republicans with similar agricultural and business platforms, and neither stands out on the issues this guide weighs.", "The difference between them is too small to matter for our families, so the guide doesn't pick."],
    [{ n: "Dom Belza", p: "Republican", d: "Agricultural Businessman/Father", about: "Former Marysville councilmember, endorsed by Reps. Kevin Kiley and James Gallagher." },
     { n: "James \"Jamie\" Johansson", p: "Republican", d: "Farmer", about: "Former president of the California Farm Bureau, endorsed by Rep. Tom McClintock." }],
    [WA], { impact: "low" });
  unopposed("ad4", 4, "Napa, Yolo, Lake, Colusa", "Cecilia M. Aguiar-Curry", "Democratic", "State Assemblymember");
  a("ad5", 5, "Placer County (Roseville, Rocklin)", "Neva Parker",
    "Community advocate challenging a Republican incumbent.", "Defensora comunitaria que reta a un titular republicano.",
    ["Roseville grants commission vice chair and 2024 runner-up, endorsed by the California Democratic Party."],
    [{ n: "Neva Parker", p: "Democratic", d: "Community Advocate", pick: true },
     { n: "Joe Patterson", p: "Republican", d: "Member of State Assembly, 5th District", inc: true, about: "Incumbent since 2022, endorsed by the Sacramento Bee. Won 60% in the primary.", whyNot: RULE }], null, { impact: "low" });
  a("ad6", 6, "Sacramento", "Maggy Krell",
    "Two Democrats. Krell is a former prosecutor known for fighting human trafficking.", "Dos demócratas; Krell es exfiscal conocida por combatir la trata de personas.",
    ["Former state prosecutor known for taking on human trafficking, first elected in 2024.", "Endorsed by the California Democratic Party and Sacramento Bee. Won 86% in the primary."],
    [{ n: "Maggy Krell", p: "Democratic", d: "Constitutional Attorney/Assemblywoman", inc: true, pick: true },
     { n: "Jagtar Singh", p: "Democratic", d: "Caregiver/Business Owner", about: "Caregiver and business owner.", whyNot: "Little public record compared with the incumbent." }], null, { rule: "same-party" });
  a("ad7", 7, "Sacramento County suburbs (Folsom, Citrus Heights)", "Amy L. Slavensky",
    "Public school educator in a close race against a Republican incumbent.", "Educadora de escuelas públicas en una contienda cerrada contra un titular republicano.",
    ["Longtime educator and former interim deputy superintendent of San Juan Unified. Endorsed by the California Democratic Party.", "The primary was close (51% to 47%), so turnout matters."],
    [{ n: "Amy L. Slavensky", p: "Democratic", d: "Public School Educator", pick: true },
     { n: "Josh Hoover", p: "Republican", d: "Member of the State Assembly, 7th District", inc: true, about: "Incumbent since 2022, endorsed by the Sacramento Bee.", whyNot: RULE }]);
  unopposed("ad8", 8, "Fresno and Madera foothills", "David Jariustokaeutulelei Tangipa", "Republican", "State Assemblymember");
  a("ad9", 9, "San Joaquin and Sacramento counties (Lodi, Galt)", "Matthew Adams",
    "Teacher and organizer challenging the former Republican leader.", "Maestro y organizador que reta al exlíder republicano.",
    ["Teacher and organizer endorsed by the California Democratic Party."],
    [{ n: "Matthew Adams", p: "Democratic", d: "Teacher", pick: true },
     { n: "Heath Flora", p: "Republican", d: "Father/Farmer/Assemblyman", inc: true, about: "Former Assembly Republican Leader seeking his final term.", whyNot: RULE }], null, { impact: "low" });
  std("ad10", 10, "Sacramento County (Elk Grove)", "Stephanie Nguyen", "State Assemblymember", true,
    ["Former Elk Grove councilmember, in the Assembly since 2022. Won 72% in the primary."], "Vinaya Singh", "Retired Application Developer", "Retired engineer and 2024 runner-up.");
  a("ad11", 11, "Solano County and the Delta", "Lori D Wilson",
    "Black Caucus member who wrote the amendment to end forced prison labor in California.", "Miembro del Caucus Afroamericano que escribió la enmienda para eliminar el trabajo forzado en prisiones.",
    ["Former Suisun City mayor and chair of the Assembly Transportation Committee.", "As part of the Legislative Black Caucus's reparations package, she authored ACA 6, which would ban involuntary servitude in California prisons.", "Endorsed by the California Democratic Party."],
    [{ n: "Lori D Wilson", p: "Democratic", d: "Assemblymember, 11th District", inc: true, pick: true },
     { n: "Jenny Leilani Callison", p: "No party preference", d: "Legislative Consultant", about: "Army veteran and 2022 runner-up.", whyNot: "Wilson's record on issues that matter to Black Californians is proven." }],
    [WA, CADEM, ["CA Legislative Black Caucus: 2025 priorities", "https://blackcaucus.legislature.ca.gov/news/california-legislative-black-caucus-announces-2025-legislative-priorities"]]);
  a("ad12", 12, "Marin and southern Sonoma County", "Jackie Elward",
    "Two Democrats. Elward has grassroots and labor support and would add a Black voice from the North Bay.", "Dos demócratas; Elward tiene apoyo comunitario y sindical y sumaría una voz afroamericana del Norte de la Bahía.",
    ["Rohnert Park councilmember and educator who would bring a Black voice from the North Bay to the Assembly.", "Endorsed by grassroots and justice groups ACCE Action and Initiate Justice Action, plus teachers, faculty, nurses and outgoing Assemblymember Damon Connolly. The guide ranks community-group endorsements first.", "The state party split almost evenly (48% to 46%) and made no endorsement."],
    [{ n: "Jackie Elward", p: "Democratic", d: "Councilwoman/Educator", pick: true },
     { n: "Eric Lucan", p: "Democratic", d: "County Supervisor/Father", about: "Marin County supervisor since 2022. Endorsed by Rep. Jared Huffman, Sen. Adam Schiff, California YIMBY and the Press Democrat. Led the primary 28% to 23%.", whyNot: "An experienced, pragmatic choice. The guide's same-party rules put community-group endorsements first, which favor Elward." }],
    [WA, ["Initiate Justice Action: AD-12", "https://ijaction.org/ad-12-2026/"], BLK], { rule: "same-party" });
  a("ad13", 13, "San Joaquin County (Stockton, Tracy)", "Rhodesia Ransom",
    "First-term Black Assemblymember with party support.", "Asambleísta afroamericana de primer periodo con apoyo del partido.",
    ["Former Tracy councilmember, first elected in 2024. Endorsed by the California Democratic Party. Won 58% in the primary."],
    [{ n: "Rhodesia Ransom", p: "Democratic", d: "State Assemblymember", inc: true, pick: true },
     { n: "Tom Patti", p: "Republican", d: "Businessman/Father", about: "Former San Joaquin County supervisor who has run for Congress and Stockton mayor.", whyNot: RULE }], [WA, CADEM, BLK]);
  a("ad14", 14, "Berkeley, Richmond, El Cerrito", "Buffy Wicks",
    "Appropriations chair and leading author of housing laws.", "Presidenta de Asignaciones y autora principal de leyes de vivienda.",
    ["Chair of the Assembly Appropriations Committee and a leading author of laws that speed up home building."],
    [{ n: "Buffy Wicks", p: "Democratic", d: "Assemblymember/Mom", inc: true, pick: true },
     { n: "Mark Rendon", p: "Green", d: "Teacher", about: "Teacher and Green Party nominee.", whyNot: "Wicks's record delivers for renters and would-be homeowners." }]);
  a("ad15", 15, "Contra Costa County (Concord, Antioch)", "Anamarie Avila Farias",
    SAFE, SAFE_ES,
    ["Former Martinez councilmember, first elected in 2024. Won 70% in the primary."],
    [{ n: "Anamarie Avila Farias", p: "Democratic", d: "Member of the State Assembly, District 15", inc: true, pick: true },
     { n: "Arthur Webb", p: "No party preference", d: "Retired Technology Manager", about: "Retired technology manager.", whyNot: "Little public record." }]);
  std("ad16", 16, "Tri-Valley and Lamorinda", "Rebecca Bauer-Kahan", "Assemblymember/Mother", true,
    ["In the Assembly since 2018, focused on consumer privacy and technology accountability."], "Joseph A. Rubay", "Businessman/Father", "Businessman and perennial candidate.");
  std("ad17", 17, "San Francisco (east side)", "Matt Haney", "Assemblymember", true,
    ["Former San Francisco supervisor who has championed tenant protections and housing. Won 99% in the primary."], "Manuel Noris-Barrera", "No Ballot Designation", "Realtor who qualified as a write-in.");
  a("ad18", 18, "Oakland and Alameda", "Mia Bonta",
    "Two Democrats. Bonta chairs the Health Committee and is the Black Caucus treasurer.", "Dos demócratas; Bonta preside el Comité de Salud y es tesorera del Caucus Afroamericano.",
    ["Chair of the Assembly Health Committee and treasurer of the California Legislative Black Caucus.", "Endorsed by the California Democratic Party and Working Families Party. Won 77% in the primary."],
    [{ n: "Mia Bonta", p: "Democratic", d: "California State Assemblymember, Assembly District 18", inc: true, pick: true },
     { n: "Andre Sandford", p: "Democratic", d: "Housing Program Director", about: "Housing program director who ran in 2024 as an American Independent Party candidate.", whyNot: "Both candidates are Black. Bonta's Black Caucus leadership, party endorsement and record decide it." }],
    [WA, CADEM, BLK], { rule: "same-party" });
  std("ad19", 19, "San Francisco (west side)", "Catherine Stefani", "Assemblymember", true,
    ["Former San Francisco supervisor, first elected to the Assembly in 2024, focused on gun safety and public safety."], "Philip Louis Wing", "Retired Financial Advisor", "Retired financial advisor.");
  std("ad20", 20, "Hayward, San Leandro, Union City", "Liz Ortega", "Assemblymember", true,
    ["Former labor leader, in the Assembly since 2022, focused on workers and wages."], "Patricia Muga", "Real Estate Appraiser", "Real estate appraiser.");
  std("ad21", 21, "San Mateo County", "Diane Papan", "California State Assemblymember", true,
    ["Former San Mateo mayor, in the Assembly since 2022."], "Jabra J Muhawieh", "Enrolled Agent/Businessman", "Tax preparer and businessman.");
  unopposed("ad22", 22, "Stanislaus County (Modesto)", "Juan Alanis", "Republican", "Assemblyman");
  std("ad23", 23, "Peninsula (Palo Alto, Mountain View)", "Marc Berman", "State Assemblymember", true,
    ["In the Assembly since 2016, known for election-access and education bills."], "David G. Johnson", "Small Business Owner", "Chair of the Santa Clara County Republican Party.");
  std("ad24", 24, "Fremont, Milpitas, north San Jose", "Alex Lee", "State Assemblymember", true,
    ["In the Assembly since 2020, focused on affordable housing and good government."], "Max Hsia", "Small Business Owner", "Conservative activist.");
  std("ad25", 25, "San Jose", "Ash Kalra", "State Assemblymember", true,
    ["In the Assembly since 2016 and a leading voice for workers and tenants."], "Himat Singh Bainiwal", "Attorney", "Attorney.");
  std("ad26", 26, "West San Jose, Cupertino, Sunnyvale", "Patrick Ahrens", "State Assemblymember", true,
    ["First elected in 2024. Endorsed by a broad coalition of unions, Equality California and Planned Parenthood."], "Tim Gorsulowsky", "Small Business Owner", "Small business owner.");
  a("ad27", 27, "Fresno and Merced counties", "Brian Pacheco",
    "Fresno County supervisor in a close open-seat race.", "Supervisor del condado de Fresno en una contienda cerrada por un escaño abierto.",
    ["Fresno County supervisor since 2014 and a farmer, endorsed by Reps. Jim Costa and Adam Gray and the county's sheriff and district attorney.", "The Republican led the primary 43% to 40%, so turnout matters."],
    [{ n: "Brian Pacheco", p: "Democratic", d: "County Supervisor/Farmer", pick: true },
     { n: "Mike Murphy", p: "Republican", d: "Small Business Owner", about: "Former Merced mayor (2011–2020).", whyNot: RULE }]);
  std("ad28", 28, "Santa Cruz County and south Santa Clara County", "Gail Pellerin", "State Assemblymember", true,
    ["Former Santa Cruz County elections chief who chairs the Assembly Elections Committee, a strong voice for voting access."], "Carol Pefley", "Small Business Owner", "Realtor.");
  std("ad29", 29, "Salinas Valley and San Benito County", "Robert Rivas", "California Assembly Speaker", true,
    ["Speaker of the Assembly, the most powerful legislative leader in the state."], "Dennis P. Sanchez", "Small Businessman/Father", "Small business owner.");
  std("ad30", 30, "Central Coast (Monterey to San Luis Obispo)", "Dawn Addis", "State Assemblymember/Teacher", true,
    ["Teacher and former Morro Bay councilmember, in the Assembly since 2022."], "Shannon Kessler", "Children's Advocate/Businesswoman", "Small business owner.");
  a("ad31", 31, "Fresno", "Annalisa Perea",
    "Fresno councilmember for an open seat.", "Concejal de Fresno para un escaño abierto.",
    ["Fresno City Councilmember endorsed by the California Democratic Party, Assemblymember Esmeralda Soria and the building trades."],
    [{ n: "Annalisa Perea", p: "Democratic", d: "City Councilmember/Mother", pick: true },
     { n: "Jim Polsgrove", p: "Republican", d: "Retired Engineering Technician", about: "Retired engineer.", whyNot: RULE }]);
  unopposed("ad32", 32, "Kern County", "David Couch", "Republican", "Kern County Supervisor");
  a("ad33", 33, "Tulare and Kings counties", "Hipolito Angel Cerros",
    "Former Lindsay councilmember challenging a Republican incumbent.", "Exconcejal de Lindsay que reta a una titular republicana.",
    ["Former Lindsay councilmember (2020–2024) and public policy fellow."],
    [{ n: "Hipolito Angel Cerros", p: "Democratic", d: "Public Policy Fellow", pick: true },
     { n: "Alexandra (Ali) Macedo", p: "Republican", d: "Cattlewoman/Business Owner", inc: true, about: "First-term Assemblymember and cattle rancher.", whyNot: RULE }], null, { impact: "low" });
  a("ad35", 35, "Bakersfield and southern Kern County", "Andrae Gonzales",
    "Bakersfield councilmember in a race that was tied in the primary.", "Concejal de Bakersfield en una contienda empatada en la primaria.",
    ["Bakersfield councilmember since 2016 and nonprofit director. Endorsed by the California Democratic Party.", "The primary was a dead heat (36.7% each), so every vote counts."],
    [{ n: "Andrae Gonzales", p: "Democratic", d: "Councilmember/Nonprofit Director", pick: true },
     { n: "Saul Ayon", p: "Republican", d: "Mayor/Teacher", about: "McFarland mayor and teacher, co-endorsed with Gonzales by the Bakersfield Californian.", whyNot: RULE }]);
  std("ad37", 37, "Santa Barbara County", "Gregg Hart", "State Assemblymember", true,
    ["Former Santa Barbara County supervisor, in the Assembly since 2022."], "Sari Domingues", "Retired Business Analyst", "Retired business analyst and 2024 runner-up.");
  a("ad38", 38, "Ventura County coast", "Steve Bennett",
    "Two Democrats. Bennett is the experienced incumbent with the party endorsement.", "Dos demócratas; Bennett es el titular experimentado con el respaldo del partido.",
    ["Former Ventura County supervisor, in the Assembly since 2020. Endorsed by the California Democratic Party."],
    [{ n: "Steve Bennett", p: "Democratic", d: "Member of the Assembly, 38th District", inc: true, pick: true },
     { n: "Michael MacDonald", p: "Democratic", d: "City Clerk", about: "Ventura city clerk.", whyNot: "The party endorsement and experience favor Bennett." }], null, { rule: "same-party" });
  a("ad40", 40, "Santa Clarita Valley", "Pilar Schiavo",
    "Incumbent nurse-advocate in a swing seat.", "Titular y defensora de la salud en un distrito competido.",
    ["Former nurse advocate and small business owner, in the Assembly since 2022. Won 56% in the primary."],
    [{ n: "Pilar Schiavo", p: "Democratic", d: "Assemblymember", inc: true, pick: true },
     { n: "Rickey Tracy Hayes II", p: "Republican", d: "Lineman/Entrepreneur/Businessman", about: "Black Marine veteran, former police officer and entrepreneur.", whyNot: "His service record earns respect, but he would add a vote to the Republican caucus. That doesn't clear the bar against a proven incumbent." }], [WA, CADEM, BLK]);
  a("ad42", 42, "Conejo Valley and western San Fernando Valley", "Deborah Klein Lopez",
    "Agoura Hills councilmember for an open seat.", "Concejal de Agoura Hills para un escaño abierto.",
    ["Agoura Hills mayor pro tem, endorsed by Rep. Julia Brownley, Assemblymember Jacqui Irwin and the California Democratic Party. Won 53% in the primary."],
    [{ n: "Deborah Klein Lopez", p: "Democratic", d: "City Councilmember", pick: true },
     { n: "Ted Nordblum", p: "Republican", d: "Small Business Owner", about: "Business owner and 2024 runner-up.", whyNot: RULE }]);
  std("ad43", 43, "East San Fernando Valley", "Celeste Rodriguez", "Assemblymember", true,
    ["Former San Fernando mayor, first elected in 2024."], "Ricardo Benitez", "Plumber/Electrical Contractor", "Perennial candidate.");
  std("ad44", 44, "Burbank, Glendale, La Cañada", "Nicholas \"Nick\" Schultz", "California State Assemblymember", true,
    ["Former Burbank mayor and state Justice Department attorney, in the Assembly since 2022."], "Carolyn Daniels", "Independent Contractor/Mother", "Independent contractor.");
  std("ad46", 46, "West San Fernando Valley", "Jesse Gabriel", "Member of the State Assembly, 46th District", true,
    ["Chair of the Assembly Budget Committee."], "Tracey Schroeder", "Teacher", "Teacher and 2024 runner-up.");
  std("ad48", 48, "San Gabriel Valley (Baldwin Park, West Covina)", "Blanca Rubio", "State Assemblymember/Teacher", true,
    ["Former teacher, in the Assembly since 2016."], "Dan T. Tran", "Real Estate Businessman", "Real estate businessman and 2024 runner-up.");
  std("ad49", 49, "West San Gabriel Valley (Alhambra, Monterey Park)", "Mike Fong", "California State Assemblymember", true,
    ["Former community college trustee, in the Assembly since 2022, focused on higher education."], "Long David Liu", "Attorney/Father", "Attorney.");
  a("ad51", 51, "Hollywood, West Hollywood, Santa Monica", "Rick Chavez Zbur",
    "Two Democrats. Zbur is the experienced incumbent with the party endorsement.", "Dos demócratas; Zbur es el titular experimentado con el respaldo del partido.",
    ["Civil-rights attorney and former Equality California leader, in the Assembly since 2022. Won 54% in the primary."],
    [{ n: "Rick Chavez Zbur", p: "Democratic", d: "California Assemblymember", inc: true, pick: true },
     { n: "Colin D. Hernandez", p: "Democratic", d: "Digital Communication Strategist", about: "Digital communications strategist.", whyNot: "Less experience and no party endorsement." }], null, { rule: "same-party" });
  std("ad52", 52, "Northeast Los Angeles and Glendale", "Jessica Caloza", "California State Assemblymember", true,
    ["First elected in 2024. Won 86% in the primary."], "Andrea Lee Anderson", "No Ballot Designation", "Republican nominee.");
  std("ad54", 54, "East Los Angeles and Boyle Heights", "Mark Gonzalez", "Member of the State Assembly", true,
    ["First elected in 2024. Won nearly all of the primary vote."], "Alexandra Briseno", "No Ballot Designation", "Write-in Republican candidate.");
  a("ad55", 55, "Culver City, Baldwin Hills, Westchester, Palms", "Isaac G. Bryan",
    "Two Democrats. Bryan is vice chair of the Black Caucus and a leading author of reparations bills.", "Dos demócratas; Bryan es vicepresidente del Caucus Afroamericano y autor principal de leyes de reparación.",
    ["Vice chair of the California Legislative Black Caucus and author of reparations bills, including one requiring major corporations to disclose whether they profited from slavery.", "Endorsed by the California Democratic Party and Working Families Party. Won 65% in the primary."],
    [{ n: "Isaac G. Bryan", p: "Democratic", d: "State Assemblymember", inc: true, pick: true },
     { n: "Ashley M. Brown", p: "Democratic", d: "School Social Worker", about: "School social worker.", whyNot: "Both candidates are Black. Bryan's Black Caucus leadership and record on reparations decide it." }],
    [WA, CADEM, ["CA Legislative Black Caucus: 2025 priorities", "https://blackcaucus.legislature.ca.gov/news/california-legislative-black-caucus-announces-2025-legislative-priorities"], BLK], { rule: "same-party" });
  std("ad56", 56, "Whittier and southeast LA County", "Lisa Calderon", "Assembly Member/Mom", true,
    ["In the Assembly since 2020."], "Jessica Martinez", "Retired Teacher", "Former Whittier councilmember and perennial candidate.");
  a("ad57", 57, "South Los Angeles (Watts, Florence)", "Sade Elhawary",
    "Black Assemblymember and community organizer representing South LA.", "Asambleísta afroamericana y organizadora comunitaria que representa el Sur de Los Ángeles.",
    ["Community organizer first elected in 2024. Won 86% in the primary. Endorsed by the California Democratic Party and Working Families Party."],
    [{ n: "Sade Elhawary", p: "Democratic", d: "California State Assemblymember", inc: true, pick: true },
     { n: "Constance Jewel Menzies", p: "Republican", d: "In-Home Care Provider", about: "Black in-home care provider and Republican nominee.", whyNot: RULE }], [WA, CADEM, BLK]);
  a("ad61", 61, "Inglewood, Hawthorne, Lawndale", "Tina Simone McKinnor",
    "Black Assemblymember representing Inglewood and Hawthorne.", "Asambleísta afroamericana que representa Inglewood y Hawthorne.",
    ["In the Assembly since 2022. Won 99% in the primary."],
    [{ n: "Tina Simone McKinnor", p: "Democratic", d: "State Assemblymember", inc: true, pick: true },
     { n: "Brian Lockwood", p: "Republican", d: "No Ballot Designation", about: "Write-in Republican candidate.", whyNot: RULE }], [WA, CADEM, BLK]);
  std("ad62", 62, "Southeast LA County (South Gate, Lynwood)", "José Luis Solache", "California State Assemblymember", true,
    ["Former Lynwood mayor, first elected in 2024."], "Paul Irving Jones", "Retired Combat Marine", "Marine veteran and 2024 runner-up.");
  std("ad64", 64, "Southeast LA County (Downey, Norwalk)", "Blanca Pacheco", "Assemblywoman", true,
    ["Former Downey mayor, in the Assembly since 2022."], "Raul Ortiz Jr.", "Pest Control Manager", "Perennial candidate.");
  a("ad65", 65, "Compton, Carson, Gardena, Watts", "Ayanna Davis",
    "Compton school board leader endorsed by the Legislative Black Caucus.", "Líder de la junta escolar de Compton respaldada por el Caucus Legislativo Afroamericano.",
    ["Compton Unified school board vice president and educator.", "Endorsed by the California Legislative Black Caucus, outgoing Assemblymember Mike Gipson, Assemblymember Tina McKinnor and the California Democratic Party. Won 46% in the primary."],
    [{ n: "Ayanna Davis", p: "Democratic", d: "Educator/School Boardmember", pick: true },
     { n: "Lydia A. Gutiérrez", p: "Republican", d: "Public School Teacher", about: "Teacher and Republican nominee.", whyNot: RULE }],
    [WA, CADEM, ["LA Sentinel: Black Caucus endorses Ayanna Davis", "https://lasentinel.net/california-legislative-black-caucus-endorses-dr-ayanna-davis-for-assembly-district-65.html"]]);
  a("ad66", 66, "South Bay beach cities and Palos Verdes", "Paul Seo",
    "Two Democrats. Seo is a mayor and former corruption prosecutor with party and labor backing.", "Dos demócratas; Seo es alcalde y exfiscal anticorrupción con apoyo del partido y sindicatos.",
    ["Rancho Palos Verdes mayor and former public-corruption prosecutor.", "Endorsed by the California Democratic Party and the LA County Federation of Labor. Led the primary."],
    [{ n: "Paul Seo", p: "Democratic", d: "Mayor/Corruption Prosecutor", pick: true },
     { n: "Sara Deen", p: "Democratic", d: "School Boardmember/Businesswoman", about: "Palos Verdes Peninsula Unified school board member.", whyNot: "The party endorsement and labor support favor Seo." }], null, { rule: "same-party" });
  a("ad67", 67, "North Orange County (Buena Park, Cypress, Cerritos)", "Mark Pulido",
    "Cerritos councilmember in a close open-seat race.", "Concejal de Cerritos en una contienda cerrada por un escaño abierto.",
    ["Cerritos councilmember, endorsed by Reps. Derek Tran and Dave Min, Attorney General Rob Bonta, Assemblymember Mia Bonta and the building trades.", "The Republican led the primary, so turnout matters."],
    [{ n: "Mark Pulido", p: "Democratic", d: "City Councilmember", pick: true },
     { n: "Paulo Morales", p: "Republican", d: "Law Enforcement Officer", about: "Former Cypress councilmember and law enforcement officer.", whyNot: RULE }]);
  a("ad68", 68, "Santa Ana and Anaheim", "David Penaloza",
    "Two Democrats. Penaloza has the party endorsement and a pragmatic approach.", "Dos demócratas; Penaloza tiene el respaldo del partido y un enfoque pragmático.",
    ["Councilmember and businessman endorsed by the California Democratic Party, Speaker Robert Rivas and Assemblymember Avelino Valencia.", "Led a close primary (32.5% to 31.4%)."],
    [{ n: "David Penaloza", p: "Democratic", d: "Councilmember/Dad/Businessman", pick: true },
     { n: "Jessie Lopez", p: "Democratic", d: "City Councilwoman", about: "Santa Ana councilwoman endorsed by Sen. Bernie Sanders, Rep. Derek Tran, the Working Families Party and healthcare and grocery unions.", whyNot: "A strong progressive. The party endorsement and the guide's lean toward pragmatic candidates favor Penaloza." }], null, { rule: "same-party" });
  a("ad69", 69, "Long Beach", "Josh Lowenthal",
    "Two Democrats. Lowenthal has the party endorsement and a strong justice-reform record.", "Dos demócratas; Lowenthal tiene el respaldo del partido y buen historial en reforma de justicia.",
    ["In the Assembly since 2022, praised by Initiate Justice Action for his record, including bills supporting incarcerated firefighters.", "Endorsed by the California Democratic Party. Won 69% in the primary."],
    [{ n: "Josh Lowenthal", p: "Democratic", d: "Business Owner/Assemblymember", inc: true, pick: true },
     { n: "Carolyn J. Essex", p: "Democratic", d: "Legislative Policy Analyst", about: "Black legislative policy analyst, also recommended by Initiate Justice Action.", whyNot: "A good candidate. Community groups back both, so the party endorsement decides it under the guide's rules." }],
    [WA, CADEM, ["Initiate Justice Action: AD-69", "https://ijaction.org/ad-69-2026/"], BLK], { rule: "same-party" });
  a("ad70", 70, "Westminster, Garden Grove, Huntington Beach area", "Paula Swift",
    "Endorsed by the Legislative Black Caucus in a close race against a Republican incumbent.", "Respaldada por el Caucus Legislativo Afroamericano en una contienda cerrada contra un titular republicano.",
    ["Consultant and small business owner endorsed by the California Legislative Black Caucus and the California Democratic Party.", "The primary was close (54% to 46%), so every vote counts."],
    [{ n: "Paula Swift", p: "Democratic", d: "Small Business Owner", pick: true },
     { n: "Tri Ta", p: "Republican", d: "California Assemblyman/Businessman", inc: true, about: "Former Westminster mayor, the first Vietnamese American mayor in the U.S., in the Assembly since 2022.", whyNot: RULE }],
    [WA, CADEM, ["Progressive Voters Guide: Paula Swift", "https://www.progressivevotersguide.com/california/2026/primary/dr-paula-swift"], BLK]);
  a("ad72", 72, "Coastal Orange County (Huntington Beach, Fountain Valley)", "Chris Kluwe",
    "Former NFL player and civil-rights advocate against a supporter of Huntington Beach's voter ID law.", "Exjugador de la NFL y defensor de derechos civiles frente a una partidaria de la ley de identificación para votar de Huntington Beach.",
    ["Former NFL punter known for speaking out on civil rights. Endorsed by the California Democratic Party and Working Families Party.", "Led the primary 44% to 38%."],
    [{ n: "Chris Kluwe", p: "Democratic", d: "Businessman/Coach/Father", pick: true },
     { n: "Gracey Van Der Mark", p: "Republican", d: "Councilwoman/Business Owner", about: "Huntington Beach councilwoman who was part of the council majority that put the city's voter ID requirement on the ballot.", whyNot: RULE + " Her support for voter ID rules runs against protecting access to the ballot." }]);
  std("ad73", 73, "Irvine, Costa Mesa, Newport Beach", "Cottie Petrie-Norris", "California State Assemblymember", true,
    ["In the Assembly since 2018 and chair of the Utilities and Energy Committee."], "Urson Russell", "Businessman", "Businessman.");
  a("ad74", 74, "South Orange County and North San Diego coast", "Sergio Farias",
    "San Juan Capistrano councilmember in a close race against a Republican incumbent.", "Concejal de San Juan Capistrano en una contienda cerrada contra una titular republicana.",
    ["San Juan Capistrano councilmember since 2016. Endorsed by the California Democratic Party.", "The primary was close (52% to 48%)."],
    [{ n: "Sergio Farias", p: "Democratic", d: "City Councilmember/Businessman", pick: true },
     { n: "Laurie Davies", p: "Republican", d: "Assemblywoman/Business Owner", inc: true, about: "Incumbent since 2020 and former Laguna Niguel mayor.", whyNot: RULE }]);
  a("ad75", 75, "Inland San Diego County (Poway, Santee, Ramona)", "Gerald C. Boursiquot",
    "Air Force and Navy veteran against the leader of the voter ID campaign.", "Veterano de la Fuerza Aérea y la Marina frente al líder de la campaña de identificación para votar.",
    ["Air Force and Navy veteran and IT contractor, endorsed by the California Democratic Party."],
    [{ n: "Gerald C. Boursiquot", p: "Democratic", d: "IT Contractor/Father", pick: true },
     { n: "Carl DeMaio", p: "Republican", d: "Businessman/State Legislator", inc: true, about: "Incumbent and founder of Reform California, the group behind Prop 39, the voter ID measure.", whyNot: "He leads the campaign for Prop 39, which would put new barriers in front of Black, elderly and low-income voters. That record counts heavily against him." }], null, { impact: "low" });
  std("ad76", 76, "North San Diego County (Escondido, Rancho Bernardo)", "Darshana Patel", "California State Assemblymember", true,
    ["Former Poway Unified school board president, first elected in 2024."], "Carrie S. Espinoza Villanueva", "College Administration Support", "Palomar College staffer.");
  std("ad77", 77, "North San Diego coast (Encinitas, Carlsbad, Del Mar)", "Tasha Boerner", "California State Assemblymember", true,
    ["In the Assembly since 2018."], "Trinity Hannaway", "Taxpayer Advocate", "Outreach director for Assemblymember Carl DeMaio, who leads the voter ID campaign.");
  std("ad78", 78, "Central San Diego", "Chris Ward", "Member of the State Assembly, 78th District", true,
    ["Former San Diego councilmember, in the Assembly since 2020, focused on housing and homelessness."], "Payton Galvez", "Constituent Services Manager", "Staffer in Assemblymember Carl DeMaio's office.");
  a("ad79", 79, "Southeast San Diego, La Mesa, Lemon Grove", "LaShae Sharp-Collins",
    "Black Assemblymember representing southeast San Diego.", "Asambleísta afroamericana que representa el sureste de San Diego.",
    ["First elected in 2024 to represent southeast San Diego, a center of the region's Black community. Won 65% in the primary."],
    [{ n: "LaShae Sharp-Collins", p: "Democratic", d: "Incumbent", inc: true, pick: true },
     { n: "Andrew Lawson", p: "Republican", d: "Spring Valley Community Planning Group Member", about: "Community planning group member, endorsed by the Howard Jarvis Taxpayers Association.", whyNot: RULE }], [WA, CADEM, BLK]);
  std("ad80", 80, "South San Diego (Chula Vista, San Ysidro)", "David A. Alvarez", "Assemblymember", true,
    ["Former San Diego councilmember, in the Assembly since 2020, focused on child care and the border region."], "Alejandro Galicia", "Business Owner/Commissioner", "Business owner and commissioner.");
})();
