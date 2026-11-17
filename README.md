# Learning-To-Parent
An interface to learn how to parent at different stages. It's not vetted by professionals though.

Live app: https://malixx00.github.io/Learning-To-Parent/

## Parenting Toolkit: PWA version

This is the installable web app version of `../Parenting App`. Host it on GitHub Pages and friends can open the link on their phone, tap "Add to Home Screen" / "Install", and use it like an app, including offline.

## What's different from "Parenting App"
| Added | Why |
|---|---|
| `manifest.webmanifest` | App name, colours and icons, so phones offer "Install" / "Add to Home Screen" |
| `sw.js` | Service worker: caches the app so it works offline. Network first, so people get updates when online |
| `icons/` | Home-screen icons (normal, maskable for Android, Apple touch icon) |
| PWA tags in `index.html` | Links the manifest, icons and service worker, plus `noindex` so search engines don't list it |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are |
| `update-from-app.sh` | Copies the latest content from `../Parenting App` into this folder |

Not included on purpose: `sources/` (the research notes contain quotes from books and podcasts, which shouldn't be published), `ROADMAP.md`.

The service worker only runs over `https://` or `http://localhost`. Double-clicking `index.html` still works, just without install/offline.

## Host it on GitHub Pages (one-off, about 10 minutes)

**Before you start:** on a free GitHub account, Pages only works from a **public** repository, so anyone with the link (or who finds the repo) can see the app. The `noindex` tag keeps it out of Google, but it isn't private. Private-repo Pages needs a paid plan (GitHub Pro or above).

1. Sign in at github.com and create a new repository, e.g. `parenting-toolkit`. Public, no README.
2. In a terminal, from this folder:

   ```bash
   git init
   git add .
   git commit -m "Parenting Toolkit PWA"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/parenting-toolkit.git
   git push -u origin main
   ```
3. On GitHub: repository **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: main, / (root) → Save**.
4. Wait a minute or two. Your app will be at `https://YOUR-USERNAME.github.io/parenting-toolkit/`.
5. Open it on your phone:
   - **iPhone (Safari):** Share button → Add to Home Screen.
   - **Android (Chrome):** menu → Install app (or Add to Home screen).

## Updating the content later
1. Edit content in `../Parenting App/content/` as usual and run `node check.js` there.
2. From this folder, run `./update-from-app.sh` (copies the content and app code, then validates).
3. Open `sw.js` and bump `VERSION` (e.g. `"v1"` → `"v2"`). If you added a new content file, also add it to `FILES` in `sw.js` and a `<script>` tag in `index.html`.
4. Commit and push:

   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
   GitHub Pages updates within a couple of minutes. Installed apps pick up the new version next time they're opened online.

## Tested (Nov 2026, headless Chrome)
- Service worker activates and caches all 14 app files.
- Chrome reports no manifest or installability errors.
- With the network switched off, the app still loads and shows the cards.
