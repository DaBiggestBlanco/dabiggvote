// Record details for incumbents and notable candidates, layered onto the race entries.
// why:   extra reasons for the pick
// about: replaces a candidate's short description
(function () {
  var add = {
    cd2: { why: ["Wrote more than 40 state laws in his first four years in the Assembly, where he chaired the Water, Parks & Wildlife Committee."] },
    cd9: { why: ["Sits on the Appropriations Committee, which controls federal spending, and has fought the Delta Tunnel project that threatens Central Valley water supplies."] },
    cd10: { why: ["As a county supervisor he pushed through refinery safety and flaring rules to protect neighborhoods near chemical plants, and he created a county women's health program."] },
    cd15: { why: ["Former Assembly Speaker pro Tem with a long record of passing bipartisan bills."] },
    cd16: { why: ["As San Jose mayor he secured more than $1 billion in community commitments from Google, including affordable-housing fees, and led the push to bring BART to downtown San Jose."] },
    cd17: { why: ["Member of the bipartisan YIMBY Caucus, which pushes to build more housing to lower costs, and a leader on tougher antitrust enforcement against big tech."] },
    cd18: { why: ["Senior member of the Judiciary Committee and the lead Democrat on immigration law, which matters to mixed-status families in the district."] },
    cd19: { why: ["Former Monterey County prosecutor with a focus on agriculture and veterans."] },
    cd21: { why: ["Former chair of the Blue Dog Coalition of fiscally cautious Democrats and a senior member of the Agriculture Committee."] },
    cd30: { why: ["In the Assembly, she wrote the 2022 law ending parking mandates near transit, which lowers the cost of building homes."] },
    cd32: { why: ["Senior member of the Foreign Affairs and Financial Services committees, in Congress since 1997."] },
    cd36: { why: ["Vice chair of the House Democratic Caucus since 2023, part of the party's top leadership."] },
    cd41: { why: ["Former chair of the Congressional Hispanic Caucus and the first woman of color elected to House Democratic leadership."] },
    cd42: { why: ["Former Long Beach mayor and the lead Democrat on the House Oversight Committee, which investigates misuse of power in the federal government."] },
    cd46: { why: ["Former Orange County supervisor and longtime state legislator with a moderate, business-friendly record."] },
    cd47: { why: ["As a state senator he wrote California's first-in-the-nation 30x30 conservation law and bills protecting domestic-abuse survivors."] },
    cd49: { why: ["Has written more than 30 bipartisan bills signed into law and secured over $1 billion in federal funding for the district."] },
    cd50: { why: ["Former San Diego City Council president with a pragmatic, budget-focused record."] },
    cd51: { why: ["Part of House Democratic leadership and author of a bill to protect the privacy of women's reproductive health data."] },
    cd52: { why: ["As an Assemblymember he wrote the law banning smoking at children's playgrounds and tougher sentences for violent crimes against children."] },
    sd8: { why: ["The first woman in over 20 years to represent most of Sacramento County in the State Senate."] },
    sd20: { why: ["Sits on the Senate budget subcommittee for health and human services. Note: she voted against SB 79, a major bill to allow more homes near transit."] },
    sd30: { why: ["Chair of the Senate Military and Veterans Affairs Committee."] },
    sd38: { why: ["As Encinitas mayor she chaired SANDAG, the San Diego region's transportation and planning agency."] },
    ad2: { why: ["Former Santa Rosa councilmember and mayor who beat the state Democratic Party chair in the 2024 primary."] },
    ad14: { why: ["Former chair of the Assembly Housing Committee."] },
    ad15: { why: ["The first Latina elected to the Martinez City Council. In the Assembly she has written bills on housing and education."] },
    ad16: { why: ["Has authored more than 50 laws, including AB 1666 protecting abortion providers, and chairs the Privacy and Consumer Protection Committee."] },
    ad17: { why: ["Pushed state action to make cities allow more housing and backed legalizing fourplexes on single-family lots."] },
    ad19: { why: ["As a supervisor she led on gun safety, including a ban on firearms near large public events."] },
    ad20: { why: ["Former leader of the Alameda Labor Council, the first Latina in that role."] },
    ad23: { why: ["Wrote the 2022 law tightening the state's recall rules and has focused on voting access."] },
    ad24: { why: ["Pro-housing advocates call him a strong supporter of every major housing bill."] },
    ad25: { why: ["Authored the California Racial Justice Act of 2020, which lets people challenge convictions and sentences tainted by racial bias. It is one of the most important civil-rights laws for Black Californians in a generation.", "Chairs the Assembly Labor and Employment Committee."] },
    ad26: { why: ["First in his family to go to college. Wrote the 2025 law ending misdemeanor charges against parents of chronically absent students, a penalty that fell hardest on struggling families."] },
    ad28: { why: ["Former president of California's association of county elections officials and co-chair of the Secretary of State's voting accessibility committee."] },
    ad30: { why: ["Chairs the Assembly budget subcommittee on health, which oversees about $175 billion in state health spending, including Medi-Cal."] },
    ad38: { why: ["As a Ventura councilmember he voted to oppose Prop 187, the 1994 measure that tried to deny health care and schooling to undocumented immigrants."] },
    ad46: { why: ["Wrote the first-in-the-nation Gun Violence Prevention and School Safety Act, which funds violence prevention in hard-hit communities. Has authored more than 50 laws."] },
    ad48: { why: ["Chairs the Governmental Organization Committee and the Select Committee on Domestic Violence, and has written laws supporting survivors and foster youth."] },
    ad51: { why: ["Former chair of the California League of Conservation Voters board."] },
    ad52: { why: ["The first Filipina elected to the California Legislature and the first in her family to graduate from college in the U.S."] },
    ad64: { why: ["Chairs the Assembly Rules Committee."] },
    ad73: { why: ["Chairs the Utilities and Energy Committee, which oversees electricity and gas bills."] },
    ad76: { why: ["Wrote a 2025 bill to make threats against schools, places of worship and clinics prosecutable, closing a loophole in state law."] },
    ad80: { why: ["First in his family to finish high school and college."] }
  };
  var about = {
    cd5: { "Tom McClintock": "In Congress since 2009 and endorsed by President Trump. As a state legislator he wrote California's lethal-injection death penalty law." },
    sd6: { "Roger Niello": "Incumbent and former Assembly budget negotiator for Republicans with a pragmatic, business-focused record. He wrote a bill letting homeowners strip racist language from old property deeds, which is to his credit. Endorsed by the Sacramento Bee." },
    sd36: { "Tony Strickland": "Incumbent state senator and former Huntington Beach mayor. The state ethics commission found he routed campaign money through county party committees to get around contribution limits, and he chaired a pro-Trump super PAC in 2016." },
    ad1: { "Heather Hadwick": "First-term Assemblymember and farmer who got six bills signed in her first year and more than $100 million for district projects. Endorsed by the Sacramento Bee." },
    ad9: { "Heath Flora": "Former Assembly Republican Leader seeking his final term. Known for bills on firefighter apprenticeships." },
    ad33: { "Alexandra (Ali) Macedo": "First-term Assemblymember and cattle rancher who became Assembly Republican Leader in August 2026." },
    ad70: { "Tri Ta": "Former Westminster mayor and the first Vietnamese American mayor in the U.S., in the Assembly since 2022. He carried a bill honoring Mendez v. Westminster, the landmark school desegregation case, and a law protecting treatment for people with autism. Those are real credits." }
  };
  var whyNot = {
    sd6: { "Roger Niello": "His deed-reform bill shows real goodwill, but on the big votes for our families (health care, voting access, taxes that fund schools) he votes with the Republican caucus. That keeps his record from clearing the bar." },
    ad70: { "Tri Ta": "He has real credits, but he votes with the Republican caucus on health care and voting access. Swift also has the Legislative Black Caucus endorsement." },
    ad33: { "Alexandra (Ali) Macedo": "As Republican Leader she sets her caucus's agenda, which runs against this guide's priorities on health care and voting access." }
  };
  window.GUIDE.contests.forEach(function (c) {
    if (add[c.id]) c.why = c.why.concat(add[c.id].why);
    (c.cands || []).forEach(function (x) {
      if (about[c.id] && about[c.id][x.n]) x.about = about[c.id][x.n];
      if (whyNot[c.id] && whyNot[c.id][x.n]) x.whyNot = whyNot[c.id][x.n];
    });
  });
})();
