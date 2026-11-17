# Builds "Review Workbook.xlsx" from the app content. Re-run after changing content:
#   python3 make_review_workbook.py      (needs: pip install openpyxl, and node)
import json, sys, subprocess, os
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.worksheet.datavalidation import DataValidation
from openpyxl.utils import get_column_letter

HERE = os.path.dirname(os.path.abspath(__file__))
# In the GitHub repo the app is one level up; on Liam's computer it is ../Parenting App
APP = os.path.join(HERE, "..") if os.path.exists(os.path.join(HERE, "..", "content")) else os.path.join(HERE, "..", "Parenting App")
js = 'global.window={};["situations","kids-extra","early-years","teens","young-adults"].forEach(f=>require("./content/"+f+".js"));const C=window.CONTENT;process.stdout.write(JSON.stringify({stages:C.stages,cards:C.situations,help:C.help}))'
data = json.loads(subprocess.run(["node", "-e", js], cwd=APP, capture_output=True, text=True, check=True).stdout)
out = os.path.join(HERE, "Review Workbook.xlsx")
stages = {g["id"]: g for g in data["stages"]}
order = [g["id"] for g in data["stages"]]
cards = sorted(data["cards"], key=lambda c: order.index(c["stage"]))

MW, CHN, GP, OT, PSY, SCH, DIET = "Midwife", "Child & family health nurse", "GP / paediatrician", "Occupational therapist", "Psychologist / counsellor", "Teacher / school counsellor", "Dietitian / allergy"
default = {"expecting": [MW], "newborn": [MW, CHN], "baby": [CHN, GP], "toddler": [CHN, OT], "kids": [PSY], "teens": [PSY], "adults": [PSY]}
extra = {
  "pregnancy-health": [GP], "solids-allergy": [DIET], "milestones": [GP, OT], "toilet-training": [OT], "toddler-active": [OT],
  "toddler-tantrums": [PSY], "toddler-limits": [PSY], "serve-return": [OT], "separation": [PSY], "first-weeks-team": [PSY], "parent-feelings": [PSY],
  "tantrum": [OT], "frustration": [OT], "homework": [SCH, OT], "eating": [OT, DIET], "sharing": [OT], "chores": [OT], "sleep": [CHN],
  "bedwetting": [GP, CHN], "bullying": [SCH], "friends": [SCH], "hard-talks": [GP],
  "teen-mental-health": [GP], "teen-eating": [GP, DIET], "teen-substances": [GP], "teen-online-safety": [SCH], "teen-health-basics": [GP],
  "teen-puberty": [GP], "teen-school": [SCH], "teen-driving": ["Anyone"],
  "adult-struggling": [GP], "grandparent-safety": [MW, CHN],
}
def who(c): return ", ".join(dict.fromkeys(default[c["stage"]] + extra.get(c["id"], [])))

H = Font(bold=True, color="FFFFFF"); HF = PatternFill("solid", fgColor="2F7D6D")
GUIDE = PatternFill("solid", fgColor="FBECE8"); WRAP = Alignment(wrap_text=True, vertical="top")
thin = Side(style="thin", color="DDDDDD"); B = Border(top=thin, bottom=thin, left=thin, right=thin)
def header(ws, cols, widths):
    ws.append(cols)
    for i, w in enumerate(widths, 1):
        c = ws.cell(row=1, column=i); c.font = H; c.fill = HF; c.alignment = WRAP
        ws.column_dimensions[get_column_letter(i)].width = w
    ws.freeze_panes = "A2"; ws.auto_filter.ref = f"A1:{get_column_letter(len(cols))}1"
def dv(ws, col, options, n):
    v = DataValidation(type="list", formula1='"' + ",".join(options) + '"', allow_blank=True)
    ws.add_data_validation(v); v.add(f"{col}2:{col}{n+1}")
LINK = "'Start here'!$B$6"

wb = Workbook()
st = wb.active; st.title = "Start here"
rows = [
  ("Parenting Toolkit: professional accuracy review", None),
  (None, None),
  ("Reviewer name", ""), ("Profession / qualifications", ""), ("Date started", ""),
  ("App link", "https://malixx00.github.io/Learning-To-Parent/"),
  (None, None),
  ("How to use this workbook", None),
  ("1. Checklist", "One row per card. Filter 'Suggested reviewer' to your profession. Open each card, review it, then set 'Review status'."),
  ("2. Scenarios", "One row per practice question. Check that the app's 'best answer' really is best, and that the explanations are fair."),
  ("3. Issues", "Log every problem here, one row per problem. Use the Ref from the Checklist or Scenarios sheet so it can be found and fixed."),
  ("4. Help page", "Check the phone numbers, hours and crisis steps on the Get help page (Checklist row H-001)."),
  (None, None),
  ("Severity", None),
  ("Critical", "Could lead to harm if followed (e.g. unsafe sleep advice, wrong emergency number, missing 'call 000'). Must be fixed before sharing."),
  ("Major", "Factually wrong, out of date, or not true for Australia. Must be fixed."),
  ("Minor", "Unclear, incomplete, or could be misread. Should be fixed."),
  ("Suggestion", "Wording, tone or something worth adding. Nice to have."),
  (None, None),
  ("Example issue", "Ref C-011 | Section: Guidance | Severity: Major | Current text: 'Start solids at around 6 months...' | What's wrong: ... | Suggested change: ... | Evidence: ASCIA 2026, p.3"),
]
for a, b in rows: st.append([a, b])
st["A1"].font = Font(bold=True, size=14, color="2F7D6D")
for r in (8, 14): st.cell(row=r, column=1).font = Font(bold=True, size=12)
for r in (3, 4, 5, 6): st.cell(row=r, column=1).font = Font(bold=True); st.cell(row=r, column=2).fill = PatternFill("solid", fgColor="FFF7D6")
for r, col in ((15, "F4CCCC"), (16, "FCE5CD"), (17, "FFF2CC"), (18, "D9EAD3")): st.cell(row=r, column=1).fill = PatternFill("solid", fgColor=col); st.cell(row=r, column=1).font = Font(bold=True)
st.column_dimensions["A"].width = 30; st.column_dimensions["B"].width = 110
for row in st.iter_rows(): [setattr(c, "alignment", WRAP) for c in row]

# Checklist
ck = wb.create_sheet("Checklist")
cols = ["Ref", "Stage", "Ages", "Card", "Type", "Open in app", "Suggested reviewer", "Last checked (in app)", "Review status", "Reviewer initials", "Notes (optional)", "Card ID"]
header(ck, cols, [8, 16, 12, 38, 14, 12, 34, 14, 26, 10, 40, 22])
n = 0
for c in cards:
    n += 1; g = stages[c["stage"]]
    ck.append([f"C-{n:03d}", g["title"], g["ages"], c["title"], "Health guide" if c.get("kind") == "guide" else "Advice card", None, who(c), c.get("checked", ""), "Not started", "", "", c["id"]])
    r = ck.max_row
    ck.cell(row=r, column=6).value = f'=HYPERLINK({LINK}&"#/s/{c["id"]}","Open card")'
    if c.get("kind") == "guide":
        for col in range(1, len(cols) + 1): ck.cell(row=r, column=col).fill = GUIDE
ck.append(["H-001", "All", "", "Get help page (phone lines and crisis steps)", "Help page", None, "Anyone (esp. GP / counsellor)", data["help"]["checked"], "Not started", "", "", "help"])
ck.cell(row=ck.max_row, column=6).value = f'=HYPERLINK({LINK}&"#/help","Open page")'
for row in ck.iter_rows(min_row=2):
    for c in row: c.alignment = WRAP; c.border = B
dv(ck, "I", ["Not started", "Reviewed - no issues", "Reviewed - issues logged", "Not my area"], ck.max_row)

# Scenarios
sc = wb.create_sheet("Scenarios")
cols = ["Ref", "Stage", "Card", "Situation (question)", "App's BEST answer", "Other option A", "Other option B", "Why the best answer is best (app)", "Open in app", "Agree with best answer?", "Reviewer initials", "Card ID"]
header(sc, cols, [8, 14, 26, 50, 50, 40, 40, 40, 12, 18, 10, 20])
m = 0
for c in cards:
    for s in c.get("scenarios") or []:
        m += 1; best = s["options"][s["best"]]; others = [o for i, o in enumerate(s["options"]) if i != s["best"]]
        sc.append([f"S-{m:03d}", stages[c["stage"]]["title"], c["title"], s["q"], best["t"], others[0]["t"], others[1]["t"], best["why"], None, "", "", c["id"]])
        sc.cell(row=sc.max_row, column=9).value = f'=HYPERLINK({LINK}&"#/practice/{c["id"]}","Practise")'
for row in sc.iter_rows(min_row=2):
    for c in row: c.alignment = WRAP; c.border = B
dv(sc, "J", ["Yes", "No - log an issue", "Unsure - log an issue"], sc.max_row)

# Issues
iss = wb.create_sheet("Issues")
cols = ["Issue #", "Ref (C-/S-/H-)", "Card", "Section", "Severity", "Current text (copy from app)", "What's wrong", "Suggested change", "Evidence / source (guideline, page, year)", "Reviewer", "Date", "Status (for Liam)", "Liam's notes"]
header(iss, cols, [8, 12, 26, 20, 12, 40, 40, 40, 34, 14, 12, 16, 30])
N = 300
for i in range(1, N + 1):
    iss.append([i] + [""] * (len(cols) - 1))
    for c in iss[iss.max_row]: c.alignment = WRAP; c.border = B
dv(iss, "D", ["What's going on", "Say", "Avoid", "Steps", "Why it works", "Tip", "Guidance", "For the partner", "Get help when", "Links", "Scenario", "Help page", "Other"], N)
dv(iss, "E", ["Critical", "Major", "Minor", "Suggestion"], N)
dv(iss, "L", ["Open", "Fixed", "Won't fix", "Needs discussion"], N)

# Summary
sm = wb.create_sheet("Summary")
sm.append(["Severity", "Issues logged", "Still open"])
for sev in ["Critical", "Major", "Minor", "Suggestion"]:
    sm.append([sev, f'=COUNTIF(Issues!E:E,"{sev}")', f'=COUNTIFS(Issues!E:E,"{sev}",Issues!L:L,"<>Fixed",Issues!L:L,"<>Won\'t fix")'])
sm.append([]); sm.append(["Checklist", "Count"])
for s in ["Not started", "Reviewed - no issues", "Reviewed - issues logged", "Not my area"]:
    sm.append([s, f'=COUNTIF(Checklist!I:I,"{s}")'])
for c in (sm["A1"], sm["B1"], sm["C1"], sm["A7"], sm["B7"]): c.font = H; c.fill = HF
sm.column_dimensions["A"].width = 28; sm.column_dimensions["B"].width = 16; sm.column_dimensions["C"].width = 14

wb.save(out); print(f"{n} cards + help page, {m} scenarios -> {out}")
