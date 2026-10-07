// How the suggested pick on each statewide proposition is made, and help for deciding yourself.
//
// score: the effect of a YES vote on each issue, from -2 (hurts a lot) to +2 (helps a lot), with the reason.
//   Facts come from the official state voter guide. The app adds up helps and hurts using each issue's
//   weight (equal by default; readers can change them). If the issues clearly point one way, that's the pick.
//   If they're close, the NAACP California/Hawaii, California Democratic Party and League of Women Voters
//   break the tie by majority. See docs/decision-rules.md.
// quick: the one-line summary shown on the card for each possible pick.
(function () {
  var G = window.GUIDE;
  var VIG = ["Official Voter Information Guide (Secretary of State), Nov. 3, 2026", "https://vig.cdn.sos.ca.gov/2026/general/pdf/complete-vig.pdf"];

  G.CHOICE = {
    groups: [
      { id: "naacp", n: "NAACP California/Hawaii", url: "https://cahinaacp.org/our-vote-our-voice-where-we-stand-on-every-2026-ballot-measure/" },
      { id: "dem", n: "California Democratic Party", url: "https://cadem.org/our-endorsements/" },
      { id: "gop", n: "California Republican Party", url: "https://cagop.org/pages/endorsements" },
      { id: "lwv", n: "League of Women Voters of California", url: "https://lwvc.org/vote-with-league/" }
    ],

    // About you. Answers only add notes; they never change a suggested pick.
    profile: [
      { id: "home", en: "Do you rent or own your home?", es: "¿Renta o es dueño de su vivienda?",
        opts: [["rent", "Rent", "Rento"], ["own", "Own", "Soy dueño"], ["other", "Neither", "Ninguno"]] },
      { id: "buy", en: "Hoping to buy a home in the next few years?", es: "¿Espera comprar casa en los próximos años?" },
      { id: "vet", en: "Are you a veteran?", es: "¿Es veterano?" },
      { id: "clinic", en: "Do you or your family use Medi-Cal or a community health clinic?", es: "¿Usted o su familia usan Medi-Cal o una clínica comunitaria?" },
      { id: "kids", en: "Do you have kids in public school or community college?", es: "¿Tiene hijos en escuela pública o colegio comunitario?" },
      { id: "high", en: "Does your household earn more than about $370,000 a year (single) or $740,000 (married)?", es: "¿Su hogar gana más de unos $370,000 al año (soltero) o $740,000 (casados)?" },
      { id: "retire", en: "Do you have retirement savings, like a 401(k), IRA or pension?", es: "¿Tiene ahorros para el retiro, como 401(k), IRA o pensión?" },
      { id: "biz", en: "Do you own a business?", es: "¿Es dueño de un negocio?" },
      { id: "id", en: "Do you have a current California driver's license or state ID?", es: "¿Tiene licencia de manejar o identificación de California vigente?" },
      { id: "near", en: "Do you live near a freeway, port, rail yard or other big transportation project?", es: "¿Vive cerca de una autopista, puerto, patio ferroviario u otra obra de transporte grande?" }
    ],

    // The issues each measure is scored on. "lens" issues count equally by default; the others
    // start at zero so readers who care about them can turn them on.
    criteria: [
      { id: "vote", lens: true, en: "Voting rights and fair representation", es: "Derecho al voto y representación justa" },
      { id: "health", lens: true, en: "Affordable health care", es: "Atención médica asequible" },
      { id: "home", lens: true, en: "Housing and homeownership", es: "Vivienda y compra de casa" },
      { id: "tax", lens: true, en: "Fair taxes for working and middle-class families", es: "Impuestos justos para la clase trabajadora y media" },
      { id: "services", lens: true, en: "Steady public services and a stable budget", es: "Servicios públicos estables y presupuesto sano" },
      { id: "school", lens: true, en: "Strong public schools", es: "Escuelas públicas fuertes" },
      { id: "safe", lens: true, en: "Safe neighborhoods and fair policing", es: "Barrios seguros y policía justa" },
      { id: "air", lens: true, en: "Clean air and healthy neighborhoods", es: "Aire limpio y barrios sanos" },
      { id: "repair", lens: true, en: "Repair for harms to Black Californians", es: "Reparación de daños a los afroamericanos de California" },
      { id: "lowtax", lens: false, en: "Lower taxes and less government spending", es: "Menos impuestos y menos gasto público" },
      { id: "lessdebt", lens: false, en: "Less state borrowing", es: "Menos préstamos del estado" }
    ],
    // Groups used, in order, when the issues don't settle a measure.
    tiebreak: ["naacp", "dem", "lwv"]
  };

  var PROPS = {
    p1: {
      groups: { naacp: "YES", dem: "YES", gop: "Neutral", lwv: "YES" },
      yes: [
        "California builds far too few homes people can afford. More than half of renters spend over 30% of their income on rent.",
        "Most of the money ($7.2 billion) builds, buys or renovates affordable rentals, usually reserved for lower-income households for 55 years. The state estimates up to 40,000 rental units and up to 40,000 households helped toward ownership.",
        "It raises no taxes, and $1.25 billion for veterans' home loans is repaid by the veterans themselves."
      ],
      no: [
        "It adds about $500–600 million a year in debt payments for 25 years, money that can't go to other needs.",
        "Fiscal conservatives argue that subsidizing housing without fixing what makes it slow and costly to build (permits, fees, lawsuits) keeps costs per unit high.",
        "No official argument against it was filed, and no major group opposes it. The California Republican Party is neutral."
      ],
      claims: [
        ["Borrowing doubles what Prop 1 really costs.", "false", "The state's analysts estimate repayment at about $500–600 million a year for about 25 years. After inflation, that is about 15% more than paying cash up front."],
        ["Most of the money goes to buying existing homes for people.", "false", "$7.2 billion of the $10 billion housing portion goes to building, buying or renovating affordable rental housing. $1.1 billion supports homeownership, mostly as down-payment loans."],
        ["Down-payment help just pushes home prices up.", "debated", "Economists warn that helping buyers without adding homes can raise prices when supply is tight. Most of Prop 1 pays for new and preserved units rather than buyer aid."]
      ],
      me: [
        ["home", "rent", "Most of Prop 1 funds affordable rentals. Units are usually reserved for lower-income households."],
        ["buy", "yes", "$1.1 billion helps first-time and low- and moderate-income buyers, mostly with down-payment loans you repay when you sell or pay off the home."],
        ["vet", "yes", "$1.25 billion funds CalVet home loans for veterans, including some who might not qualify for a regular mortgage."]
      ]
    },
    p2: {
      groups: { naacp: "YES", dem: "YES", gop: "NO", lwv: "YES" },
      yes: [
        "The budget swung from a $100 billion surplus to a large deficit in a few years. Doubling the rainy day fund to 20% cushions schools, Medi-Cal and public safety in the next downturn.",
        "It forces the state to bank more of a revenue spike instead of starting new spending it can't sustain.",
        "The nonpartisan Legislative Analyst has advised saving more. It passed the Legislature with both parties' votes."
      ],
      no: [
        "Deposits would no longer count toward the voter-approved state spending limit (the 1979 Gann limit), which makes taxpayer rebates less likely.",
        "It adds no new money for schools, health care or public safety.",
        "Opponents point out that lawmakers suspended more than $5 billion in required deposits right after passing it, so bigger rules may not mean more savings."
      ],
      claims: [
        ["Prop 2 opens a loophole in the state spending limit.", "true", "Under Prop 2, rainy day fund deposits would count toward the limit only when the money is taken out, not when it is saved. That makes it less likely the state goes over the limit and owes rebates."],
        ["Prop 2 adds money for schools and health care.", "false", "It doesn't add new money. It saves more in good years so less has to be cut in bad years."]
      ],
      me: [
        ["kids", "yes", "Bigger reserves are meant to soften cuts to schools during a recession."],
        ["clinic", "yes", "Bigger reserves are meant to soften cuts to Medi-Cal and clinics during a recession."]
      ]
    },
    p3: {
      groups: { naacp: "YES", dem: "YES", gop: "NO", lwv: "YES" },
      yes: [
        "It keeps today's rates on the top 2% of earners. Without it, those rates end in 2031 and the state loses $5–15 billion a year.",
        "The money goes to schools and community colleges, which frees other state money for programs like Medi-Cal. Supporters list school layoffs and bigger classes as the risk of losing it.",
        "Local school boards decide how to spend it, no administrative overhead is allowed, and spending is audited every year."
      ],
      no: [
        "Voters were told in 2012 and again in 2016 that these rates were temporary. Making them permanent breaks that promise.",
        "California already has the highest top income tax rate in the nation. Opponents say high earners and businesses leave, shrinking the tax base.",
        "Fiscal conservatives argue the state should fix spending first; the budget has grown much faster than population."
      ],
      claims: [
        ["Prop 3 doesn't raise anyone's taxes.", "true", "Rates stay where they have been since 2012. The difference is that without Prop 3 they would drop in 2031."],
        ["Prop 3 is the largest permanent income tax increase in state history.", "debated", "It depends on what you compare to. Compared with current rates, nothing changes. Compared with the law after 2030, top earners would pay $5–15 billion a year more, permanently."],
        ["High earners will leave the state because of it.", "unverified", "The state's analysts did not estimate any change in where people live because of Prop 3."]
      ],
      me: [
        ["high", "no", "This tax doesn't apply to you. It only affects income over about $371,000 (single) or $742,000 (married)."],
        ["high", "yes", "You would keep paying the higher rates on income above about $371,000 (single) or $742,000 (married) after 2030."],
        ["kids", "yes", "The money is assigned to K–12 schools (89%) and community colleges (11%). Local school boards decide how to use it."]
      ]
    },
    p4: {
      groups: { naacp: "YES", dem: "YES", gop: "NO", lwv: "YES" },
      yes: [
        "Running for office often takes personal wealth or rich donors. Small-donor matching programs help working-class candidates and candidates of color compete.",
        "It creates no program and spends no money by itself. Each city, county or the state could choose to adopt one.",
        "Candidates must show broad support and accept spending limits, and the money can't come from funds for schools, transportation or public safety. It also triples fines for illegal foreign campaign money."
      ],
      no: [
        "It is a blank check: it sets no statewide cap on how much public money a program can spend or how many candidates can get it.",
        "Candidates could take public money and still take special-interest money.",
        "The details would be written by the same officials who would benefit. Some critics also raise free-speech concerns about using public money for political messages."
      ],
      claims: [
        ["Prop 4 has no limit on how much taxpayer money candidates can get.", "partly", "Prop 4 itself sets no dollar cap. Each government that creates a program would set one. Candidates must accept spending limits and show broad support to qualify."],
        ["Candidates could get both public money and special-interest money.", "true", "Prop 4 doesn't ban private contributions to candidates who take public funds."],
        ["Prop 4 spends tax money on campaigns.", "partly", "Not by itself. It lifts the ban so governments can create programs later. Costs depend on what each one chooses."]
      ],
      me: []
    },
    p5: {
      groups: { naacp: "YES", dem: "YES", gop: "NO", lwv: "YES" },
      yes: [
        "Today a recalled governor can be replaced by someone who wins only a small share of the vote. In 2021, the leading replacement would have taken office with support from about 28% of recall voters.",
        "It removes the incentive to use recalls to redo an election, and most states with recalls already fill vacancies this way.",
        "If a governor is recalled, the elected Lieutenant Governor takes over, and voters choose a successor at the next statewide election if there's enough time left in the term."
      ],
      no: [
        "Voters lose the right to choose the replacement on the same ballot. For most statewide offices, the governor would appoint one.",
        "For legislative seats, the office could sit empty until a costly special election months later.",
        "The recalled official could run again in that later election. It's a constitutional change, so it's hard to undo."
      ],
      claims: [
        ["Prop 5 takes away voters' power to choose a replacement.", "partly", "For governor, the elected Lieutenant Governor serves, and voters pick a successor at the next statewide election if the recall is early enough. For other statewide offices, the governor appoints. Legislative seats go to a special election."],
        ["A recalled official could run for the same seat again.", "true", "Under Prop 5, a recalled official may be a candidate in the special election to fill the office."]
      ],
      me: []
    },
    p37: {
      groups: { naacp: "YES", dem: "YES", gop: "Neutral", lwv: "NO" },
      yes: [
        "Many families can afford a monthly mortgage but can't save a big down payment. Prop 37 lends up to 17% of the price, so a buyer needs only 3% down.",
        "Private bond investors fund it and buyers repay it, so the state's analysts find no direct cost to taxpayers.",
        "It only applies to newly built homes, which supporters say will encourage more construction."
      ],
      no: [
        "It's a second loan on the home, with terms voters won't know in advance, and buyers still need 3% down.",
        "It gives no priority to first-time or first-generation buyers. Income can be up to twice the area median, which tops $300,000 in some areas.",
        "Fiscal conservatives argue that helping buyers bid without adding supply pushes prices up. The state's analysts say it's unknown whether it would increase home building."
      ],
      claims: [
        ["Prop 37 costs taxpayers nothing.", "true", "The state's analysts find no direct state or local cost. The bonds are repaid from buyers' payments, and the measure says the state does not repay them."],
        ["If buyers default, taxpayers pay.", "false", "Under the measure as written, the bonds are repaid from homeowners' mortgage payments, not the state budget. Investors who buy the bonds carry that risk."],
        ["It will lead to more homes being built.", "debated", "The state's analysts say it's unknown whether the program would increase construction or home buying."],
        ["Higher earners could qualify.", "true", "The income limit is twice the area's median income, which is above $300,000 in some high-cost areas."]
      ],
      me: [
        ["buy", "yes", "You may qualify if you've lived in California for a year, your household income is no more than twice your area's median, you buy a newly built home under your county's price cap, live in it, and put at least 3% down. It's a second loan you repay monthly."],
        ["home", "rent", "Renters hoping to buy are the main target, but only for newly built homes."]
      ]
    },
    p38: {
      groups: { naacp: "YES", dem: "YES", gop: "YES", lwv: "NO" },
      yes: [
        "Immunotherapy is already curing some cancers. At least half the money must go to cancer, heart disease and Alzheimer's, which hit Black communities hard.",
        "Treatments it helps create must be sold in California at a 20% discount, and 10% of any revenue goes back to the state until the bonds are repaid.",
        "It helps make up for federal cuts to medical research, and administration is capped at 2%."
      ],
      no: [
        "It costs about $500–600 million a year for about 20 years, and royalties are uncertain and could take decades.",
        "Research priorities should be set by scientists and the regular budget, not locked in by a ballot measure for one field.",
        "California's stem-cell bonds were promised to pay back far more in royalties than they have."
      ],
      claims: [
        ["Prop 38 pays for itself.", "debated", "The state's analysts say revenue from discoveries is uncertain, could be significant, and could take decades to offset the cost."],
        ["California's stem-cell bonds returned almost nothing in royalties.", "partly", "Royalties have been far below early promises. The stem-cell agency had received about $16 million by early 2022, against about $1.1 billion once predicted. The official voter guide doesn't report a figure."]
      ],
      me: []
    },
    p39: {
      groups: { naacp: "NO", dem: "NO", gop: "YES", lwv: "NO" },
      yes: [
        "Voter ID is common in other states and polls show support across parties. Supporters say it builds trust in elections.",
        "Everyone could get a free state voter ID card on request.",
        "It requires checking that voters on the rolls are citizens and an audit of every county every two years."
      ],
      no: [
        "A missing or mismatched ID number on a mail ballot envelope would get a valid ballot thrown out, and most Californians vote by mail.",
        "A 'free' ID still takes documents, travel and time off work. Seniors, students, low-income voters and voters of color are least likely to have a current ID.",
        "It costs tens to low hundreds of millions of dollars a year, and California already confirms identity when people register and checks signatures on mail ballots."
      ],
      claims: [
        ["California doesn't check who is voting.", "false", "Identity is confirmed at registration with a license or Social Security number, and every mail ballot signature is checked. Signatures from in-person voters generally aren't checked before counting."],
        ["Voter ID would be free.", "partly", "The state must provide a free voter ID card on request. Getting the documents to qualify, and getting to an office, can still cost time and money."],
        ["Prop 39 would reject mail ballots over a small mistake.", "true", "A mail ballot would not count if the last four digits on the envelope don't match the ID number the voter chose in their registration."]
      ],
      me: [
        ["id", "no", "You'd need a government ID to vote in person and would have to choose an ID number for mail voting. The measure promises a free voter ID card on request."],
        ["id", "yes", "You'd write the last four digits of your chosen ID number on every mail ballot envelope. A mismatch could get the ballot rejected."]
      ]
    },
    p40: {
      groups: { naacp: "NO", dem: "YES", gop: "NO", lwv: "Neutral" },
      yes: [
        "Federal cuts are expected to take health coverage from more than a million Californians. Asking about 200 billionaires to pay a one-time 5% tax on their wealth would fund care.",
        "90% of the money must go to health care. Real estate, pensions and retirement accounts are generally excluded.",
        "It applies to billionaires who lived here on January 1, 2026, so moving away now doesn't avoid it."
      ],
      no: [
        "A one-time tax can't pay for ongoing health care. When it runs out, the gap returns.",
        "The state's analysts expect a possible loss of under $1 billion a year in income taxes if billionaires leave or shift income.",
        "Most countries that tried annual wealth taxes dropped them. Taxing hard-to-value assets would mean years of lawsuits, and opponents say the Legislature could expand it without a vote."
      ],
      claims: [
        ["Prop 40 would raise about $100 billion.", "unverified", "That's the supporters' estimate. The state's analysts say 'tens of billions of dollars' over several years and call the amount very hard to predict."],
        ["Prop 40 will cost California $25 billion as billionaires leave.", "debated", "Opponents cite a Stanford study. The state's analysts project an ongoing income-tax loss of less than $1 billion a year."],
        ["Prop 40 taxes retirement accounts.", "false", "The state's analysts say real estate, pensions and retirement accounts generally are excluded, and only people worth more than $1 billion owe the tax."],
        ["Wealth taxes failed in Europe.", "partly", "Twelve OECD countries, nearly all in Europe, had annual wealth taxes in 1990. By 2017 only four did. Prop 40 is different because it is a one-time tax."],
        ["Billionaires have already left, so it won't raise much.", "partly", "The tax applies to billionaires who lived in California on January 1, 2026, so leaving afterward doesn't avoid it. Future income taxes from those who leave would be lost."]
      ],
      me: [
        ["clinic", "yes", "90% of the money must go to health care services. How it's spent would be decided by the state."]
      ]
    },
    p41: {
      groups: { naacp: "YES", dem: "NO", gop: "YES", lwv: "NO" },
      yes: [
        "Billions have gone to programs like homelessness with too little to show for it. Prop 41 has the independent State Auditor review a program before voters are asked for a new tax, and every four years after.",
        "Audit summaries would appear in the official voter guide, so voters see results before deciding.",
        "New taxes would have to count toward the voter-approved spending limit, including its rule that extra revenue goes back to taxpayers."
      ],
      no: [
        "Opponents call it a billionaire-funded move to cancel Prop 40. If it gets more yes votes than Prop 40, courts could block Prop 40.",
        "It cancels state taxes passed after January 1, 2026 that sit outside the spending limit, which could limit future funding choices.",
        "The audits cost money, low millions a year and growing, and voters can already reject a tax they don't trust."
      ],
      claims: [
        ["Prop 41 is just about audits.", "partly", "It also cancels new state taxes, enacted after January 1, 2026, that exclude their revenue from the state spending limit."],
        ["Prop 41 would cancel the billionaire tax.", "true", "The state's analysts say that if Prop 41 gets more yes votes than Prop 40, courts could find they conflict and Prop 40 could be stopped."]
      ],
      me: []
    },
    p42: {
      groups: { naacp: "YES", dem: "NO", gop: "YES", lwv: "NO" },
      yes: [
        "It bans new state taxes on simply owning savings, investments, retirement accounts, business interests and other personal property, which you already paid income tax to build.",
        "It bans taxes that reach back to money earned or actions taken before the tax passed. Supporters call retroactive taxes unfair.",
        "The NAACP says protecting savings and Black-owned businesses gives families certainty after generations of barriers to building wealth."
      ],
      no: [
        "No one on this ballot proposes taxing ordinary retirement accounts. Opponents say the real purpose is to block the billionaire tax.",
        "A permanent constitutional ban ties the hands of future voters, even in a crisis.",
        "If it gets more yes votes than Prop 40, courts could block Prop 40."
      ],
      claims: [
        ["The Constitution currently allows the state to tax your retirement savings.", "partly", "The state could propose such a tax, but it doesn't tax owning financial assets today. Prop 42 would ban any new tax like that."],
        ["Prop 42 would cancel the billionaire tax.", "true", "The state's analysts say that if Prop 42 gets more yes votes than Prop 40, courts could find they conflict and Prop 40 could be stopped."],
        ["Prop 42 changes taxes on retirement withdrawals.", "false", "It doesn't touch income taxes, including taxes on retirement withdrawals."]
      ],
      me: [
        ["retire", "yes", "Your retirement accounts aren't taxed for being owned today. Prop 42 would keep the state from adding such a tax in the future."],
        ["biz", "yes", "It would also ban new state taxes on owning business interests and intellectual property."]
      ]
    },
    p43: {
      groups: { naacp: "NO", dem: "NO", gop: "YES", lwv: "NO" },
      yes: [
        "Prop 13 required two-thirds approval for local special taxes. A 2017 court ruling let taxes proposed by citizen petition pass with a simple majority, and Prop 43 closes that gap.",
        "Supporters say local governments imposed more than 2,000 new or higher taxes in a decade, including transfer taxes on home sales.",
        "The Legislature voted almost unanimously to put it on the ballot (35–1 in the Senate, 68–2 in the Assembly)."
      ],
      no: [
        "Just over one-third of voters could block a measure that nearly two-thirds support.",
        "Local measures pay for fire stations, 911, roads, schools, clinics and affordable housing. Firefighters, teachers and nurses oppose it.",
        "It doesn't cut any existing tax."
      ],
      claims: [
        ["Prop 43 restores Prop 13's two-thirds rule.", "partly", "Taxes that local governments put on the ballot already need two-thirds. Prop 43 adds the same bar for special taxes that citizens put on the ballot by petition."],
        ["It lets one-third of voters veto what the majority wants.", "true", "A measure with 66% support would fail."]
      ],
      me: [
        ["home", "own", "It covers local special taxes such as parcel taxes, sales taxes and real-estate transfer taxes when citizens put them on the ballot."],
        ["home", "rent", "Supporters say local taxes raise rents. Opponents say local measures fund affordable housing and services renters rely on."]
      ]
    },
    p44: {
      groups: { naacp: "NO", dem: "NO", gop: "NO", lwv: "NO" },
      yes: [
        "Community clinics receive billions in public money. Supporters say some spend too much on executive pay and overhead while patients wait months for appointments.",
        "Requiring 90% of revenue to go to care and related services, with public reporting, would steer more money to patients and frontline workers.",
        "Clinics that fall short can get penalties back if they comply within five years, and unrecovered penalties fund clinic workforce programs."
      ],
      no: [
        "Clinics now spend about 80% of revenue on care on average. The state's analysts warn clinics that can't reach 90% might close.",
        "Opponents say it limits spending on interpreters, billing, technology, X-ray machines and other basics that keep clinics open.",
        "Doctors, pediatricians, school nurses, Planned Parenthood and clinics oppose it. It was written and funded by one union, SEIU-UHW."
      ],
      claims: [
        ["Some clinics spend less than half their money on patients.", "unverified", "That's the supporters' claim. The state's analysts report an average of about 80% spent on health care services, varying by clinic."],
        ["Prop 44 will close clinics.", "debated", "The state's analysts say some clinics that can't meet the minimum might close instead. How many depends on how the Attorney General defines qualifying spending."]
      ],
      me: [
        ["clinic", "yes", "Community clinics are where many Medi-Cal patients get care. The state's analysts warn some clinics might close rather than meet the 90% rule."]
      ]
    },
    p45: {
      groups: { naacp: "YES", dem: "NO", gop: "YES", lwv: "NO" },
      yes: [
        "Delays and lawsuits raise the cost of homes, clinics, schools, transit, water and clean energy. Prop 45 sets firm deadlines for reviews, permits and court cases on those projects.",
        "Projects still need environmental review and must follow every environmental law. Builders can choose whether to use the faster process.",
        "Warehouses, refineries and other industrial projects aren't eligible. The NAACP California/Hawaii supports it because Black communities pay when homes, clinics and transit never get built."
      ],
      no: [
        "It caps public comment periods, lets the builder propose a single alternative, and narrows what courts can consider or stop.",
        "The state's analysts say it could lead to approval of projects with negative environmental impacts. Clean-air, environmental-justice and nurses' groups oppose it.",
        "It doesn't require any project to lower rents, prices or utility bills, and it was funded largely by gas and electric utilities and business groups."
      ],
      claims: [
        ["Prop 45 exempts projects from environmental review.", "false", "It doesn't exempt any project. Eligible projects still get reviewed, under tighter deadlines and narrower rules."],
        ["Prop 45 will fast-track warehouses and refineries.", "false", "Only these project types are eligible: housing, water, clean energy, health facilities, fire and police stations, wildfire prevention, broadband, schools and transportation."],
        ["Prop 45 will lower housing costs.", "debated", "The state's analysts call the long-term effects uncertain. Faster building could lower costs, but nothing in the measure requires lower prices."],
        ["Prop 45 limits public input.", "true", "It sets a maximum length for comment periods (today there's only a minimum), limits project alternatives and narrows court review."]
      ],
      me: [
        ["near", "yes", "Transportation projects, like freeway and transit work, are eligible for the faster process. Industrial projects like warehouses are not."],
        ["buy", "yes", "Housing projects are eligible. Supporters say permit delays add more than $75,000 to the cost of a new home; that figure wasn't checked by the state."],
        ["home", "rent", "Housing projects, including apartments, are eligible for faster approval."]
      ]
    }
  };


  var SCORE = {
    p1: {
      home: [2, "$7.2 billion builds, buys or renovates affordable rentals, and $1.1 billion helps first-time and lower-income buyers. The state estimates up to 40,000 rental units and up to 40,000 households helped toward owning."],
      services: [-1, "Repaying it takes about $500–600 million a year from the state budget for about 25 years, roughly 0.25% of the budget."],
      lowtax: [-1, "Adds state spending through debt payments, though it raises no tax."],
      lessdebt: [-2, "Adds $10 billion of state debt repaid from the general budget. The $1.25 billion for veterans is repaid by the veterans."]
    },
    p2: {
      services: [2, "Doubles the rainy day fund to 20% of state taxes, so schools, Medi-Cal and other services face fewer cuts in a recession."],
      tax: [-1, "Deposits would stop counting toward the voter-approved spending limit, making taxpayer rebates less likely."],
      lowtax: [-1, "Makes rebates under the state spending limit less likely."],
      lessdebt: [1, "Requires extra payments on state debts through 2040 instead of 2030."]
    },
    p3: {
      school: [2, "Keeps $5–15 billion a year that goes mainly to K–12 schools and community colleges."],
      health: [1, "With schools funded, other state money stays available for Medi-Cal and health programs."],
      tax: [1, "Applies only to income over about $371,000 (single) or $742,000 (married). Working and middle-class families' rates don't change."],
      lowtax: [-2, "Makes the top income tax rates permanent instead of letting them drop in 2031."]
    },
    p4: {
      vote: [1, "Lets communities create small-donor matching or similar programs that help working-class candidates and candidates of color run without wealthy donors."],
      services: [-1, "Programs governments choose to create could cost significant money, though not from school, transportation or public safety funds."],
      lowtax: [-1, "Opens the door to spending public money on campaigns."]
    },
    p5: {
      vote: [0, "Cuts both ways. A replacement couldn't take office with a small share of the vote, but voters would no longer choose the replacement on the same ballot."],
      services: [0, "Could save or cost millions per recall depending on the office, and statewide recalls are rare."]
    },
    p37: {
      home: [2, "Lends up to 17% of a newly built home's price to middle-income buyers who put 3% down, for families who can afford a mortgage but not a down payment."],
      services: [0, "Buyers repay the bonds. The state's analysts find no direct state or local cost."]
    },
    p38: {
      health: [1, "Funds immunology research on cancer, heart disease and Alzheimer's, with a 20% California discount on resulting treatments. Benefits are uncertain and could take decades."],
      services: [-1, "Costs about $500–600 million a year from the state budget for about 20 years, possibly offset by royalties."],
      lowtax: [-1, "Adds state spending through debt payments."],
      lessdebt: [-2, "Adds $8.4 billion of state debt."]
    },
    p39: {
      vote: [-2, "Mail ballots without matching ID digits wouldn't count, and in-person voters would need government ID, which Black, elderly, low-income and young voters are less likely to have current."],
      services: [-1, "Costs tens of millions to low hundreds of millions of dollars a year to carry out."],
      lowtax: [-1, "Adds an ongoing cost to state and local budgets."]
    },
    p40: {
      health: [2, "Raises tens of billions of dollars over several years, 90% of it for health care, as federal cuts reduce health funding."],
      tax: [1, "Paid only by about 200 people worth more than $1 billion. Working and middle-class families don't pay it."],
      services: [-1, "One-time money can't fund ongoing care, and the state could lose under $1 billion a year in income taxes if billionaires leave or shift income."],
      lowtax: [-1, "A new tax, though only on billionaires."]
    },
    p41: {
      health: [-1, "If it gets more yes votes than Prop 40, courts could cancel the billionaire tax and its health-care money."],
      services: [0, "Audits of new tax-funded programs could improve results, but its spending-limit rule could restrict future funding. These roughly offset."],
      lowtax: [1, "Puts new taxes under the state spending limit and adds audits before new special taxes reach voters."]
    },
    p42: {
      health: [-1, "If it gets more yes votes than Prop 40, courts could cancel the billionaire tax and its health-care money."],
      services: [-1, "Permanently rules out one way to raise revenue, so the state's analysts say future revenue may not grow as much."],
      lowtax: [2, "Permanently bans new state taxes on owning savings, investments, retirement accounts and business interests, and bans retroactive taxes."]
    },
    p43: {
      services: [-2, "Citizen-proposed local measures for fire, 911, roads, parks, libraries and clinics would need two-thirds, so more would fail."],
      home: [-1, "Local measures that fund affordable housing would be harder to pass."],
      vote: [-1, "Just over one-third of voters could block what nearly two-thirds want."],
      lowtax: [2, "Makes new local special taxes, including sales, parcel and transfer taxes, much harder to pass."]
    },
    p44: {
      health: [-1, "Clinics now spend about 80% of revenue on care on average. Requiring 90% could move some money to care, but the state's analysts warn some clinics might close."]
    },
    p45: {
      home: [2, "Housing gets firm deadlines for reviews, permits and lawsuits, which now delay new homes and add cost."],
      health: [1, "Clinics, hospitals and medical offices also qualify for faster approval."],
      air: [-1, "Transportation projects like freeway work also qualify, with shorter comment periods and narrower court review. The state's analysts say projects with more harmful impacts could be approved. Warehouses and refineries don't qualify."]
    }
  };

  var QUICK = {
    p1: { YES: ["Builds and preserves affordable homes and funds down-payment help, with no new tax.", "Construye y preserva viviendas asequibles y ayuda con el enganche, sin impuesto nuevo."],
          NO: ["Adds $10 billion of state debt, costing about $500–600 million a year for 25 years.", "Agrega $10 mil millones de deuda estatal, con un costo de unos $500–600 millones al año por 25 años."] },
    p2: { YES: ["Saves more in good years so schools and services aren't cut when the economy dips.", "Ahorra más en años buenos para no recortar escuelas y servicios en una recesión."],
          NO: ["Makes taxpayer rebates less likely and adds no new money for services.", "Hace menos probables los reembolsos a contribuyentes y no agrega dinero para servicios."] },
    p3: { YES: ["Keeps a tax that only hits incomes over ~$371,000 so schools don't lose $5–15 billion a year.", "Mantiene un impuesto solo a ingresos de más de ~$371,000 para que las escuelas no pierdan $5–15 mil millones al año."],
          NO: ["Lets the 2012 \"temporary\" top income tax rates expire in 2031, as voters were told.", "Deja que las tasas \"temporales\" de 2012 venzan en 2031, como se prometió."] },
    p4: { YES: ["Lets communities choose public campaign financing so candidates without wealthy donors can compete.", "Permite financiamiento público de campañas para que compitan candidatos sin donantes ricos."],
          NO: ["Would let governments spend taxpayer money on campaigns, with no statewide cap.", "Permitiría gastar dinero público en campañas, sin límite estatal."] },
    p5: { YES: ["A recalled official would be replaced through the normal vacancy process, not a crowded race won with a small share of votes.", "El reemplazo de un funcionario destituido seguiría el proceso normal de vacante, no una contienda con poca votación."],
          NO: ["Keeps voters choosing the replacement on the same ballot when a statewide official is recalled.", "Mantiene que los votantes elijan al reemplazo en la misma boleta."] },
    p37: { YES: ["Helps middle-income families buy a new home with a state loan for up to 17% of the price, at no taxpayer cost.", "Ayuda a familias de ingresos medios a comprar casa nueva con un préstamo de hasta 17% del precio, sin costo para los contribuyentes."],
           NO: ["A second loan only for new homes, with no priority for first-time buyers.", "Un segundo préstamo solo para casas nuevas, sin prioridad para quienes compran por primera vez."] },
    p38: { YES: ["Funds research on cancer, heart disease and Alzheimer's, with a 20% discount on resulting treatments.", "Financia investigación sobre cáncer, corazón y Alzheimer, con 20% de descuento en los tratamientos que resulten."],
           NO: ["Borrows $8.4 billion for one research field; past research bonds paid back far less than promised.", "Pide prestados $8.4 mil millones para un solo campo; bonos anteriores devolvieron mucho menos de lo prometido."] },
    p39: { YES: ["Requires ID to vote, adds citizenship checks of voter rolls, and offers a free voter ID card.", "Exige identificación para votar, verifica la ciudadanía en los registros y ofrece una identificación gratuita."],
           NO: ["Would throw out mail ballots missing matching ID digits and add costly barriers to voting.", "Anularía boletas por correo sin los dígitos de identificación y añadiría barreras costosas para votar."] },
    p40: { YES: ["A one-time 5% tax on about 200 billionaires, with 90% of the money going to health care.", "Un impuesto único de 5% a unos 200 multimillonarios; 90% del dinero va a la salud."],
           NO: ["One-time money can't pay for ongoing care, and the state could lose income taxes if billionaires leave.", "El dinero único no paga atención continua, y el estado podría perder impuestos si los multimillonarios se van."] },
    p41: { YES: ["Requires independent audits of programs funded by new taxes, before and after voters approve them.", "Exige auditorías independientes de programas financiados por impuestos nuevos, antes y después de aprobarlos."],
           NO: ["Could cancel the billionaire tax for health care and limits how future taxes are counted.", "Podría anular el impuesto a multimillonarios para la salud y limita cómo se cuentan futuros impuestos."] },
    p42: { YES: ["Permanently bans new state taxes on owning savings, retirement accounts and other personal property.", "Prohíbe para siempre nuevos impuestos estatales sobre ahorros, cuentas de retiro y otros bienes personales."],
           NO: ["A permanent constitutional ban that could cancel the billionaire tax and ties future voters' hands.", "Una prohibición constitucional permanente que podría anular el impuesto a multimillonarios y limita a futuros votantes."] },
    p43: { YES: ["Requires two-thirds approval for local special taxes put on the ballot by petition, the same bar governments face.", "Exige dos tercios para impuestos locales especiales propuestos por petición, igual que para los gobiernos."],
           NO: ["Would let one-third of voters block local funding for fire, 911, roads and schools that most people want.", "Permitiría que un tercio de los votantes bloquee fondos locales para bomberos, 911, calles y escuelas que la mayoría quiere."] },
    p44: { YES: ["Requires community clinics to spend at least 90% of revenue on patient care and related services.", "Exige que las clínicas comunitarias gasten al menos 90% de sus ingresos en atención y servicios relacionados."],
           NO: ["Doctors and nurses warn it could close community clinics that serve millions.", "Médicos y enfermeras advierten que podría cerrar clínicas comunitarias que atienden a millones."] },
    p45: { YES: ["Speeds up approvals for homes, clinics, schools, transit and clean energy, but trims public input.", "Acelera la aprobación de viviendas, clínicas, escuelas, transporte y energía limpia, pero reduce la participación pública."],
           NO: ["Weakens environmental review and public input for many projects, including freeway work.", "Debilita la revisión ambiental y la participación pública en muchos proyectos, incluidas obras de autopistas."] }
  };

  var EXTRA_SRC = {
    p38: [["Capitol Weekly: Stem cell agency receives $15.6 million in royalties", "https://capitolweekly.net/?p=15528"]],
    p40: [["OECD: The Role and Design of Net Wealth Taxes (2018)", "https://www.oecd.org/tax/the-role-and-design-of-net-wealth-taxes-in-the-oecd-9789264290303-en.htm"]]
  };

  G.contests.forEach(function (c) {
    var d = PROPS[c.id]; if (!d) return;
    c.groups = d.groups; c.score = SCORE[c.id]; c.quickBy = QUICK[c.id]; c.sides = { yes: d.yes, no: d.no }; c.claims = d.claims; c.me = d.me;
    c.src = c.src.concat([VIG], EXTRA_SRC[c.id] || []);
  });
})();
