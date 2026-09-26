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
      hostedHint: "Type your ZIP code to see the races on your ballot.",
      findPh: "Address and city, or ZIP code", hostedPh: "ZIP code, like 92553", findBtn: "Show my ballot", looking: "Looking up your address…",
      privacy: "ZIP codes are matched on your device. A full address is sent only to the U.S. Census Bureau's free address service to find your neighborhood. This guide doesn't save or share it.",
      notFound: "We couldn't find that address. Check the spelling and include the city, or try your ZIP code.",
      blocked: "Address lookup isn't available here. Please type your 5-digit ZIP code instead.",
      zipUnknown: "We don't have that ZIP code for California. Check the number or type your street address.",
      yourBallot: "Your ballot", clear: "Start over", exact: "exact match for your address",
      zipOf: function (z) { return "ZIP " + z; },
      split: "Your ZIP code crosses district lines. We picked the district where most people in your ZIP live. Tap another one if it's yours, or type your street address for an exact match.",
      noSenate: "There's no State Senate race in your district this year. Only even-numbered districts vote in 2026.",
      county: "County", cd: "U.S. House", sd: "State Senate", ad: "State Assembly", boe: "Board of Equalization",
      manualTitle: "Set my districts by hand", lookup: "Look up your districts:", any: "Not sure",
      browseAll: "Show every race in California", openAll: "Show all reasons",
      search: "Search races, names or measures",
      progress: function (d, n) { return d + " of " + n + " races marked done"; },
      startHere: "Type your ZIP code above to add your congressional, legislative and local races. Statewide races are below.",
      pickLbl: "Our pick", yes: "Vote YES", no: "Vote NO", yesAll: "Vote YES on all", yesBoth: "Vote YES on both", noRec: "No recommendation",
      why: "Why this pick", hide: "Hide reasons", done: "Done", markDone: "Mark done",
      low: "Low impact", limited: "Limited info", unopposed: "Unopposed", part: function (p) { return p + " only"; }, inc: "Incumbent",
      whatItDoes: "What it does", yesMeans: "A YES vote means", noMeans: "A NO vote means", cost: "Cost",
      whyPick: "Why we picked this", others: "The other choices, and why we didn't pick them", whyNot: "Why not:", note: "Good to know", check: "Check your sample ballot", sources: "Sources",
      races: function (n) { return n + (n === 1 ? " race" : " races"); },
      empty: "No races match your search.",
      listTitle: "Your take-along list", listHint: "Bring this with you, screenshot it, or copy it into a text. Races you mark done are crossed off.",
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
      hostedHint: "Escriba su código postal para ver las contiendas de su boleta.",
      findPh: "Dirección y ciudad, o código postal", hostedPh: "Código postal, ej. 92553", findBtn: "Ver mi boleta", looking: "Buscando su dirección…",
      privacy: "Los códigos postales se buscan en su dispositivo. Una dirección completa solo se envía al servicio gratuito de la Oficina del Censo de EE. UU. para encontrar su vecindario. Esta guía no la guarda ni la comparte.",
      notFound: "No encontramos esa dirección. Revise la ortografía e incluya la ciudad, o pruebe con su código postal.",
      blocked: "La búsqueda por dirección no está disponible aquí. Escriba su código postal de 5 dígitos.",
      zipUnknown: "No tenemos ese código postal para California. Revise el número o escriba su dirección.",
      yourBallot: "Su boleta", clear: "Empezar de nuevo", exact: "resultado exacto para su dirección",
      zipOf: function (z) { return "Código postal " + z; },
      split: "Su código postal cruza límites de distritos. Elegimos el distrito donde vive la mayoría. Toque otro si es el suyo, o escriba su dirección para un resultado exacto.",
      noSenate: "No hay elección del Senado estatal en su distrito este año. Solo votan los distritos pares en 2026.",
      county: "Condado", cd: "Cámara de EE. UU.", sd: "Senado estatal", ad: "Asamblea estatal", boe: "Junta de Igualación",
      manualTitle: "Elegir mis distritos a mano", lookup: "Busque sus distritos:", any: "No sé",
      browseAll: "Mostrar todas las contiendas de California", openAll: "Mostrar todas las razones",
      search: "Buscar contiendas, nombres o medidas",
      progress: function (d, n) { return d + " de " + n + " contiendas marcadas"; },
      startHere: "Escriba su código postal arriba para agregar sus contiendas del Congreso, la Legislatura y locales. Las contiendas estatales están abajo.",
      pickLbl: "Recomendación", yes: "Vote SÍ", no: "Vote NO", yesAll: "Vote SÍ a todos", yesBoth: "Vote SÍ a ambos", noRec: "Sin recomendación",
      why: "Por qué", hide: "Ocultar razones", done: "Listo", markDone: "Marcar listo",
      low: "Bajo impacto", limited: "Poca información", unopposed: "Sin oposición", part: function (p) { return "Solo " + p; }, inc: "En funciones",
      whatItDoes: "Qué hace", yesMeans: "Votar SÍ significa", noMeans: "Votar NO significa", cost: "Costo",
      whyPick: "Por qué lo elegimos", others: "Las otras opciones y por qué no las elegimos", whyNot: "Por qué no:", note: "Bueno saber", check: "Revise su boleta de muestra", sources: "Fuentes",
      races: function (n) { return n + (n === 1 ? " contienda" : " contiendas"); },
      empty: "Ninguna contienda coincide con su búsqueda.",
      listTitle: "Su lista para llevar", listHint: "Llévela, tome una captura o cópiela en un mensaje. Las contiendas marcadas aparecen tachadas.",
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
  var S = { lang: "en", tab: "ballot", size: 0, county: "", cd: "", sd: "", ad: "", boe: "", all: false, open: false, q: "", geo: null, done: {} };
  var expanded = {};
  var PERSIST = ["lang", "size", "county", "cd", "sd", "ad", "boe", "all", "open", "geo", "done"];
  function load() {
    try { var v = JSON.parse(localStorage.getItem("fvg2026v2") || "{}"); PERSIST.forEach(function (k) { if (k in v) S[k] = v[k]; }); } catch (e) {}
    if (!S.done || typeof S.done !== "object") S.done = {};
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
    var hay = [c.title, c.sub, c.pick, c.quick, c.place, (c.cands || []).map(function (x) { return x.n; }).join(" ")].join(" ").toLowerCase();
    return S.q.toLowerCase().split(/\s+/).every(function (w) { return hay.indexOf(w) >= 0; });
  }
  function visible() { return G.contests.filter(function (c) { return inScope(c) && matches(c); }); }
  function countable(list) { return list.filter(function (c) { return !c.unopposed && c.pick !== "No recommendation"; }); }

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
    h.push("<div><h3>" + esc(t("whyPick")) + "</h3><ul>" + c.why.map(function (w) { return "<li>" + esc(w) + "</li>"; }).join("") + "</ul></div>");
    var chosen = (c.cands || []).filter(function (x) { return x.pick; });
    var alts = (c.other || []).concat((c.cands || []).filter(function (x) { return !x.pick; }));
    if (alts.length || chosen.length) {
      h.push("<div><h3>" + esc(t("others")) + '</h3><div class="alts">' +
        chosen.map(function (x) { return '<div class="alt chosen"><div class="who">✓ ' + esc(x.n) + candLine(x) + "</div></div>"; }).join("") +
        alts.map(function (x) {
          return '<div class="alt"><div class="who">' + esc(x.n) + candLine(x) + "</div>" + (x.about ? "<div>" + esc(x.about) + "</div>" : "") +
            (x.whyNot ? '<div class="whynot"><b>' + esc(t("whyNot")) + "</b> " + esc(x.whyNot) + "</div>" : "") + "</div>";
        }).join("") + "</div></div>");
    }
    if (c.src && c.src.length) h.push('<div class="src"><h3>' + esc(t("sources")) + "</h3><ul>" + c.src.map(function (s) { return '<li><a href="' + esc(s[1]) + '" target="_blank" rel="noopener">' + esc(s[0]) + "</a></li>"; }).join("") + "</ul></div>");
    return h.join("");
  }

  function doneButton(id, on) {
    return (on ? ICON_CHECK : ICON_BOX) + "<span>" + esc(on ? t("done") : t("markDone")) + "</span>";
  }

  function card(c) {
    var open = S.open || !!expanded[c.id], done = !!S.done[c.id], kind = pickKind(c.pick);
    var quick = S.lang === "es" && c.quick_es ? c.quick_es : c.quick;
    var tags = [];
    if (c.part) tags.push('<span class="tag part">' + esc(t("part")(c.part)) + "</span>");
    if (c.unopposed) tags.push('<span class="tag">' + esc(t("unopposed")) + "</span>");
    else if (c.impact === "low") tags.push('<span class="tag low">' + esc(t("low")) + "</span>");
    if (c.depth === "limited") tags.push('<span class="tag">' + esc(t("limited")) + "</span>");
    return '<article class="race' + (done ? " done" : "") + '" id="c-' + c.id + '">' +
      '<div class="race-main">' +
        '<div><h3 class="race-title">' + esc(c.title) + "</h3>" + (c.sub ? '<div class="race-sub">' + esc(c.sub) + "</div>" : "") + "</div>" +
        '<div class="pick ' + kind + '"><span class="oval" aria-hidden="true"></span><span>' + (kind === "name" ? '<span class="lbl">' + esc(t("pickLbl")) + "</span> " : "") + esc(pickText(c.pick)) + "</span></div>" +
        '<p class="race-quick">' + esc(quick) + "</p>" +
        (tags.length ? '<div class="tags">' + tags.join("") + "</div>" : "") +
      "</div>" +
      '<div class="race-actions">' +
        '<button type="button" class="why-btn" data-why="' + c.id + '" aria-expanded="' + open + '" aria-controls="d-' + c.id + '">' + ICON_CHEV + "<span>" + esc(open ? t("hide") : t("why")) + "</span></button>" +
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
    $("#find-card").classList.toggle("compact", located());
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
      (where ? '<div class="sum-where">' + esc(where) + (g && g.kind === "address" ? " · " + esc(t("exact")) : "") + "</div>" : "") +
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
      cs.forEach(function (c) { lines.push((S.done[c.id] ? "☑ " : "☐ ") + c.title + (c.sec === "props" ? " (" + c.sub + ")" : "") + ": " + shortPick(c.pick)); });
      lines.push("");
    });
    return lines.join("\n").trim();
  }
  function renderList() {
    var list = visible(), h = [];
    SECTIONS.forEach(function (id) {
      var cs = list.filter(function (c) { return c.sec === id; }); if (!cs.length) return;
      h.push("<h3>" + esc(secName(id)) + "</h3><table>" + cs.map(function (c) {
        return '<tr class="' + (S.done[c.id] ? "done" : "") + '"><td class="c"><span class="box" aria-hidden="true"></span></td><td>' + esc(c.title) + (c.sec === "props" ? '<div class="race-sub">' + esc(c.sub) + "</div>" : "") + '</td><td class="p ' + pickKind(c.pick) + '">' + esc(shortPick(c.pick)) + "</td></tr>";
      }).join("") + "</table>");
    });
    $("#cheat-list").innerHTML = h.join("") || '<p class="empty">' + esc(t("empty")) + "</p>";
    $("#copy-out").hidden = true;
  }

  function renderStatic() {
    var root = document.documentElement;
    root.lang = S.lang;
    root.classList.remove("size-1", "size-2"); if (S.size) root.classList.add("size-" + S.size);
    document.querySelectorAll("[data-t]").forEach(function (el) { var v = t(el.dataset.t); if (typeof v === "string") el.textContent = v; });
    document.querySelectorAll("[data-lang]").forEach(function (el) { el.hidden = el.dataset.lang !== S.lang; });
    $("#find-q").placeholder = t(HOSTED ? "hostedPh" : "findPh");
    if (HOSTED) { $("#find-hint").textContent = t("hostedHint"); $("#find-q").setAttribute("inputmode", "numeric"); }
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

  function renderAll() { renderStatic(); renderManual(); renderSummary(); renderBallot(); renderList(); save(); }
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
    if (HOSTED) { msg.textContent = t("blocked"); return; }
    msg.textContent = t("looking");
    geocode(/\b(CA|Calif(ornia)?)\b/i.test(v) ? v : v + ", CA", function (err, data) {
      if (err) { msg.textContent = t("blocked"); return; }
      var m = data && data.result && data.result.addressMatches && data.result.addressMatches[0];
      var geos = m && m.geographies, blocks = geos && geos["Census Blocks"];
      if (!blocks || !blocks.length || blocks[0].GEOID.slice(0, 2) !== "06") { msg.textContent = t("notFound"); return; }
      var g = fromBlock(blocks[0].GEOID);
      if (!g) { msg.textContent = t("notFound"); return; }
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
        b.setAttribute("aria-expanded", open); b.querySelector("span").textContent = open ? t("hide") : t("why");
      } else if (b.dataset.done) {
        var did = b.dataset.done;
        if (S.done[did]) delete S.done[did]; else S.done[did] = true;
        var on = !!S.done[did];
        $("#c-" + did).classList.toggle("done", on);
        b.setAttribute("aria-pressed", on); b.innerHTML = doneButton(did, on);
        renderProgress(visible()); renderList(); save();
      }
    });
    $("#copy").addEventListener("click", function () {
      var txt = cheatText(), msg = $("#copy-msg"), out = $("#copy-out");
      function fail() { out.hidden = false; out.value = txt; out.focus(); out.select(); msg.textContent = t("copyFail"); }
      try { navigator.clipboard.writeText(txt).then(function () { msg.textContent = t("copied"); out.hidden = true; }, fail); } catch (e) { fail(); }
    });
  }

  load(); bind(); renderAll();
})();
