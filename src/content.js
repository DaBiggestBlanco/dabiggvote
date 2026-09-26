// Guide content. Each contest carries the pick, the research-backed reasons for it,
// and a fair summary of every alternative with the reason it was not chosen.
//
// pickType (internal only, never shown to viewers): where a pick originated.
//   "slate" original source list, "filled" source had no preference, "added" race not in the source.
// depth: "limited" when little public information exists about the candidates.
// impact: "low" when the outcome is close to certain or the choice changes little.

window.GUIDE = {
  electionDate: "2026-11-03",
  updated: "2026-09-26",
  lens: {
    en: "Every explanation weighs what matters most to middle-class Black and other minority families in California: the freedom to vote without new barriers, affordable health care, building wealth through homeownership, fair taxes for working and middle-class households, safe neighborhoods with fair policing, public schools that close achievement gaps, clean air in warehouse-heavy Inland Empire communities, and leaders who show up for our neighborhoods.",
    es: "Cada explicación considera lo que más importa a las familias afroamericanas y de otras minorías de clase media en California: votar sin nuevas barreras, atención médica asequible, crear patrimonio con la compra de vivienda, impuestos justos para la clase trabajadora y media, barrios seguros con policía justa, escuelas públicas que cierren brechas de rendimiento, aire limpio en comunidades con muchas bodegas en el Inland Empire y líderes que den la cara por nuestros barrios."
  },

  sections: [
    { id: "props", en: "Statewide propositions", es: "Proposiciones estatales" },
    { id: "state", en: "Statewide offices", es: "Cargos estatales" },
    { id: "courts", en: "Judges", es: "Jueces" },
    { id: "house", en: "U.S. House", es: "Cámara de Representantes de EE. UU." },
    { id: "senate", en: "State Senate", es: "Senado estatal" },
    { id: "assembly", en: "State Assembly", es: "Asamblea estatal" },
    { id: "riverside", en: "Riverside County & cities", es: "Condado y ciudades de Riverside" },
    { id: "sanbernardino", en: "San Bernardino County & cities", es: "Condado y ciudades de San Bernardino" }
  ],


  contests: [

  // ───────────────────────── PROPOSITIONS ─────────────────────────
  {
    id: "p1", sec: "props", scope: "all", title: "Proposition 1", sub: "Housing affordability bond ($11.25 billion)",
    pick: "YES", pickType: "slate",
    quick: "Builds and preserves affordable homes and funds down-payment help, with no new tax.",
    quick_es: "Construye y preserva viviendas asequibles y ayuda con el enganche, sin impuesto nuevo.",
    what: {
      summary: "Lets the state borrow $11.25 billion for affordable rental housing, veterans' home loans, supportive housing, preserving existing affordable units, and down-payment assistance.",
      yes: "The state can borrow $11.25 billion for these housing programs.",
      no: "The state cannot borrow this money for these programs.",
      fiscal: "About $500–600 million a year from the state budget for roughly 25 years to repay the bond."
    },
    why: [
      "Rent and home prices are the biggest squeeze on middle-class families in the Inland Empire. This bond funds both rentals and a path to ownership through down-payment assistance.",
      "Homeownership is the main way Black families build wealth, and the racial homeownership gap is still wide. Down-payment help targets exactly that barrier.",
      "It raises no taxes. It is repaid from the existing budget, like the school and water bonds voters have approved before.",
      "No official argument against it was submitted to the state voter guide."
    ],
    other: [
      { n: "NO", about: "A no vote avoids new state debt. Repayment would cost roughly $500–600 million a year for 25 years.", whyNot: "The debt cost is real. But the housing shortage costs families more every year in rent, and bonds are the normal way the state pays for long-lasting buildings." }
    ],
    src: [["CA Secretary of State Quick Reference: Prop 1", "https://voterguide.sos.ca.gov/quick-reference-guide/1.htm"]]
  },
  {
    id: "p2", sec: "props", scope: "all", title: "Proposition 2", sub: "Bigger Rainy Day Fund",
    pick: "YES", pickType: "slate",
    quick: "Saves more in good years so schools and services aren't cut when the economy dips.",
    quick_es: "Ahorra más en años buenos para no recortar escuelas y servicios en una recesión.",
    what: {
      summary: "Constitutional amendment that raises how much the state can and must set aside in its Rainy Day Fund and changes rules on budget reserves and paying down debt.",
      yes: "State budget reserves would be higher, and some debt payments would be spread over more years.",
      no: "Existing reserve and debt-payment rules stay the same.",
      fiscal: "Higher state reserves."
    },
    why: [
      "When recessions hit, the first cuts land on schools, clinics and programs our communities rely on. A larger cushion protects those services.",
      "Backed by firefighters, hospitals and educators.",
      "Saving during surplus years is the same discipline a middle-class household uses."
    ],
    other: [
      { n: "NO", about: "Opponents, led by Assemblymember David Tangipa, say reserve deposits would be excluded from the state spending limit, making taxpayer rebates less likely.", whyNot: "Taxpayer rebates under the spending limit are rare and small. A stable budget during downturns helps more families than an occasional rebate." }
    ],
    src: [["CA Secretary of State Quick Reference: Prop 2", "https://voterguide.sos.ca.gov/quick-reference-guide/2.htm"]]
  },
  {
    id: "p3", sec: "props", scope: "all", title: "Proposition 3", sub: "Keep the existing high-income tax for schools and health care",
    pick: "YES", pickType: "slate",
    quick: "Keeps a tax that only hits incomes over ~$371,000 so schools don't lose $5–15 billion a year.",
    quick_es: "Mantiene un impuesto solo a ingresos de más de ~$371,000 para que las escuelas no pierdan $5–15 mil millones al año.",
    what: {
      summary: "Makes permanent the income tax rates on the highest earners (above about $371,000 a year, adjusted for inflation) first approved in 2012. The money goes mainly to public schools and health care.",
      yes: "The high-income tax rates in place since 2012 become permanent instead of expiring in 2031.",
      no: "Those rates expire in 2031.",
      fiscal: "Keeps $5–15 billion a year in state revenue that would otherwise go away."
    },
    why: [
      "It does not raise taxes on anyone. It keeps rates that have been in place for 14 years.",
      "Almost no middle-class family earns enough to pay it. It applies only above roughly $371,000 a year.",
      "Losing $5–15 billion a year would mean bigger classes and fewer counselors, and the schools that serve Black and Latino students tend to feel cuts first."
    ],
    other: [
      { n: "NO", about: "Opponents say Californians already pay some of the nation's highest taxes and the state should fix spending before making taxes permanent.", whyNot: "Spending accountability matters, but letting this tax expire would cut schools without lowering taxes for middle-class families." }
    ],
    src: [["CA Secretary of State Quick Reference: Prop 3", "https://voterguide.sos.ca.gov/quick-reference-guide/3.htm"]]
  },
  {
    id: "p4", sec: "props", scope: "all", title: "Proposition 4", sub: "Allow public money for election campaigns",
    pick: "NO", pickType: "slate",
    quick: "Would let governments spend taxpayer money on political campaigns, while services are already stretched.",
    quick_es: "Permitiría gastar dinero de los contribuyentes en campañas políticas, cuando los servicios ya están limitados.",
    what: {
      summary: "Repeals California's ban on public financing of campaigns, so state and local governments could create programs that give public money to candidates.",
      yes: "State and local governments could set up public campaign financing programs, within limits.",
      no: "The existing ban stays in place for the state and most local governments.",
      fiscal: "A few hundred thousand dollars a year for the state ethics agency, plus whatever each government chooses to spend on its own program."
    },
    why: [
      "Every dollar that goes to political campaigns is a dollar not spent on services. The state and many Inland Empire cities are already dealing with budget gaps and federal cuts.",
      "The measure sets no cap on how much a government can spend or how many candidates can receive funds. Opponents warn that includes funding negative ads.",
      "Programs would be designed by the same officials who benefit from them. That can tilt toward incumbents rather than newcomers from our communities."
    ],
    other: [
      { n: "YES", about: "Supporters, including Californians for Fair Elections and the Riverside County Democratic Party, say California is the only state that bans public financing. They argue small-dollar matching programs help working-class and minority candidates compete without big donors.", whyNot: "The fairness goal is a good one, and this is a close call. But the measure is open-ended on cost, and it lands at a time when public dollars are tight. Keeping the ban protects service budgets until a program with firm limits is proposed." }
    ],
    src: [["CA Secretary of State Quick Reference: Prop 4", "https://voterguide.sos.ca.gov/quick-reference-guide/4.htm"], ["Riverside County Democrats prop guide (for the other side)", "https://www.riversidecountydemocrats.org/endorsements/"]]
  },
  {
    id: "p5", sec: "props", scope: "all", title: "Proposition 5", sub: "Change how statewide recall elections work",
    pick: "NO", pickType: "slate",
    quick: "Keeps voters, not politicians, choosing the replacement when a statewide official is recalled.",
    quick_es: "Mantiene que los votantes, y no los políticos, elijan al reemplazo cuando se destituye a un funcionario estatal.",
    what: {
      summary: "Removes the replacement-candidate question from statewide recall ballots. If an official is recalled, the vacancy would be filled by appointment or a later special election, depending on the office and timing.",
      yes: "Recall ballots would only ask whether to remove the official. The replacement would be chosen separately.",
      no: "Recall ballots would still ask voters who should replace the official.",
      fiscal: "Unknown overall. Millions in savings or costs per recall, depending on the office."
    },
    why: [
      "Under a Yes, other politicians or a later election would fill the seat, and the office could sit vacant in the meantime. Keeping the current system keeps that choice with voters on the same ballot.",
      "It changes the state constitution, so any flaw would be hard to fix."
    ],
    other: [
      { n: "YES", about: "Supporters, including the League of Women Voters and California Common Cause, say it closes a loophole that lets a replacement win with a small share of the vote.", whyNot: "The plurality problem is real. But the fix shifts power away from voters, and the recall is rarely used. This guide keeps the decision with the voters." }
    ],
    src: [["CA Secretary of State Quick Reference: Prop 5", "https://voterguide.sos.ca.gov/quick-reference-guide/5.htm"]]
  },
  {
    id: "p37", sec: "props", scope: "all", title: "Proposition 37", sub: "Loans for middle-income buyers of new homes",
    pick: "YES", pickType: "slate",
    quick: "Helps middle-income families buy a new home with a state loan for up to 17% of the price, at no taxpayer cost.",
    quick_es: "Ayuda a familias de ingresos medios a comprar casa nueva con un préstamo estatal de hasta 17% del precio, sin costo para los contribuyentes.",
    what: {
      summary: "Creates a program funded by up to $25 billion in revenue bonds. It offers eligible buyers fixed-rate loans for up to 17% of the price of a newly built home under $1.5 million. Buyers must live in the home, meet income limits and put down at least 3%.",
      yes: "The state creates the home-buying loan program, repaid by the buyers' own payments.",
      no: "No new program is created.",
      fiscal: "No direct state or local cost. The bonds are repaid by borrowers, not the general fund."
    },
    why: [
      "It is aimed squarely at the middle class: income limits, 3% down, and the buyer must live in the home.",
      "Owning a home is the main way families build wealth to pass on, and the down payment is the biggest hurdle for Black and first-generation buyers.",
      "Buyers repay the bonds, so taxpayers carry no direct cost. No argument against it was submitted to the state voter guide."
    ],
    other: [
      { n: "NO", about: "A no vote avoids creating a large new state lending program.", whyNot: "No organized opposition exists, and the program is designed to pay for itself." }
    ],
    src: [["CA Secretary of State Quick Reference: Prop 37", "https://voterguide.sos.ca.gov/quick-reference-guide/37.htm"]]
  },
  {
    id: "p38", sec: "props", scope: "all", title: "Proposition 38", sub: "Bonds for immunology medical research ($8.4 billion)",
    pick: "YES", pickType: "slate",
    quick: "Funds research on cancer, heart disease and Alzheimer's, and requires a 20% discount on resulting drugs.",
    quick_es: "Financia investigación sobre cáncer, enfermedades del corazón y Alzheimer, con descuento de 20% en los medicamentos que resulten.",
    what: {
      summary: "Lets the state borrow $8.4 billion for immunology and immunotherapy research. Half goes to one UC-affiliated nonprofit research institute and half to competitive research grants.",
      yes: "The state borrows $8.4 billion for this research.",
      no: "The state does not borrow for it.",
      fiscal: "About $500–600 million a year for about 20 years, possibly offset in part if the research earns revenue."
    },
    why: [
      "Black Americans die at higher rates from several diseases this research targets, including some cancers, heart disease and Alzheimer's.",
      "The measure requires a 20% discount on resulting treatments and independent audits.",
      "Supported by patient groups such as the Michael J. Fox Foundation and the American Nurses Association California."
    ],
    other: [
      { n: "NO", about: "A Stanford medical researcher argues it locks in decades of debt and steers half the money to one institute, when research should be funded through the regular budget.", whyNot: "The concern about concentrating money in one institute is fair. But the health benefits and the drug-price discount outweigh it for families facing these diseases." }
    ],
    src: [["CA Secretary of State Quick Reference: Prop 38", "https://voterguide.sos.ca.gov/quick-reference-guide/38.htm"]]
  },
  {
    id: "p39", sec: "props", scope: "all", title: "Proposition 39", sub: "Require government ID to vote",
    pick: "NO", pickType: "slate",
    quick: "Would throw out mail ballots missing ID digits and add costly barriers to voting.",
    quick_es: "Anularía boletas por correo sin los dígitos de identificación y añadiría barreras costosas para votar.",
    what: {
      summary: "Constitutional amendment. Mail ballots would be rejected unless the envelope includes the last four digits of a designated government ID number. In-person voters would have to show government ID.",
      yes: "Voters must give extra ID information every time they vote.",
      no: "Voter identity continues to be confirmed by signature, as it is now.",
      fiscal: "Tens of millions to low hundreds of millions of dollars a year to carry out."
    },
    why: [
      "Studies consistently find Black, elderly, low-income and young voters are less likely to have a current government ID. This would fall hardest on them.",
      "A missing or mistyped number on the envelope would void an otherwise valid mail ballot, and most Californians vote by mail.",
      "California already checks every mail ballot signature and lets voters fix problems. It would cost up to hundreds of millions a year to solve a problem the state has not found at any real scale.",
      "Because it is a constitutional amendment, it would be very hard to undo."
    ],
    other: [
      { n: "YES", about: "Supporters (Californians for Voter ID) say voter ID has support across parties and would increase trust in elections.", whyNot: "Trust matters, but this measure's cost falls on eligible voters who lose their ballots. Better ID access, not stricter ballot rejection, is the fair way to build trust." }
    ],
    src: [["CA Secretary of State Quick Reference: Prop 39", "https://voterguide.sos.ca.gov/quick-reference-guide/39.htm"]]
  },
  {
    id: "p40", sec: "props", scope: "all", title: "Proposition 40", sub: "One-time 5% tax on billionaires' wealth",
    pick: "NO", pickType: "slate",
    quick: "A one-time wealth tax that could push billionaires out and shrink the income-tax base the budget relies on.",
    quick_es: "Un impuesto único al patrimonio que podría ahuyentar a multimillonarios y reducir los ingresos que sostienen el presupuesto.",
    what: {
      summary: "Imposes a one-time 5% tax on the net worth of Californians with more than $1 billion in assets. Most of the money goes to health care.",
      yes: "The state collects a one-time 5% tax on billionaires' wealth.",
      no: "No wealth tax.",
      fiscal: "Tens of billions of dollars one time, spread over several years. The state's own analysts also project a possible ongoing loss of up to $1 billion a year in income taxes."
    },
    why: [
      "It is a one-time payment, so it cannot permanently fix health care funding. The state's own analysts project an ongoing loss in income-tax revenue if very wealthy residents leave.",
      "California's budget already depends heavily on a small number of top earners. When revenue swings, the cuts land on services middle-class families use.",
      "Taxing wealth on paper, like stock in a private company, is new and complicated, and would face years of court fights.",
      "Gubernatorial candidate Xavier Becerra, whom this guide supports, also opposes the billionaire tax."
    ],
    other: [
      { n: "YES", about: "Backed by SEIU-UHW, Sen. Bernie Sanders and the Riverside County Democratic Party. Supporters say federal cuts took coverage from more than a million Californians, and billionaires, not the middle class, should cover the gap.", whyNot: "The health-care losses are real and serious. But a one-time tax that may shrink future revenue is a shaky way to fund ongoing care. Keeping the state's tax base stable protects middle-class services over the long run." }
    ],
    src: [["CA Secretary of State Quick Reference: Prop 40", "https://voterguide.sos.ca.gov/quick-reference-guide/40.htm"], ["CalMatters: Becerra's position on the wealth tax", "https://calmatters.org/california-voter-guide-2026/governor/"]]
  },
  {
    id: "p41", sec: "props", scope: "all", title: "Proposition 41", sub: "Audits and spending-limit rules for new state taxes",
    pick: "YES", pickType: "slate",
    quick: "Makes new special taxes pass independent audits and follow the state spending limit.",
    quick_es: "Obliga a que los nuevos impuestos especiales pasen auditorías independientes y respeten el límite de gasto estatal.",
    what: {
      summary: "Cancels state taxes enacted after January 1, 2026 that exempt their revenue from the voter-approved state spending limit. It also has the State Auditor review programs funded by new special taxes, both before they reach the ballot and on an ongoing basis.",
      yes: "New special taxes get State Auditor review, and new tax revenue must count toward the spending limit.",
      no: "Current rules stay as they are.",
      fiscal: "Unknown. It depends on future decisions by voters and lawmakers."
    },
    why: [
      "Families are asked to approve tax after tax for homelessness and other programs, often with little to show. Independent audits give voters proof before and after.",
      "It keeps new taxes under the same spending limit voters already approved, instead of letting them go around it.",
      "It pairs with this guide's No on 40. If the billionaire tax passed, this measure would likely cancel it, because that tax exempts its revenue from the limit."
    ],
    other: [
      { n: "NO", about: "SEIU-UHW and the Riverside County Democratic Party call it a billionaire-funded move to undo the billionaire tax, and they point out it would cancel that tax.", whyNot: "That effect on Prop 40 is real and is part of why this guide supports it. The audit requirement also stands on its own merits." }
    ],
    src: [["CA Secretary of State Quick Reference: Prop 41", "https://voterguide.sos.ca.gov/quick-reference-guide/41.htm"]]
  },
  {
    id: "p42", sec: "props", scope: "all", title: "Proposition 42", sub: "Constitutional ban on new personal property and retroactive taxes",
    pick: "NO", pickType: "slate",
    quick: "A permanent constitutional ban is too blunt. It would tie the hands of future voters.",
    quick_es: "Una prohibición constitucional permanente es demasiado tajante y limita a los votantes del futuro.",
    what: {
      summary: "Constitutional amendment banning any new state tax on owning personal property (everything but real estate, including financial assets) and any new tax that reaches back to past activity.",
      yes: "The state could never create new taxes on owning financial assets or other personal property.",
      no: "The state keeps the option to create such taxes in the future, with voter or legislative approval.",
      fiscal: "Tax revenue may not grow as much in the future."
    },
    why: [
      "No one is proposing to tax ordinary retirement accounts. Those are already protected by practice and politics, so the ban solves a problem families don't have.",
      "Locking a permanent ban into the constitution takes choices away from future voters. This guide opposes a one-time wealth tax now (Prop 40) but does not want to ban every future option.",
      "Unlike Prop 41, which adds accountability, this is a flat prohibition."
    ],
    other: [
      { n: "YES", about: "Supported by the California Professional Firefighters, the State Building and Construction Trades Council, and AMVETS. They say it protects workers' savings from being taxed twice.", whyNot: "Protecting savings is a fair goal, but a permanent constitutional ban goes much further than needed." }
    ],
    src: [["CA Secretary of State Quick Reference: Prop 42", "https://voterguide.sos.ca.gov/quick-reference-guide/42.htm"]]
  },
  {
    id: "p43", sec: "props", scope: "all", title: "Proposition 43", sub: "Two-thirds vote for local special taxes",
    pick: "NO", pickType: "slate",
    quick: "Would let one-third of voters block local funding for fire, 911, roads and schools that most people want.",
    quick_es: "Permitiría que un tercio de los votantes bloquee fondos locales para bomberos, 911, calles y escuelas que la mayoría quiere.",
    what: {
      summary: "Constitutional amendment that raises the vote needed for certain local special taxes, including citizen-proposed ones, from a simple majority to two-thirds, starting January 1, 2027.",
      yes: "These local taxes would need two-thirds voter approval.",
      no: "Voters can keep approving them by majority vote.",
      fiscal: "Local tax revenue may grow less in the future."
    },
    why: [
      "Majority rule matters. A measure with 66% support could still fail.",
      "Growing Inland Empire communities depend on local measures for fire stations, 911 response, parks and roads.",
      "Opposed by the California Professional Firefighters, the California Federation of Teachers and nurses."
    ],
    other: [
      { n: "YES", about: "The Howard Jarvis Taxpayers Association, CalTax and the California Hispanic Chambers of Commerce say it restores Prop 13's two-thirds rule and closes a loophole used to pass earmarked taxes.", whyNot: "Voters already get the final say on every local tax. Raising the bar to two-thirds hands a veto to a minority." }
    ],
    src: [["CA Secretary of State Quick Reference: Prop 43", "https://voterguide.sos.ca.gov/quick-reference-guide/43.htm"]]
  },
  {
    id: "p44", sec: "props", scope: "all", title: "Proposition 44", sub: "90% spending rule for community health clinics",
    pick: "NO", pickType: "slate",
    quick: "Doctors and nurses warn it could close community clinics that serve millions.",
    quick_es: "Médicos y enfermeras advierten que podría cerrar clínicas comunitarias que atienden a millones.",
    what: {
      summary: "Requires nonprofit community health centers (Federally Qualified Health Centers) to spend at least 90% of revenue on program services each year, with penalties if they don't.",
      yes: "Covered clinics must meet the 90% rule every year.",
      no: "No new requirement.",
      fiscal: "State costs in the low tens of millions of dollars a year, covered by fees."
    },
    why: [
      "Community clinics are where many Black, Latino and uninsured families get care, especially after federal Medicaid cuts.",
      "A rigid spending formula could force clinics to cut sites or services. The California Medical Association, American Academy of Pediatrics California, California Academy of Family Physicians and school nurses all oppose it.",
      "It is sponsored by SEIU-UHW, the same union behind the Prop 40 wealth tax, not by the doctors and nurses who work in these clinics."
    ],
    other: [
      { n: "YES", about: "Supporters (SEIU-UHW) say it keeps health care dollars going to patients instead of executive pay and overhead.", whyNot: "Accountability is good, but the doctors who work in these clinics say this rule would shrink care." }
    ],
    src: [["CA Secretary of State Quick Reference: Prop 44", "https://voterguide.sos.ca.gov/quick-reference-guide/44.htm"]]
  },
  {
    id: "p45", sec: "props", scope: "all", title: "Proposition 45", sub: "Fast-track environmental review (CEQA) for many projects",
    pick: "NO", pickType: "slate",
    quick: "Would weaken the environmental reviews that neighborhoods near warehouses and freeways rely on.",
    quick_es: "Debilitaría las revisiones ambientales que protegen a barrios cerca de bodegas y autopistas.",
    what: {
      summary: "Changes the California Environmental Quality Act (CEQA) for many housing, transportation, water and health projects. It sets tight review deadlines and limits what courts can consider in challenges.",
      yes: "Covered projects get faster review and narrower court challenges.",
      no: "Projects keep today's review and court process.",
      fiscal: "Likely high tens of millions of dollars a year at first, possibly over $100 million, partly covered by fees. Long-term effects uncertain."
    },
    why: [
      "The Inland Empire already has some of the worst air in the country, much of it from trucks and warehouses near Black and Latino neighborhoods. CEQA review is one of the few tools residents have.",
      "The measure applies to far more than housing, and narrowing court review removes a check that has protected communities.",
      "Opponents say the savings would go mainly to developers and utilities rather than lowering families' costs."
    ],
    other: [
      { n: "YES", about: "The Yes on 45 coalition says CEQA lawsuits delay homes, schools, hospitals, water and clean energy, raising the cost of living. It says strong protections remain.", whyNot: "CEQA does need reform for housing, and the Legislature has passed targeted fixes. This measure goes further than housing and weakens protections for communities that already breathe the worst air." }
    ],
    src: [["CA Secretary of State Quick Reference: Prop 45", "https://voterguide.sos.ca.gov/quick-reference-guide/45.htm"]]
  },

  // ───────────────────────── STATEWIDE OFFICES ─────────────────────────
  {
    id: "gov", sec: "state", scope: "all", title: "Governor",
    pick: "Xavier Becerra", pickType: "slate",
    quick: "Former state Attorney General and U.S. Health Secretary. Focused on housing, health coverage and freezing utility and insurance rates.",
    quick_es: "Exfiscal general estatal y exsecretario de Salud de EE. UU.; enfocado en vivienda, cobertura médica y congelar tarifas de servicios y seguros.",
    why: [
      "Deep experience: 20+ years in Congress, California Attorney General (2017–2021) and U.S. Secretary of Health and Human Services.",
      "Plans to declare a housing state of emergency to fund 40,000 affordable units, and to freeze insurance and utility rates while cracking down on price gouging. Those costs hit middle-class budgets hardest.",
      "Wants to expand health coverage, which matters as federal cuts push people off Medi-Cal.",
      "Defends voting access and civil rights protections, and led California's lawsuits against federal overreach as Attorney General.",
      "Opposes the billionaire wealth tax (Prop 40), in line with this guide."
    ],
    cands: [
      { n: "Xavier Becerra", p: "Democratic", d: "Voting Rights Attorney", pick: true },
      { n: "Steve Hilton", p: "Republican", d: "Small Business Owner", about: "Former Fox News host and adviser to UK Prime Minister David Cameron. Endorsed by President Trump. Proposes no state income tax on the first $150,000 with a flat rate above that, more oil drilling, ending climate mandates on utilities, ending Medi-Cal for undocumented immigrants and overturning California's sanctuary law.", whyNot: "His income-tax plan is appealing on its face, but it would blow a large hole in school and health funding. His close alignment with a federal administration that cut Medicaid, and his plans to loosen limits on police stops, work against the lens's priorities for health care and fair policing." }
    ],
    src: [["CalMatters Voter Guide: Governor", "https://calmatters.org/california-voter-guide-2026/governor/"], ["NBC News: Trump endorses Hilton", "https://www.nbcnews.com/politics/2026-election/trump-endorses-steve-hilton-california-governors-race-rcna266852"]]
  },
  {
    id: "ltgov", sec: "state", scope: "all", title: "Lieutenant Governor",
    pick: "Fiona Ma", pickType: "slate",
    quick: "State Treasurer and CPA with long financial experience. Champions the Prop 37 home-loan program.",
    quick_es: "Tesorera estatal y contadora pública con larga experiencia financiera; impulsa el programa de préstamos para vivienda de la Prop 37.",
    why: [
      "State Treasurer since 2019 and a certified public accountant. She brings real financial management experience.",
      "A named supporter of Prop 37, the middle-income home-buying program this guide backs.",
      "Endorsed by the California Labor Federation, the Building Trades and AFSCME."
    ],
    cands: [
      { n: "Fiona Ma", p: "Democratic", d: "State Treasurer/CPA", pick: true },
      { n: "Gloria Romero", p: "Republican", d: "Educator/Businesswoman", about: "Former Democratic state Senate majority leader who switched to the Republican Party in 2024. Strong school-choice advocate. Was asked to join Steve Hilton's ticket.", whyNot: "Her school-choice work has fans among Black and Latino parents. But she now runs on the Hilton/Republican platform, which conflicts with the lens on health care and voting access." }
    ],
    src: [["CalMatters Voter Guide: Lieutenant Governor", "https://calmatters.org/california-voter-guide-2026/lieutenant-governor/"]]
  },
  {
    id: "sos", sec: "state", scope: "all", title: "Secretary of State",
    pick: "Shirley N. Weber", pickType: "slate",
    quick: "California's first Black Secretary of State. Protects mail voting and access.",
    quick_es: "Primera secretaria de estado afroamericana de California; protege el voto por correo y el acceso al voto.",
    why: [
      "Daughter of Arkansas sharecroppers and California's first Black Secretary of State. She authored the law that created the state's reparations task force while in the Assembly.",
      "Oversaw permanent universal vote-by-mail and ran major elections, including the 2021 recall, without serious problems.",
      "Prioritizes voting access and election cybersecurity."
    ],
    cands: [
      { n: "Shirley N. Weber", p: "Democratic", d: "California Secretary of State", inc: true, pick: true },
      { n: "Donald P. (Don) Wagner", p: "Republican", d: "Orange County Supervisor", about: "Orange County supervisor and former Irvine mayor and Assemblymember. Supports voter ID, criticizes slow ballot counting, and has pushed for releasing voter data to federal authorities.", whyNot: "His voter-ID and voter-data positions line up with Prop 39, which this guide opposes because it would disproportionately block eligible voters." }
    ],
    src: [["CalMatters Voter Guide: Secretary of State", "https://calmatters.org/california-voter-guide-2026/secretary-of-state/"]]
  },
  {
    id: "treas", sec: "state", scope: "all", title: "Treasurer",
    pick: "Eleni Kounalakis", pickType: "slate",
    quick: "Two-term Lieutenant Governor and former U.S. Ambassador. Voted against college tuition hikes.",
    quick_es: "Vicegobernadora por dos periodos y exembajadora de EE. UU.; votó contra aumentos de colegiatura universitaria.",
    why: [
      "Eight years as Lieutenant Governor, serving on the UC Regents and CSU Trustees, where she voted against tuition increases. That keeps college more affordable for our kids.",
      "Former U.S. Ambassador to Hungary with experience on state finance boards relevant to the Treasurer's job.",
      "Endorsed by the California Labor Federation and Teamsters California."
    ],
    cands: [
      { n: "Eleni Kounalakis", p: "Democratic", d: "Lieutenant Governor of California", pick: true },
      { n: "Jennifer Hawks", p: "Republican", d: "Retired Business Executive", about: "Retired Silicon Valley executive with no prior elected office. Presents herself as an outside check on state government.", whyNot: "No public finance or elected experience for an office that manages billions in state investments and bond sales." }
    ],
    src: [["CalMatters Voter Guide: Treasurer", "https://calmatters.org/california-voter-guide-2026/treasurer/"]]
  },
  {
    id: "ctrl", sec: "state", scope: "all", title: "Controller",
    pick: "Malia M. Cohen", pickType: "slate",
    quick: "Incumbent state Controller focused on transparency and careful spending. First Black woman in the job.",
    quick_es: "Contralora estatal en funciones, enfocada en transparencia y gasto prudente; primera mujer afroamericana en el cargo.",
    why: [
      "Controller since 2023, the first Black woman to hold the office. She runs on transparency, efficiency and fairness in state finances.",
      "Has urged careful spending during tight budget years.",
      "Endorsed by the California Democratic Party and the Labor Federation."
    ],
    cands: [
      { n: "Malia M. Cohen", p: "Democratic", d: "State Controller/Mother", inc: true, pick: true },
      { n: "Herb W Morgan", p: "Republican", d: "Chief Investment Officer", about: "Founded a San Diego investment firm later bought by Cantor Fitzgerald. Campaigns on exposing government fraud.", whyNot: "Fraud-fighting matters, but his campaign echoes federal attacks on California. The incumbent already audits state spending." }
    ],
    src: [["CalMatters Voter Guide: Controller", "https://calmatters.org/california-voter-guide-2026/controller/"]]
  },
  {
    id: "ag", sec: "state", scope: "all", title: "Attorney General",
    pick: "Rob Bonta", pickType: "slate",
    quick: "Incumbent who enforces housing and civil-rights laws and has sued to protect Californians' federal benefits.",
    quick_es: "Fiscal general en funciones que aplica leyes de vivienda y derechos civiles y ha demandado para proteger beneficios federales.",
    why: [
      "Enforces laws requiring cities to allow more housing and has taken on warehouse pollution. His office's 2022 settlement pushed Fontana to adopt stricter warehouse standards.",
      "Has filed or joined more than 50 lawsuits against federal actions, many protecting health, education and civil-rights funding.",
      "Endorsed by the California Teachers Association and California Environmental Voters."
    ],
    cands: [
      { n: "Rob Bonta", p: "Democratic", d: "California Attorney General", inc: true, pick: true },
      { n: "Michael E. Gates", p: "Republican", d: "Deputy United States Attorney", about: "Former Huntington Beach city attorney (10 years) and, until November 2025, a deputy in the U.S. Justice Department's Civil Rights Division. Fought state housing requirements and favors tougher criminal enforcement.", whyNot: "He led Huntington Beach's fight against affordable-housing requirements, and his civil-rights work was for the current federal administration. Both run against the lens on housing and civil rights." }
    ],
    src: [["CalMatters Voter Guide: Attorney General", "https://calmatters.org/california-voter-guide-2026/attorney-general/"], ["Hoodline: Fontana warehouse settlement", "https://hoodline.com/2026/09/bernie-backed-latina-challenges-fontana-s-longtime-black-republican-mayor/"]]
  },
  {
    id: "ins", sec: "state", scope: "all", title: "Insurance Commissioner",
    pick: "Ben Allen", pickType: "slate",
    quick: "State senator focused on wildfire recovery, faster claims and more enforcement against insurers.",
    quick_es: "Senador estatal enfocado en recuperación de incendios, reclamos más rápidos y más control a las aseguradoras.",
    why: [
      "After the 2025 L.A. fires hit his district, he wrote laws to give the Insurance Department more enforcement power and create a wildfire-resilience loan program.",
      "Would make insurers report claim delays in real time, explain denials, add complaint staff and create a consumer advocate.",
      "Keeps the low-cost auto insurance program aimed at low-income drivers who need it most.",
      "Endorsed by the California Democratic Party, the Professional Firefighters and the San Francisco Chronicle."
    ],
    cands: [
      { n: "Ben Allen", p: "Democratic", d: "California State Senator", pick: true },
      { n: "Jane Kim", p: "Democratic", d: "Attorney/Consumer Advocate", about: "Former San Francisco supervisor and consumer attorney. Proposes a state-run \"natural disaster insurance for all\" program and expanding low-cost auto insurance to everyone. Endorsed by SEIU California, CTA and the Labor Federation.", whyNot: "A strong advocate with bold ideas. But a new state-run disaster insurer is untested and could expose taxpayers, and Allen's approach is more likely to stabilize the market for homeowners soon." }
    ],
    src: [["CalMatters Voter Guide: Insurance Commissioner", "https://calmatters.org/california-voter-guide-2026/insurance-commissioner/"]]
  },
  {
    id: "spi", sec: "state", scope: "all", title: "Superintendent of Public Instruction", sub: "Nonpartisan",
    pick: "Richard Barrera", pickType: "slate",
    quick: "San Diego school board president focused on funding, early learning and more teachers.",
    quick_es: "Presidente de la junta escolar de San Diego, enfocado en fondos, educación temprana y más maestros.",
    why: [
      "Runs one of the state's largest and most diverse districts as San Diego Unified board president.",
      "Priorities are more school funding, early childhood education and easier paths into teaching, which address the teacher shortages that hit high-need schools hardest.",
      "Backed by both the California Teachers Association and the California Charter School Advocates, an unusual pairing that suggests he can work across camps."
    ],
    cands: [
      { n: "Richard Barrera", p: "Non-Partisan", d: "State Superintendent Advisor", pick: true },
      { n: "Sonja Shaw", p: "Non-Partisan", d: "School District President", about: "Chino Valley Unified board president, known for parental-notification policies on transgender students. Wants to remove \"radical ideologies\" and focus on academic basics. Endorsed by the California Republican Party and Moms for Liberty.", whyNot: "Many parents share her call for basics and parental involvement. But her campaign centers on culture-war fights that have pulled Chino Valley into lawsuits rather than on closing achievement gaps." }
    ],
    src: [["CalMatters Voter Guide: Superintendent", "https://calmatters.org/california-voter-guide-2026/superintendent-of-public-instruction/"]]
  },
  {
    id: "boe1", sec: "state", scope: "boe", n: 1, title: "Board of Equalization, District 1",
    pick: "Nelson Esparza", pickType: "slate",
    quick: "Fresno councilmember, teacher and economist. The tax board stays focused on fair assessments.",
    quick_es: "Concejal de Fresno, maestro y economista; que la junta fiscal se enfoque en tasaciones justas.",
    why: [
      "Teacher, economist and Fresno City Councilmember, with a practical background for a board that oversees property-tax fairness.",
      "Endorsed by the California Democratic Party, the Labor Federation and school employees."
    ],
    cands: [
      { n: "Nelson Esparza", p: "Democratic", d: "Teacher/Economist/Councilmember", pick: true },
      { n: "Shannon Grove", p: "Republican", d: "State Senator/Businesswoman", about: "Republican state senator from Kern County, endorsed by the Howard Jarvis Taxpayers Association.", whyNot: "Her positions track the anti-tax measures this guide opposes, such as Prop 43." }
    ],
    src: [["CalMatters Voter Guide: Board of Equalization", "https://calmatters.org/california-voter-guide-2026/board-of-equalization/"]]
  },
  {
    id: "boe4", sec: "state", scope: "boe", n: 4, title: "Board of Equalization, District 4",
    sub: "Riverside, Orange, San Diego, Imperial and part of San Bernardino County",
    pick: "Tom Umberg", pickType: "slate",
    quick: "Veteran state senator and small businessman with broad support.",
    quick_es: "Senador estatal veterano y pequeño empresario con amplio respaldo.",
    why: [
      "Longtime state senator and small businessman with deep experience in state tax and budget law.",
      "Endorsed by SEIU, the California Teachers Association and Equality California."
    ],
    cands: [
      { n: "Tom Umberg", p: "Democratic", d: "Small Businessman/Senator", pick: true },
      { n: "Denis Bilodeau", p: "Republican", d: "Councilmember/Civil Engineer", about: "Orange city councilmember and taxpayer association president, backed by the Republican Party.", whyNot: "A capable local official, but his taxpayer-group agenda lines up with measures this guide opposes." }
    ],
    src: [["CalMatters Voter Guide: Board of Equalization", "https://calmatters.org/california-voter-guide-2026/board-of-equalization/"], ["KPBS: BOE District 4 explainer", "https://www.kpbs.org/news/politics/2026/05/04/2026-primary-election-candidates-running-for-the-board-of-equalization-district-4"]]
  },

  // ───────────────────────── COURTS (added) ─────────────────────────
  {
    id: "scotus", sec: "courts", scope: "all", title: "California Supreme Court retention", sub: "Justices Kelli M. Evans and Joshua Groban",
    pick: "YES on both", pickType: "added",
    quick: "Keep both justices. No record of misconduct, and Evans brings civil-rights experience.",
    quick_es: "Mantener a ambos jueces: sin faltas conocidas, y Evans aporta experiencia en derechos civiles.",
    why: [
      "Kelli M. Evans (appointed 2022) is a former Alameda County judge with a background in civil-rights law and public defense.",
      "Joshua Groban (appointed 2018) is a former policy adviser to Gov. Jerry Brown with antitrust and intellectual-property practice.",
      "Neither faces an organized opposition campaign or any public finding of misconduct. Voters have removed justices only once, in 1986."
    ],
    cands: [
      { n: "YES (retain)", pick: true },
      { n: "NO (remove)", whyNot: "No documented reason to remove either justice." }
    ],
    src: [["CalMatters Voter Guide: Supreme Court", "https://calmatters.org/california-voter-guide-2026/supreme-court/"], ["SOS Certified List of Candidates", "https://elections.cdn.sos.ca.gov/statewide-elections/2026-general/cert-list-candidates.pdf"]]
  },
  {
    id: "appeal4", sec: "courts", scope: "county", counties: ["Riverside", "San Bernardino", "Orange", "San Diego", "Imperial", "Inyo"],
    title: "Court of Appeal, Fourth District retention", sub: "15 justices: Bermudez, Castillo, Do, Rodriguez, Rubin, Dato, Kelety, Lee, Raphael, Motoike, Scott, Macaulay, Gooding, Delaney, Servino",
    pick: "YES on all", pickType: "added", depth: "limited",
    quick: "Routine retention votes with no organized opposition. Keep them all.",
    quick_es: "Votos rutinarios de retención sin oposición organizada; mantener a todos.",
    why: [
      "Appellate justices were confirmed by the state's judicial appointments commission before taking the bench.",
      "No organized campaign or public misconduct finding against any of these 15 justices turned up in research.",
      "Division Two covers Riverside and San Bernardino counties (Justices Corey G. Lee and Michael J. Raphael are on this ballot)."
    ],
    cands: [
      { n: "YES (retain)", pick: true },
      { n: "NO (remove)", whyNot: "No documented reason to remove any of them." }
    ],
    src: [["SOS Certified List of Candidates (judicial pages)", "https://elections.cdn.sos.ca.gov/statewide-elections/2026-general/cert-list-candidates.pdf"]]
  },

  // ───────────────────────── U.S. HOUSE ─────────────────────────
  {
    id: "cd23", sec: "house", scope: "cd", n: 23, title: "U.S. House, District 23", sub: "High Desert and mountain communities",
    pick: "Tessa Lynn Hodge", pickType: "slate",
    quick: "Clinical social worker running to protect the health coverage her clients are losing.",
    quick_es: "Trabajadora social clínica que se postula para proteger la cobertura médica que sus clientes están perdiendo.",
    why: [
      "Licensed clinical social worker with nearly a decade serving foster children and students needing mental-health support, and a lifelong district resident.",
      "Entered the race after clients feared losing coverage because of the 2025 federal budget law's Medicaid cuts.",
      "Endorsed by the California Democratic Party and the Riverside County Democratic Party."
    ],
    cands: [
      { n: "Tessa Lynn Hodge", p: "Democratic", d: "Social Worker/Businesswoman", pick: true },
      { n: "Jay Obernolte", p: "Republican", d: "Congressman/Business Owner", inc: true, about: "Incumbent since 2021. Video-game developer, former Assemblymember and Big Bear Lake mayor, and a leading House voice on artificial intelligence policy.", whyNot: "Thoughtful on technology, but he voted with House leadership for the 2025 budget law that cut Medicaid, which many High Desert families rely on." }
    ],
    src: [["BakersfieldNow: Hodge profile", "https://bakersfieldnow.com/news/local/california-congressional-candidate-tessa-lynn-hodge-aims-to-flip-23rd-district"]]
  },
  {
    id: "cd25", sec: "house", scope: "cd", n: 25, title: "U.S. House, District 25", sub: "Coachella Valley, eastern Riverside and Imperial counties",
    pick: "Raul Ruiz", pickType: "slate",
    quick: "ER doctor and congressman fighting tariffs and costs, and pushing for oversight of immigration enforcement.",
    quick_es: "Médico de urgencias y congresista que combate aranceles y costos, y pide supervisión de la aplicación migratoria.",
    why: [
      "Emergency physician who has made health access for rural and working families his signature issue.",
      "Pushes back on federal tariffs that raise prices for Coachella Valley families and farms.",
      "Calls for accountability and oversight of immigration enforcement."
    ],
    cands: [
      { n: "Raul Ruiz", p: "Democratic", d: "Emergency Physician/Congressman", inc: true, pick: true },
      { n: "Joe Males", p: "Republican", d: "Mayor Pro Tem", about: "Marine veteran and local official. Wants lower gas taxes, fewer regulations and stronger border enforcement.", whyNot: "His cost-of-living focus is right, but his agenda follows the federal majority that cut health coverage many district families depend on." }
    ],
    src: [["NBC Palm Springs: CD-25 issues", "https://www.nbcpalmsprings.com/2026/05/15/candidates-lay-out-key-issues-in-californias-25th-congressional-district-race"]]
  },
  {
    id: "cd28", sec: "house", scope: "cd", n: 28, title: "U.S. House, District 28", sub: "San Gabriel Valley and foothill communities",
    pick: "Judy Chu", pickType: "slate",
    quick: "Senior congresswoman with long leadership on health, small business and civil rights.",
    quick_es: "Congresista con años de liderazgo en salud, pequeños negocios y derechos civiles.",
    why: [
      "Senior member of Congress and the first Chinese American woman elected to it, with a long record on civil rights and coalition-building across communities of color.",
      "Seniority on key committees brings federal dollars and influence to the district."
    ],
    cands: [
      { n: "Judy Chu", p: "Democratic", d: "United States Representative", inc: true, pick: true },
      { n: "April A. Verlato", p: "Republican", d: "Small Business Owner", about: "Small business owner and Republican nominee.", whyNot: "Little public record, and would join the majority that cut Medicaid." }
    ],
    depth: "limited",
    src: [["SOS Certified List of Candidates", "https://elections.cdn.sos.ca.gov/statewide-elections/2026-general/cert-list-candidates.pdf"]]
  },
  {
    id: "cd31", sec: "house", scope: "cd", n: 31, title: "U.S. House, District 31", sub: "San Gabriel Valley",
    pick: "Gil Cisneros", pickType: "slate",
    quick: "Navy veteran and former Pentagon personnel chief. Focused on veterans and working families.",
    quick_es: "Veterano de la Marina y exjefe de personal del Pentágono; enfocado en veteranos y familias trabajadoras.",
    why: [
      "Navy veteran who served as Under Secretary of Defense for Personnel and Readiness, overseeing pay and benefits for service members and their families.",
      "Supports protecting health coverage and middle-class tax relief."
    ],
    cands: [
      { n: "Gil Cisneros", p: "Democratic", d: "U.S. Congressman", inc: true, pick: true },
      { n: "Eric Ching", p: "Republican", d: "Entrepreneur", about: "Entrepreneur and Republican nominee.", whyNot: "Would join the House majority that cut Medicaid." }
    ],
    depth: "limited",
    src: [["SOS Certified List of Candidates", "https://elections.cdn.sos.ca.gov/statewide-elections/2026-general/cert-list-candidates.pdf"]]
  },
  {
    id: "cd33", sec: "house", scope: "cd", n: 33, title: "U.S. House, District 33", sub: "San Bernardino, Rialto, Fontana, Colton, Redlands area",
    pick: "Pete Aguilar", pickType: "slate",
    quick: "House Democratic Caucus Chair. The Inland Empire's most powerful voice in Congress.",
    quick_es: "Presidente del Caucus Demócrata de la Cámara; la voz más poderosa del Inland Empire en el Congreso.",
    why: [
      "Chair of the House Democratic Caucus since 2023, the highest-ranking member of Congress from the Inland Empire.",
      "Former Redlands mayor with a record of bringing federal money home for transportation, water and veterans.",
      "Endorsed by the Riverside County Democratic Party."
    ],
    cands: [
      { n: "Pete Aguilar", p: "Democratic", d: "United States Representative", inc: true, pick: true },
      { n: "Stephanie M. Vargas", p: "Republican", d: "Chief Deputy Clerk", about: "Chief Deputy City Clerk for the City of Colton, with experience in municipal administration and elections.", whyNot: "Local government experience, but replacing a caucus chair would cost the region significant clout." }
    ],
    src: [["Ballotpedia: CD-33 2026", "https://ballotpedia.org/California's_33rd_Congressional_District_election,_2026"]]
  },
  {
    id: "cd35", sec: "house", scope: "cd", n: 35, title: "U.S. House, District 35", sub: "Ontario, Pomona, Chino, parts of Fontana and Rancho Cucamonga",
    pick: "Norma J. Torres", pickType: "slate",
    quick: "Former 911 dispatcher turned appropriator who brings money home for public safety and infrastructure.",
    quick_es: "Exoperadora del 911 que ahora asigna fondos federales para seguridad pública e infraestructura.",
    why: [
      "In Congress since 2015 and a member of the Appropriations Committee, which decides federal spending.",
      "Former 911 dispatcher with a steady focus on public safety and community projects.",
      "Beat the same opponent in 2024."
    ],
    cands: [
      { n: "Norma J. Torres", p: "Democratic", d: "U.S. Representative", inc: true, pick: true },
      { n: "Mike Cargile", p: "Republican", d: "Small Businessman", about: "Small businessman and repeat Republican nominee, who lost to Torres in 2024.", whyNot: "No record in office, and would join the majority that cut Medicaid." }
    ],
    src: [["Ballotpedia: CD-35 2026", "https://ballotpedia.org/California's_35th_Congressional_District_election,_2026"]]
  },
  {
    id: "cd39", sec: "house", scope: "cd", n: 39, title: "U.S. House, District 39", sub: "Riverside, Moreno Valley, Perris, Jurupa Valley area",
    pick: "Mark Takano", pickType: "slate",
    quick: "Former teacher and top Democrat on Veterans' Affairs. A steady voice for Riverside and Moreno Valley.",
    quick_es: "Exmaestro y principal demócrata en Asuntos de Veteranos; voz constante por Riverside y Moreno Valley.",
    why: [
      "In Congress since 2013, a former public school teacher and a leader on veterans' benefits for the region's large military and veteran population.",
      "Backs protecting health coverage and public education.",
      "Endorsed by the Riverside County Democratic Party."
    ],
    cands: [
      { n: "Mark Takano", p: "Democratic", d: "U.S. Congressman", inc: true, pick: true },
      { n: "Steve Manos", p: "Republican", d: "Mayor/Business Owner", about: "Lake Elsinore councilmember and mayor since 2012 and a business owner. Endorsed by the California Republican Party.", whyNot: "Solid local experience, but he would join the majority that cut Medicaid and the federal support many district families rely on." }
    ],
    src: [["Ballotpedia: CD-39 2026", "https://ballotpedia.org/California's_39th_Congressional_District_election,_2026"]]
  },
  {
    id: "cd40", sec: "house", scope: "cd", n: 40, title: "U.S. House, District 40", sub: "Western and southwestern Riverside County (Corona, Temecula area)",
    pick: "Young Kim", pickType: "filled",
    quick: "Two Republicans. Kim is the more moderate, independent-minded choice who has backed DACA protections.",
    quick_es: "Dos republicanos; Kim es la opción más moderada e independiente, que ha apoyado protecciones de DACA.",
    note: "Redistricting put two Republican incumbents in one seat, so there is no Democrat on the ballot. This guide picks the candidate closer to its priorities.",
    why: [
      "Kim has positioned herself as a moderate. She has backed a path to citizenship for DACA recipients and has split with President Trump at times, which Calvert attacks her for.",
      "Calvert is running as the most loyal Trump ally in the race and calls Kim insufficiently conservative on immigration.",
      "Both voted for the 2025 budget law that cut Medicaid, so neither is ideal. Kim is more likely to be persuadable on issues affecting our families.",
      "She is a Korean American immigrant herself."
    ],
    cands: [
      { n: "Young Kim", p: "Republican", d: "United States Representative, 40th District", inc: true, pick: true },
      { n: "Ken Calvert", p: "Republican", d: "U.S. Representative", inc: true, about: "In Congress since 1993 and a senior appropriator on defense spending. Endorsed by the Riverside County Republican Party. Led the June primary.", whyNot: "His long seniority helps the region's defense and infrastructure funding. But his campaign centers on hardline Trump loyalty and immigration, and he voted for the Medicaid cuts." }
    ],
    src: [["ABC7: Calvert and Kim fight over Trump loyalty", "https://abc7.com/post/rep-ken-calvert-young-kim-gop-house-rivals-grapple-nasty-fight-trump-loyalty/19151335/"], ["NBC News: GOP incumbents face off", "https://www.nbcnews.com/politics/2026-election/redistricting-pits-california-republican-incumbents-fight-survival-rcna343938"], ["CalMatters: U.S. House races", "https://calmatters.org/california-voter-guide-2026/us-house/"]]
  },
  {
    id: "cd48", sec: "house", scope: "cd", n: 48, title: "U.S. House, District 48", sub: "East and North San Diego County plus Palm Springs area",
    pick: "Marni von Wilpert", pickType: "slate",
    quick: "A toss-up that could decide control of Congress. Von Wilpert fights for health care and voting rights.",
    quick_es: "Contienda reñida que podría decidir el control del Congreso; von Wilpert lucha por la salud y el derecho al voto.",
    why: [
      "San Diego councilmember who flipped a historically Republican council district.",
      "Priorities include health care, voting rights, food assistance and workers' rights.",
      "Polls show a neck-and-neck race, so each vote here carries extra weight."
    ],
    cands: [
      { n: "Marni von Wilpert", p: "Democratic", d: "Councilwoman/Health Advocate", pick: true },
      { n: "Jim Desmond", p: "Republican", d: "San Diego County Supervisor", about: "San Diego County supervisor and former San Marcos mayor, endorsed by President Trump. Has a large fundraising lead.", whyNot: "Experienced local leader, but Trump-endorsed and aligned with the federal majority's health and voting policies." }
    ],
    src: [["KPBS: CD-48 poll", "https://www.kpbs.org/news/politics/2026/07/29/new-poll-reveals-neck-and-neck-race-for-californias-48th-congressional-seat"], ["CalMatters: U.S. House races", "https://calmatters.org/california-voter-guide-2026/us-house/"]]
  },

  // ───────────────────────── STATE SENATE ─────────────────────────
  {
    id: "sd18", sec: "senate", scope: "sd", n: 18, title: "State Senate, District 18", sub: "Imperial County, southern San Diego County, parts of Riverside and San Bernardino",
    pick: "Steve Padilla", pickType: "slate",
    quick: "Former police detective and Chula Vista mayor. Focused on voting rights, workers and border-region jobs.",
    quick_es: "Exdetective de policía y exalcalde de Chula Vista; enfocado en derechos de voto, trabajadores y empleos en la frontera.",
    why: [
      "Former police officer and detective who became Chula Vista's mayor, bringing both public-safety and local-government experience.",
      "Legislative focus on voting rights, immigration reform, workers' rights and green-economy jobs for the border region."
    ],
    cands: [
      { n: "Steve Padilla", p: "Democratic", d: "California State Senator", inc: true, pick: true },
      { n: "Art Hodges", p: "Republican", d: "CEO/Educator/Pastor", about: "Retired pastor focused on poverty, affordable housing and the Tijuana sewage crisis.", whyNot: "He raises real issues, but has no record in office to show how he would deliver." }
    ],
    src: [["NBC Palm Springs: SD-18 race", "https://www.nbcpalmsprings.com/2026/05/15/retired-pastor-challenges-incumbent-for-californias-18th-state-senate-district-seat"]]
  },
  {
    id: "sd22", sec: "senate", scope: "sd", n: 22, title: "State Senate, District 22", sub: "San Gabriel Valley",
    pick: "Susan Rubio", pickType: "slate",
    quick: "Teacher and incumbent senator, known for laws protecting domestic-violence survivors.",
    quick_es: "Maestra y senadora en funciones, conocida por leyes que protegen a sobrevivientes de violencia doméstica.",
    why: [
      "Former teacher and Baldwin Park councilmember, known in Sacramento for laws protecting survivors of domestic violence.",
      "A pragmatic Democrat who works with business and labor."
    ],
    cands: [
      { n: "Susan Rubio", p: "Democratic", d: "State Senator/Teacher", inc: true, pick: true },
      { n: "Mike Netter", p: "Republican", d: "Small Business Owner", about: "San Gabriel Valley business owner who helped lead the 2021 effort to recall Gov. Newsom.", whyNot: "Known mainly for the recall campaign, not for a local policy record." }
    ],
    src: [["Ballotpedia: SD-22", "https://ballotpedia.org/California_State_Senate_District_22"]]
  },
  {
    id: "sd32", sec: "senate", scope: "sd", n: 32, title: "State Senate, District 32", sub: "Southwest Riverside County and inland North San Diego County",
    pick: "Tiffanie Tate", pickType: "slate",
    quick: "Retired Navy officer and OB-GYN running to expand affordable health care.",
    quick_es: "Oficial retirada de la Marina y ginecóloga que busca ampliar la atención médica asequible.",
    why: [
      "Retired U.S. Navy officer, former obstetrician-gynecologist, author and ordained minister, a rare mix of service, medicine and faith leadership.",
      "Her campaign centers on affordable health care. Black mothers face much higher maternal death rates, and an OB-GYN in the Senate would bring direct expertise.",
      "Endorsed by the Riverside County Democratic Party."
    ],
    cands: [
      { n: "Tiffanie Tate", p: "Democratic", d: "Doctor/Educator/Author", pick: true },
      { n: "Kelly Seyarto", p: "Republican", d: "State Senator", inc: true, about: "Incumbent senator, former Assemblymember and former Murrieta mayor. Focuses on government efficiency and oversight and supports mental-health and child-care programs.", whyNot: "A workable local legislator, but he has opposed some requirements for health plans to cover more services, which cuts against the lens's health-care priority." }
    ],
    src: [["KPBS: SD-32 explainer", "https://www.kpbs.org/news/politics/2026/04/27/2026-primary-election-california-senate-races-explainer-district-32-anza-borrego-districts-38-40-in-north-county"], ["Ballotpedia: Tiffanie Tate", "https://ballotpedia.org/Tiffanie_Tate"]]
  },

  // ───────────────────────── STATE ASSEMBLY ─────────────────────────
  {
    id: "ad34", sec: "assembly", scope: "ad", n: 34, title: "State Assembly, District 34", sub: "High Desert, Big Bear, Antelope Valley",
    pick: "Randall Putz", pickType: "slate",
    quick: "Big Bear Lake mayor with 18 years in office. A bridge-builder who left the GOP.",
    quick_es: "Alcalde de Big Bear Lake con 18 años en el cargo; un conciliador que dejó el Partido Republicano.",
    why: [
      "Eighteen years in local office, including Mayor of Big Bear Lake.",
      "A former Republican who became a Democrat, promising a bipartisan approach in a district that crosses party lines.",
      "Led the June primary with about 39%."
    ],
    cands: [
      { n: "Randall Putz", p: "Democratic", d: "Mayor/Business Owner", pick: true },
      { n: "Charles Frederick Hughes", p: "Republican", d: "Small Business Owner", about: "Navy veteran, retired law-enforcement officer and small business owner from the Antelope Valley.", whyNot: "A respectable record of service, but no elected experience, and his agenda follows the Republican caucus." }
    ],
    src: [["Big Bear Grizzly: primary results", "https://www.bigbeargrizzly.net/news/big-bear-lake-mayor-leads-state-assembly-race/article_300840b0-0605-474b-8bc7-933aeffa74fe.html"], ["SBC Sentinel on Putz", "https://sbcsentinel.com/2025/08/screaming-cicada/"]]
  },
  {
    id: "ad36", sec: "assembly", scope: "ad", n: 36, title: "State Assembly, District 36", sub: "Imperial County, eastern Coachella Valley (Indio, Coachella)",
    pick: "Ida S. Obeso-Martinez", pickType: "slate",
    quick: "Mayor and nurse working to win back a working-class Latino seat for health-care and family priorities.",
    quick_es: "Alcaldesa y enfermera que busca recuperar un distrito latino trabajador con prioridades de salud y familia.",
    why: [
      "Nurse and mayor with hands-on experience in both health care and local government.",
      "The district is majority Latino and mostly working class. She would align its seat with health-care and labor priorities.",
      "Endorsed by the Riverside County Democratic Party."
    ],
    cands: [
      { n: "Ida S. Obeso-Martinez", p: "Democratic", d: "Mayor/Nurse", pick: true },
      { n: "Jeff Gonzalez", p: "Republican", d: "Assemblymember/Father", inc: true, about: "Incumbent Republican who flipped the seat in 2024. He has raised about five times more money.", whyNot: "Has local appeal, but he votes with the Republican caucus against health-care and worker protections the district relies on." }
    ],
    src: [["CalMatters: Assembly races", "https://calmatters.org/california-voter-guide-2026/state-assembly/"]]
  },
  {
    id: "ad39", sec: "assembly", scope: "ad", n: 39, title: "State Assembly, District 39", sub: "Antelope Valley",
    pick: "Juan Carrillo", pickType: "slate",
    quick: "Incumbent Assemblymember with a steady record on local jobs and services.",
    quick_es: "Asambleísta en funciones con historial constante en empleos y servicios locales.",
    why: ["Incumbent with an established record. Keeping experienced members preserves the district's influence in Sacramento."],
    cands: [
      { n: "Juan Carrillo", p: "Democratic", d: "State Assemblymember", inc: true, pick: true },
      { n: "Paul Andre Marsh", p: "Republican", d: "Community Services Liaison", about: "Community services liaison and Republican nominee.", whyNot: "Little public record." }
    ],
    depth: "limited",
    src: [["SOS Certified List of Candidates", "https://elections.cdn.sos.ca.gov/statewide-elections/2026-general/cert-list-candidates.pdf"]]
  },
  {
    id: "ad41", sec: "assembly", scope: "ad", n: 41, title: "State Assembly, District 41", sub: "Pasadena and foothill communities through Upland",
    pick: "John Harabedian", pickType: "slate",
    quick: "Incumbent focused on wildfire recovery and rebuilding after the Eaton Fire.",
    quick_es: "Asambleísta en funciones enfocado en la recuperación tras el incendio Eaton.",
    why: ["Former Sierra Madre mayor. Represents Altadena, a historically Black community devastated by the 2025 Eaton Fire, and has worked on rebuilding and insurance relief."],
    cands: [
      { n: "John Harabedian", p: "Democratic", d: "California State Assemblymember", inc: true, pick: true },
      { n: "Adam Christopher Vena", p: "Republican", d: "Father/Sanitation Employee", about: "Sanitation employee and Republican nominee.", whyNot: "Little public record." }
    ],
    depth: "limited",
    src: [["SOS Certified List of Candidates", "https://elections.cdn.sos.ca.gov/statewide-elections/2026-general/cert-list-candidates.pdf"]]
  },
  {
    id: "ad45", sec: "assembly", scope: "ad", n: 45, title: "State Assembly, District 45", sub: "San Bernardino, Highland, Rialto, Colton area",
    pick: "James C. Ramos", pickType: "slate",
    quick: "First California Native American in the Legislature, with a strong record for the San Bernardino area.",
    quick_es: "Primer nativo americano de California en la Legislatura, con buen historial para el área de San Bernardino.",
    why: [
      "Former chairman of the San Manuel Band of Mission Indians and a former San Bernardino County supervisor. He knows the region's needs well.",
      "Has championed mental-health services, missing and murdered Indigenous people, and local economic development."
    ],
    cands: [
      { n: "James C. Ramos", p: "Democratic", d: "Assemblymember/Business Owner", inc: true, pick: true },
      { n: "Greg Abdouch", p: "Republican", d: "Small Business Owner", about: "Small business owner and Republican nominee.", whyNot: "Little public record." }
    ],
    src: [["SOS Certified List of Candidates", "https://elections.cdn.sos.ca.gov/statewide-elections/2026-general/cert-list-candidates.pdf"]]
  },
  {
    id: "ad47", sec: "assembly", scope: "ad", n: 47, title: "State Assembly, District 47", sub: "Palm Springs, Cathedral City to Yucaipa and Redlands",
    pick: "Leila Namvar", pickType: "slate",
    quick: "Former labor leader and city planner in one of the state's most competitive seats.",
    quick_es: "Exlíder sindical y urbanista en uno de los distritos más competidos del estado.",
    why: [
      "Background as a labor leader and city planner, a practical mix for housing and good-paying jobs.",
      "A true swing seat (D 39% / R 34%) that the incumbent won by just 85 votes in 2022, so every vote matters.",
      "Endorsed by the California Labor Federation, SEIU California and the Riverside County Democratic Party."
    ],
    cands: [
      { n: "Leila Namvar", p: "Democratic", d: "Civil Servant/Mom", pick: true },
      { n: "Greg Wallis", p: "Republican", d: "Member of the State Assembly", inc: true, about: "Incumbent since 2022, backed by police chiefs, the correctional officers' union and other law-enforcement groups.", whyNot: "Strong on law-enforcement support, but he votes with the Republican caucus on health care and worker issues." }
    ],
    src: [["CalMatters: Assembly races", "https://calmatters.org/california-voter-guide-2026/state-assembly/"]]
  },
  {
    id: "ad50", sec: "assembly", scope: "ad", n: 50, title: "State Assembly, District 50", sub: "Rancho Cucamonga, Fontana, Ontario area",
    pick: "Robert Garcia", pickType: "slate",
    quick: "Incumbent Assemblymember and educator.",
    quick_es: "Asambleísta en funciones y educador.",
    why: ["Incumbent and educator. Keeping him preserves the district's seniority in Sacramento."],
    cands: [
      { n: "Robert Garcia", p: "Democratic", d: "State Assemblymember/Educator", inc: true, pick: true },
      { n: "Victoria Viveros Mageno", p: "Republican", d: "Cucamonga School District Board Member", about: "Cucamonga School District board member (Area 1).", whyNot: "School-board experience, but her agenda follows the Republican caucus." }
    ],
    depth: "limited",
    src: [["Ballotpedia: AD-50", "https://ballotpedia.org/California_State_Assembly_District_50"]]
  },
  {
    id: "ad53", sec: "assembly", scope: "ad", n: 53, title: "State Assembly, District 53", sub: "Pomona, Ontario, Montclair area",
    pick: "Michelle Rodriguez", pickType: "slate",
    quick: "First-term incumbent building a record on working families.",
    quick_es: "Asambleísta en su primer periodo, construyendo historial a favor de familias trabajadoras.",
    why: ["Incumbent since December 2024, aligned with the lens on health care and working-family priorities."],
    cands: [
      { n: "Michelle Rodriguez", p: "Democratic", d: "Assemblymember/Mom", inc: true, pick: true },
      { n: "Rafaela Romero", p: "Republican", d: "Special Education Aide", about: "Special-education aide and Republican nominee.", whyNot: "Little public record." }
    ],
    depth: "limited",
    src: [["Ballotpedia: AD-53", "https://ballotpedia.org/California_State_Assembly_District_53"]]
  },
  {
    id: "ad58", sec: "assembly", scope: "ad", n: 58, title: "State Assembly, District 58", sub: "Parts of Riverside city, Jurupa Valley, Eastvale, Rialto/Fontana area",
    pick: "Clarissa Cervantes", pickType: "slate",
    quick: "Riverside councilmember and businesswoman who led the June primary 55% to 45%.",
    quick_es: "Concejal de Riverside y empresaria que ganó la primaria de junio 55% a 45%.",
    why: [
      "Riverside City Councilmember and businesswoman with local experience on housing and public safety.",
      "Led the June primary 55% to 45% in a rematch of the 2024 race she lost by 596 votes.",
      "Endorsed by the California Democratic Party, the Labor Federation and the Riverside County Democratic Party."
    ],
    cands: [
      { n: "Clarissa Cervantes", p: "Democratic", d: "Councilmember/Businesswoman/Mother", pick: true },
      { n: "Leticia Castillo", p: "Republican", d: "Assemblywoman/Licensed Psychotherapist", inc: true, about: "Incumbent Republican and licensed psychotherapist who flipped the seat in 2024. Notably endorsed by the California Professional Firefighters.", whyNot: "Has crossover support from firefighters, but she votes with the Republican caucus on health care and voting issues." }
    ],
    src: [["CalMatters: Assembly races", "https://calmatters.org/california-voter-guide-2026/state-assembly/"]]
  },
  {
    id: "ad59", sec: "assembly", scope: "ad", n: 59, title: "State Assembly, District 59", sub: "Chino, Chino Hills and north Orange County",
    pick: "Victor Hernandez", pickType: "filled", impact: "low",
    quick: "Low-impact race. Hernandez is closer to the lens on health care and voting, though the incumbent is heavily favored.",
    quick_es: "Contienda de bajo impacto: Hernandez está más cerca en salud y voto, aunque el titular es gran favorito.",
    note: "No Democrat made the November ballot, so the choice is between a Republican incumbent and a Green Party candidate. This guide makes a pick based on its priorities but marks it low impact.",
    why: [
      "Hernandez's positions are closer to the lens on health coverage, voting access and working-family costs.",
      "The criminal-justice group Initiate Justice Action recommends him, citing the incumbent's voting record.",
      "Chen is very likely to win, so this vote mainly signals priorities."
    ],
    cands: [
      { n: "Victor Hernandez", p: "Green", d: "Account Sales Manager", pick: true },
      { n: "Phillip Chen", p: "Republican", d: "Assemblyman/Business Owner", inc: true, about: "Incumbent since 2016 and a business owner. A mainstream Republican.", whyNot: "Experienced and relatively pragmatic, but he votes with his caucus against the lens's health-care and voting priorities. If you prefer experience and a seat at the table, a vote for Chen is reasonable here." }
    ],
    src: [["Ballotpedia: AD-59", "https://ballotpedia.org/California_State_Assembly_District_59"], ["Initiate Justice Action: AD-59", "https://ijaction.org/ad-59-2026/"]]
  },
  {
    id: "ad60", sec: "assembly", scope: "ad", n: 60, title: "State Assembly, District 60", sub: "Moreno Valley, Perris, parts of Riverside",
    pick: "Corey A. Jackson", pickType: "slate",
    quick: "Social worker and incumbent. A leading Black voice in Sacramento for Moreno Valley and Perris.",
    quick_es: "Trabajador social y asambleísta en funciones; una voz afroamericana destacada en Sacramento por Moreno Valley y Perris.",
    why: [
      "Social worker with a doctorate and a former Riverside County Board of Education trustee. First elected in 2022 with 54%.",
      "An active member of the Legislative Black Caucus, working on mental health, foster youth and equity.",
      "Endorsed by the Riverside County Democratic Party. He has raised about five times more than his opponent."
    ],
    cands: [
      { n: "Corey A. Jackson", p: "Democratic", d: "State Assembly Member", inc: true, pick: true },
      { n: "Ed Delgado", p: "Republican", d: "City Council Member", about: "City councilmember whose campaign is largely funded by law-enforcement donors.", whyNot: "Local experience, but he would replace a proven advocate for the district's Black and Latino families with a vote for the Republican caucus." }
    ],
    src: [["Ballotpedia: Corey Jackson", "https://ballotpedia.org/Corey_Jackson"]]
  },
  {
    id: "ad63", sec: "assembly", scope: "ad", n: 63, title: "State Assembly, District 63", sub: "Lake Elsinore, Menifee, Canyon Lake, Corona area",
    pick: "Kevin Akin", pickType: "filled", impact: "low",
    quick: "Low-impact race. Akin is closer to the lens on health care and workers; the incumbent is heavily favored.",
    quick_es: "Contienda de bajo impacto: Akin está más cerca en salud y trabajadores; la titular es gran favorita.",
    note: "No Democrat is on the November ballot. Akin reached the general election as a write-in. This guide makes a pick based on its priorities but marks it low impact.",
    why: [
      "Akin, a Western Riverside County native and former carpenter, steelworker and union member, campaigns on affordable housing, child care, universal health care and refusing corporate money.",
      "Johnson opposed California's sanctuary law (SB 54) as a Lake Elsinore councilmember and votes with the Republican caucus.",
      "Johnson won 99% of the primary vote against write-ins, so this vote mainly signals priorities."
    ],
    cands: [
      { n: "Kevin Akin", p: "Peace and Freedom", d: "No Ballot Designation", pick: true },
      { n: "Natasha Johnson", p: "Republican", d: "Assemblywoman/Business Owner", inc: true, about: "Incumbent since a September 2025 special election. Lake Elsinore councilmember for 13 years (three terms as mayor) and a former Navy Federal Credit Union finance professional.", whyNot: "Deep local experience and a business-minded approach that some voters will prefer. But her caucus votes run against the lens on health care and immigrant families. A vote for Johnson for her local record is reasonable." }
    ],
    src: [["Wikipedia: Natasha Johnson", "https://en.wikipedia.org/wiki/Natasha_Johnson"], ["Kevin Akin campaign", "https://kevinakin4california.org/"]]
  },
  {
    id: "ad71", sec: "assembly", scope: "ad", n: 71, title: "State Assembly, District 71", sub: "Southwest Riverside County and inland Orange County",
    pick: "JJ Galvez", pickType: "slate",
    quick: "Tech consultant and parks-district director challenging a Republican incumbent.",
    quick_es: "Consultor tecnológico y director de distrito de parques que reta a una titular republicana.",
    why: [
      "Works in technology and consulting and serves on the Silverado-Modjeska Recreation and Park District board.",
      "Endorsed by the Riverside County Democratic Party."
    ],
    cands: [
      { n: "JJ Galvez", p: "Democratic", d: "Appointed Director, Silverado-Modjeska Recreation and Park District", pick: true },
      { n: "Kate Sanchez", p: "Republican", d: "California State Assemblywoman", inc: true, about: "Republican Assemblywoman since December 2022.", whyNot: "She votes with the Republican caucus against health-care and voting-access priorities." }
    ],
    depth: "limited",
    src: [["Ballotpedia: JJ Galvez", "https://ballotpedia.org/JJ_Galvez"]]
  },

  // ───────────────────────── RIVERSIDE COUNTY ─────────────────────────
  {
    id: "rivA", sec: "riverside", scope: "county", counties: ["Riverside"], title: "Measure A (Riverside County)", sub: "Renew the half-cent transportation sales tax",
    pick: "YES", pickType: "added",
    quick: "Renews the existing road and transit tax at the same rate, with a new taxpayer oversight committee.",
    quick_es: "Renueva el impuesto existente para calles y transporte a la misma tasa, con un nuevo comité de supervisión.",
    what: {
      summary: "Renews Riverside County's half-cent transportation sales tax (first passed in 1988, renewed in 2002, now set to expire in 2039) at the same rate. It keeps money flowing to each part of the county for roads, freeways and transit, caps administrative salaries at 1%, requires independent audits and adds a seven-member taxpayer oversight committee.",
      yes: "The existing half-cent tax continues for road, freeway and transit projects.",
      no: "The tax still runs until 2039 but is not renewed beyond that.",
      fiscal: "About $11.8 billion over 30 years (through 2057) by an independent forecast. No increase in the tax rate."
    },
    why: [
      "It is a renewal, not a new tax. Families pay no more than they do today.",
      "Inland Empire commuters spend hours on the 91, 60 and 215. This money builds the lanes, interchanges and Metrolink service that shorten those trips.",
      "Stronger accountability than before: a new oversight committee, audits and a salary cap."
    ],
    other: [
      { n: "NO", about: "A no vote lets the tax expire as scheduled in 2039 and lowers the sales tax at that point.", whyNot: "Letting it lapse would leave the county's road and transit plans without their main local funding source and forfeit matching state and federal money." }
    ],
    src: [["RCTC: Measure A renewal", "https://citizenportal.ai/articles/9938018/california/riverside-county/rctc-votes-to-place-measure-a-renewal-on-november-ballot-adds-taxpayer-oversight-committee"], ["RCTC: Measure A", "https://www.rctc.org/measure-a/"]]
  },
  {
    id: "rivJudge10", sec: "riverside", scope: "county", counties: ["Riverside"], title: "Superior Court Judge, Seat 10 (Riverside County)",
    pick: "Andrea Garcia", pickType: "added",
    quick: "Deputy public defender who would bring defense-side balance to a bench dominated by former prosecutors.",
    quick_es: "Defensora pública que aportaría equilibrio a un tribunal dominado por exfiscales.",
    why: [
      "About 20 years as a deputy public defender, including immigration-related defense. She knows the system from the side of people who can't afford a lawyer.",
      "Black and Latino residents are overrepresented among people in court. Judges with defense experience help make sure every defendant gets a fair hearing.",
      "Endorsed by the Riverside County Democratic Party."
    ],
    cands: [
      { n: "Andrea Garcia", p: "", d: "Deputy Public Defender", pick: true },
      { n: "Michelle Paradise", p: "", d: "Assistant County Executive Officer / former Assistant District Attorney", about: "Over 20 years as a prosecutor, including seven as Assistant District Attorney, and now the county's public-safety executive. Known for prosecuting child-abuse cases. Endorsed by DA Mike Hestrin. Led the June primary 46% to 35%.", whyNot: "Highly experienced and respected, and a reasonable choice for voters who prioritize public safety. The pick favors balance on a bench that already has many former prosecutors." }
    ],
    src: [["Patch: Meet the judicial candidates", "https://patch.com/california/murrieta/meet-3-judicial-candidates-rivco-judge-upcoming-election"], ["NBC Palm Springs: primary results", "https://www.nbcpalmsprings.com/local-and-community/2026/06/03/paradise-leads-race-for-riverside-county-judicial-seat"]]
  },
  {
    id: "moval", sec: "riverside", scope: "local", geo: {"pl": ["Moreno Valley"]}, county: "Riverside", place: "Moreno Valley", title: "Mayor, City of Moreno Valley",
    pick: "Ulises Cabrera", pickType: "slate",
    quick: "Incumbent pushing for shelter beds, better-paying jobs and tougher environmental rules on warehouses.",
    quick_es: "Alcalde en funciones que impulsa albergues, mejores empleos y reglas ambientales más estrictas para bodegas.",
    why: [
      "Elected mayor in 2022, the youngest directly elected mayor in the city's history, after serving as a councilmember.",
      "Priorities include job training in EVs, clean energy and cybersecurity, higher-wage careers beyond warehouse work, and tougher environmental standards on logistics projects.",
      "Pushed to address homelessness in a city that had no shelter beds.",
      "Also endorsed by the Riverside County Democratic Party."
    ],
    cands: [
      { n: "Ulises Cabrera", d: "Incumbent mayor", inc: true, pick: true },
      { n: "Jaime Hurtado", about: "Candidate for mayor.", whyNot: "Less public record than the incumbent." },
      { n: "Dr. Patsy Brown", about: "Ran for mayor in 2024.", whyNot: "Less public record than the incumbent." },
      { n: "Christopher Baca", whyNot: "Little public information." },
      { n: "Rylee Joseph Peak", whyNot: "Little public information." },
      { n: "Vanessa Moore", whyNot: "Little public information." }
    ],
    note: "Six candidates qualified (City of Moreno Valley). The top vote-getter wins; there is no runoff.",
    src: [["City of Moreno Valley: 2026 election", "https://moval.gov/departments/city-clerk/2026-election.html"], ["IE Voice: Cabrera interview", "https://theievoice.com/the-interview-moreno-valley-city-councilmember-ulises-cabrera-why-im-running-for-mayor/"]]
  },
  {
    id: "perris3", sec: "riverside", scope: "local", geo: {"pl": ["Perris"]}, part: "District 3", county: "Riverside", place: "Perris", title: "City Council, District 3, City of Perris",
    pick: "David Starr Rabb", pickType: "slate", depth: "limited",
    quick: "Attorney and councilmember since 2014. Experience and continuity.",
    quick_es: "Abogado y concejal desde 2014; experiencia y continuidad.",
    why: [
      "Attorney who has represented District 3 since 2014.",
      "Also endorsed by the Riverside County Democratic Party."
    ],
    cands: [{ n: "David Starr Rabb", d: "Incumbent councilmember / attorney", inc: true, pick: true }],
    verify: "The Riverside County registrar's site could not be reached for the official list of opponents. Check your sample ballot for the other names in this race.",
    src: [["City of Perris: Councilmember Rabb", "https://www.cityofperris.org/Home/Components/StaffDirectory/StaffDirectory/8/182"]]
  },
  {
    id: "rivw2", sec: "riverside", scope: "local", geo: {"pl": ["Riverside"]}, part: "Ward 2", county: "Riverside", place: "Riverside (city)", title: "City Council, Ward 2, City of Riverside", sub: "Runoff",
    pick: "Gracie Torres", pickType: "slate",
    quick: "Water district director with the backing of the mayor, police and firefighters. Led the primary.",
    quick_es: "Directora del distrito de agua con respaldo de la alcaldesa, policías y bomberos; ganó la primaria.",
    why: [
      "Elected director of Western Municipal Water District, with experience on water rates and infrastructure that affect every household bill.",
      "Endorsed by Mayor Patricia Lock Dawson, three sitting councilmembers, retired Police Chief Sergio Diaz, county supervisors, and the police and firefighter associations.",
      "Finished first in the June primary (37%)."
    ],
    cands: [
      { n: "Gracie Torres", d: "Member, Board of Directors, Western Municipal Water District", pick: true },
      { n: "Aram Ayra", d: "Educator/City Commissioner", about: "Ward 2 representative on the city's Budget Engagement Commission. Endorsed by Superintendent Tony Thurmond, Assemblymember Sabrina Cervantes, Inland Empire United, the Riverside County Democratic Party, and the two other primary candidates. Supported the $20 million Homekey+ housing grant the council rejected.", whyNot: "A strong progressive choice, and supporting homeless housing has merit. The pick favors Torres's broader coalition, including public safety, and her record on household utility costs." }
    ],
    src: [["Raincross Gazette: Ward 2 runoff", "https://www.raincrossgazette.com/ward-2-primary-rivals-vahl-montero-endorse-aram-ayra-ahead-of-runoff/"], ["Riverside Record: primary results", "https://riversiderecord.org/riverside-council-candidates-june-election-early-returns/"]]
  },
  {
    id: "rivw4", sec: "riverside", scope: "local", geo: {"pl": ["Riverside"]}, part: "Ward 4", county: "Riverside", place: "Riverside (city)", title: "City Council, Ward 4, City of Riverside", sub: "Runoff",
    pick: "Rich Vandenberg", pickType: "slate",
    quick: "Riverside native pushing smarter growth and skeptical of large warehouse projects.",
    quick_es: "Nativo de Riverside que impulsa un crecimiento inteligente y cuestiona grandes proyectos de bodegas.",
    why: [
      "Financial professional, vice chair of the city's Budget Engagement Commission and chair of the Downtown Area Neighborhood Alliance.",
      "Raised concerns about large warehouse projects like the March Innovation Hub over traffic, pollution and low wages.",
      "Promises more responsive city hall and more neighborhood input. He reached the runoff despite being heavily outspent."
    ],
    cands: [
      { n: "Rich Vandenberg", d: "Financial Professional", pick: true },
      { n: "Chuck Conder", d: "Incumbent", inc: true, about: "Ward 4 councilmember since 2017. Led the June primary with about 48%.", whyNot: "Experienced, but after nine years a fresh approach to growth and responsiveness is warranted." }
    ],
    src: [["Raincross Gazette: Vandenberg platform", "https://www.raincrossgazette.com/rich-vandenberg-announces-bid-for-ward-4-city-council-seat/"], ["Riverside Record: primary results", "https://riversiderecord.org/riverside-council-candidates-june-election-early-returns/"]]
  },
  {
    id: "dhcd5", sec: "riverside", scope: "local", geo: {"pl": ["Palm Desert", "Indio", "Bermuda Dunes"]}, part: "Zone 5", county: "Riverside", place: "Desert Healthcare District (Palm Desert, Indio, Bermuda Dunes)", title: "Desert Healthcare District, Zone 5 (short term)",
    pick: "Anyse Smith", pickType: "slate", depth: "limited",
    quick: "Housing and legal-aid attorney for unhoused people, appointed unanimously in January 2026.",
    quick_es: "Abogada de vivienda y asistencia legal para personas sin hogar, nombrada por unanimidad en enero de 2026.",
    why: [
      "Attorney at Starting Over Inc., a nonprofit that provides housing and legal aid to people who are unhoused.",
      "Appointed unanimously by the district board in January 2026 to fill the seat after Director Arthur Shorr's death.",
      "Also endorsed by the Riverside County Democratic Party."
    ],
    cands: [{ n: "Anyse Smith", d: "Incumbent (appointed)", inc: true, pick: true }],
    verify: "The Riverside County registrar's site could not be reached for the official list of opponents. Check your sample ballot for the other names in this race.",
    src: [["Desert Healthcare District: Smith appointment", "https://www.dhcd.org/Desert-Healthcare-District-Board-Appoints-Palm-Desert-Attorney-Anyse-Smith-as-Zone-5-Director"]]
  },

  // ───────────────────────── SAN BERNARDINO COUNTY ─────────────────────────
  {
    id: "sbSupt", sec: "sanbernardino", scope: "county", counties: ["San Bernardino"], title: "County Superintendent of Schools (San Bernardino)",
    pick: "Cali Binks", pickType: "slate",
    quick: "Veteran district superintendent (Yucaipa-Calimesa, formerly Fontana) who led the primary.",
    quick_es: "Superintendente con experiencia (Yucaipa-Calimesa, antes Fontana) que ganó la primaria.",
    why: [
      "Current superintendent of Yucaipa-Calimesa Joint Unified and former superintendent of Fontana Unified. She has run large, diverse districts.",
      "Led the four-way primary with 37%."
    ],
    cands: [
      { n: "Cali Binks", d: "County Superintendent / Mother", pick: true },
      { n: "Alejandro \"Alex\" Vara", d: "Professor / Principal / Father", about: "Redlands Unified board member since 2016, professor and principal.", whyNot: "Solid education background, but less experience running a large school system." }
    ],
    src: [["Community Forward Redlands: Binks and Vara advance", "https://www.communityforwardredlands.com/binks-vara-advance-in-san-bernardino-county-schools-race/"]]
  },
  {
    id: "sbBoeB", sec: "sanbernardino", scope: "local", part: "Trustee Area B", county: "San Bernardino", place: "County Board of Education, Area B", title: "County Board of Education, Area B",
    pick: "Miki R. Inbody", pickType: "slate",
    quick: "Fontana Unified superintendent and 35-year educator who started in Head Start.",
    quick_es: "Superintendente de Fontana Unified y educadora por 35 años que empezó en Head Start.",
    why: [
      "Fontana Unified superintendent with 35 years in public education. She went from Head Start student to first-generation college graduate to superintendent.",
      "Also endorsed by the San Bernardino County Democratic Party."
    ],
    cands: [
      { n: "Miki R. Inbody", d: "District Superintendent", pick: true },
      { n: "Rita Fernandez-Loof", d: "Trustee / Engineer / Parent", inc: true, about: "Incumbent trustee, engineer and parent.", whyNot: "Has served on the board, but Inbody brings deep hands-on leadership of a large district." },
      { n: "Kimberly L. Watson", d: "Retired Educator", about: "Retired educator.", whyNot: "Less public record." }
    ],
    src: [["Inbody candidacy announcement", "https://natlawreview.com/press-releases/fontana-superintendent-miki-rene-inbody-announces-candidacy-san-bernardino"], ["SB County candidate list", "https://uploads.rov.sbcounty.gov/ROV/Elections/2026/1103/Report_CandidateList.pdf"]]
  },
  {
    id: "cjusd1", sec: "sanbernardino", scope: "local", geo: {"sch": ["Colton Joint Unified School District"]}, part: "Area 1", county: "San Bernardino", place: "Colton Joint Unified", title: "Colton Joint Unified School Board, Area 1",
    pick: "Israel Fuentes Jr.", pickType: "slate", depth: "limited",
    quick: "Incumbent trustee. Experience and continuity.",
    quick_es: "Miembro en funciones; experiencia y continuidad.",
    why: ["Incumbent trustee with board experience."],
    cands: [
      { n: "Israel Fuentes Jr.", d: "Incumbent", inc: true, pick: true },
      { n: "Fredy Martinez", d: "Sheriff Enforcement Specialist", whyNot: "Little public record." },
      { n: "Amanda M. Salazar", d: "Community Liaison", whyNot: "Little public record." },
      { n: "Sophia Castillo", d: "No ballot designation", whyNot: "Little public record." }
    ],
    src: [["SB County candidate list", "https://uploads.rov.sbcounty.gov/ROV/Elections/2026/1103/Report_CandidateList.pdf"]]
  },
  {
    id: "cjusd2", sec: "sanbernardino", scope: "local", geo: {"sch": ["Colton Joint Unified School District"]}, part: "Area 2", county: "San Bernardino", place: "Colton Joint Unified", title: "Colton Joint Unified School Board, Area 2", sub: "Vote for up to 2",
    pick: "Dan Flores", pickType: "slate", depth: "limited",
    quick: "Incumbent trustee. Experience and continuity.",
    quick_es: "Miembro en funciones; experiencia y continuidad.",
    note: "This seat elects two members. For your second vote, the other incumbent, Berenice Sandoval, offers continuity.",
    why: ["Incumbent trustee with board experience."],
    cands: [
      { n: "Dan Flores", d: "Incumbent", inc: true, pick: true },
      { n: "Berenice Sandoval", d: "Incumbent", inc: true, about: "Incumbent trustee.", whyNot: "A reasonable choice for your second vote." },
      { n: "Lisa Villa", d: "Retired Campus Security", whyNot: "Little public record." }
    ],
    src: [["SB County candidate list", "https://uploads.rov.sbcounty.gov/ROV/Elections/2026/1103/Report_CandidateList.pdf"]]
  },
  {
    id: "fusd1", sec: "sanbernardino", scope: "local", geo: {"sch": ["Fontana Unified School District"]}, part: "Area 1", county: "San Bernardino", place: "Fontana Unified", title: "Fontana Unified School Board, Area 1",
    pick: "Mars Serna", pickType: "slate", depth: "limited",
    quick: "Incumbent trustee during new school construction and district growth.",
    quick_es: "Miembro en funciones durante la construcción de nuevas escuelas y el crecimiento del distrito.",
    why: ["Incumbent Area 1 trustee, providing continuity as the district opens a new middle school."],
    cands: [
      { n: "Mars Serna", d: "Incumbent", inc: true, pick: true },
      { n: "Jacque Long", d: "Non-Profit Leader / Mother", about: "Nonprofit leader and parent.", whyNot: "Little public record compared with the incumbent." }
    ],
    src: [["SB County candidate list", "https://uploads.rov.sbcounty.gov/ROV/Elections/2026/1103/Report_CandidateList.pdf"]]
  },
  {
    id: "rusd5", sec: "sanbernardino", scope: "local", geo: {"sch": ["Rialto Unified School District"]}, part: "Area 5", county: "San Bernardino", place: "Rialto Unified", title: "Rialto Unified School Board, Area 5",
    pick: "Evelyn P. Dominguez", pickType: "filled", depth: "limited",
    quick: "Incumbent nurse and parent leader, the first Latina elected to the Rialto board.",
    quick_es: "Enfermera y líder de padres en funciones; primera latina elegida a la junta de Rialto.",
    note: "Public information is thin for all three candidates, so this is a low-confidence pick based on experience.",
    why: [
      "Elected in 2022 as the first Latina on the Rialto Unified board. A nurse and a parent leader at Boyd Elementary.",
      "A nurse's perspective on student health and a parent's view of the classroom fit the lens's priority on school quality."
    ],
    cands: [
      { n: "Evelyn P. Dominguez", d: "Parent / Nurse", inc: true, pick: true },
      { n: "Stephanie Lopez", d: "No ballot designation", about: "Endorsed by the San Bernardino County Democratic Party.", whyNot: "Has a party endorsement, but little public record. A reasonable alternative if you weigh that endorsement." },
      { n: "James M. Martinez", d: "Humane Peace Officer", whyNot: "Little public record." }
    ],
    src: [["Rialto USD: Board members", "https://www.rialto.k12.ca.us/our-board/meet-our-board"], ["SB County Democrats endorsements", "https://www.sanbernardinodemocrats.org/endorsements-nov-2026/"]]
  },
  {
    id: "sbcusd", sec: "sanbernardino", scope: "local", geo: {"sch": ["San Bernardino City Unified School District"]}, county: "San Bernardino", place: "San Bernardino City Unified", title: "San Bernardino City Unified School Board", sub: "Vote for up to 3",
    pick: "Danny Tillman, Abigail Medina, Mary Ellen Abilez Grande", pickType: "slate", depth: "limited",
    quick: "Re-elect the three incumbents for stability in a district that serves many Black and Latino students.",
    quick_es: "Reelegir a los tres miembros en funciones para dar estabilidad a un distrito con muchos estudiantes afroamericanos y latinos.",
    why: [
      "All three are incumbents, and stable leadership matters in one of the state's largest high-need districts.",
      "Returning incumbents know the district's budget, facilities and improvement plans."
    ],
    cands: [
      { n: "Danny Tillman", d: "Incumbent", inc: true, pick: true },
      { n: "Abigail Medina", d: "Incumbent", inc: true, pick: true },
      { n: "Mary Ellen Abilez Grande", d: "Incumbent", inc: true, pick: true },
      { n: "Lorna Di Davide", d: "Educator / Non-Profit Executive", about: "Educator and nonprofit executive.", whyNot: "Not chosen over the three incumbents. There are only three seats." }
    ],
    src: [["SB County candidate list", "https://uploads.rov.sbcounty.gov/ROV/Elections/2026/1103/Report_CandidateList.pdf"]]
  },
  {
    id: "snow4", sec: "sanbernardino", scope: "local", geo: {"sch": ["Snowline Joint Unified School District"]}, part: "Area 4", county: "San Bernardino", place: "Snowline Joint Unified (Phelan, Wrightwood)", title: "Snowline Joint Unified School Board, Area 4",
    pick: "Dr. Terrance L. Stone", pickType: "slate",
    quick: "Youth and community consultant with court and public-safety advisory experience.",
    quick_es: "Consultor de juventud y comunidad con experiencia asesorando tribunales y seguridad pública.",
    why: [
      "Runs a school and community consulting practice focused on youth-serving programs.",
      "Served as a gang consultant for San Bernardino Superior Court, trained with law enforcement on principled policing, and chaired committees in regional health systems. That background speaks to student safety and support."
    ],
    cands: [
      { n: "Dr. Terrance L. Stone", d: "School Consultant", pick: true },
      { n: "Marcus Hernandez", d: "Incumbent", inc: true, about: "Incumbent trustee, endorsed by the San Bernardino County Democratic Party.", whyNot: "A reasonable incumbent. Stone brings a specialized youth-safety and community perspective." }
    ],
    src: [["Executives Diary: Dr. Terrance Stone", "https://executivesdiary.com/2026/02/07/dr-terrance-stone/"], ["SB County Democrats endorsements", "https://www.sanbernardinodemocrats.org/endorsements-nov-2026/"]]
  },
  {
    id: "adelMayor", sec: "sanbernardino", scope: "local", geo: {"pl": ["Adelanto"]}, county: "San Bernardino", place: "Adelanto", title: "Mayor, City of Adelanto",
    pick: "Stevevonna Evans", pickType: "slate", depth: "limited",
    quick: "Sitting councilwoman offering new leadership at the top.",
    quick_es: "Concejal en funciones que ofrece nuevo liderazgo en la alcaldía.",
    why: ["Current Adelanto councilwoman, with council seat through 2028, so she brings working knowledge of city hall to the mayor's job."],
    cands: [
      { n: "Stevevonna Evans", d: "Councilwoman", pick: true },
      { n: "Gabriel Reyes", d: "Mayor / Business Owner", inc: true, about: "Incumbent mayor.", whyNot: "This guide favors a change in leadership." },
      { n: "Ronald Beard", d: "Customer Service Representative", whyNot: "Little public record." }
    ],
    src: [["SBC Sentinel: match-ups", "https://sbcsentinel.com/2026/08/more-clarity-on-november-mayoral-and-city-council-match-ups/"]]
  },
  {
    id: "adelCouncil", sec: "sanbernardino", scope: "local", geo: {"pl": ["Adelanto"]}, county: "San Bernardino", place: "Adelanto", title: "City Council, City of Adelanto", sub: "Vote for up to 2",
    pick: "Jayshawn Johnson", pickType: "slate", depth: "limited",
    quick: "Planning commissioner bringing a new voice to the council.",
    quick_es: "Comisionado de planificación que aporta una voz nueva al concejo.",
    note: "Two seats are open. Your second vote is optional.",
    why: ["Appointed planning commissioner with direct experience on the growth and development decisions the council makes."],
    cands: [
      { n: "Jayshawn Johnson", d: "Appointed Planning Commissioner", pick: true },
      { n: "Angelo Meza", d: "Councilmember / Manufacturing Supervisor", inc: true, whyNot: "Not this guide's pick." },
      { n: "Amanda Uptergrove", d: "Councilmember / Business Owner", inc: true, whyNot: "Not this guide's pick." }
    ],
    src: [["SB County candidate list", "https://uploads.rov.sbcounty.gov/ROV/Elections/2026/1103/Report_CandidateList.pdf"]]
  },
  {
    id: "coltonMayor", sec: "sanbernardino", scope: "local", geo: {"pl": ["Colton"]}, county: "San Bernardino", place: "Colton", title: "Mayor, City of Colton",
    pick: "John R. Echevarria", pickType: "slate",
    quick: "Councilmember and police officer with a people-first platform on safety and affordability.",
    quick_es: "Concejal y policía con una propuesta centrada en la gente: seguridad y costo de vida.",
    why: ["Colton councilmember and police officer running on public safety, affordability, small-business support and responsive service."],
    cands: [
      { n: "John R. Echevarria", d: "Councilmember / Police Officer", pick: true },
      { n: "Frank J. Navarro", d: "Mayor, City of Colton", inc: true, about: "Incumbent mayor.", whyNot: "This guide favors Echevarria's focus on safety and responsive service." }
    ],
    src: [["IECN: Echevarria launch", "https://iecn.com/councilman-john-echevarria-launches-colton-mayoral-bid/"]]
  },
  {
    id: "colton4", sec: "sanbernardino", scope: "local", geo: {"pl": ["Colton"]}, part: "District 4", county: "San Bernardino", place: "Colton", title: "City Council, District 4, City of Colton",
    pick: "Joseph Paulino", pickType: "slate",
    quick: "Retired school-district police chief with 32 years in law enforcement.",
    quick_es: "Jefe de policía escolar jubilado con 32 años en las fuerzas del orden.",
    why: ["32-year law-enforcement veteran and former chief of the San Bernardino City Unified School District police. Focused on public safety, new business and better city customer service."],
    cands: [
      { n: "Joseph Paulino", d: "Retired Police Chief", pick: true },
      { n: "Adrianna Escarcega", d: "Commissioner / Workforce Manager", whyNot: "Less public record." },
      { n: "Lawrence \"Larry\" Rivas", d: "No ballot designation", whyNot: "Little public record." }
    ],
    src: [["Inland Valley News: Paulino", "https://inlandvalleynews.com/coltons-next-councilman-supporters-rally-behind-joe-paulinos-run/"]]
  },
  {
    id: "fontanaMayor", sec: "sanbernardino", scope: "local", geo: {"pl": ["Fontana"]}, county: "San Bernardino", place: "Fontana", title: "Mayor, City of Fontana",
    pick: "Acquanetta Warren", pickType: "slate",
    quick: "Fontana's first Black and first woman mayor, bringing jobs and a new homeless navigation center.",
    quick_es: "Primera alcaldesa afroamericana y primera mujer alcaldesa de Fontana; trae empleos y un nuevo centro para personas sin hogar.",
    why: [
      "Mayor since 2010, Fontana's first Black mayor and first woman mayor, and undefeated in re-election.",
      "Grew the city's job and revenue base. She is also delivering a 200-bed homeless navigation center (opening early 2027) and a $30 million, 70-bed expansion of the Cedar House treatment center.",
      "A Republican who works across party lines at the local level."
    ],
    cands: [
      { n: "Acquanetta Warren", d: "Mayor of Fontana", inc: true, pick: true },
      { n: "Jocelyn \"Joz\" Sida", d: "Nonprofit Chapter Director", about: "Democratic socialist endorsed by Sen. Bernie Sanders. Kaiser High graduate and former Sierra Club San Gorgonio Chapter director. Criticizes warehouse growth, broken streets and thin parks and transit.", whyNot: "She raises real concerns about warehouse pollution. The state forced stricter warehouse rules on Fontana in 2022. But this guide values Warren's track record delivering jobs and services." },
      { n: "Mylinda Carrillo", d: "Community Outreach Volunteer", whyNot: "Little public record." },
      { n: "Nicholas Ortega", d: "Account Representative", whyNot: "Little public record." },
      { n: "Jackie Heredia", d: "Community Engagement Coordinator", whyNot: "Little public record." },
      { n: "Lourdes Goñi Garcia", d: "Music Director / Businesswoman", whyNot: "Little public record." },
      { n: "Sal Casillas", d: "Business Owner", whyNot: "Little public record." }
    ],
    src: [["Hoodline: Fontana mayor race", "https://hoodline.com/2026/09/bernie-backed-latina-challenges-fontana-s-longtime-black-republican-mayor/"]]
  },
  {
    id: "rcMayor", sec: "sanbernardino", scope: "local", geo: {"pl": ["Rancho Cucamonga"]}, county: "San Bernardino", place: "Rancho Cucamonga", title: "Mayor, City of Rancho Cucamonga",
    pick: "Lynne B. Kennedy", pickType: "slate",
    quick: "Twelve years on the council and a 40-year education career. Supports adding housing.",
    quick_es: "Doce años en el concejo y 40 años de carrera en educación; apoya más vivienda.",
    why: [
      "Mayor Pro Tem with 12 years on the city council and a 40-year career in education and public service.",
      "Has supported added housing density (including Etiwanda Heights), which opens the door for more families to afford to live in the city, though some neighbors object."
    ],
    cands: [
      { n: "Lynne B. Kennedy", d: "Mayor Pro Tem", pick: true },
      { n: "Oliver King", d: "Business Owner / Attorney", about: "Attorney and business owner endorsed by the San Bernardino County Democratic Party.", whyNot: "A credible alternative with a party endorsement. This guide prefers Kennedy's long council experience." },
      { n: "Marjorie Hamada", d: "Business Owner / Attorney", whyNot: "Less public record." },
      { n: "Jaskirat Sondh", d: "Businessman", whyNot: "Less public record." },
      { n: "Michael R. Perez", d: "Retired", whyNot: "Less public record." }
    ],
    src: [["City of Rancho Cucamonga: Kennedy", "https://www.cityofrc.us/directory/lynne-b-kennedy"], ["SB County Democrats endorsements", "https://www.sanbernardinodemocrats.org/endorsements-nov-2026/"]]
  },
  {
    id: "rc2", sec: "sanbernardino", scope: "local", geo: {"pl": ["Rancho Cucamonga"]}, part: "District 2", county: "San Bernardino", place: "Rancho Cucamonga", title: "City Council, District 2, City of Rancho Cucamonga",
    pick: "Dejonae Marie Shaw", pickType: "slate", depth: "limited",
    quick: "Licensed vocational nurse bringing a working-family, health-care perspective to the council.",
    quick_es: "Enfermera vocacional con perspectiva de familia trabajadora y salud para el concejo.",
    why: [
      "Licensed vocational nurse, a working professional's perspective on the council.",
      "Also endorsed by the San Bernardino County Democratic Party."
    ],
    cands: [
      { n: "Dejonae Marie Shaw", d: "Licensed Vocational Nurse", pick: true },
      { n: "Kristine Scott", d: "Rancho Cucamonga Councilmember", inc: true, whyNot: "Incumbent. This guide favors a new voice." },
      { n: "David VanGorden", d: "Retired Police Officer", whyNot: "Less public record." },
      { n: "Connie Velazquez", d: "Commercial Realtor", whyNot: "Less public record." }
    ],
    src: [["SB County Democrats endorsements", "https://www.sanbernardinodemocrats.org/endorsements-nov-2026/"]]
  },
  {
    id: "rialtoCouncil", sec: "sanbernardino", scope: "local", geo: {"pl": ["Rialto"]}, county: "San Bernardino", place: "Rialto", title: "City Council, City of Rialto", sub: "Vote for up to 2",
    pick: "Carl Mayfield", pickType: "slate", depth: "limited",
    quick: "Parole agent supervisor with public-safety experience.",
    quick_es: "Supervisor de agentes de libertad condicional con experiencia en seguridad pública.",
    note: "Two seats are open among nine candidates. If you want a second choice, the San Bernardino County Democratic Party endorsed Ana Gonzalez and Rafael Trujillo.",
    why: ["Parole agent supervisor, bringing experience in public safety and reentry, which helps people coming home succeed and keeps neighborhoods safer."],
    cands: [
      { n: "Carl Mayfield", d: "Parole Agent Supervisor", pick: true },
      { n: "Ed Scott", d: "Rialto City Councilman", inc: true, whyNot: "Not this guide's pick." },
      { n: "Edward Montoya Jr.", d: "Appointed Incumbent", inc: true, whyNot: "Not this guide's pick." },
      { n: "Ana Gonzalez", d: "Nonprofit Executive Director", about: "Endorsed by the SB County Democratic Party.", whyNot: "A reasonable second vote." },
      { n: "Rafael Trujillo", d: "Case Manager / Parent", about: "Endorsed by the SB County Democratic Party.", whyNot: "A reasonable second vote." },
      { n: "Edward J. Carrillo", d: "City Treasurer", whyNot: "Not this guide's pick." },
      { n: "Blanca Mondragon", d: "Community Advocate", whyNot: "Not this guide's pick." },
      { n: "Robert \"Bobby\" Bustamante", d: "Iron Worker", whyNot: "Not this guide's pick." },
      { n: "Celina Diaz", d: "Human Resources", whyNot: "Not this guide's pick." }
    ],
    src: [["SB County candidate list", "https://uploads.rov.sbcounty.gov/ROV/Elections/2026/1103/Report_CandidateList.pdf"]]
  },
  {
    id: "sbw1", sec: "sanbernardino", scope: "local", geo: {"pl": ["San Bernardino"]}, part: "Ward 1", county: "San Bernardino", place: "San Bernardino (city)", title: "City Council, Ward 1, City of San Bernardino", sub: "Runoff",
    pick: "Ron Alvarado", pickType: "slate", depth: "limited",
    quick: "Government fraud investigator promising accountability at city hall.",
    quick_es: "Investigador de fraude gubernamental que promete rendición de cuentas en el ayuntamiento.",
    why: ["Works as a government fraud investigator, a useful background for a city that has struggled with financial oversight."],
    cands: [
      { n: "Ron Alvarado", d: "Government Fraud Investigator", pick: true },
      { n: "Virginia Marquez", d: "Community Services Liaison", about: "Community services liaison.", whyNot: "This guide favors Alvarado's accountability background." }
    ],
    src: [["Community Forward Redlands: SB city results", "https://www.communityforwardredlands.com/san-bernardino-city-election-results-2026-2/"]]
  },
  {
    id: "sbw2", sec: "sanbernardino", scope: "local", geo: {"pl": ["San Bernardino"]}, part: "Ward 2", county: "San Bernardino", place: "San Bernardino (city)", title: "City Council, Ward 2, City of San Bernardino", sub: "Runoff",
    pick: "Christian Shaughnessy", pickType: "slate", depth: "limited",
    quick: "Housing specialist focused on the city's housing needs.",
    quick_es: "Especialista en vivienda enfocado en las necesidades de vivienda de la ciudad.",
    why: ["Works as a housing specialist, directly relevant to San Bernardino's housing and homelessness challenges."],
    cands: [
      { n: "Christian Shaughnessy", d: "Housing Specialist", pick: true },
      { n: "Benito Barrios", d: "Small Business Owner", about: "Small business owner.", whyNot: "This guide favors Shaughnessy's housing expertise." }
    ],
    src: [["Community Forward Redlands: SB city results", "https://www.communityforwardredlands.com/san-bernardino-city-election-results-2026-2/"]]
  },
  {
    id: "sbw4", sec: "sanbernardino", scope: "local", geo: {"pl": ["San Bernardino"]}, part: "Ward 4", county: "San Bernardino", place: "San Bernardino (city)", title: "City Council, Ward 4, City of San Bernardino", sub: "Runoff",
    pick: "Joe Salas", pickType: "slate", depth: "limited",
    quick: "Teacher challenging the incumbent in a race decided by less than a point in June.",
    quick_es: "Maestro que reta al titular en una contienda decidida por menos de un punto en junio.",
    why: ["A teacher who brings a school-and-family perspective. The primary was within one point, so turnout decides this one."],
    cands: [
      { n: "Joe Salas", d: "Teacher", pick: true },
      { n: "Fred Shorett", d: "Council Member / Businessman", inc: true, about: "Incumbent councilmember and businessman.", whyNot: "This guide favors a change in this ward." }
    ],
    src: [["Community Forward Redlands: SB city results", "https://www.communityforwardredlands.com/san-bernardino-city-election-results-2026-2/"]]
  },
  {
    id: "sbvmwd1", sec: "sanbernardino", scope: "local", geo: {"pl": ["San Bernardino", "Highland", "Redlands", "Loma Linda", "Colton", "Rialto", "Grand Terrace", "Yucaipa"]}, part: "Division 1", county: "San Bernardino", place: "San Bernardino Valley Municipal Water District", title: "SB Valley Municipal Water District, Division 1 (short term)",
    pick: "Jonathan Lee", pickType: "slate", depth: "limited",
    quick: "Challenger for a water board that sets costs on every household bill.",
    quick_es: "Aspirante a la junta de agua que influye en el costo de cada recibo del hogar.",
    why: ["Also endorsed by the San Bernardino County Democratic Party. Water boards are low-profile but shape household bills and drought planning."],
    cands: [
      { n: "Jonathan Lee", d: "No ballot designation", pick: true },
      { n: "Jose Velasquez", d: "Appointed Director", inc: true, about: "Appointed incumbent director.", whyNot: "Appointed rather than elected. This guide favors Lee." }
    ],
    src: [["SB County Democrats endorsements", "https://www.sanbernardinodemocrats.org/endorsements-nov-2026/"]]
  },
  {
    id: "sbvmwd3", sec: "sanbernardino", scope: "local", geo: {"pl": ["San Bernardino", "Highland", "Redlands", "Loma Linda", "Colton", "Rialto", "Grand Terrace", "Yucaipa"]}, part: "Division 3", county: "San Bernardino", place: "San Bernardino Valley Municipal Water District", title: "SB Valley Municipal Water District, Division 3",
    pick: "Amy Malone", pickType: "slate", depth: "limited",
    quick: "Public-relations consultant focused on transparency for ratepayers.",
    quick_es: "Consultora de relaciones públicas enfocada en transparencia para los usuarios.",
    why: ["Also endorsed by the San Bernardino County Democratic Party."],
    cands: [
      { n: "Amy Malone", d: "Public Relations Consultant", pick: true },
      { n: "David E. Mlynarski", d: "Water Board Member", whyNot: "This guide favors Malone." },
      { n: "Jesus Medina", d: "Rehab Project Coordinator", whyNot: "Little public record." }
    ],
    src: [["SB County Democrats endorsements", "https://www.sanbernardinodemocrats.org/endorsements-nov-2026/"]]
  }
  ]
};
