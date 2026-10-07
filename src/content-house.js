// U.S. House races beyond Riverside and San Bernardino counties.
// Picks follow the decision rules in docs/decision-rules.md.
(function () {
  var W1 = ["Wikipedia: 2026 House elections in California (districts 1–26)", "https://en.wikipedia.org/wiki/2026_United_States_House_of_Representatives_elections_in_California_(districts_1%E2%80%9326)"];
  var W2 = ["Wikipedia: 2026 House elections in California (districts 27–52)", "https://en.wikipedia.org/wiki/2026_United_States_House_of_Representatives_elections_in_California_(districts_27%E2%80%9352)"];
  var CADEM = ["California Democratic Party: 2026 general election endorsements", "https://cadem.org/wp-content/uploads/2026/08/8.5.26-FINAL-2026-General-Election-Endorsements.pdf"];
  var SOS = ["CA Secretary of State: Certified List of Candidates", "https://elections.cdn.sos.ca.gov/statewide-elections/2026-general/cert-list-candidates.pdf"];
  var HR1 = "Voted for the 2025 federal budget law that cut Medicaid (Medi-Cal) funding, which millions of California families depend on.";
  var RULE = "In a Democrat-versus-Republican race, this guide picks the Democrat unless the Republican's record is clearly better for our families.";

  function h(id, n, sub, pick, quick, quick_es, why, cands, src, extra) {
    var c = { id: id, sec: "house", scope: "cd", n: n, title: "U.S. House, District " + n, sub: sub, pick: pick, quick: quick, quick_es: quick_es, why: why, cands: cands, src: src || [] };
    for (var k in extra || {}) c[k] = extra[k];
    window.GUIDE.contests.push(c);
  }

  h("cd1", 1, "North State: Butte, Shasta and far Northern California", "Mike McGuire",
    "Former State Senate leader running for a toss-up seat. Every vote here matters.",
    "Exlíder del Senado estatal en una contienda muy reñida; cada voto cuenta.",
    ["Led the California State Senate as President pro Tem (2024–2025) and has represented the North Coast since 2014.", "The June primary was nearly tied (42.2% to 41.8%), so this seat could decide control of Congress.", "Endorsed by labor (SEIU, nurses, carpenters), California Environmental Voters and several regional newspapers."],
    [{ n: "Mike McGuire", p: "Democratic", d: "California State Senator", pick: true },
     { n: "James Gallagher", p: "Republican", d: "United States Representative/Farmer", inc: true, about: "Former Assembly Republican Leader who won this seat in a 2026 special election. Endorsed by President Trump and the Howard Jarvis Taxpayers Association.", whyNot: RULE + " Gallagher would join the House majority behind the Medicaid cuts that hit rural and working families hardest." }],
    [W1, CADEM]);

  h("cd2", 2, "North Coast: Marin to the Oregon border", "Jared Huffman",
    "Veteran congressman with a strong record on the environment and working families.",
    "Congresista veterano con buen historial en medio ambiente y familias trabajadoras.",
    ["In Congress since 2013. Won 72% in 2024.", "Endorsed by the California Labor Federation, Planned Parenthood and conservation groups."],
    [{ n: "Jared Huffman", p: "Democratic", d: "U.S. Representative", inc: true, pick: true },
     { n: "Robin Littau", p: "Republican", d: "Enterprise Elementary School Board Member", about: "Local school board trustee.", whyNot: RULE }],
    [W1, CADEM]);

  h("cd3", 3, "Sacramento suburbs to the Sierra", "Ami Bera",
    "Physician and longtime congressman focused on health care access.",
    "Médico y congresista de larga trayectoria enfocado en el acceso a la salud.",
    ["A doctor who has served in Congress since 2013 and focuses on health care costs and coverage.", "Endorsed by the California Faculty Association, SEIU and Planned Parenthood."],
    [{ n: "Ami Bera", p: "Democratic", d: "United States Congressman", inc: true, pick: true },
     { n: "Robb Tucker", p: "Republican", d: "County Supervisor/Businessman", about: "Nevada County supervisor since 2025, endorsed by the California Republican Party.", whyNot: RULE + " He would add a vote to the majority that cut Medicaid." }],
    [W1, CADEM]);

  h("cd4", 4, "Napa, Sonoma, Lake and Yolo counties", "Mike Thompson",
    "Two Democrats. Thompson brings seniority and a strong record on gun safety.",
    "Dos demócratas; Thompson aporta antigüedad y un gran historial en seguridad de armas.",
    ["Senior member of the tax-writing Ways and Means Committee and leader of the House gun violence prevention task force.", "Endorsed by the California Democratic Party, labor, Planned Parenthood and Giffords.", "Won the primary with 41% to 22%."],
    [{ n: "Mike Thompson", p: "Democratic", d: "Member of Congress", inc: true, pick: true },
     { n: "Eric Jones", p: "Democratic", d: "Businessman/Nonprofit Executive", about: "Venture capitalist running as a progressive, endorsed by Our Revolution.", whyNot: "A newcomer with a narrow base of support. Thompson's seniority and party endorsement carry more weight for the district." }],
    [W1, CADEM], { rule: "same-party" });

  h("cd5", 5, "Sierra foothills and eastern Central Valley", "Michael Masuda",
    "Engineer and foreign-affairs officer challenging a longtime Republican.",
    "Ingeniero y funcionario de asuntos exteriores que reta a un republicano veterano.",
    ["Engineer and foreign affairs officer endorsed by the California Democratic Party and California Labor Federation."],
    [{ n: "Michael Masuda", p: "Democratic", d: "Foreign Affairs Officer", pick: true },
     { n: "Tom McClintock", p: "Republican", d: "United States Representative", inc: true, about: "In Congress since 2009. Endorsed by President Trump.", whyNot: RULE + " " + HR1 }],
    [W1, CADEM], { impact: "low" });

  h("cd6", 6, "Sacramento and eastern suburbs", "Richard Pan",
    "Pediatrician and former state senator against an incumbent who still votes with House Republicans.",
    "Pediatra y exsenador estatal frente a un titular que sigue votando con los republicanos.",
    ["Pediatrician who wrote California's school vaccination law as a state senator (2014–2022).", "Endorsed by the California Democratic Party, SEIU, AFSCME, nurses and congressional members including Norma Torres and Judy Chu.", "Kiley changed his registration to no party preference but still caucuses with House Republicans."],
    [{ n: "Richard Pan", p: "Democratic", d: "Doctor/Health Advocate", pick: true },
     { n: "Kevin Kiley", p: "No party preference", d: "United States Representative", inc: true, about: "Elected as a Republican in 2024, now registered with no party preference. Still caucuses with House Republicans.", whyNot: "His new label doesn't change his votes. " + HR1 }],
    [W1, CADEM]);

  h("cd7", 7, "Sacramento", "Doris Matsui",
    "Two Democrats. Matsui has seniority, the party endorsement and backing from Rep. Lateefah Simon.",
    "Dos demócratas; Matsui tiene antigüedad, el respaldo del partido y de la Rep. Lateefah Simon.",
    ["Senior member of the Energy and Commerce Committee, which oversees health care and utilities.", "Endorsed by Rep. Lateefah Simon of the Congressional Black Caucus, Gov. Newsom, the California Democratic Party and most of the Sacramento City Council.", "Priority order for same-party races puts Black Caucus support and the party endorsement first. Both point to Matsui."],
    [{ n: "Doris Matsui", p: "Democratic", d: "U.S. Representative", inc: true, pick: true },
     { n: "Mai Vang", p: "Democratic", d: "Teacher/City Councilmember", about: "Sacramento councilmember since 2020 and the first Hmong American on the council. Backed by nurses, SEIU California, UAW, Justice Democrats and DSA. Finished first in the primary (31% to 29%).", whyNot: "A strong progressive voice for working neighborhoods. The guide leans to the candidate with Black Caucus and party backing and a more pragmatic approach." }],
    [W1, CADEM], { rule: "same-party" });

  h("cd8", 8, "Solano and Contra Costa counties", "John Garamendi",
    "Longtime congressman and former state insurance commissioner.",
    "Congresista de larga trayectoria y excomisionado de seguros del estado.",
    ["Former Lieutenant Governor and state Insurance Commissioner, in Congress since 2009.", "Endorsed by labor, Planned Parenthood and environmental groups."],
    [{ n: "John Garamendi", p: "Democratic", d: "Member of Congress", inc: true, pick: true },
     { n: "Rudy Recile", p: "Republican", d: "Business Owner/Consultant", about: "Businessman who lost to Garamendi in 2022 and 2024.", whyNot: RULE }],
    [W1, CADEM]);

  h("cd9", 9, "San Joaquin County (Stockton area)", "Josh Harder",
    "Incumbent focused on lowering costs for Central Valley families.",
    "Congresista enfocado en bajar costos para familias del Valle Central.",
    ["In Congress since 2019. Won the primary with 61%.", "Endorsed by labor, Planned Parenthood and Giffords."],
    [{ n: "Josh Harder", p: "Democratic", d: "Father/Representative", inc: true, pick: true },
     { n: "John McBride", p: "Republican", d: "Athletic Performance Coach", about: "Athletic coach who also ran in 2024.", whyNot: RULE }],
    [W1, CADEM]);

  h("cd10", 10, "Contra Costa County", "Mark DeSaulnier",
    "Veteran congressman with a steady pro-worker record.",
    "Congresista veterano con historial constante a favor de los trabajadores.",
    ["In Congress since 2015. Endorsed by labor, Planned Parenthood and the Sierra Club."],
    [{ n: "Mark DeSaulnier", p: "Democratic", d: "United States Congressman", inc: true, pick: true },
     { n: "Jeff Frese", p: "Republican", d: "Small Business Owner", about: "Business owner.", whyNot: RULE }],
    [W1, CADEM]);

  h("cd11", 11, "San Francisco", "Scott Wiener",
    "Two Democrats for Pelosi's open seat. Wiener has the party endorsement and a record of building more housing.",
    "Dos demócratas por el escaño de Pelosi; Wiener tiene el respaldo del partido y un historial de más vivienda.",
    ["State senator since 2016 and California's leading author of laws that make it easier to build homes, which lowers the cost of renting and buying.", "Endorsed by the California Democratic Party, former Mayor London Breed, Attorney General Rob Bonta, Equality California and the San Francisco Chronicle.", "Neither candidate has a Black Caucus endorsement, so the party endorsement and his pragmatic record decide it."],
    [{ n: "Scott Wiener", p: "Democratic", d: "State Senator", pick: true },
     { n: "Connie Chan", p: "Democratic", d: "San Francisco Supervisor", about: "San Francisco supervisor since 2021. Endorsed by Nancy Pelosi, the San Francisco Labor Council, teachers, nurses, firefighters, former Mayor Willie Brown and the Sun-Reporter, San Francisco's historic Black newspaper.", whyNot: "A close call with real Black community support. The guide leans to Wiener for the party endorsement and his housing record, but Chan is a reasonable choice." }],
    [W1, CADEM, ["ABC7: Wiener and Chan advance", "https://abc7news.com/post/election-2026-nancy-pelosis-ca-district-11-seat-is-grabs-top-candidates-connie-chan-scott-weiner-saikat-chakrabarti/19213650/"]], { rule: "same-party" });

  h("cd12", 12, "Oakland and Berkeley", "Lateefah Simon",
    "Civil-rights leader and member of the Congressional Black Caucus.",
    "Líder de derechos civiles y miembro del Caucus Afroamericano del Congreso.",
    ["Lifelong civil-rights and criminal-justice reform advocate, MacArthur Fellow and member of the Congressional Black Caucus.", "Won 84% in the primary. Endorsed by the California Democratic Party, labor and the Sun-Reporter."],
    [{ n: "Lateefah Simon", p: "Democratic", d: "U.S. Representative", inc: true, pick: true },
     { n: "Jamie Joyce", p: "Democratic", d: "Nonprofit Executive Director", about: "Nonprofit executive director.", whyNot: "Little public record compared with Simon's work for the district." }],
    [W1, CADEM], { rule: "same-party" });

  h("cd13", 13, "Merced, Stanislaus and parts of San Joaquin County", "Adam Gray",
    "Moderate Democrat who works across the aisle for Central Valley farm towns.",
    "Demócrata moderado que trabaja con ambos partidos por los pueblos agrícolas del Valle Central.",
    ["Flipped this seat in 2024 and runs as a bipartisan problem-solver. Endorsed by the California Farm Bureau and valley mayors.", "Voted against the 2025 budget law's Medicaid cuts in a district where many families rely on Medi-Cal.", "Kevin Lincoln is a Black Marine veteran and pastor with a real local record, so this was weighed carefully. See below."],
    [{ n: "Adam Gray", p: "Democratic", d: "United States Representative/Educator", inc: true, pick: true },
     { n: "Kevin Lincoln", p: "Republican", d: "Small Business Owner", about: "Former Stockton mayor (2021–2025), Marine veteran and pastor. Stockton saw violent crime fall and homeless services grow during his term, though fees on residents also rose. Endorsed by President Trump and Speaker Mike Johnson.", whyNot: "His local record has strengths, but in Congress he would be a vote for the leadership behind the Medicaid cuts that fall hardest on Stockton's working families. That keeps his record from clearing the bar." }],
    [W1, CADEM, ["Wikipedia: Kevin Lincoln", "https://en.wikipedia.org/wiki/Kevin_Lincoln_(politician)"]]);

  h("cd14", 14, "Southern Alameda County (Fremont, Hayward)", "Aisha Wahab",
    "Two Democrats. Wahab has backing from Black leaders, the party and labor.",
    "Dos demócratas; Wahab tiene apoyo de líderes afroamericanos, el partido y los sindicatos.",
    ["Former state senator (2022–2026) who now holds the seat. She was the first Afghan American elected to the California Legislature.", "Endorsed by Rep. Lateefah Simon and state Sen. Laura Richardson (both Black Caucus members), the California Democratic Party, teachers, nurses and SEIU.", "Won the primary with 38% to 17%."],
    [{ n: "Aisha Wahab", p: "Democratic", d: "State Senator", inc: true, pick: true },
     { n: "Melissa Hernandez", p: "Democratic", d: "Healthcare Services Director", about: "BART board president and former Dublin mayor, backed by the New Democrat Coalition and the Congressional Hispanic Caucus's BOLD PAC.", whyNot: "A capable moderate. The guide's same-party rules put Black leaders' endorsements and the party endorsement first, and both favor Wahab." }],
    [W1, CADEM], { rule: "same-party" });

  h("cd15", 15, "San Mateo County", "Kevin Mullin",
    "Incumbent with strong labor and environmental support.",
    "Congresista con fuerte apoyo sindical y ambiental.",
    ["In Congress since 2023, formerly Assembly Speaker pro Tem. Won 65% in the primary."],
    [{ n: "Kevin Mullin", p: "Democratic", d: "U.S. Representative", inc: true, pick: true },
     { n: "Charles Hoelter", p: "Republican", d: "Retired Training Supervisor", about: "Retired training supervisor.", whyNot: RULE }],
    [W1, CADEM]);

  h("cd16", 16, "Silicon Valley (San Jose, Palo Alto area)", "Sam Liccardo",
    "Former San Jose mayor focused on housing, public safety and costs.",
    "Exalcalde de San José enfocado en vivienda, seguridad y costo de vida.",
    ["Two-term mayor of San Jose before Congress. Won 76% in the primary.", "Endorsed by the California Democratic Party, Planned Parenthood and the Sierra Club."],
    [{ n: "Sam Liccardo", p: "Democratic", d: "United States Representative", inc: true, pick: true },
     { n: "Peter Sundin Soulé", p: "Republican", d: "Investor", about: "Investor.", whyNot: RULE }],
    [W1, CADEM]);

  h("cd17", 17, "Silicon Valley (Fremont, Santa Clara, Sunnyvale)", "Ro Khanna",
    "Incumbent with deep labor support and a focus on tech-sector jobs.",
    "Congresista con amplio apoyo sindical y enfoque en empleos tecnológicos.",
    ["In Congress since 2017. Endorsed by a wide range of unions and the California Democratic Party."],
    [{ n: "Ro Khanna", p: "Democratic", d: "United States Congressmember", inc: true, pick: true },
     { n: "Ritesh Tandon", p: "Republican", d: "CEO/Entrepreneur/Researcher", about: "Tech executive and repeat candidate.", whyNot: RULE }],
    [W1, CADEM]);

  h("cd18", 18, "San Jose, Salinas Valley and San Benito County", "Zoe Lofgren",
    "Senior congresswoman and leading voice on immigration.",
    "Congresista de alto rango y voz principal en inmigración.",
    ["In Congress since 1995. Top Democrat on the Science Committee and a longtime immigration expert."],
    [{ n: "Zoe Lofgren", p: "Democratic", d: "Congresswoman", inc: true, pick: true },
     { n: "Shane Lewis", p: "Republican", d: "Electrical Test Engineer", about: "Marine veteran and engineer.", whyNot: RULE }],
    [W1, CADEM]);

  h("cd19", 19, "Central Coast (Santa Cruz, Monterey)", "Jimmy Panetta",
    "Navy veteran and incumbent focused on agriculture and veterans.",
    "Veterano de la Marina enfocado en agricultura y veteranos.",
    ["Navy Reserve veteran and former prosecutor, in Congress since 2017. Won 58% in the primary."],
    [{ n: "Jimmy Panetta", p: "Democratic", d: "United States Representative", inc: true, pick: true },
     { n: "Peter Coe Verbica", p: "Republican", d: "Business Owner", about: "Financial planner and business owner.", whyNot: RULE }],
    [W1, CADEM]);

  h("cd20", 20, "Bakersfield and southern Central Valley", "Sandra Van Scotter",
    "Disability-rights advocate challenging a Republican who voted for Medicaid cuts.",
    "Defensora de personas con discapacidad que reta a un republicano que votó por recortes a Medicaid.",
    ["Advocate for people with disabilities, whose care depends heavily on Medi-Cal."],
    [{ n: "Sandra Van Scotter", p: "Democratic", d: "Disability Community Advocate", pick: true },
     { n: "Vince Fong", p: "Republican", d: "United States Representative", inc: true, about: "Former Assemblymember, in Congress since 2024. Endorsed by President Trump.", whyNot: RULE + " " + HR1 }],
    [W1, CADEM], { impact: "low" });

  h("cd21", 21, "Fresno area", "Jim Costa",
    "Longtime Valley congressman with a pragmatic record.",
    "Congresista veterano del Valle con historial pragmático.",
    ["In Congress since 2005 and a senior member of the Agriculture Committee. Endorsed by Gov. Newsom, both U.S. senators and labor."],
    [{ n: "Jim Costa", p: "Democratic", d: "Farmer/Representative", inc: true, pick: true },
     { n: "Kyle Kirkland", p: "Republican", d: "Entrepreneur/Nonprofit CEO", about: "Casino owner who ran for the 20th District in 2024.", whyNot: RULE }],
    [W1, CADEM]);

  h("cd22", 22, "Kern, Kings and Tulare counties", "Randy Villegas",
    "Teacher challenging an incumbent who voted for Medicaid cuts in a heavily Medi-Cal district.",
    "Maestro que reta a un titular que votó por recortar Medicaid en un distrito muy dependiente de Medi-Cal.",
    ["Visalia school board trustee and teacher. Endorsed by the California Democratic Party, the California Teachers Association, SEIU California and the Congressional Hispanic Caucus's BOLD PAC.", "This district has one of the highest shares of Medi-Cal enrollees of any congressional district in the country."],
    [{ n: "Randy Villegas", p: "Democratic", d: "Teacher/Business Owner", pick: true },
     { n: "David G. Valadao", p: "Republican", d: "Congressman/Dairy Farmer", inc: true, about: "Dairy farmer who has held this seat on and off since 2013 and has a reputation as a moderate.", whyNot: "His moderate reputation is real, but he voted for the 2025 budget law that cut Medicaid in the district that depends on it most. That vote outweighs his moderate image." }],
    [W1, CADEM]);

  h("cd24", 24, "Santa Barbara and San Luis Obispo", "Salud Carbajal",
    "Marine veteran and incumbent with broad support.",
    "Veterano de la Infantería de Marina con amplio apoyo.",
    ["Marine Corps Reserve veteran, in Congress since 2017."],
    [{ n: "Salud Carbajal", p: "Democratic", d: "Member of Congress", inc: true, pick: true },
     { n: "Bob Smith", p: "Republican", d: "Defense Systems Engineer", about: "Engineer.", whyNot: RULE }],
    [W1, CADEM]);

  h("cd26", 26, "Ventura County", "Jacqui Irwin",
    "Longtime Assemblymember running for an open seat, with labor and party support.",
    "Asambleísta veterana en busca de un escaño abierto, con apoyo sindical y del partido.",
    ["Assemblymember since 2014 and former Thousand Oaks mayor. Endorsed by Rep. Sydney Kamlager-Dove, Rep. Mark Takano, Gov. Newsom, SEIU and teachers.", "Rep. Julia Brownley is retiring."],
    [{ n: "Jacqui Irwin", p: "Democratic", d: "California State Assemblymember", pick: true },
     { n: "Sam Gallucci", p: "Republican", d: "Business Executive/Pastor", about: "Pastor and business executive.", whyNot: RULE }],
    [W1, CADEM]);

  h("cd27", 27, "Santa Clarita and Antelope Valley", "George Whitesides",
    "First-term congressman in a toss-up seat. Every vote here matters.",
    "Congresista de primer periodo en una contienda muy reñida; cada voto cuenta.",
    ["Former Virgin Galactic CEO and NASA chief of staff who flipped this seat in 2024.", "The primary was nearly tied (41.0% to 40.6%)."],
    [{ n: "George Whitesides", p: "Democratic", d: "U.S. Representative/Father", inc: true, pick: true },
     { n: "Jason Gibbs", p: "Republican", d: "City Councilmember/Engineer", about: "Santa Clarita councilmember since 2020.", whyNot: RULE + " Winning this seat would add to the House majority behind the Medicaid cuts." }],
    [W2, CADEM]);

  h("cd29", 29, "Northeast San Fernando Valley", "Luz Rivas",
    "Two Democrats. Rivas is an engineer and first-term congresswoman with party backing.",
    "Dos demócratas; Rivas es ingeniera y congresista de primer periodo con apoyo del partido.",
    ["MIT-trained engineer and former Assemblymember, elected to Congress in 2024 with 70%.", "Endorsed by the California Democratic Party and the Los Angeles County Democratic Party."],
    [{ n: "Luz Rivas", p: "Democratic", d: "Congresswoman", inc: true, pick: true },
     { n: "Angélica María Dueñas", p: "Democratic", d: "Mother/Community Organizer", about: "Former Sun Valley neighborhood council president who has run for this seat several times.", whyNot: "A committed local organizer, but she lacks the endorsements and record Rivas brings." }],
    [W2, CADEM], { rule: "same-party" });

  h("cd30", 30, "Glendale, Burbank and Hollywood", "Laura Friedman",
    "First-term congresswoman with a long record in the Assembly.",
    "Congresista de primer periodo con larga trayectoria en la Asamblea.",
    ["Former Assemblymember and Glendale mayor, elected to Congress in 2024."],
    [{ n: "Laura Friedman", p: "Democratic", d: "Member, United States House of Representatives", inc: true, pick: true },
     { n: "Scott Alan Meyers", p: "Republican", d: "Small Business Owner", about: "Attorney.", whyNot: RULE }],
    [W2, CADEM]);

  h("cd32", 32, "San Fernando Valley and Westside", "Brad Sherman",
    "Veteran congressman and senior member of the Financial Services Committee.",
    "Congresista veterano y miembro de alto rango del Comité de Servicios Financieros.",
    ["In Congress since 1997. Endorsed by all 42 other California House Democrats and Rep. Jasmine Crockett."],
    [{ n: "Brad Sherman", p: "Democratic", d: "United States Congressman/Dad", inc: true, pick: true },
     { n: "Larry Thompson", p: "Republican", d: "Attorney/Film Producer", about: "Talent manager and runner-up in 2024.", whyNot: RULE }],
    [W2, CADEM]);

  h("cd34", 34, "Downtown and Northeast Los Angeles", "Jimmy Gomez",
    "Two Democrats. Gomez brings seniority and party backing.",
    "Dos demócratas; Gomez aporta antigüedad y apoyo del partido.",
    ["In Congress since 2017. Endorsed by the California Democratic Party and labor.", "Won the primary 46% to 31%."],
    [{ n: "Jimmy Gomez", p: "Democratic", d: "U.S. Representative/Parent", inc: true, pick: true },
     { n: "Angela Gonzales-Torres", p: "Democratic", d: "Advocate For Justice", about: "Former Highland Park neighborhood councilor backed by Justice Democrats and the Working Families Party.", whyNot: "A grassroots progressive, but with far less of a record than Gomez." }],
    [W2, CADEM], { rule: "same-party" });

  h("cd36", 36, "Westside Los Angeles and South Bay beaches", "Ted W. Lieu",
    "Air Force veteran and senior House Democratic leader.",
    "Veterano de la Fuerza Aérea y líder demócrata de alto rango.",
    ["Air Force veteran, in Congress since 2015 and part of House Democratic leadership."],
    [{ n: "Ted W. Lieu", p: "Democratic", d: "United States Representative, 36th District", inc: true, pick: true },
     { n: "Houston Brignano", p: "Republican", d: "Technology Executive", about: "Technology executive.", whyNot: RULE }],
    [W2, CADEM]);

  h("cd37", 37, "South and Central Los Angeles, Culver City", "Sydney Kamlager-Dove",
    "Congressional Black Caucus member representing historic Black Los Angeles.",
    "Miembro del Caucus Afroamericano del Congreso que representa al Los Ángeles afroamericano histórico.",
    ["Member of the Congressional Black Caucus and former state senator. Won 78% in 2024.", "Endorsed by the California Democratic Party and labor."],
    [{ n: "Sydney Kamlager-Dove", p: "Democratic", d: "U.S. Representative, 37th District", inc: true, pick: true },
     { n: "Samantha Mota", p: "Democratic", d: "Community Advocate", about: "Community activist.", whyNot: "Little public record compared with the incumbent." }],
    [W2, CADEM], { rule: "same-party" });

  h("cd38", 38, "San Gabriel Valley and East Los Angeles", "Hilda Solis",
    "Former U.S. Labor Secretary and county supervisor returning to Congress.",
    "Exsecretaria del Trabajo de EE. UU. y supervisora del condado que regresa al Congreso.",
    ["U.S. Secretary of Labor under President Obama, Los Angeles County supervisor since 2014, and a former congresswoman.", "Endorsed by Rep. Maxine Waters, Mayor Karen Bass, labor and the California Democratic Party."],
    [{ n: "Hilda Solis", p: "Democratic", d: "County Supervisor", pick: true },
     { n: "Pedro Antonio Casas", p: "Republican", d: "No Ballot Designation", about: "Psychologist who ran for the 31st District in 2024.", whyNot: RULE }],
    [W2, CADEM]);

  h("cd41", 41, "Southeast Los Angeles County (Whittier, Downey area)", "Linda Sánchez",
    "Senior congresswoman on the Ways and Means Committee.",
    "Congresista de alto rango en el Comité de Medios y Arbitrios.",
    ["In Congress since 2003 and a senior member of Ways and Means, which writes tax and health law.", "The primary was close (37.5% to 35.8%)."],
    [{ n: "Linda Sánchez", p: "Democratic", d: "Congresswoman/Mom", inc: true, pick: true },
     { n: "Mitch Clemmons", p: "Republican", d: "Plumbing Contractor", about: "Plumbing contractor who ran for State Senate in 2022.", whyNot: RULE }],
    [W2, CADEM]);

  h("cd42", 42, "Long Beach", "Robert Garcia",
    "Former Long Beach mayor and top Democrat on the House Oversight Committee.",
    "Exalcalde de Long Beach y principal demócrata del Comité de Supervisión.",
    ["Former Long Beach mayor, now the lead Democrat on the House Oversight Committee."],
    [{ n: "Robert Garcia", p: "Democratic", d: "United States Congressman", inc: true, pick: true },
     { n: "Brian Burley", p: "Republican", d: "Trustee, Huntington Beach City School District", about: "School district trustee and repeat candidate.", whyNot: RULE }],
    [W2, CADEM]);

  h("cd43", 43, "South Los Angeles, Inglewood, Hawthorne, Compton area", "Maxine Waters",
    "Dean of the California delegation and a founding voice for Black Los Angeles.",
    "Decana de la delegación de California y voz histórica del Los Ángeles afroamericano.",
    ["In Congress since 1991, a longtime Congressional Black Caucus leader and the top Democrat on the Financial Services Committee, where she has fought predatory lending and pushed for fair housing.", "Won 64% in the primary."],
    [{ n: "Maxine Waters", p: "Democratic", d: "United States Congresswoman", inc: true, pick: true },
     { n: "Cristian Morales", p: "Republican", d: "Manufacturing Executive", about: "Manufacturing executive.", whyNot: RULE }],
    [W2, CADEM]);

  h("cd44", 44, "South Bay and Port communities (Carson, San Pedro)", "Nanette Diaz Barragán",
    "Incumbent focused on environmental justice in port and refinery neighborhoods.",
    "Congresista enfocada en justicia ambiental en zonas de puertos y refinerías.",
    ["Former chair of the Congressional Hispanic Caucus with a focus on pollution in port and refinery communities."],
    [{ n: "Nanette Diaz Barragán", p: "Democratic", d: "U.S. Representative, 44th District", inc: true, pick: true },
     { n: "Genevieve Angel", p: "Republican", d: "Family Nurse Practitioner", about: "Nurse practitioner.", whyNot: RULE }],
    [W2, CADEM]);

  h("cd45", 45, "North Orange County and southeast LA County", "Derek Tran",
    "Army veteran and first-term congressman in a competitive seat.",
    "Veterano del Ejército y congresista de primer periodo en un distrito competido.",
    ["Army veteran, consumer attorney and son of Vietnamese refugees who flipped this seat in 2024.", "Endorsed by SEIU, labor and the California Democratic Party."],
    [{ n: "Derek Tran", p: "Democratic", d: "Representative/Business Owner", inc: true, pick: true },
     { n: "Chuong V. Vo", p: "Republican", d: "Retired Police Officer", about: "Former Cerritos mayor and retired police officer.", whyNot: RULE }],
    [W2, CADEM]);

  h("cd46", 46, "Central Orange County (Santa Ana, Anaheim)", "Lou Correa",
    "Longtime Orange County congressman.",
    "Congresista veterano del condado de Orange.",
    ["In Congress since 2017 after a long career in the state legislature."],
    [{ n: "Lou Correa", p: "Democratic", d: "United States Congressmember", inc: true, pick: true },
     { n: "David Pan", p: "Republican", d: "Professor", about: "College professor and 2024 runner-up.", whyNot: RULE }],
    [W2, CADEM]);

  h("cd47", 47, "Coastal Orange County (Irvine, Huntington Beach)", "Dave Min",
    "First-term congressman and law professor in a swing seat.",
    "Congresista de primer periodo y profesor de derecho en un distrito competido.",
    ["Former state senator and UC Irvine law professor, elected to Congress in 2024."],
    [{ n: "Dave Min", p: "Democratic", d: "United States Representative/Father", inc: true, pick: true },
     { n: "Jenny Rae Le Roux", p: "Republican", d: "Entrepreneur/Investor", about: "Entrepreneur and 2022 candidate for governor.", whyNot: RULE }],
    [W2, CADEM]);

  h("cd49", 49, "North San Diego County coast and south Orange County", "Mike Levin",
    "Incumbent focused on veterans and clean energy.",
    "Congresista enfocado en veteranos y energía limpia.",
    ["In Congress since 2019. Won 56% in the primary."],
    [{ n: "Mike Levin", p: "Democratic", d: "U.S. Representative, 49th District", inc: true, pick: true },
     { n: "Armen Kurdian", p: "Republican", d: "Retired Navy Captain", about: "Retired Navy captain endorsed by Rep. Darrell Issa.", whyNot: RULE }],
    [W2, CADEM]);

  h("cd50", 50, "Central San Diego", "Scott Peters",
    "Pragmatic, experienced San Diego congressman.",
    "Congresista pragmático y experimentado de San Diego.",
    ["In Congress since 2013 and known as a pragmatic, budget-minded Democrat."],
    [{ n: "Scott Peters", p: "Democratic", d: "Member of Congress", inc: true, pick: true },
     { n: "Steve Cohen", p: "Republican", d: "Television News Consultant", about: "Former KUSI-TV news director.", whyNot: RULE }],
    [W2, CADEM]);

  h("cd51", 51, "San Diego and East County", "Sara Jacobs",
    "Incumbent focused on child care and family costs.",
    "Congresista enfocada en cuidado infantil y costos familiares.",
    ["In Congress since 2021, with a focus on child care and working families."],
    [{ n: "Sara Jacobs", p: "Democratic", d: "U.S. Representative", inc: true, pick: true },
     { n: "Ricardo Cabrera", p: "Republican", d: "Business Owner", about: "Business owner.", whyNot: RULE }],
    [W2, CADEM]);

  h("cd52", 52, "South San Diego County and the border", "Juan Vargas",
    "Longtime border-region congressman.",
    "Congresista veterano de la región fronteriza.",
    ["In Congress since 2013, focused on the border economy and the Tijuana River sewage crisis."],
    [{ n: "Juan Vargas", p: "Democratic", d: "Member of Congress", inc: true, pick: true },
     { n: "Jeff Belle", p: "Republican", d: "Business Owner", about: "Black business owner and Republican nominee.", whyNot: "Being a Black candidate earns a close look, but in Congress he would vote with the majority behind the Medicaid cuts. That record doesn't clear the bar." }],
    [W2, CADEM]);
})();
