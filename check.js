// Run: node check.js   Validates the content so a typo can't break the app.
global.window = {};
require("./content/situations.js");
require("./content/kids-extra.js");
require("./content/early-years.js");
require("./content/teens.js");
require("./content/young-adults.js");
const { situations, stages, help } = window.CONTENT;
const errs = [];
const ids = new Set();
const stageIds = new Set(stages.map(g => g.id));
const req = (s, keys) => keys.forEach(k => { if (!s[k]) errs.push(`${s.id}: missing ${k}`); });
const arr = (s, keys) => keys.forEach(k => { if (!Array.isArray(s[k]) || !s[k].length) errs.push(`${s.id}: empty ${k}`); });
for (const s of situations) {
  if (ids.has(s.id)) errs.push("duplicate id " + s.id);
  ids.add(s.id);
  if (!stageIds.has(s.stage)) errs.push(`${s.id}: unknown stage ${s.stage}`);
  req(s, ["title", "emoji", "blurb", "tip"]);
  arr(s, ["sources"]);
  if (s.kind === "guide") {
    // Health guides: official guidance + links + a "last checked" date, no quiz.
    req(s, ["checked"]); arr(s, ["guidance", "help_when", "links"]);
    (s.links || []).forEach(l => { if (!l.t || !/^https:\/\//.test(l.url)) errs.push(`${s.id}: bad link ${l.t}`); });
    if (s.scenarios) errs.push(`${s.id}: guides don't have scenarios`);
  } else {
    req(s, ["going_on", "why"]); arr(s, ["say", "avoid", "steps", "scenarios"]);
  }
  (s.scenarios || []).forEach((sc, i) => {
    if (!sc.q) errs.push(`${s.id}#${i}: no question`);
    if (!sc.options || sc.options.length !== 3) errs.push(`${s.id}#${i}: need exactly 3 options`);
    else {
      if (!Number.isInteger(sc.best) || sc.best < 0 || sc.best > 2) errs.push(`${s.id}#${i}: bad best index`);
      sc.options.forEach((o, j) => { if (!o.t || !o.why) errs.push(`${s.id}#${i} option ${j}: missing t/why`); });
    }
  });
}
// Kids cards should each have 3+ scenarios so practice doesn't repeat.
for (const s of situations) if (s.stage === "kids" && s.kind !== "guide" && s.scenarios.length < 3) errs.push(`${s.id}: only ${s.scenarios.length} scenarios (kids cards need 3+)`);
for (const g of stages) if (!situations.some(s => s.stage === g.id)) errs.push(`stage ${g.id} has no cards`);
if (!help || !help.lines.length || !help.crying.length) errs.push("help page content missing");
const n = situations.reduce((a, s) => a + (s.scenarios || []).length, 0);
if (errs.length) { console.error(errs.join("\n")); process.exit(1); }
console.log(`OK: ${situations.length} cards (${situations.filter(s => s.kind === "guide").length} health guides), ${n} scenarios, ${stages.length} stages`);
