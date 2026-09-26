(function () {
  "use strict";
  var G = window.GUIDE, OFFICIAL = window.OFFICIAL || {};

  var COUNTIES = ["Alameda","Alpine","Amador","Butte","Calaveras","Colusa","Contra Costa","Del Norte","El Dorado","Fresno","Glenn","Humboldt","Imperial","Inyo","Kern","Kings","Lake","Lassen","Los Angeles","Madera","Marin","Mariposa","Mendocino","Merced","Modoc","Mono","Monterey","Napa","Nevada","Orange","Placer","Plumas","Riverside","Sacramento","San Benito","San Bernardino","San Diego","San Francisco","San Joaquin","San Luis Obispo","San Mateo","Santa Barbara","Santa Clara","Santa Cruz","Shasta","Sierra","Siskiyou","Solano","Sonoma","Stanislaus","Sutter","Tehama","Trinity","Tulare","Tuolumne","Ventura","Yolo","Yuba"];

  // Counties entirely inside Board of Equalization District 4.
  var BOE4 = ["Riverside", "Orange", "San Diego", "Imperial"];

  var T = {
    en: {
      eyebrow: "California General Election", title: "Family Voting Guide 2026",
      tagline: "Quick picks for every race on your ballot, plus the research behind each one, including why the other options weren't chosen.",
      days: function (n) { return n > 1 ? n + " days to Election Day" : n === 1 ? "1 day to Election Day" : n === 0 ? "Election Day is today" : "Election Day has passed"; },
      lang: "Español",
      tabBallot: "Ballot", tabCheat: "Cheat sheet", tabVote: "How to vote", tabAbout: "About this guide",
      myBallot: "My ballot", myHint: "Or set your county and districts yourself:",
      county: "County", cd: "U.S. House", sd: "State Senate", ad: "Assembly", boe: "Board of Equalization",
      any: "Not sure", onlyMine: "Only show my ballot",
      findTitle: "Find my ballot", findHint: "Enter your home address for an exact match, or just your ZIP code.",
      hostedHint: "Enter your ZIP code. (Exact street-address lookup works in the downloadable copy of this guide.)", hostedPh: "ZIP code, e.g. 92553",
      findPh: "Street address and city, or ZIP code", findBtn: "Look up", looking: "Looking up…",
      privacy: "ZIP codes are matched on your device. A full address is sent only to the U.S. Census Bureau's free address matcher to find your census block. This guide doesn't save or share it.",
      notFound: "That address couldn't be matched. Check the spelling, add the city, or try your ZIP code.",
      blocked: "Street-address lookup isn't available in this view. Enter your ZIP code instead, or open the downloadable copy of this guide.",
      zipUnknown: "That ZIP code isn't one we have for California. Try your street address.",
      matched: "Matched", saved: "Your last lookup", exact: "exact match",
      split: "Your ZIP code spans more than one district. We chose the one where most residents live. Tap to switch, or enter your street address for an exact match.",
      localAuto: "Local races are matched to your city and school district. Some cover only part of a city (a ward, district or trustee area), so check your sample ballot.",
      clear: "Clear", part: function (p) { return p + " only"; }, zipLabel: "ZIP",
      quick: "Quick picks", research: "Full research",
      places: "Local races in my county (tap to narrow)", allPlaces: "All",
      search: "Search races, candidates, measures", lookup: "Find my districts",
      pickFrom: { slate: "Slate pick", filled: "Pick added (slate had none)", added: "Race added (not on slate)" },
      low: "Low impact", limited: "Limited info", inc: "Incumbent",
      more: "Why this pick & the alternatives", less: "Hide details",
      whyPick: "Why this pick", whatItDoes: "What it does", yesMeans: "A YES vote means", noMeans: "A NO vote means", fiscal: "Cost",
      others: "The other options, and why they weren't chosen", whyNot: "Why not:", sources: "Sources", note: "Note", check: "Check your sample ballot",
      vote2: "", official: "Not covered by this guide", officialHint: "This race is on your ballot, but the guide makes no pick. Here are the official candidates from the Secretary of State.",
      noSenate: "Your State Senate district has no election this year (only even-numbered districts vote in 2026).",
      empty: "No races match. Clear the search or turn off \"Only show my ballot\".",
      cheatTitle: "My picks", cheatHint: "A one-page list to bring with you or screenshot. It follows your My ballot settings.",
      copy: "Copy picks as text", copied: "Copied. Paste it into a text or email.", copyFail: "Copy isn't allowed here. Select the text below and copy it.",
      races: function (n) { return n + (n === 1 ? " race" : " races"); },
      party: { "Democratic": "Democrat", "Republican": "Republican", "Non-Partisan": "Nonpartisan", "Green": "Green", "Peace and Freedom": "Peace & Freedom", "Libertarian": "Libertarian", "American Independent": "American Independent", "": "" }
    },
    es: {
      eyebrow: "Elección General de California", title: "Guía Familiar para Votar 2026",
      tagline: "Recomendaciones rápidas para cada contienda de su boleta, con la investigación detrás de cada una y por qué no se eligieron las otras opciones.",
      days: function (n) { return n > 1 ? "Faltan " + n + " días para la elección" : n === 1 ? "Falta 1 día para la elección" : n === 0 ? "Hoy es el día de la elección" : "La elección ya pasó"; },
      lang: "English",
      tabBallot: "Boleta", tabCheat: "Resumen", tabVote: "Cómo votar", tabAbout: "Sobre esta guía",
      myBallot: "Mi boleta", myHint: "O elija su condado y distritos usted mismo:",
      county: "Condado", cd: "Cámara de EE. UU.", sd: "Senado estatal", ad: "Asamblea", boe: "Junta de Igualación",
      any: "No sé", onlyMine: "Mostrar solo mi boleta",
      findTitle: "Encontrar mi boleta", findHint: "Escriba su dirección para un resultado exacto, o solo su código postal.",
      hostedHint: "Escriba su código postal. (La búsqueda exacta por dirección funciona en la copia descargable de esta guía.)", hostedPh: "Código postal, ej. 92553",
      findPh: "Dirección y ciudad, o código postal", findBtn: "Buscar", looking: "Buscando…",
      privacy: "Los códigos postales se buscan en su dispositivo. Una dirección completa solo se envía al servicio gratuito de direcciones de la Oficina del Censo de EE. UU. para encontrar su manzana censal. Esta guía no la guarda ni la comparte.",
      notFound: "No se encontró esa dirección. Revise la ortografía, agregue la ciudad o pruebe con su código postal.",
      blocked: "La búsqueda por dirección no está disponible en esta vista. Use su código postal o abra la copia descargable de esta guía.",
      zipUnknown: "No tenemos ese código postal para California. Pruebe con su dirección.",
      matched: "Encontrado", saved: "Su última búsqueda", exact: "resultado exacto",
      split: "Su código postal abarca más de un distrito. Elegimos donde vive la mayoría. Toque para cambiar o escriba su dirección para un resultado exacto.",
      localAuto: "Las contiendas locales coinciden con su ciudad y distrito escolar. Algunas cubren solo parte de una ciudad (un distrito o área), así que revise su boleta de muestra.",
      clear: "Borrar", part: function (p) { return "Solo " + p; }, zipLabel: "Código postal",
      quick: "Recomendaciones", research: "Investigación completa",
      places: "Contiendas locales en mi condado (toque para filtrar)", allPlaces: "Todas",
      search: "Buscar contiendas, candidatos, medidas", lookup: "Buscar mis distritos",
      pickFrom: { slate: "Recomendación de la lista", filled: "Recomendación añadida", added: "Contienda añadida" },
      low: "Bajo impacto", limited: "Poca información", inc: "En funciones",
      more: "Por qué esta recomendación y las alternativas", less: "Ocultar detalles",
      whyPick: "Por qué esta recomendación", whatItDoes: "Qué hace", yesMeans: "Votar SÍ significa", noMeans: "Votar NO significa", fiscal: "Costo",
      others: "Las otras opciones y por qué no se eligieron", whyNot: "Por qué no:", sources: "Fuentes", note: "Nota", check: "Revise su boleta de muestra",
      official: "No cubierta por esta guía", officialHint: "Esta contienda está en su boleta, pero la guía no hace recomendación. Estos son los candidatos oficiales según la Secretaría de Estado.",
      noSenate: "Su distrito del Senado estatal no tiene elección este año (solo votan los distritos pares en 2026).",
      empty: "Ninguna contienda coincide. Borre la búsqueda o desactive \"Mostrar solo mi boleta\".",
      cheatTitle: "Mis recomendaciones", cheatHint: "Una lista de una página para llevar o tomar captura. Sigue la configuración de Mi boleta.",
      copy: "Copiar como texto", copied: "Copiado. Péguelo en un mensaje o correo.", copyFail: "No se permite copiar aquí. Seleccione el texto de abajo y cópielo.",
      races: function (n) { return n + (n === 1 ? " contienda" : " contiendas"); },
      esNote: "Los detalles de la investigación están en inglés.",
      party: { "Democratic": "Demócrata", "Republican": "Republicano", "Non-Partisan": "No partidista", "Green": "Verde", "Peace and Freedom": "Paz y Libertad", "Libertarian": "Libertario", "American Independent": "Independiente Americano", "": "" }
    }
  };

  // ── state ──
  var S = { lang: "en", tab: "ballot", county: "", cd: "", sd: "", ad: "", boe: "", mine: false, mode: "quick", q: "", places: [], geo: null };
  function load() {
    try { var v = JSON.parse(localStorage.getItem("fvg2026") || "{}"); for (var k in v) if (k in S && k !== "q" && k !== "tab") S[k] = v[k]; } catch (e) {}
    var h = (location.hash || "").slice(1);
    if (["ballot", "cheat", "vote", "about"].indexOf(h) >= 0) S.tab = h;
  }
  function save() { try { var c = {}; for (var k in S) if (k !== "q" && k !== "tab") c[k] = S[k];
    if (c.geo) { c.geo = JSON.parse(JSON.stringify(c.geo)); delete c.geo.label; } localStorage.setItem("fvg2026", JSON.stringify(c)); } catch (e) {} }

  var t = function (k) { return T[S.lang][k]; };
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function $(sel) { return document.querySelector(sel); }

  // ── filtering ──
  function inScope(c) {
    if (!S.mine) return true;
    switch (c.scope) {
      case "all": return true;
      case "cd": return !S.cd || +S.cd === c.n;
      case "sd": return !S.sd || +S.sd === c.n;
      case "ad": return !S.ad || +S.ad === c.n;
      case "boe": return !S.boe || +S.boe === c.n;
      case "county": return !S.county || c.counties.indexOf(S.county) >= 0;
      case "local":
        if (S.county && S.county !== c.county) return false;
        if (S.geo) return !c.geo || (c.geo.pl || []).some(function (p) { return S.geo.pl.indexOf(p) >= 0; }) || (c.geo.sch || []).some(function (p) { return S.geo.sch.indexOf(p) >= 0; });
        return !S.places.length || S.places.indexOf(c.place) >= 0;
    }
    return true;
  }
  function matches(c) {
    if (!S.q) return true;
    var hay = [c.title, c.sub, c.pick, c.quick, c.place, (c.cands || []).map(function (x) { return x.n; }).join(" ")].join(" ").toLowerCase();
    return S.q.toLowerCase().split(/\s+/).every(function (w) { return hay.indexOf(w) >= 0; });
  }
  function visible() { return G.contests.filter(function (c) { return inScope(c) && matches(c); }); }

  // Official races the guide doesn't cover, for districts the viewer chose.
  function officialExtras() {
    if (!S.mine || S.q) return [];
    var out = [];
    [["cd", "house", "U.S. House, District "], ["sd", "senate", "State Senate, District "], ["ad", "assembly", "State Assembly, District "], ["boe", "state", "Board of Equalization, District "]].forEach(function (d) {
      var n = S[d[0]]; if (!n) return;
      var covered = G.contests.some(function (c) { return c.scope === d[0] && c.n === +n; });
      if (covered) return;
      var list = OFFICIAL[d[0] + n];
      if (d[0] === "sd" && !list) { out.push({ sec: "senate", noSenate: true }); return; }
      if (list) out.push({ sec: d[1], official: true, title: d[2] + n, cands: list });
    });
    return out;
  }

  // ── rendering ──
  function pickClass(p) { return p === "NO" ? "no" : (p === "YES" || /^YES/.test(p)) ? "yes" : ""; }
  function pickLabel(p) { if (S.lang === "es") { if (p === "YES") return "SÍ"; if (p === "YES on both") return "SÍ a ambos"; if (p === "YES on all") return "SÍ a todos"; } return p; }

  function badges(c) {
    var b = [];
    if (c.pickType === "filled") b.push('<span class="badge filled">' + esc(t("pickFrom").filled) + "</span>");
    else if (c.pickType === "added") b.push('<span class="badge added">' + esc(t("pickFrom").added) + "</span>");
    else b.push('<span class="badge">' + esc(t("pickFrom").slate) + "</span>");
    if (c.impact === "low") b.push('<span class="badge low">' + esc(t("low")) + "</span>");
    if (c.depth === "limited") b.push('<span class="badge">' + esc(t("limited")) + "</span>");
    if (c.part) b.push('<span class="badge low">' + esc(t("part")(c.part)) + "</span>");
    return b.join("");
  }

  function candLine(x) {
    var bits = [];
    if (x.p) bits.push(T[S.lang].party[x.p] || x.p);
    if (x.d) bits.push(x.d);
    if (x.inc) bits.push(t("inc"));
    return bits.length ? " <small>· " + esc(bits.join(" · ")) + "</small>" : "";
  }

  function detail(c) {
    var h = [];
    if (S.lang === "es") h.push('<p class="es-note">' + esc(T.es.esNote) + "</p>");
    if (c.note) h.push('<div class="note"><b>' + esc(t("note")) + ":</b> " + esc(c.note) + "</div>");
    if (c.verify) h.push('<div class="note warn"><b>' + esc(t("check")) + ":</b> " + esc(c.verify) + "</div>");
    if (c.what) {
      h.push("<div><h3>" + esc(t("whatItDoes")) + "</h3><p>" + esc(c.what.summary) + "</p></div>");
      h.push('<div class="yn"><div><b>' + esc(t("yesMeans")) + "</b>" + esc(c.what.yes) + "</div><div><b>" + esc(t("noMeans")) + "</b>" + esc(c.what.no) + "</div><div><b>" + esc(t("fiscal")) + "</b>" + esc(c.what.fiscal) + "</div></div>");
    }
    h.push("<div><h3>" + esc(t("whyPick")) + ": " + esc(pickLabel(c.pick)) + "</h3><ul>" + c.why.map(function (w) { return "<li>" + esc(w) + "</li>"; }).join("") + "</ul></div>");
    var alts = (c.other || []).concat((c.cands || []).filter(function (x) { return !x.pick; }));
    var chosen = (c.cands || []).filter(function (x) { return x.pick; });
    if (alts.length || chosen.length) {
      h.push("<div><h3>" + esc(t("others")) + '</h3><div class="alts">' +
        chosen.map(function (x) { return '<div class="alt chosen"><div class="who">✓ ' + esc(x.n) + candLine(x) + "</div></div>"; }).join("") +
        alts.map(function (x) {
          return '<div class="alt"><div class="who">' + esc(x.n) + candLine(x) + "</div>" +
            (x.about ? "<div>" + esc(x.about) + "</div>" : "") +
            (x.whyNot ? '<div class="whynot"><b>' + esc(t("whyNot")) + "</b> " + esc(x.whyNot) + "</div>" : "") + "</div>";
        }).join("") + "</div></div>");
    }
    if (c.src && c.src.length) h.push('<div class="src"><h3>' + esc(t("sources")) + "</h3><ul>" + c.src.map(function (s) { return '<li><a href="' + esc(s[1]) + '" target="_blank" rel="noopener">' + esc(s[0]) + "</a></li>"; }).join("") + "</ul></div>");
    return '<div class="detail">' + h.join("") + "</div>";
  }

  function card(c) {
    var quick = S.lang === "es" && c.quick_es ? c.quick_es : c.quick;
    return '<details class="contest" id="c-' + c.id + '"' + (S.mode === "research" ? " open" : "") + "><summary>" +
      '<div><div class="c-title">' + esc(c.title) + "</div>" + (c.sub ? '<div class="c-sub">' + esc(c.sub) + "</div>" : "") + "</div>" +
      '<div class="pick ' + pickClass(c.pick) + '"><span class="oval" aria-hidden="true"></span><span>' + esc(pickLabel(c.pick)) + "</span></div>" +
      '<p class="c-quick">' + esc(quick) + "</p>" +
      '<div class="c-badges">' + badges(c) + "</div>" +
      '<div class="c-more"><span class="closed">▸ ' + esc(t("more")) + '</span><span class="open">▾ ' + esc(t("less")) + "</span></div>" +
      "</summary>" + detail(c) + "</details>";
  }

  function officialCard(o) {
    if (o.noSenate) return '<div class="contest"><div class="detail" style="border:0">' + esc(t("noSenate")) + "</div></div>";
    return '<div class="contest official"><div class="detail" style="border:0"><div><div class="c-title">' + esc(o.title) + '</div><span class="badge">' + esc(t("official")) + "</span></div><p>" + esc(t("officialHint")) + '</p><div class="alts">' +
      o.cands.map(function (x) { return '<div class="alt"><div class="who">' + esc(x[0]) + candLine({ p: x[1], d: x[2], inc: x[3] }) + "</div></div>"; }).join("") +
      "</div></div></div>";
  }

  function secName(id) { var s = G.sections.filter(function (x) { return x.id === id; })[0]; return s ? s[S.lang] : id; }

  function renderBallot() {
    var list = visible(), extra = officialExtras(), h = [];
    G.sections.forEach(function (s) {
      var cs = list.filter(function (c) { return c.sec === s.id; });
      var ex = extra.filter(function (o) { return o.sec === s.id; });
      if (!cs.length && !ex.length) return;
      h.push('<section class="sec"><h2>' + esc(s[S.lang]) + "<span>" + esc(t("races")(cs.length)) + "</span></h2>" + cs.map(card).join("") + ex.map(officialCard).join("") + "</section>");
    });
    $("#ballot-list").innerHTML = h.join("") || '<p class="empty">' + esc(t("empty")) + "</p>";
  }

  function placesFor(county) {
    var seen = [];
    G.contests.forEach(function (c) { if (c.scope === "local" && (!county || c.county === county) && seen.indexOf(c.place) < 0) seen.push(c.place); });
    return seen.sort();
  }

  function opt(v, label, cur) { return '<option value="' + esc(v) + '"' + (String(cur) === String(v) ? " selected" : "") + ">" + esc(label) + "</option>"; }
  function range(a, b, step) { var r = []; for (var i = a; i <= b; i += step || 1) r.push(i); return r; }

  function renderPanel() {
    var anyO = opt("", t("any"), "");
    $("#f-county").innerHTML = opt("", t("any"), S.county) + COUNTIES.map(function (c) { return opt(c, c, S.county); }).join("");
    $("#f-cd").innerHTML = anyO + range(1, 52).map(function (n) { return opt(n, "District " + n, S.cd); }).join("");
    $("#f-sd").innerHTML = anyO + range(1, 40).map(function (n) { return opt(n, "District " + n, S.sd); }).join("");
    $("#f-ad").innerHTML = anyO + range(1, 80).map(function (n) { return opt(n, "District " + n, S.ad); }).join("");
    $("#f-boe").innerHTML = anyO + range(1, 4).map(function (n) { return opt(n, "District " + n, S.boe); }).join("");
    $("#f-mine").checked = S.mine;
    var ps = placesFor(S.county);
    $("#places-wrap").hidden = !S.mine || !ps.length || !!S.geo;
    renderLookup();
    $("#places").innerHTML = '<button type="button" class="chip" data-place="" aria-pressed="' + (!S.places.length) + '">' + esc(t("allPlaces")) + "</button>" +
      ps.map(function (p) { return '<button type="button" class="chip" data-place="' + esc(p) + '" aria-pressed="' + (S.places.indexOf(p) >= 0) + '">' + esc(p) + "</button>"; }).join("");
    document.querySelectorAll("#mode button").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.mode === S.mode); });
  }

  function cheatText() {
    var list = visible(), lines = [T[S.lang].title + " — " + (S.lang === "es" ? "Elección 3 nov. 2026" : "Election Nov. 3, 2026"), ""];
    G.sections.forEach(function (s) {
      var cs = list.filter(function (c) { return c.sec === s.id; }); if (!cs.length) return;
      lines.push(s[S.lang].toUpperCase());
      cs.forEach(function (c) { lines.push("• " + c.title + (c.sub && c.sec === "props" ? " (" + c.sub + ")" : "") + ": " + pickLabel(c.pick)); });
      lines.push("");
    });
    return lines.join("\n").trim();
  }

  function renderCheat() {
    var list = visible(), h = [];
    G.sections.forEach(function (s) {
      var cs = list.filter(function (c) { return c.sec === s.id; }); if (!cs.length) return;
      h.push("<h3>" + esc(s[S.lang]) + "</h3><table>" + cs.map(function (c) {
        return "<tr><td>" + esc(c.title) + (c.sec === "props" ? ' <span class="c-sub">' + esc(c.sub) + "</span>" : "") + '</td><td class="' + pickClass(c.pick) + '">' + esc(pickLabel(c.pick)) + "</td></tr>";
      }).join("") + "</table>");
    });
    $("#cheat-list").innerHTML = h.join("") || '<p class="empty">' + esc(t("empty")) + "</p>";
    $("#copy-out").hidden = true;
  }

  function renderStatic() {
    document.documentElement.lang = S.lang;
    document.querySelectorAll("[data-t]").forEach(function (el) { var v = t(el.dataset.t); if (typeof v === "string") el.textContent = v; });
    $("#q").placeholder = t("search");
    var hosted = !!window.FVG_HOSTED;
    $("#find-q").placeholder = t(hosted ? "hostedPh" : "findPh");
    if (hosted) $("#find .hint").textContent = t("hostedHint");
    var days = Math.ceil((new Date(G.electionDate + "T00:00:00-08:00") - new Date()) / 864e5);
    $("#countdown").textContent = t("days")(days);
    document.querySelectorAll(".tab").forEach(function (b) { b.setAttribute("aria-selected", b.dataset.tab === S.tab); });
    ["ballot", "cheat", "vote", "about"].forEach(function (id) { $("#view-" + id).hidden = id !== S.tab; });
    document.querySelectorAll("[data-lang]").forEach(function (el) { el.hidden = el.dataset.lang !== S.lang; });
    renderDates();
    $("#lens").textContent = G.lens[S.lang];
    $("#corrections").innerHTML = G.corrections.map(function (c) { return "<li>" + esc(c) + "</li>"; }).join("");
  }

  function renderDates() {
    var now = new Date(), next = false;
    document.querySelectorAll(".date").forEach(function (d) {
      var end = new Date(d.dataset.end + "T23:59:59-08:00");
      d.classList.toggle("past", end < now);
      var isNext = !next && end >= now; d.classList.toggle("next", isNext); if (isNext) next = true;
    });
  }

  function renderAll() { renderStatic(); renderPanel(); renderBallot(); renderCheat(); save(); }

  // ── events ──
  // ── address / ZIP lookup ──
  var GEO = window.GEO;
  var TYPES = [["cd", "cd"], ["sd", "sd"], ["ad", "ad"], ["boe", "boe"]];

  function applyGeo(g) {
    S.geo = g; S.county = g.county; S.places = []; S.mine = true;
    TYPES.forEach(function (tp) { S[tp[0]] = String(g.opts[tp[0]][0][0]); });
    renderPanel(); renderBallot(); renderCheat(); save();
  }

  function fromZip(z) {
    var d = GEO.zips[z]; if (!d) return null;
    var opts = {}; TYPES.forEach(function (tp) { opts[tp[0]] = d[tp[1]]; });
    return { kind: "zip", label: z, county: GEO.counties[d.c[0][0]] || "", opts: opts,
      pl: d.pl.map(function (x) { return x[0]; }), sch: d.sch.map(function (x) { return x[0]; }) };
  }

  function fromBlock(geoid) {
    var county = geoid.slice(2, 5), tract = geoid.slice(5, 11), blk = geoid.slice(11);
    var k = (GEO.tracts[county] || {})[tract];
    (GEO.blocks[county + tract] || []).forEach(function (e) { if (e[1].split(",").indexOf(blk) >= 0) k = e[0]; });
    if (k == null) return null;
    var parts = GEO.keys[k].split("."), opts = {};
    TYPES.forEach(function (tp, i) { opts[tp[0]] = [[+parts[i], 1]]; });
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
    if (window.FVG_HOSTED) { msg.textContent = t("blocked"); return; }
    msg.textContent = t("looking");
    var q = /\b(CA|Calif(ornia)?)\b/i.test(v) ? v : v + ", CA";
    geocode(q, function (err, data) {
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

  function renderLookup() {
    var box = $("#find-result"), g = S.geo;
    box.hidden = !g;
    if (!g) return;
    var head = (g.label ? t("matched") + ": <b>" + esc(g.kind === "zip" ? t("zipLabel") + " " + g.label : g.label) + "</b>" : "<b>" + esc(t("saved")) + "</b>") +
      (g.kind === "address" ? ' <span class="badge added">' + esc(t("exact")) + "</span>" : "") +
      ' <button type="button" class="chip" id="find-clear">' + esc(t("clear")) + "</button>";
    var rows = [], split = false;
    TYPES.forEach(function (tp) {
      var o = g.opts[tp[0]];
      if (o.length > 1) split = true;
      rows.push('<div class="find-row"><span class="find-k">' + esc(t(tp[0])) + "</span>" + o.map(function (x) {
        return '<button type="button" class="chip" data-type="' + tp[0] + '" data-n="' + x[0] + '" aria-pressed="' + (String(S[tp[0]]) === String(x[0])) + '">' +
          esc("District " + x[0]) + (o.length > 1 ? " · " + Math.round(x[1] * 100) + "%" : "") + "</button>";
      }).join("") + "</div>");
    });
    box.innerHTML = '<div class="find-head">' + head + "</div>" + '<div class="find-row"><span class="find-k">' + esc(t("county")) + "</span><span>" + esc(g.county) + "</span></div>" + rows.join("") +
      (split ? '<p class="hint">' + esc(t("split")) + "</p>" : "") + '<p class="hint">' + esc(t("localAuto")) + "</p>";
  }

  function bind() {
    $("#find").addEventListener("submit", function (e) { e.preventDefault(); lookup($("#find-q").value); });
    $("#find-result").addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      if (b.id === "find-clear") { S.geo = null; $("#find-q").value = ""; renderPanel(); renderBallot(); renderCheat(); save(); return; }
      if (b.dataset.type) { S[b.dataset.type] = b.dataset.n; renderPanel(); renderBallot(); renderCheat(); save(); }
    });
    $("#lang").addEventListener("click", function () { S.lang = S.lang === "en" ? "es" : "en"; renderAll(); });
    document.querySelectorAll(".tab").forEach(function (b) {
      b.addEventListener("click", function () {
        S.tab = b.dataset.tab; renderStatic();
        try { history.replaceState(null, "", "#" + S.tab); } catch (e) {}
        window.scrollTo(0, 0);
      });
    });
    ["county", "cd", "sd", "ad", "boe"].forEach(function (k) {
      $("#f-" + k).addEventListener("change", function (e) {
        S[k] = e.target.value;
        if (k === "county") { S.places = []; S.geo = null; if (!S.boe && BOE4.indexOf(S.county) >= 0) S.boe = "4"; }
        if (S[k]) S.mine = true;
        renderPanel(); renderBallot(); renderCheat(); save();
      });
    });
    $("#f-mine").addEventListener("change", function (e) { S.mine = e.target.checked; renderPanel(); renderBallot(); renderCheat(); save(); });
    $("#mode").addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      S.mode = b.dataset.mode; renderPanel(); renderBallot(); save();
    });
    $("#places").addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      var p = b.dataset.place;
      if (!p) S.places = [];
      else { var i = S.places.indexOf(p); if (i >= 0) S.places.splice(i, 1); else S.places.push(p); }
      renderPanel(); renderBallot(); renderCheat(); save();
    });
    var qt;
    $("#q").addEventListener("input", function (e) { clearTimeout(qt); qt = setTimeout(function () { S.q = e.target.value.trim(); renderBallot(); }, 120); });
    $("#copy").addEventListener("click", function () {
      var txt = cheatText(), msg = $("#copy-msg"), out = $("#copy-out");
      function fail() { out.hidden = false; out.value = txt; out.focus(); out.select(); msg.textContent = t("copyFail"); }
      try {
        navigator.clipboard.writeText(txt).then(function () { msg.textContent = t("copied"); out.hidden = true; }, fail);
      } catch (e) { fail(); }
    });
  }

  load(); bind(); renderAll();
})();
