# How picks are made

These rules decide every recommendation in the guide. Use them for new races and when updating picks.

## The lens

Weigh what matters most to middle-class Black and other minority families in California:

- the freedom to vote without new barriers
- affordable health care, including Medi-Cal
- building wealth through homeownership
- fair taxes for working and middle-class households
- safe neighborhoods with fair policing and police accountability
- public schools that close achievement gaps
- clean air in warehouse- and freeway-heavy neighborhoods
- reparations and repair for harms to Black Californians

Anything that clearly helps or hurts the Black community (reparations, police reform, voting access and similar) can decide a close race by itself.

## Propositions

1. **Score the issues.** For each measure, score what a YES vote does on each lens issue from -2 (hurts a lot) to +2 (helps a lot), with a one-line reason. Use facts from the official state Voter Information Guide (Legislative Analyst and Attorney General). Official arguments are opinions. Scores live in `src/content-choices.js`.
2. **Add them up.** All lens issues count equally by default (weight 1). Two other issues, lower taxes and less state borrowing, start at weight 0. Readers can set any weight from 0 to 3, and the pick updates.
3. **Decide.** If the net score is at least 1 and the helps-minus-hurts margin is at least a quarter of the total, the issues decide. Otherwise the majority of the NAACP California/Hawaii, California Democratic Party and League of Women Voters decides. If they split evenly, there's no recommendation.
4. **Confidence.**
   - Strong: the issues decide, the group majority agrees, and the net score is at least 2 or the groups are unanimous.
   - Lean: the issues decide and the groups agree, but narrowly; or the issues decide by 2+ while the groups tie; or the groups decide unanimously.
   - Close call: the issues decide but the group majority disagrees; or the groups decide without being unanimous.
5. Show the California Republican Party's position for reference; it isn't part of the tiebreak.
6. Give the strongest case on each side and fact-check common claims (Accurate, Partly accurate, Not accurate, Debated, Not verified).

Results with equal weights (Oct. 7, 2026): YES on 1, 2, 3, 4, 5, 37, 38, 40, 45; NO on 39, 41, 42, 43, 44. Compared with the original list, 4, 5 and 40 changed to YES, 41 changed to NO, and 45 changed to YES.

## Confidence for candidate races

Democrat vs. Republican and judicial retention: Strong. Same party, no Democrat, or a local race: Lean. Local race with limited information: Close call.

## New information

Picks follow these rules, so re-run them whenever the official guide, endorsements or candidate records change, and update the "Last updated" date.

## Democrat vs. Republican

Pick the Democrat, unless the Republican's record is clearly better on the lens issues. A Republican can win on their record. Say why when one doesn't clear the bar.

## Two candidates from the same party

Break the tie in this order:

1. **Trusted endorsements:** the California Legislative Black Caucus (membership or endorsement), the Congressional Black Caucus, the NAACP, local grassroots community organizations and Black nonprofits. A factor decides only when it clearly favors one side.
2. **California Democratic Party endorsement**
3. **Pragmatic and fiscally careful** over the further-left or labor-left candidate
4. **A Black candidate**, when everything above is close
5. **Experience** and a track record

Local professional organizations and unions count after the groups in step 1. An endorsement from an organization that heavily contributes to harming low-income communities counts against a candidate.

## No Democrat on the ballot

Pick using the lens. If the outcome is nearly certain, mark it low impact. If the candidates differ too little to matter, say "No recommendation" and explain.

## Unopposed

Say "Unopposed. No decision needed."

## Viewer-facing wording

Don't name or attribute any source list in the app. Write reasons as this guide's own research.

## Source corrections (reference)

The original source list had errors that were fixed against official candidate lists:

- Governor: "Xavier Becrra" → Xavier Becerra
- State Senate 18: "Steve Padillo" → Steve Padilla
- State Senate 32: "Dr. Tiffini Tate" → Tiffanie Tate
- Colton Joint Unified: Dan Flores runs in Area 2, not Area 1
- San Bernardino Valley MWD: Divisions 1 (short term) and 3, not "Districts"

## Regional wording

Statewide explanations must make sense for any Californian. When a region-specific fact strengthens the case (home prices, air quality, a local ballot measure that shows the stakes), add it as a region or county variant in `src/content-regional.js` and keep a general version under `all`. Never assume the reader lives in the Inland Empire.
