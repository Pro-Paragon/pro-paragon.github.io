# Pro Paragon developer site

The public site that holds Blockcade's privacy policy and, later, `app-ads.txt`. Hosted on GitHub
Pages; served from your own domain (registered at Squarespace).

## Files

| File | Becomes | Notes |
|---|---|---|
| `index.html` | `https://www.YOURDOMAIN/` | Minimal studio page; also the store listing's "developer website" |
| `blockcade/privacy/index.html` | `https://www.YOURDOMAIN/blockcade/privacy/` | **The privacy policy URL** for Play Console, App Store Connect and the AdMob consent messages |
| `app-ads.txt` | `https://www.YOURDOMAIN/app-ads.txt` | Must be at the root of the developer website. Compare the line with the one AdMob generates (AdMob → Apps → View all apps → app-ads.txt) before relying on it |
| `CNAME` | — | Tells GitHub Pages which domain to answer on |

## Before publishing — fill in the placeholders

Search every file for `{{` and replace:

- `{{CONTACT EMAIL}}` — an address you will actually read (e.g. `support@YOURDOMAIN`)
- `{{COMPANY POSTAL ADDRESS}}` — Pro Paragon Software LLC's business address
- `{{EFFECTIVE DATE}}` — the date you publish, e.g. `October 1, 2026`
- `{{YEAR}}` — e.g. `2026`
- `{{YOUR DOMAIN}}` in `CNAME` — e.g. `proparagon.com` (the file should read `www.proparagon.com`)

**Have the policy reviewed** by someone qualified before relying on it. It was drafted from what the
game actually does (see "What the policy is based on" below), but it is not legal advice.

The policy says sensitive ad categories are blocked — make that true in AdMob → Blocking controls
before publishing, or delete that sentence.

## Setup

### 1. Create the repository

1. On GitHub, under the **Pro-Paragon** organization, create a **public** repository named
   exactly `pro-paragon.github.io`. (Public is required for Pages on a free plan. Keep it separate
   from the private game repo.)
2. Upload these four files (and the `blockcade/privacy/` folder) to the default branch.
3. Repository → **Settings → Pages** → Source: *Deploy from a branch*, branch `main`, folder `/`.
   After a minute the site is live at `https://pro-paragon.github.io/`.

### 2. Point your Squarespace domain at it

In Squarespace → **Domains** → your domain → **DNS** (DNS Settings):

1. Remove any default Squarespace records for `@` and `www` that point at Squarespace
   (the parked page), so they don't conflict.
2. Add four **A** records for the root (`@`):
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
3. Add one **CNAME** record: host `www` → `pro-paragon.github.io`
4. DNS can take from minutes to a day to spread.

### 3. Connect the domain in GitHub

1. GitHub → the organization's **Settings → Pages → Add a domain** → enter your domain and follow
   the TXT-record verification (add that TXT record in Squarespace DNS too). Verifying stops anyone
   else claiming your domain on GitHub Pages.
2. The repository → **Settings → Pages → Custom domain** → `www.YOURDOMAIN` → Save.
3. Once the certificate is issued, tick **Enforce HTTPS**.

Check `https://www.YOURDOMAIN/blockcade/privacy/` opens, then use that URL everywhere.

### 4. Use the URL

- AdMob → Privacy & messaging → the GDPR and US state messages
- Play Console → App content → Privacy policy
- Play Console → Store settings → Store listing contact details → Website: `https://www.YOURDOMAIN`
- App Store Connect (later) → App Privacy → Privacy Policy URL

## Changing it later

The URL can be edited in every one of those places at any time. The one thing to avoid after
launch is changing the **developer website** domain, because AdMob's `app-ads.txt` verification
starts over on the new domain.

## What the policy is based on

Checked against the Blockcade project on 2026-09-30:

- **Unity services all off** — Analytics, Cloud Diagnostics crash reporting, Performance Reporting
  and Purchasing are disabled in `ProjectSettings/UnityConnectSettings.asset`.
- **Google Play Games Services** — sign-in and Saved Games cloud save (progress, levels, attempts,
  settings, item ledger), keyed by the Play Games player ID.
- **Google Mobile Ads SDK 11.5.0 + UMP 4.0.0** — interstitial and rewarded ads; merged manifest
  declares `AD_ID` and the `ACCESS_ADSERVICES_*` permissions; max ad content rating PG; not tagged
  child-directed (13+ audience decision).
- **Local only** — PlayerPrefs ad-pacing counters; save files in the app's data folder.
- **No** in-app purchases (planned for 1.1), no accounts, no email, no location permission.

Update the policy if any of that changes — in particular when purchases ship in 1.1, when iOS
ships (App Tracking Transparency), or if more ad networks are added through mediation.
