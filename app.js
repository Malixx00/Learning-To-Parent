(function () {
  const C = window.CONTENT;
  const app = document.getElementById("app");
  document.getElementById("age").textContent = "· ages " + C.ageRange;

  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const byId = id => C.situations.find(s => s.id === id);
  const li = a => a.map(x => `<li>${esc(x)}</li>`).join("");
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  // Progress lives in this browser only; the app works fine if storage is blocked.
  const KEY = "parenting-toolkit-progress";
  const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || { answered: 0, correct: 0 }; } catch (e) { return { answered: 0, correct: 0 }; } };
  const save = p => { try { localStorage.setItem(KEY, JSON.stringify(p)); } catch (e) { /* ignore */ } };

  const allScenarios = () => C.situations.flatMap(s => (s.scenarios || []).map((sc, i) => ({ s, sc, i })));
  const practisable = () => C.situations.filter(s => s.scenarios && s.scenarios.length);

  // The chosen life stage is remembered per browser; defaults to the 3-12 cards.
  const SKEY = "parenting-toolkit-stage";
  const stageById = id => C.stages.find(g => g.id === id);
  const getStage = () => { try { const v = localStorage.getItem(SKEY); if (stageById(v)) return v; } catch (e) {} return "kids"; };
  const setStage = v => { try { localStorage.setItem(SKEY, v); } catch (e) {} };
  const links = ls => `<ul>${ls.map(l => `<li><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.t)}</a></li>`).join("")}</ul>`;
  const tel = n => `<a href="tel:${n.replace(/\s/g, "")}">${esc(n)}</a>`;

  function home(stageId) {
    if (stageById(stageId)) setStage(stageId);
    const g = stageById(getStage());
    const list = C.situations.filter(s => s.stage === g.id);
    app.innerHTML = `<nav class="stages" aria-label="Life stage">${C.stages.map(x => `<a href="#/stage/${x.id}"${x.id === g.id ? ' class="on" aria-current="true"' : ""}>${x.emoji} ${esc(x.title)} <small>${esc(x.ages)}</small></a>`).join("")}</nav>
      <h1>${g.emoji} ${esc(g.title)} <small class="sub">${esc(g.ages)}</small></h1><p class="sub">${esc(g.intro)}</p>
      <div class="grid">${list.map(s => `<a class="tile" href="#/s/${s.id}"><div class="e">${s.emoji}</div><b>${esc(s.title)}</b><span>${esc(s.blurb)}</span>${s.kind === "guide" ? '<span class="pill">Health guide</span>' : ""}</a>`).join("")}</div>`;
  }

  function guide(s) {
    app.innerHTML = `<p><a href="#/stage/${s.stage}">← ${esc(stageById(s.stage).title)}</a></p>
      <h1>${s.emoji} ${esc(s.title)}</h1><p class="sub">${esc(s.blurb)}</p>
      <div class="card"><h2>The official guidance</h2><ul>${li(s.guidance)}</ul></div>
      ${s.partner ? `<div class="card"><h2>For the partner</h2><ul>${li(s.partner)}</ul></div>` : ""}
      <div class="warn"><b>Get help when:</b><ul>${li(s.help_when)}</ul></div>
      <div class="tip"><b>Try this week:</b> ${esc(s.tip)}</div>
      <div class="card"><h2>Check the source</h2>${links(s.links)}
        <p class="src">Last checked ${esc(s.checked)}. Guidance changes, so check the links, and talk to your GP, midwife or child health nurse about your own situation.</p></div>`;
  }

  function help() {
    const h = C.help;
    app.innerHTML = `<h1>Get help</h1><p class="sub">${esc(h.intro)}</p>
      <div class="card"><h2>Phone lines (Australia)</h2><ul class="lines">${h.lines.map(l => `<li>${tel(l.num)} <b>${esc(l.name)}</b>: ${esc(l.note)}</li>`).join("")}</ul></div>
      <div class="warn"><h2>When the crying won't stop</h2><ol>${li(h.crying)}</ol></div>
      ${h.teen ? `<div class="warn"><h2>Worried about your teen</h2><ol>${li(h.teen)}</ol></div>` : ""}
      <div class="card"><h2>More</h2>${links(h.links)}<p class="src">Last checked ${esc(h.checked)}.</p></div>`;
  }

  function situation(id) {
    const s = byId(id);
    if (!s) return home();
    if (s.kind === "guide") return guide(s);
    app.innerHTML = `<p><a href="#/stage/${s.stage}">← ${esc(stageById(s.stage).title)}</a></p>
      <h1>${s.emoji} ${esc(s.title)}</h1><p class="sub">${esc(s.blurb)}</p>
      <div class="card"><h2>What's likely going on</h2><p>${esc(s.going_on)}</p></div>
      <div class="card"><h2><span class="pill">Say</span></h2><ul class="say">${li(s.say)}</ul>
        <h2><span class="pill bad">Avoid</span></h2><ul class="avoid">${li(s.avoid)}</ul></div>
      <div class="card"><h2>What to do</h2><ol>${li(s.steps)}</ol><h2>Why it works</h2><p>${esc(s.why)}</p></div>
      <div class="tip"><b>Try this week:</b> ${esc(s.tip)}</div>
      <p class="src">Sources: ${esc(s.sources.join(" · "))}</p>
      <a class="btn primary" href="#/practice/${s.id}">Practise this (${s.scenarios.length} scenario${s.scenarios.length > 1 ? "s" : ""})</a>`;
  }

  function practice(id) {
    const pool = id && byId(id) && byId(id).scenarios ? allScenarios().filter(x => x.s.id === id) : allScenarios();
    const pick = pool[Math.floor(Math.random() * pool.length)];
    const { s, sc } = pick;
    const p = load();
    const opts = shuffle(sc.options.map((o, i) => ({ ...o, i })));
    const filter = `<select id="f" aria-label="Choose topic"><option value="">All topics</option>${C.stages.map(g => `<optgroup label="${esc(g.title)}">${practisable().filter(x => x.stage === g.id).map(x => `<option value="${x.id}"${x.id === id ? " selected" : ""}>${esc(x.title)}</option>`).join("")}</optgroup>`).join("")}</select>`;
    app.innerHTML = `<div class="row"><h1 style="flex:1">Practice</h1>${filter}</div>
      <p class="score">Score so far: ${p.correct} of ${p.answered} best answers</p>
      <div class="card"><span class="pill">${s.emoji} ${esc(s.title)}</span><p><b>${esc(sc.q)}</b></p>
      <p>What do you do?</p><div class="opts" id="opts">${opts.map((o, k) => `<button data-k="${k}">${esc(o.t)}</button>`).join("")}</div>
      <div id="after"></div></div>`;
    document.getElementById("f").onchange = e => { location.hash = e.target.value ? "#/practice/" + e.target.value : "#/practice"; };
    const box = document.getElementById("opts");
    box.onclick = e => {
      const b = e.target.closest("button"); if (!b || b.disabled) return;
      const chosen = opts[+b.dataset.k];
      const right = chosen.i === sc.best;
      p.answered++; if (right) p.correct++; save(p);
      document.querySelector(".score").textContent = `Score so far: ${p.correct} of ${p.answered} best answers`;
      [...box.children].forEach((btn, k) => {
        const o = opts[k]; btn.disabled = true;
        if (o.i === sc.best) btn.classList.add("good"); else if (btn === b) btn.classList.add("bad");
        btn.insertAdjacentHTML("beforeend", `<span class="fb">${o.i === sc.best ? "✓ " : ""}${esc(o.why)}</span>`);
      });
      document.getElementById("after").innerHTML = `<p><b>${right ? "Nice, that's the best option." : "Not quite. The best option is highlighted."}</b></p>
        <div class="row"><button class="primary" id="next">Next scenario</button><a href="#/s/${s.id}">Read the full card</a></div>`;
      document.getElementById("next").onclick = () => practice(id);
    };
  }

  function today() {
    const day = Math.floor(Date.now() / 864e5);
    const list = C.situations.filter(x => x.stage === getStage());
    const s = list[day % list.length];
    app.innerHTML = `<h1>Try this today</h1><p class="sub">${esc(stageById(getStage()).title)} · One small thing. No need to do it perfectly.</p>
      <div class="card"><span class="pill">${s.emoji} ${esc(s.title)}</span><p><b>${esc(s.tip)}</b></p>
      ${s.why ? `<p>Why it works: ${esc(s.why)}</p>` : ""}<a href="#/s/${s.id}">See the full card</a></div>
      <div class="tip"><b>Tonight, ask yourself:</b> What went well? What would I try differently? (You're good inside, even on a hard day.)</div>`;
  }

  function route() {
    const [, page, arg] = location.hash.split("/");
    const key = page === "s" || page === "stage" ? "home" : page || "home";
    document.querySelectorAll("nav a").forEach(a => a.classList.toggle("on", a.dataset.nav === key));
    window.scrollTo(0, 0);
    if (page === "s") situation(arg);
    else if (page === "practice") practice(arg);
    else if (page === "today") today();
    else if (page === "help") help();
    else home(page === "stage" ? arg : null);
  }
  window.addEventListener("hashchange", route);
  route();
})();
