# OCSW Assets Page

Public GitHub Pages host for the [OCSW Asset Register](https://github.com/flaviocfneto/AssetRegisterOCSW) frontend. The QR codes printed on physical assets encode `https://flaviocfneto.github.io/OCSW-ASSETS-PAGE/?id=<uuid>`, which is served from this repo — so this URL structure must stay stable.

## Current deploy mode: "Deploy from a branch" (workflow-free)

While the GitHub Actions allowance is exhausted, this repo serves Pages
directly from files committed to `main`:

- **Settings → Pages → Source**: **Deploy from a branch**
- **Branch**: `main`
- **Folder**: `/ (root)`

Root of `main` contains the built Vite output:

```
index.html
config.js          ← runtime config (EXEC_URL + CLIENT_ID)
assets/
  index-<hash>.js
  index-<hash>.css
```

`config.js` is deliberately un-fingerprinted and loaded at runtime by
`index.html` — so a deployment change (new Apps Script `/exec` URL) is a
one-line edit here, no rebuild required.

## Updating the site (workflow-free)

1. In the private repo, `cd app && npm run build`.
2. Copy `app/dist/*` into this repo's root, overwriting.
3. Commit and push to `main`. Pages picks up the change within a minute.

If you only need to rotate `config.js` (e.g. new Apps Script deployment
URL), you can edit `config.js` here directly and skip the rebuild.

## When Actions allowance returns

The workflow at `.github/workflows/static.yml` is wired to build the
private repo's `app/` folder with Vite and publish `dist/`. It's currently
set to **manual-only** (`workflow_dispatch` + `repository_dispatch`) so it
consumes no minutes on its own. To re-enable auto-deploy:

1. Switch **Settings → Pages → Source** back to **GitHub Actions**.
2. Uncomment the `schedule` and `push` triggers in `static.yml`.
3. Uncomment the `push` trigger in the private repo's
   `.github/workflows/notify-pages.yml`.

Details and required secrets are documented at the top of each workflow
file.
