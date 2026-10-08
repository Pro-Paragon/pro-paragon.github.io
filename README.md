# Pro Paragon Software site

Static React (Vite) site for Pro Paragon Software LLC, deployed to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `main`.

## Layout

| Path | Becomes | Notes |
|---|---|---|
| `src/` | `/`, `/about`, `/blockcade`, `/support` | React pages (react-router). Unknown paths fall back to `404.html`, a copy of the app shell |
| `public/blockcade/privacy/index.html` | `/blockcade/privacy/` | Static privacy policy. **Used by Play Console, App Store Connect and AdMob, so keep this URL stable** |
| `public/app-ads.txt` | `/app-ads.txt` | Must stay at the site root for AdMob verification |
| `public/CNAME` | — | Custom domain for GitHub Pages |

## Develop

```
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
```

Requires Node 18+ (the workflow uses Node 22).

## One-time GitHub setup

1. Repo **Settings → Pages → Source: GitHub Actions**.
2. **Custom domain**: `www.proparagonsoftware.com`, then tick **Enforce HTTPS** once the certificate is issued.
3. Optional but recommended: verify the domain under the organization's **Settings → Pages**.

## Squarespace DNS (Domains → DNS Settings)

1. Remove Squarespace's default `@` / `www` records that point at Squarespace.
2. Four **A** records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
3. **CNAME** `www` → `pro-paragon.github.io`
4. Add the TXT record GitHub gives you if you verify the domain.

## Privacy policy notes

The policy was drafted from what Blockcade does at the time of writing (Google Play Games, AdMob + UMP,
no accounts, no purchases). Update it when purchases ship, when iOS ships (App Tracking Transparency),
or when ad networks change, and have it reviewed by someone qualified. The policy says sensitive ad
categories are blocked. Make that true in AdMob → Blocking controls or delete the sentence.
