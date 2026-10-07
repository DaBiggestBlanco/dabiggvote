(function () {
  "use strict";
  var G = window.GUIDE, OFFICIAL = window.OFFICIAL || {}, GEO = window.GEO;
  var HOSTED = !!window.FVG_HOSTED;

  var COUNTIES = ["Alameda","Alpine","Amador","Butte","Calaveras","Colusa","Contra Costa","Del Norte","El Dorado","Fresno","Glenn","Humboldt","Imperial","Inyo","Kern","Kings","Lake","Lassen","Los Angeles","Madera","Marin","Mariposa","Mendocino","Merced","Modoc","Mono","Monterey","Napa","Nevada","Orange","Placer","Plumas","Riverside","Sacramento","San Benito","San Bernardino","San Diego","San Francisco","San Joaquin","San Luis Obispo","San Mateo","Santa Barbara","Santa Clara","Santa Cruz","Shasta","Sierra","Siskiyou","Solano","Sonoma","Stanislaus","Sutter","Tehama","Trinity","Tulare","Tuolumne","Ventura","Yolo","Yuba"];
  // Counties entirely inside Board of Equalization District 4.
  var BOE4 = ["Riverside", "Orange", "San Diego", "Imperial"];
  var TYPES = ["cd", "sd", "ad", "boe"];

  var T = {
    en: {
      skip: "Skip to main content", title: "Family Voting Guide", lang: "Español",
      days: function (n) { return n > 1 ? n + " days until Election Day" : n === 1 ? "Election Day is tomorrow" : n === 0 ? "Election Day is today" : "Election Day has passed"; },
      tabBallot: "My ballot", tabList: "My list", tabVote: "How to vote", tabAbout: "About",
      findTitle: "Find your ballot", findHint: "Type your home address for an exact match, or just your ZIP code.",
      hostedHint: "Type your address or ZIP code to see the races on your ballot.",
      findPh: "Address and city, or ZIP code", hostedPh: "Address or ZIP code", findBtn: "Show my ballot", looking: "Looking up your address…",
      privacy: "ZIP codes are matched on your device. A full address is sent only to the U.S. Census Bureau's free address service to find your neighborhood. This guide doesn't save or share it.",
      notFound: "We couldn't find that address. Check the spelling and include the city, or try your ZIP code.",
      blocked: "We couldn't reach the address service. Add your ZIP code to the address, or type just your ZIP.",
      noMatch: "We couldn't find a California ZIP code or city in that. Add your ZIP code, like 92553.",
      privacyHosted: "Your address is matched on your device using its ZIP code or city. Nothing is sent or saved. For an exact street match, use dabiggvote.vercel.app.",
      viaZip: "matched by the ZIP in your address", viaCity: "matched by city; add your ZIP for a closer match",
      zipUnknown: "We don't have that ZIP code for California. Check the number or type your street address.",
      yourBallot: "Your ballot", clear: "Change", exact: "exact match for your address",
      zipOf: function (z) { return "ZIP " + z; },
      split: "Your ZIP code crosses district lines. We picked the district where most people in your ZIP live. Tap another one if it's yours, or type your street address for an exact match.",
      noSenate: "There's no State Senate race in your district this year. Only even-numbered districts vote in 2026.",
      county: "County", cd: "U.S. House", sd: "State Senate", ad: "State Assembly", boe: "Board of Equalization",
      manualTitle: "Set my districts by hand", manualSub: "Pick your county and districts yourself", lookup: "Look up your districts:", any: "Not sure",
      browseAll: "Show every race in California", openAll: "Open all details",
      search: "Search races, names or measures",
      progress: function (d, n) { return d + " of " + n + " races marked done"; },
      startHere: "Type your ZIP code above to add your congressional, legislative and local races. Statewide races are below.",
      pickLbl: "Suggested pick", yes: "Vote YES", no: "Vote NO", yesAll: "Vote YES on all", yesBoth: "Vote YES on both", noRec: "No recommendation",
      why: "Why this pick", whyProp: "Details", hide: "Hide details", done: "Done", markDone: "Mark done",
      low: "Low impact", limited: "Limited info", unopposed: "Unopposed", part: function (p) { return p + " only"; }, inc: "Incumbent",
      whatItDoes: "What it does", yesMeans: "A YES vote means", noMeans: "A NO vote means", cost: "Cost",
      whyPick: "Why it's the suggested pick", others: "The other choices, and why they aren't suggested", whyNot: "Why not:", note: "Good to know", check: "Check your sample ballot", sources: "Sources",
      races: function (n) { return n + (n === 1 ? " race" : " races"); },
      empty: "No races match your search.",
      listTitle: "Your take-along list", listHint: "Shows your own pick wherever you chose one, and the suggested pick everywhere else. Bring it with you, screenshot it, or copy it into a text.",
      myPick: "My pick", mineTag: "your pick", sugWas: function (p) { return "suggested: " + p; }, mineCopy: function (p) { return "my pick; suggested " + p; },
      caseYes: "The case for YES", caseNo: "The case for NO", claimsH: "Claims you may hear, checked against the official voter guide",
      verdict: { "true": "Accurate", partly: "Partly accurate", "false": "Not accurate", debated: "Debated", unverified: "Not verified" },
      groupsH: "What major groups recommend", forYou: "For you",
      conf: { strong: "Strong pick", lean: "Lean", close: "Close call" }, confShort: { strong: "Strong", lean: "Lean", close: "Close" },
      byWeights: "Changed by your weights",
      howMade: "How the suggested pick was made",
      eff: { "2": "Helps a lot", "1": "Helps", "0": "Cuts both ways", "-1": "Hurts", "-2": "Hurts a lot" },
      offNote: "you set this to not count",
      noEffect: "No clear effect on:",
      tally: function (h, u) { return "Helps: " + h + " · Hurts: " + u; },
      byLens: function (p) { return "The issues point to " + p + "."; },
      byGroups: function (p) { return "The issues are close, so the groups below break the tie: " + p + "."; },
      noCall: "The issues are close and the groups split, so there's no recommendation.",
      confWhy: { strong: "The issues clearly point this way and most groups agree.", lean: "The issues point this way, but not by much, or the groups are split.", close: "The issues are close, or the groups disagree with where they point." },
      tieNote: "The NAACP California/Hawaii, California Democratic Party and League of Women Voters break close calls by majority. The Republican Party's position is shown for reference.",
      ruleH: "How this pick was made",
      rules: {
        dr: "Democrat vs. Republican: the Democrat, unless the Republican's record is clearly better on the issues this guide weighs.",
        same: "Same party: trusted community groups first (Black Caucus, NAACP, local Black and grassroots groups), then the California Democratic Party's endorsement, then the more practical, budget-minded candidate, then a Black candidate when it's still close, then experience.",
        nodem: "No Democrat on the ballot: the candidate closer to the issues this guide weighs.",
        judges: "Judges: keep them unless there's a serious reason to remove one.",
        local: "Local race: weighed against the issues this guide weighs, using records and endorsements."
      },
      weightsH: "How much each issue counts", weightsHint: "Every issue counts the same until you change it. Candidate picks follow the written rules.",
      wLvl: ["Off", "Normal", "More", "Most"], wChanged: function (l) { return "Changed by your weights: " + l; }, wNone: "No suggested picks have changed yet.", otherIssues: "Other issues some voters weigh (off unless you turn them on)",
      resetW: "Reset to equal",
      perTitle: "Tailor it to you", perSub: "Optional · weigh the issues your way, add notes for your household", perTabs: ["Weights", "About you", "Summary"], perHint: "All optional, and nothing leaves this device. Weights change how propositions are scored. About you only adds notes.",
      aboutYou: "About you", optYes: "Yes", optNo: "No", clearAns: "Clear my answers",
      lineup: "How the measures line up", colSug: "Suggested", colConf: "Confidence", colMine: "My pick",
      copy: "Copy as text", copied: "Copied. Paste it into a text or email.", copyFail: "Copy isn't allowed here. Select the text below and copy it.",
      election: "Election Day: Tuesday, Nov. 3, 2026",
      party: { "Democratic": "Democrat", "Republican": "Republican", "Non-Partisan": "Nonpartisan", "Green": "Green", "Peace and Freedom": "Peace & Freedom", "Libertarian": "Libertarian", "No party preference": "No party preference", "": "" },
      district: function (n) { return "District " + n; },
      textSize: "Text size", aboutTitle: "How this guide picks"
    },
    es: {
      skip: "Ir al contenido principal", title: "Guía Familiar para Votar", lang: "English",
      days: function (n) { return n > 1 ? "Faltan " + n + " días para votar" : n === 1 ? "La elección es mañana" : n === 0 ? "Hoy es la elección" : "La elección ya pasó"; },
      tabBallot: "Mi boleta", tabList: "Mi lista", tabVote: "Cómo votar", tabAbout: "Acerca de",
      findTitle: "Encuentre su boleta", findHint: "Escriba su dirección para un resultado exacto, o solo su código postal.",
      hostedHint: "Escriba su dirección o código postal para ver las contiendas de su boleta.",
      findPh: "Dirección y ciudad, o código postal", hostedPh: "Dirección o código postal", findBtn: "Ver mi boleta", looking: "Buscando su dirección…",
      privacy: "Los códigos postales se buscan en su dispositivo. Una dirección completa solo se envía al servicio gratuito de la Oficina del Censo de EE. UU. para encontrar su vecindario. Esta guía no la guarda ni la comparte.",
      notFound: "No encontramos esa dirección. Revise la ortografía e incluya la ciudad, o pruebe con su código postal.",
      blocked: "No pudimos conectar con el servicio de direcciones. Agregue su código postal a la dirección o escriba solo el código.",
      noMatch: "No encontramos un código postal o ciudad de California. Agregue su código postal, ej. 92553.",
      privacyHosted: "Su dirección se busca en su dispositivo por su código postal o ciudad. No se envía ni se guarda nada. Para una búsqueda exacta por calle, use dabiggvote.vercel.app.",
      viaZip: "según el código postal de su dirección", viaCity: "según la ciudad; agregue su código postal para más precisión",
      zipUnknown: "No tenemos ese código postal para California. Revise el número o escriba su dirección.",
      yourBallot: "Su boleta", clear: "Cambiar", exact: "resultado exacto para su dirección",
      zipOf: function (z) { return "Código postal " + z; },
      split: "Su código postal cruza límites de distritos. Elegimos el distrito donde vive la mayoría. Toque otro si es el suyo, o escriba su dirección para un resultado exacto.",
      noSenate: "No hay elección del Senado estatal en su distrito este año. Solo votan los distritos pares en 2026.",
      county: "Condado", cd: "Cámara de EE. UU.", sd: "Senado estatal", ad: "Asamblea estatal", boe: "Junta de Igualación",
      manualTitle: "Elegir mis distritos a mano", manualSub: "Elija usted su condado y distritos", lookup: "Busque sus distritos:", any: "No sé",
      browseAll: "Mostrar todas las contiendas de California", openAll: "Abrir todos los detalles",
      search: "Buscar contiendas, nombres o medidas",
      progress: function (d, n) { return d + " de " + n + " contiendas marcadas"; },
      startHere: "Escriba su código postal arriba para agregar sus contiendas del Congreso, la Legislatura y locales. Las contiendas estatales están abajo.",
      pickLbl: "Selección sugerida", yes: "Vote SÍ", no: "Vote NO", yesAll: "Vote SÍ a todos", yesBoth: "Vote SÍ a ambos", noRec: "Sin recomendación",
      why: "Por qué", whyProp: "Detalles", hide: "Ocultar detalles", done: "Listo", markDone: "Marcar listo",
      low: "Bajo impacto", limited: "Poca información", unopposed: "Sin oposición", part: function (p) { return "Solo " + p; }, inc: "En funciones",
      whatItDoes: "Qué hace", yesMeans: "Votar SÍ significa", noMeans: "Votar NO significa", cost: "Costo",
      whyPick: "Por qué es la selección sugerida", others: "Las otras opciones y por qué no se sugieren", whyNot: "Por qué no:", note: "Bueno saber", check: "Revise su boleta de muestra", sources: "Fuentes",
      races: function (n) { return n + (n === 1 ? " contienda" : " contiendas"); },
      empty: "Ninguna contienda coincide con su búsqueda.",
      listTitle: "Su lista para llevar", listHint: "Muestra su propia selección donde eligió una, y la sugerida en lo demás. Llévela, tome una captura o cópiela en un mensaje.",
      myPick: "Mi selección", mineTag: "su selección", sugWas: function (p) { return "sugerida: " + p; }, mineCopy: function (p) { return "mi selección; sugerida " + p; },
      caseYes: "Argumentos a favor (SÍ)", caseNo: "Argumentos en contra (NO)", claimsH: "Afirmaciones que puede oír, verificadas con la guía oficial",
      verdict: { "true": "Correcto", partly: "Parcialmente correcto", "false": "Incorrecto", debated: "En debate", unverified: "Sin verificar" },
      groupsH: "Qué recomiendan grupos importantes", forYou: "Para usted",
      conf: { strong: "Selección firme", lean: "Inclinación", close: "Reñida" }, confShort: { strong: "Firme", lean: "Inclin.", close: "Reñida" },
      byWeights: "Cambió por sus pesos",
      howMade: "Cómo se hizo la selección sugerida",
      eff: { "2": "Ayuda mucho", "1": "Ayuda", "0": "Ambos lados", "-1": "Perjudica", "-2": "Perjudica mucho" },
      offNote: "usted lo puso en no cuenta",
      noEffect: "Sin efecto claro en:",
      tally: function (h, u) { return "Ayuda: " + h + " · Perjudica: " + u; },
      byLens: function (p) { return "Los temas apuntan a " + p + "."; },
      byGroups: function (p) { return "Los temas están parejos, así que los grupos de abajo desempatan: " + p + "."; },
      noCall: "Los temas están parejos y los grupos divididos, así que no hay recomendación.",
      confWhy: { strong: "Los temas apuntan claramente en esta dirección y la mayoría de los grupos coincide.", lean: "Los temas apuntan en esta dirección, pero por poco, o los grupos están divididos.", close: "Los temas están parejos, o los grupos no coinciden con la dirección de los temas." },
      tieNote: "La NAACP California/Hawái, el Partido Demócrata de California y la Liga de Mujeres Votantes desempatan por mayoría. La posición del Partido Republicano se muestra como referencia.",
      ruleH: "Cómo se hizo esta selección",
      rules: {
        dr: "Demócrata contra republicano: el demócrata, salvo que el historial del republicano sea claramente mejor en los temas que pesa esta guía.",
        same: "Mismo partido: primero grupos comunitarios de confianza (Caucus Afroamericano, NAACP, grupos locales), luego el respaldo del Partido Demócrata de California, luego el candidato más práctico y prudente, luego un candidato afroamericano si sigue parejo, y por último la experiencia.",
        nodem: "Sin demócrata en la boleta: el candidato más cercano a los temas que pesa esta guía.",
        judges: "Jueces: mantenerlos salvo que haya una razón seria para destituir a alguno.",
        local: "Contienda local: comparada con los temas que pesa esta guía, según historial y respaldos."
      },
      weightsH: "Cuánto cuenta cada tema", weightsHint: "Todos los temas cuentan igual hasta que lo cambie. Las selecciones de candidatos siguen las reglas escritas.",
      wLvl: ["No", "Normal", "Más", "Mucho"], wChanged: function (l) { return "Cambiaron por sus pesos: " + l; }, wNone: "Ninguna selección sugerida ha cambiado.", otherIssues: "Otros temas que algunos votantes pesan (apagados salvo que los active)",
      resetW: "Volver a igual",
      perTitle: "Personalícelo", perSub: "Opcional · pese los temas a su manera y agregue notas para su hogar", perTabs: ["Pesos", "Sobre usted", "Resumen"], perHint: "Todo es opcional y nada sale de este dispositivo. Los pesos cambian cómo se califican las proposiciones. Sobre usted solo agrega notas.",
      aboutYou: "Sobre usted", optYes: "Sí", optNo: "No", clearAns: "Borrar mis respuestas",
      lineup: "Cómo se alinean las medidas", colSug: "Sugerida", colConf: "Confianza", colMine: "Mi selección",
      copy: "Copiar como texto", copied: "Copiado. Péguelo en un mensaje o correo.", copyFail: "No se permite copiar aquí. Seleccione el texto de abajo y cópielo.",
      election: "Día de la elección: martes 3 de noviembre de 2026",
      esNote: "Los detalles de la investigación están en inglés.",
      party: { "Democratic": "Demócrata", "Republican": "Republicano", "Non-Partisan": "No partidista", "Green": "Verde", "Peace and Freedom": "Paz y Libertad", "Libertarian": "Libertario", "No party preference": "Sin preferencia", "": "" },
      district: function (n) { return "Distrito " + n; },
      textSize: "Tamaño del texto", aboutTitle: "Cómo elige esta guía"
    }
  };
  var SEC = {
    en: { props: "Statewide propositions", state: "Statewide offices", courts: "Judges", house: "U.S. House", senate: "State Senate", assembly: "State Assembly", riverside: "Riverside County & cities", sanbernardino: "San Bernardino County & cities" },
    es: { props: "Proposiciones estatales", state: "Cargos estatales", courts: "Jueces", house: "Cámara de Representantes de EE. UU.", senate: "Senado estatal", assembly: "Asamblea estatal", riverside: "Condado y ciudades de Riverside", sanbernardino: "Condado y ciudades de San Bernardino" }
  };
  var SECTIONS = ["props", "state", "courts", "house", "senate", "assembly", "riverside", "sanbernardino"];
  var SEC_OF = { cd: "house", sd: "senate", ad: "assembly", boe: "state" };

  // ── state ──
  var S = { lang: "en", tab: "ballot", size: 0, county: "", cd: "", sd: "", ad: "", boe: "", all: false, open: false, q: "", geo: null, done: {}, mine: {}, prof: {}, w: {} };
  var expanded = {};
  var PERSIST = ["lang", "size", "county", "cd", "sd", "ad", "boe", "all", "open", "geo", "done", "mine", "prof", "w"];
  function load() {
    try { var v = JSON.parse(localStorage.getItem("fvg2026v2") || "{}"); PERSIST.forEach(function (k) { if (k in v) S[k] = v[k]; }); } catch (e) {}
    ["done", "mine", "prof", "w"].forEach(function (k) { if (!S[k] || typeof S[k] !== "object") S[k] = {}; });
    var h = (location.hash || "").slice(1);
    if (["ballot", "list", "vote", "about"].indexOf(h) >= 0) S.tab = h;
  }
  function save() {
    try {
      var c = {}; PERSIST.forEach(function (k) { c[k] = S[k]; });
      if (c.geo) { c.geo = JSON.parse(JSON.stringify(c.geo)); delete c.geo.label; }
      localStorage.setItem("fvg2026v2", JSON.stringify(c));
    } catch (e) {}
  }

  var t = function (k) { return T[S.lang][k]; };
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function $(sel) { return document.querySelector(sel); }
  function located() { return !!(S.geo || S.county || S.cd || S.sd || S.ad || S.boe); }
  // Region-aware text: a string, or an object keyed by county, region or "all".
  function rt(v) {
    if (v == null || typeof v === "string") return v;
    return v[S.county] || v[G.regionOf ? G.regionOf(S.county) : ""] || v.all;
  }
  function byId(id) { for (var i = 0; i < G.contests.length; i++) if (G.contests[i].id === id) return G.contests[i]; }

  // ── which races show ──
  function inScope(c) {
    if (S.all) return true;
    switch (c.scope) {
      case "all": return true;
      case "cd": case "sd": case "ad": case "boe": return !!S[c.scope] && +S[c.scope] === c.n;
      case "county": return !!S.county && c.counties.indexOf(S.county) >= 0;
      case "local":
        if (!S.county || S.county !== c.county) return false;
        if (!S.geo || !c.geo) return true;
        return (c.geo.pl || []).some(function (p) { return S.geo.pl.indexOf(p) >= 0; }) || (c.geo.sch || []).some(function (p) { return S.geo.sch.indexOf(p) >= 0; });
    }
    return true;
  }
  function matches(c) {
    if (!S.q) return true;
    var hay = [c.title, c.sub, sugg(c), rt(c.quick), c.place, (c.cands || []).map(function (x) { return x.n; }).join(" ")].join(" ").toLowerCase();
    return S.q.toLowerCase().split(/\s+/).every(function (w) { return hay.indexOf(w) >= 0; });
  }
  function visible() { return G.contests.filter(function (c) { return inScope(c) && matches(c); }); }
  function countable(list) { return list.filter(function (c) { return !c.unopposed && sugg(c) !== "No recommendation"; }); }

  // ── rendering helpers ──
  function pickKind(p) { return p === "NO" ? "no" : /^YES/.test(p) ? "yes" : p === "No recommendation" ? "none" : "name"; }
  function pickText(p) {
    if (p === "YES") return t("yes"); if (p === "NO") return t("no");
    if (p === "YES on all") return t("yesAll"); if (p === "YES on both") return t("yesBoth");
    if (p === "No recommendation") return t("noRec");
    return p;
  }
  function shortPick(p) {
    if (pickKind(p) === "none") return "—";
    if (S.lang === "es") { if (p === "YES") return "SÍ"; if (p === "YES on all") return "SÍ a todos"; if (p === "YES on both") return "SÍ a ambos"; }
    return p;
  }
  function secName(id) { return SEC[S.lang][id]; }

  // ── my picks and personal notes ──
  var CH = G.CHOICE || { groups: [], profile: [], priorities: [] };
  function seats(c) { return (c.cands || []).filter(function (x) { return x.pick; }).length || 1; }
  function mineOpts(c) {
    if (c.unopposed || /^YES on/.test(c.pick)) return [];
    if (c.sec === "props" || c.pick === "YES" || c.pick === "NO") return ["YES", "NO"];
    return (c.cands || []).length > 1 ? c.cands.map(function (x) { return x.n; }) : [];
  }
  function mineList(c) { var m = S.mine[c.id]; return m == null ? [] : [].concat(m); }
  function mineText(c) { var m = mineList(c); return m.length ? m.map(shortPick).join(", ") : ""; }
  function finalPick(c) { return mineText(c) || shortPick(sugg(c)); }
  function differs(c) {
    var m = mineList(c); if (!m.length) return false;
    var sug = (c.cands || []).filter(function (x) { return x.pick; }).map(function (x) { return x.n; });
    if (!sug.length) sug = [sugg(c)];
    return m.slice().sort().join("|") !== sug.slice().sort().join("|");
  }
  // ── how suggested picks are made ──
  function crit(id) { return CH.criteria.filter(function (x) { return x.id === id; })[0]; }
  function wOf(id) { return id in S.w ? S.w[id] : (crit(id) && crit(id).lens ? 1 : 0); }
  function customW() { return Object.keys(S.w).some(function (k) { return S.w[k] !== (crit(k) && crit(k).lens ? 1 : 0); }); }
  // Propositions: add up helps and hurts by weight; if the issues are close, the tiebreak groups decide by majority.
  function evaluate(c, useDefault) {
    var pro = 0, con = 0;
    Object.keys(c.score).forEach(function (id) {
      var w = useDefault ? (crit(id).lens ? 1 : 0) : wOf(id), v = c.score[id][0] * w;
      if (v > 0) pro += v; else con -= v;
    });
    var net = pro - con, m = pro + con ? net / (pro + con) : 0, y = 0, n = 0;
    (CH.tiebreak || []).forEach(function (g) { var v = c.groups[g]; if (v === "YES") y++; else if (v === "NO") n++; });
    var gSide = y > n ? "YES" : n > y ? "NO" : null, unan = y + n >= 2 && (!y || !n);
    var r = { pro: pro, con: con, net: net };
    if (Math.abs(net) >= 1 && Math.abs(m) >= 0.25) {
      r.pick = net > 0 ? "YES" : "NO"; r.by = "lens";
      var agree = gSide === r.pick;
      r.conf = agree && (Math.abs(net) >= 2 || unan) ? "strong" : agree || (!gSide && Math.abs(net) >= 2) ? "lean" : "close";
    } else if (gSide) { r.pick = gSide; r.by = "groups"; r.conf = unan ? "lean" : "close"; }
    else { r.pick = "No recommendation"; r.by = "none"; r.conf = null; }
    return r;
  }
  function sugg(c) { return c.score ? evaluate(c).pick : c.pick; }
  function changedByW(c) { return !!c.score && customW() && evaluate(c).pick !== evaluate(c, true).pick; }
  function ruleOf(c) {
    if (c.unopposed || c.pick === "No recommendation" || c.score) return null;
    if (/^YES on/.test(c.pick)) return "judges";
    var ps = (c.cands || []).map(function (x) { return x.p; }).filter(Boolean);
    if (!ps.length) return "local";
    if (ps.indexOf("Democratic") < 0) return "nodem";
    if (ps.indexOf("Republican") >= 0) return "dr";
    return "same";
  }
  function confOf(c) {
    if (c.score) return evaluate(c).conf;
    if (c.conf) return c.conf;
    var r = ruleOf(c);
    return r === "dr" || r === "judges" ? "strong" : r === "local" && c.depth === "limited" ? "close" : r ? "lean" : null;
  }
  function linkOf(c) { return (CH.links || []).filter(function (l) { return l.ids.indexOf(c.id) >= 0; })[0]; }
  function clashText(l) {
    var lt = l[S.lang] || l.en, first = l.ids[0], out = [];
    if ((mineList(byId(first))[0] || sugg(byId(first))) !== "YES") return "";
    l.ids.slice(1).forEach(function (id) { if ((mineList(byId(id))[0] || sugg(byId(id))) === "YES") out.push(id.slice(1)); });
    return out.length ? lt.clash.split("{x}").join(out.join(S.lang === "es" ? " y " : " and ")) : "";
  }
  function linkBox(c, full) {
    var l = linkOf(c); if (!l) return "";
    var lt = l[S.lang] || l.en, cl = clashText(l);
    return '<div class="linkbox"><b>🔗 ' + esc(lt.title) + "</b>" + (full ? "<ul>" + lt.body.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" : "<div>" + esc(lt.body[1]) + "</div>") +
      (cl ? '<div class="clash">' + esc(cl) + "</div>" : "") + "</div>";
  }
  function notesFor(c) { return (c.me || []).filter(function (m) { return S.prof[m[0]] === m[1]; }).map(function (m) { return m[2]; }); }
  function forYou(c) {
    var notes = notesFor(c);
    if (!notes.length) return "";
    return '<div class="foryou"><b class="fy-h">' + esc(t("forYou")) + "</b><ul>" + notes.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></div>";
  }
  function scorecard(c) {
    var r = evaluate(c), es = S.lang === "es", rows = [], none = [];
    CH.criteria.forEach(function (cr) {
      var sc = c.score[cr.id], w = wOf(cr.id);
      if (!sc) { if (cr.lens && w) none.push(es ? cr.es : cr.en); return; }
      if (!cr.lens && !w) return;
      var k = sc[0] > 0 ? "yes" : sc[0] < 0 ? "no" : "";
      rows.push('<tr><td><b>' + esc(es ? cr.es : cr.en) + '</b><div class="sc-why">' + esc(rt(sc[1])) + "</div></td><td class=\"sc-eff " + k + (w ? "" : " off") + '">' + esc(t("eff")[String(sc[0])]) + (w !== 1 ? "<small>×" + w + (w ? "" : " · " + esc(t("offNote"))) + "</small>" : "") + "</td></tr>");
    });
    var res = r.by === "lens" ? t("byLens")(pickText(r.pick)) : r.by === "groups" ? t("byGroups")(pickText(r.pick)) : t("noCall");
    return "<div><h3>" + esc(t("howMade")) + '</h3><p class="fine">' + esc(es ? "Efecto de votar SÍ en cada tema:" : "What a YES vote does on each issue:") + '</p><table class="scorecard">' + rows.join("") + "</table>" +
      (none.length ? '<p class="fine">' + esc(t("noEffect")) + " " + esc(none.join(", ")) + "</p>" : "") +
      '<div class="verdict-box"><div><b>' + esc(t("tally")(r.pro, r.con)) + "</b></div><div>" + esc(res) + "</div>" +
      (r.conf ? '<div><span class="tag conf-' + r.conf + '">' + esc(t("conf")[r.conf]) + "</span> " + esc(t("confWhy")[r.conf]) + "</div>" : "") + "</div></div>";
  }
  function mineRow(c) {
    var opts = mineOpts(c); if (!opts.length) return "";
    var cur = mineList(c);
    return '<div class="mine" role="group" aria-label="' + esc(t("myPick") + ": " + c.title) + '"><span class="mine-lbl">' + esc(t("myPick")) + "</span>" +
      opts.map(function (v) {
        var on = cur.indexOf(v) >= 0, k = v === "YES" ? " y" : v === "NO" ? " n" : "";
        return '<button type="button" class="mchip' + k + '" data-mine="' + esc(c.id) + '" data-v="' + esc(v) + '" aria-pressed="' + on + '">' + esc(shortPick(v)) + "</button>";
      }).join("") + "</div>";
  }
  function verdictLbl(v) { return t("verdict")[v] || v; }
  function groupVal(v) { return v === "YES" ? t("yes") : v === "NO" ? t("no") : v; }
  function candLine(x) {
    var bits = [];
    if (x.p) bits.push(T[S.lang].party[x.p] || x.p);
    if (x.d) bits.push(x.d);
    if (x.inc) bits.push(t("inc"));
    return bits.length ? " <small>· " + esc(bits.join(" · ")) + "</small>" : "";
  }
  var ICON_CHEV = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 15.5 5.5 9l1.4-1.4 5.1 5.1 5.1-5.1L18.5 9 12 15.5Z"/></svg>';
  var ICON_CHECK = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 16.2 5.3 12l-1.4 1.4 5.6 5.6L20.1 8.4 18.7 7 9.5 16.2Z"/></svg>';
  var ICON_BOX = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm0 2v14h14V5H5Z"/></svg>';

  function detail(c) {
    var h = [];
    if (S.lang === "es") h.push('<p class="es-note">' + esc(T.es.esNote) + "</p>");
    if (c.note) h.push('<div class="note"><b>' + esc(t("note")) + ":</b> " + esc(c.note) + "</div>");
    if (c.verify) h.push('<div class="note warn"><b>' + esc(t("check")) + ":</b> " + esc(c.verify) + "</div>");
    if (c.what) {
      h.push("<div><h3>" + esc(t("whatItDoes")) + "</h3><p>" + esc(c.what.summary) + "</p>" +
        '<div class="yn"><div class="y"><b>' + esc(t("yesMeans")) + "</b>" + esc(c.what.yes) + '</div><div class="n"><b>' + esc(t("noMeans")) + "</b>" + esc(c.what.no) + "</div><div><b>" + esc(t("cost")) + "</b>" + esc(c.what.fiscal) + "</div></div></div>");
    }
    if (linkOf(c)) h.push(linkBox(c, true));
    if (c.score) h.push(scorecard(c));
    var rl = ruleOf(c), cfc = confOf(c);
    if (rl) h.push('<div class="note"><b>' + esc(t("ruleH")) + ":</b> " + esc(t("rules")[rl]) + (cfc ? ' <span class="tag conf-' + cfc + '">' + esc(t("conf")[cfc]) + "</span>" : "") + "</div>");
    if (c.sides) {
      h.push('<div class="sides"><div class="side y"><h3>' + esc(t("caseYes")) + "</h3><ul>" + c.sides.yes.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + '</ul></div><div class="side n"><h3>' + esc(t("caseNo")) + "</h3><ul>" + c.sides.no.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></div></div>");
    }
    if (c.claims && c.claims.length) {
      h.push("<div><h3>" + esc(t("claimsH")) + '</h3><div class="claims">' + c.claims.map(function (x) {
        return '<div class="claim"><div class="claim-q">“' + esc(x[0]) + '”</div><span class="verdict v-' + x[1] + '">' + esc(verdictLbl(x[1])) + "</span><div>" + esc(x[2]) + "</div></div>";
      }).join("") + "</div></div>");
    }
    if (c.groups) {
      h.push("<div><h3>" + esc(t("groupsH")) + '</h3><p class="fine">' + esc(t("tieNote")) + '</p><table class="groups">' + CH.groups.map(function (g) {
        var v = c.groups[g.id] || "—";
        return '<tr><td><a href="' + esc(g.url) + '" target="_blank" rel="noopener">' + esc(g.n) + '</a></td><td class="gv ' + (v === "YES" ? "yes" : v === "NO" ? "no" : "") + '">' + esc(groupVal(v)) + "</td></tr>";
      }).join("") + "</table></div>");
    }
    if (c.why) h.push("<div><h3>" + esc(t("whyPick")) + "</h3><ul>" + c.why.map(function (w) { return "<li>" + esc(rt(w)) + "</li>"; }).join("") + "</ul></div>");
    var chosen = (c.cands || []).filter(function (x) { return x.pick; });
    var alts = (c.other || []).concat((c.cands || []).filter(function (x) { return !x.pick; }));
    if (alts.length || chosen.length) {
      h.push("<div><h3>" + esc(t("others")) + '</h3><div class="alts">' +
        chosen.map(function (x) { return '<div class="alt chosen"><div class="who">✓ ' + esc(x.n) + candLine(x) + "</div></div>"; }).join("") +
        alts.map(function (x) {
          return '<div class="alt"><div class="who">' + esc(x.n) + candLine(x) + "</div>" + (x.about ? "<div>" + esc(rt(x.about)) + "</div>" : "") +
            (x.whyNot ? '<div class="whynot"><b>' + esc(t("whyNot")) + "</b> " + esc(rt(x.whyNot)) + "</div>" : "") + "</div>";
        }).join("") + "</div></div>");
    }
    if (c.src && c.src.length) h.push('<div class="src"><h3>' + esc(t("sources")) + "</h3><ul>" + c.src.map(function (s) { return '<li><a href="' + esc(s[1]) + '" target="_blank" rel="noopener">' + esc(s[0]) + "</a></li>"; }).join("") + "</ul></div>");
    return h.join("");
  }

  function doneButton(id, on) {
    return (on ? ICON_CHECK : ICON_BOX) + "<span>" + esc(on ? t("done") : t("markDone")) + "</span>";
  }

  function whyLbl(c) { return c.sides ? t("whyProp") : t("why"); }
  function card(c) {
    var open = S.open || !!expanded[c.id], done = !!S.done[c.id], sp = sugg(c), kind = pickKind(sp);
    var qb = c.quickBy && c.quickBy[sp], quick = qb ? qb[S.lang === "es" ? 1 : 0] : S.lang === "es" && c.quick_es ? c.quick_es : rt(c.quick);
    var cf = confOf(c);
    var tags = [];
    if (c.part) tags.push('<span class="tag part">' + esc(t("part")(c.part)) + "</span>");
    if (c.unopposed) tags.push('<span class="tag">' + esc(t("unopposed")) + "</span>");
    else if (c.impact === "low") tags.push('<span class="tag low">' + esc(t("low")) + "</span>");
    if (cf) tags.unshift('<span class="tag conf-' + cf + '">' + esc(t("conf")[cf]) + "</span>");
    if (changedByW(c)) tags.unshift('<span class="tag part">' + esc(t("byWeights")) + "</span>");
    if (c.depth === "limited") tags.push('<span class="tag">' + esc(t("limited")) + "</span>");
    return '<article class="race' + (done ? " done" : "") + '" id="c-' + c.id + '">' +
      '<div class="race-main">' +
        '<div><h3 class="race-title">' + esc(c.title) + "</h3>" + (c.sub ? '<div class="race-sub">' + esc(c.sub) + "</div>" : "") + "</div>" +
        '<div class="pick ' + kind + '"><span class="oval" aria-hidden="true"></span><span><span class="lbl">' + esc(t("pickLbl")) + "</span> " + esc(pickText(sp)) + "</span></div>" +
        '<p class="race-quick">' + esc(quick) + "</p>" +
        (tags.length ? '<div class="tags">' + tags.join("") + "</div>" : "") +
        linkBox(c, false) + forYou(c) + mineRow(c) +
      "</div>" +
      '<div class="race-actions">' +
        '<button type="button" class="why-btn" data-why="' + c.id + '" aria-expanded="' + open + '" aria-controls="d-' + c.id + '">' + ICON_CHEV + "<span>" + esc(open ? t("hide") : whyLbl(c)) + "</span></button>" +
        '<button type="button" class="done-btn" data-done="' + c.id + '" aria-pressed="' + done + '">' + doneButton(c.id, done) + "</button>" +
      "</div>" +
      '<div class="detail" id="d-' + c.id + '"' + (open ? "" : " hidden") + ">" + (open ? detail(c) : "") + "</div>" +
    "</article>";
  }

  function officialCard(title, list) {
    return '<article class="race"><div class="race-main"><h3 class="race-title">' + esc(title) + '</h3><div class="alts">' +
      list.map(function (x) { return '<div class="alt"><div class="who">' + esc(x[0]) + candLine({ p: x[1], d: x[2], inc: x[3] }) + "</div></div>"; }).join("") + "</div></div></article>";
  }

  // Notes for the viewer's districts that have no race or no guide entry.
  function extras() {
    var out = {};
    if (S.all || S.q) return out;
    if (S.sd && +S.sd % 2 === 1) out.senate = '<p class="note">' + esc(t("noSenate")) + "</p>";
    TYPES.forEach(function (k) {
      if (!S[k]) return;
      var covered = G.contests.some(function (c) { return c.scope === k && c.n === +S[k]; });
      var list = OFFICIAL[k + S[k]];
      if (!covered && list) out[SEC_OF[k]] = officialCard(t(k) + ", " + t("district")(S[k]), list);
    });
    return out;
  }

  function renderProgress(list) {
    var counted = countable(list), d = counted.filter(function (c) { return S.done[c.id]; }).length;
    $("#progress").innerHTML = located() && !S.all && counted.length ?
      "<span>" + esc(t("progress")(d, counted.length)) + '</span><div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="' + counted.length + '" aria-valuenow="' + d + '"><span style="width:' + Math.round(d / counted.length * 100) + '%"></span></div>' : "";
  }

  function renderBallot() {
    var list = visible(), ex = extras(), h = [], jump = [];
    SECTIONS.forEach(function (id) {
      var cs = list.filter(function (c) { return c.sec === id; });
      if (!cs.length && !ex[id]) return;
      jump.push('<a class="chip" href="#s-' + id + '">' + esc(secName(id)) + "</a>");
      h.push('<section class="sec" id="s-' + id + '"><div class="sec-head"><h2>' + esc(secName(id)) + "</h2>" + (cs.length ? "<span>" + esc(t("races")(cs.length)) + "</span>" : "") + "</div>" + (ex[id] || "") + cs.map(card).join("") + "</section>");
    });
    if (!located() && !S.all && !S.q) h.unshift('<p class="note">' + esc(t("startHere")) + "</p>");
    $("#ballot-list").innerHTML = h.join("") || '<p class="empty">' + esc(t("empty")) + "</p>";
    $("#jump").innerHTML = jump.length > 1 ? jump.join("") : "";
    renderProgress(list);
  }

  function renderSummary() {
    var box = $("#summary"), g = S.geo;
    $("#find-card").hidden = located();
    if (!located()) { box.hidden = true; return; }
    box.hidden = false;
    var where = g && g.label ? (g.kind === "zip" ? t("zipOf")(g.label) : g.label) : (S.county ? S.county + " County" : "");
    var chips = [];
    if (S.county) chips.push('<span class="chip static">' + esc(S.county) + "</span>");
    TYPES.forEach(function (k) { if (S[k]) chips.push('<span class="chip static">' + esc(t(k) + " " + S[k]) + "</span>"); });
    var split = [];
    if (g && g.opts) TYPES.forEach(function (k) {
      var o = g.opts[k]; if (!o || o.length < 2) return;
      split.push('<div class="split-row"><span>' + esc(t(k)) + "</span>" + o.map(function (x) {
        return '<button type="button" class="chip" data-type="' + k + '" data-n="' + x[0] + '" aria-pressed="' + (String(S[k]) === String(x[0])) + '">' + esc(t("district")(x[0])) + " <small>" + Math.round(x[1] * 100) + "%</small></button>";
      }).join("") + "</div>");
    });
    box.innerHTML = '<div class="sum-head"><div style="flex:1"><h2>' + esc(t("yourBallot")) + "</h2>" +
      (where ? '<div class="sum-where">' + esc(where) + (g && g.kind === "address" ? " · " + esc(t("exact")) : g && g.via ? " · " + esc(t(g.via)) : "") + "</div>" : "") +
      '</div><button type="button" class="btn ghost" id="clear">' + esc(t("clear")) + "</button></div>" +
      '<div class="chips">' + chips.join("") + "</div>" +
      (split.length ? '<div class="split-note"><div>' + esc(t("split")) + "</div>" + split.join("") + "</div>" : "");
  }

  function opt(v, label, cur) { return '<option value="' + esc(v) + '"' + (String(cur) === String(v) ? " selected" : "") + ">" + esc(label) + "</option>"; }
  function range(a, b) { var r = []; for (var i = a; i <= b; i++) r.push(i); return r; }
  function renderManual() {
    var anyO = function (cur) { return opt("", t("any"), cur); };
    $("#f-county").innerHTML = anyO(S.county) + COUNTIES.map(function (c) { return opt(c, c, S.county); }).join("");
    $("#f-cd").innerHTML = anyO(S.cd) + range(1, 52).map(function (n) { return opt(n, t("district")(n), S.cd); }).join("");
    $("#f-sd").innerHTML = anyO(S.sd) + range(1, 40).map(function (n) { return opt(n, t("district")(n), S.sd); }).join("");
    $("#f-ad").innerHTML = anyO(S.ad) + range(1, 80).map(function (n) { return opt(n, t("district")(n), S.ad); }).join("");
    $("#f-boe").innerHTML = anyO(S.boe) + range(1, 4).map(function (n) { return opt(n, t("district")(n), S.boe); }).join("");
    $("#f-all").checked = S.all; $("#f-open").checked = S.open;
  }

  function cheatText() {
    var list = visible(), lines = [t("title") + " 2026", t("election"), ""];
    SECTIONS.forEach(function (id) {
      var cs = list.filter(function (c) { return c.sec === id; }); if (!cs.length) return;
      lines.push(secName(id).toUpperCase());
      cs.forEach(function (c) { lines.push((S.done[c.id] ? "☑ " : "☐ ") + c.title + (c.sec === "props" ? " (" + c.sub + ")" : "") + ": " + finalPick(c) + (differs(c) ? " (" + t("mineCopy")(shortPick(sugg(c))) + ")" : "")); });
      lines.push("");
    });
    return lines.join("\n").trim();
  }
  function renderList() {
    var list = visible(), h = [];
    SECTIONS.forEach(function (id) {
      var cs = list.filter(function (c) { return c.sec === id; }); if (!cs.length) return;
      h.push("<h3>" + esc(secName(id)) + "</h3><table>" + cs.map(function (c) {
        return '<tr class="' + (S.done[c.id] ? "done" : "") + '"><td class="c"><span class="box" aria-hidden="true"></span></td><td>' + esc(c.title) + (c.sec === "props" ? '<div class="race-sub">' + esc(c.sub) + "</div>" : "") + '</td><td class="p ' + pickKind(mineList(c)[0] || sugg(c)) + '">' + esc(finalPick(c)) + (mineList(c).length ? '<div class="mine-note">' + esc(differs(c) ? t("sugWas")(shortPick(sugg(c))) : t("mineTag")) + "</div>" : "") + "</td></tr>";
      }).join("") + "</table>");
    });
    $("#cheat-list").innerHTML = h.join("") || '<p class="empty">' + esc(t("empty")) + "</p>";
    $("#copy-out").hidden = true;
  }

  function seg(kind, id, opts, cur) {
    return '<div class="seg" role="group">' + opts.map(function (o) {
      return '<button type="button" class="mchip" data-' + kind + '="' + id + '" data-v="' + esc(o[0]) + '" aria-pressed="' + (cur === o[0]) + '">' + esc(o[1]) + "</button>";
    }).join("") + "</div>";
  }
  var perTab = 0;
  function renderPersonal() {
    var es = S.lang === "es", h = [], tabs = t("perTabs");
    h.push('<p class="fine">' + esc(t("perHint")) + "</p>");
    h.push('<div class="seg-tabs" role="tablist">' + tabs.map(function (x, i) {
      return '<button type="button" role="tab" data-ptab="' + i + '" aria-selected="' + (perTab === i) + '">' + esc(x) + "</button>";
    }).join("") + "</div>");
    var pane = function (i) { return '<div class="ppane"' + (perTab === i ? "" : " hidden") + ">"; };
    h.push(pane(1));
    CH.profile.forEach(function (q) {
      var opts = q.opts ? q.opts.map(function (o) { return [o[0], es ? o[2] : o[1]]; }) : [["yes", t("optYes")], ["no", t("optNo")]];
      h.push('<div class="q"><div class="q-t">' + esc(es ? q.es : q.en) + "</div>" + seg("prof", q.id, opts, S.prof[q.id]) + "</div>");
    });
    if (Object.keys(S.prof).length) h.push('<button type="button" class="btn ghost" id="clear-ans">' + esc(t("clearAns")) + "</button>");
    var flipped = G.contests.filter(changedByW).map(function (c) { return c.title.replace("Proposition", "Prop"); });
    h.push("</div>" + pane(0) + '<p class="fine">' + esc(t("weightsHint")) + '</p><div class="wstatus' + (flipped.length ? " on" : "") + '" aria-live="polite">' + esc(flipped.length ? t("wChanged")(flipped.join(", ")) : t("wNone")) + "</div>");
    var wq = function (cr) {
      return '<div class="q"><div class="q-t">' + esc(es ? cr.es : cr.en) + '</div><div class="seg4" role="group" aria-label="' + esc(es ? cr.es : cr.en) + '">' + [0, 1, 2, 3].map(function (n) {
        return '<button type="button" data-w="' + cr.id + '" data-v="' + n + '" aria-pressed="' + (wOf(cr.id) === n) + '">' + esc(t("wLvl")[n]) + "</button>";
      }).join("") + "</div></div>";
    };
    CH.criteria.filter(function (x) { return x.lens; }).forEach(function (cr) { h.push(wq(cr)); });
    h.push('<p class="per-sub">' + esc(t("otherIssues")) + "</p>");
    CH.criteria.filter(function (x) { return !x.lens; }).forEach(function (cr) { h.push(wq(cr)); });
    if (customW()) h.push('<button type="button" class="btn ghost" id="reset-w">' + esc(t("resetW")) + "</button>");
    h.push("</div>" + pane(2));
    var props = G.contests.filter(function (c) { return c.score; });
    h.push('<table class="lineup"><thead><tr><th></th><th>' + esc(t("colSug")) + "</th><th>" + esc(t("colConf")) + "</th><th>" + esc(t("colMine")) + "</th></tr></thead><tbody>" +
      props.map(function (c) {
        var sp = sugg(c), cf = confOf(c);
        return '<tr><td><a href="#c-' + c.id + '" data-goto="' + c.id + '">' + esc(c.title.replace("Proposition", "Prop")) + '</a></td><td class="' + pickKind(sp) + '">' + esc(shortPick(sp)) + (changedByW(c) ? " *" : "") + "</td><td>" + esc(cf ? t("confShort")[cf] : "—") + '</td><td class="' + (mineList(c).length ? pickKind(mineList(c)[0]) : "") + '">' + esc(mineText(c) || "—") + "</td></tr>";
      }).join("") + "</tbody></table>" + (props.some(changedByW) ? '<p class="fine">* ' + esc(t("byWeights")) + "</p>" : ""));
    h.push("</div>");
    $("#personal-body").innerHTML = h.join("");
  }

  function renderStatic() {
    var root = document.documentElement;
    root.lang = S.lang;
    root.classList.remove("size-1", "size-2"); if (S.size) root.classList.add("size-" + S.size);
    document.querySelectorAll("[data-t]").forEach(function (el) { var v = t(el.dataset.t); if (typeof v === "string") el.textContent = v; });
    document.querySelectorAll("[data-lang]").forEach(function (el) { el.hidden = el.dataset.lang !== S.lang; });
    $("#find-q").placeholder = t(HOSTED ? "hostedPh" : "findPh");
    if (HOSTED) { $("#find-hint").textContent = t("hostedHint"); $("#find-privacy").textContent = t("privacyHosted"); }
    $("#q").placeholder = t("search"); $("#q").setAttribute("aria-label", t("search"));
    $("#size").setAttribute("aria-label", t("textSize")); $("#size").title = t("textSize");
    var days = Math.ceil((new Date(G.electionDate + "T00:00:00-08:00") - new Date()) / 864e5);
    $("#countdown").textContent = t("days")(days);
    document.querySelectorAll(".tab").forEach(function (b) { if (b.dataset.tab === S.tab) b.setAttribute("aria-current", "page"); else b.removeAttribute("aria-current"); });
    ["ballot", "list", "vote", "about"].forEach(function (id) { $("#view-" + id).hidden = id !== S.tab; });
    $("#lens-en").textContent = G.lens.en; $("#lens-es").textContent = G.lens.es;
    var now = new Date(), next = false;
    document.querySelectorAll(".date").forEach(function (d) {
      var end = new Date(d.dataset.end + "T23:59:59-08:00"), isNext = !next && end >= now;
      d.classList.toggle("past", end < now); d.classList.toggle("next", isNext); if (isNext) next = true;
    });
  }

  function renderAll() { renderStatic(); renderManual(); renderPersonal(); renderSummary(); renderBallot(); renderList(); save(); }
  function refresh() { renderSummary(); renderBallot(); renderList(); save(); }

  // ── ZIP / address lookup ──
  function applyGeo(g) {
    S.geo = g; S.county = g.county; S.all = false;
    TYPES.forEach(function (k) { S[k] = String(g.opts[k][0][0]); });
    renderManual(); refresh();
    var s = $("#summary"); if (s.scrollIntoView) s.scrollIntoView({ block: "start" });
  }
  function fromZip(z) {
    var d = GEO.zips[z]; if (!d) return null;
    var opts = {}; TYPES.forEach(function (k) { opts[k] = d[k]; });
    return { kind: "zip", label: z, county: GEO.counties[d.c[0][0]] || "", opts: opts,
      pl: d.pl.map(function (x) { return x[0]; }), sch: d.sch.map(function (x) { return x[0]; }) };
  }
  // City match: combine every ZIP that city covers, weighted by how much of each ZIP is in the city.
  var CITY_NAMES = null;
  function fromCity(text) {
    if (!CITY_NAMES) {
      CITY_NAMES = {};
      Object.keys(GEO.zips).forEach(function (z) { GEO.zips[z].pl.forEach(function (p) { (CITY_NAMES[p[0].toLowerCase()] = CITY_NAMES[p[0].toLowerCase()] || []).push([z, p[1]]); }); });
    }
    var low = " " + text.toLowerCase().replace(/[^a-z\u00c0-\u017f .'-]/g, " ").replace(/\s+/g, " ") + " ", best = "";
    Object.keys(CITY_NAMES).forEach(function (n) { if (n.length > best.length && low.indexOf(" " + n + " ") >= 0) best = n; });
    if (!best) return null;
    var tally = { c: {}, sch: {} }, opts = {}, name = "";
    TYPES.forEach(function (k) { tally[k] = {}; });
    CITY_NAMES[best].forEach(function (e) {
      var d = GEO.zips[e[0]], w = e[1];
      d.pl.forEach(function (p) { if (p[0].toLowerCase() === best) name = p[0]; });
      ["c", "sch"].concat(TYPES).forEach(function (k) { (d[k] || []).forEach(function (x) { tally[k][x[0]] = (tally[k][x[0]] || 0) + x[1] * w; }); });
    });
    function ranked(k) {
      var tot = 0, arr = Object.keys(tally[k]).map(function (key) { tot += tally[k][key]; return [key, tally[k][key]]; });
      return arr.sort(function (a, b) { return b[1] - a[1]; }).map(function (x) { return [k === "c" || k === "sch" ? x[0] : +x[0], Math.round(x[1] / tot * 100) / 100]; }).filter(function (x) { return x[1] >= 0.02; });
    }
    TYPES.forEach(function (k) { opts[k] = ranked(k); });
    return { kind: "city", via: "viaCity", label: name, county: GEO.counties[ranked("c")[0][0]] || "", opts: opts, pl: [name], sch: ranked("sch").map(function (x) { return x[0]; }) };
  }
  // Fallback for a typed address: use its ZIP, then its city.
  function fromText(v) {
    var m = v.match(/\b(9[0-6]\d{3})(?:-\d{4})?\s*$/) || v.match(/\b(9[0-6]\d{3})(?:-\d{4})?\b/);
    var g = m && fromZip(m[1]);
    if (g) { g.via = "viaZip"; return g; }
    return fromCity(v);
  }
  function fromBlock(geoid) {
    var county = geoid.slice(2, 5), tract = geoid.slice(5, 11), blk = geoid.slice(11);
    var k = (GEO.tracts[county] || {})[tract];
    (GEO.blocks[county + tract] || []).forEach(function (e) { if (e[1].split(",").indexOf(blk) >= 0) k = e[0]; });
    if (k == null) return null;
    var parts = GEO.keys[k].split("."), opts = {};
    TYPES.forEach(function (key, i) { opts[key] = [[+parts[i], 1]]; });
    return { county: GEO.counties[county] || "", opts: opts };
  }
  function geocode(addr, cb) {
    var name = "__fvgGeo" + Date.now(), done = false, el = document.createElement("script");
    function finish(err, data) { if (done) return; done = true; try { delete window[name]; } catch (e) { window[name] = undefined; } el.remove(); cb(err, data); }
    window[name] = function (data) { finish(null, data); };
    el.onerror = function () { finish("blocked"); };
    setTimeout(function () { finish("blocked"); }, 15000);
    el.src = "https://geocoding.geo.census.gov/geocoder/geographies/onelineaddress?benchmark=Public_AR_Current&vintage=Census2020_Current&layers=all&format=jsonp&callback=" + name + "&address=" + encodeURIComponent(addr);
    try { document.head.appendChild(el); } catch (e) { finish("blocked"); }
  }
  function lookup(raw) {
    var msg = $("#find-msg"), v = raw.trim();
    if (!v) return;
    if (/^\d{5}(-\d{4})?$/.test(v)) {
      var g = fromZip(v.slice(0, 5));
      if (!g) { msg.textContent = t("zipUnknown"); return; }
      msg.textContent = ""; applyGeo(g); return;
    }
    function fallback(errKey) {
      var fg = fromText(v);
      if (fg) { msg.textContent = ""; applyGeo(fg); } else msg.textContent = t(errKey);
    }
    if (HOSTED) { fallback("noMatch"); return; }
    msg.textContent = t("looking");
    geocode(/\b(CA|Calif(ornia)?)\b/i.test(v) ? v : v + ", CA", function (err, data) {
      if (err) { fallback("blocked"); return; }
      var m = data && data.result && data.result.addressMatches && data.result.addressMatches[0];
      var geos = m && m.geographies, blocks = geos && geos["Census Blocks"];
      if (!blocks || !blocks.length || blocks[0].GEOID.slice(0, 2) !== "06") { fallback("notFound"); return; }
      var g = fromBlock(blocks[0].GEOID);
      if (!g) { fallback("notFound"); return; }
      var names = function (layer, key) { return (geos[layer] || []).map(function (x) { return x[key]; }); };
      g.kind = "address"; g.label = m.matchedAddress;
      g.pl = names("Incorporated Places", "BASENAME").concat(names("Census Designated Places", "BASENAME"));
      g.sch = names("Unified School Districts", "NAME");
      msg.textContent = ""; applyGeo(g);
    });
  }

  // ── events ──
  function bind() {
    $("#lang").addEventListener("click", function () { S.lang = S.lang === "en" ? "es" : "en"; renderAll(); });
    $("#size").addEventListener("click", function () { S.size = (S.size + 1) % 3; renderStatic(); save(); });
    document.querySelectorAll(".tab").forEach(function (b) {
      b.addEventListener("click", function () {
        S.tab = b.dataset.tab; renderStatic();
        try { history.replaceState(null, "", "#" + S.tab); } catch (e) {}
        window.scrollTo(0, 0);
      });
    });
    $("#find").addEventListener("submit", function (e) { e.preventDefault(); lookup($("#find-q").value); });
    $("#summary").addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      if (b.id === "clear") { S.geo = null; S.county = S.cd = S.sd = S.ad = S.boe = ""; $("#find-q").value = ""; renderManual(); refresh(); $("#find-q").focus(); return; }
      if (b.dataset.type) { S[b.dataset.type] = b.dataset.n; renderManual(); refresh(); }
    });
    ["county", "cd", "sd", "ad", "boe"].forEach(function (k) {
      $("#f-" + k).addEventListener("change", function (e) {
        S[k] = e.target.value; S.geo = null;
        if (k === "county" && !S.boe && BOE4.indexOf(S.county) >= 0) { S.boe = "4"; renderManual(); }
        refresh();
      });
    });
    $("#f-all").addEventListener("change", function (e) { S.all = e.target.checked; refresh(); });
    $("#f-open").addEventListener("change", function (e) { S.open = e.target.checked; expanded = {}; renderBallot(); save(); });
    var qt;
    $("#q").addEventListener("input", function (e) { clearTimeout(qt); qt = setTimeout(function () { S.q = e.target.value.trim(); renderBallot(); renderList(); }, 150); });
    $("#ballot-list").addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      if (b.dataset.why) {
        var id = b.dataset.why, open = b.getAttribute("aria-expanded") !== "true";
        expanded[id] = open;
        var d = $("#d-" + id); d.innerHTML = open ? detail(byId(id)) : ""; d.hidden = !open;
        b.setAttribute("aria-expanded", open); b.querySelector("span").textContent = open ? t("hide") : whyLbl(byId(id));
      } else if (b.dataset.mine) {
        var c = byId(b.dataset.mine), v = b.dataset.v, cur = mineList(c), max = seats(c);
        if (cur.indexOf(v) >= 0) cur.splice(cur.indexOf(v), 1);
        else if (max > 1) { cur.push(v); if (cur.length > max) cur.shift(); }
        else cur = [v];
        if (!cur.length) delete S.mine[c.id]; else S.mine[c.id] = max > 1 ? cur : cur[0];
        b.parentNode.querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-pressed", mineList(c).indexOf(x.dataset.v) >= 0); });
        if (linkOf(c)) { var y0 = window.scrollY; renderBallot(); window.scrollTo(0, y0); var nb = document.querySelector('#c-' + c.id + ' [data-v="' + v + '"]'); if (nb) nb.focus(); }
        renderList(); renderPersonal(); save();
      } else if (b.dataset.done) {
        var did = b.dataset.done;
        if (S.done[did]) delete S.done[did]; else S.done[did] = true;
        var on = !!S.done[did];
        $("#c-" + did).classList.toggle("done", on);
        b.setAttribute("aria-pressed", on); b.innerHTML = doneButton(did, on);
        renderProgress(visible()); renderList(); save();
      }
    });
    $("#personal-body").addEventListener("click", function (e) {
      var g = e.target.closest("[data-goto]");
      if (g) { e.preventDefault(); S.q = ""; $("#q").value = ""; renderBallot(); var el = $("#c-" + g.dataset.goto); if (el && el.scrollIntoView) el.scrollIntoView({ block: "start" }); return; }
      var b = e.target.closest("button"); if (!b) return;
      var key, kind, sel = null;
      if (b.dataset.ptab) { perTab = +b.dataset.ptab; renderPersonal(); var tb = document.querySelector('[data-ptab="' + perTab + '"]'); if (tb) tb.focus(); return; }
      if (b.id === "clear-ans") S.prof = {};
      else if (b.id === "reset-w") S.w = {};
      else if (b.dataset.w) {
        key = b.dataset.w; kind = "w"; var n = +b.dataset.v, def = crit(key).lens ? 1 : 0;
        if (n === def) delete S.w[key]; else S.w[key] = n;
      } else if (b.dataset.prof) {
        key = b.dataset.prof; kind = "prof";
        if (S.prof[key] === b.dataset.v) delete S.prof[key]; else S.prof[key] = b.dataset.v;
      } else return;
      var y = window.scrollY;
      if (kind) sel = '[data-' + kind + '="' + key + '"][data-v="' + b.dataset.v + '"]';
      renderPersonal(); renderBallot(); renderList(); save();
      window.scrollTo(0, y);
      if (sel) { var nb = document.querySelector("#personal-body " + sel); if (nb) nb.focus(); }
    });
    $("#copy").addEventListener("click", function () {
      var txt = cheatText(), msg = $("#copy-msg"), out = $("#copy-out");
      function fail() { out.hidden = false; out.value = txt; out.focus(); out.select(); msg.textContent = t("copyFail"); }
      try { navigator.clipboard.writeText(txt).then(function () { msg.textContent = t("copied"); out.hidden = true; }, fail); } catch (e) { fail(); }
    });
  }

  load(); bind(); renderAll();
})();
