# CP Amman Issue Tracker — Setup Guide
## Free Stack: GitHub Pages + Supabase + ImgBB

---

## STEP 1 — Supabase (Free Database)

1. Go to **https://supabase.com** → Sign up free (no credit card)
2. Click **New Project** → name it `cp-issue-tracker` → set a DB password → choose region: **Europe (Frankfurt)**
3. Wait ~1 minute for it to start
4. Go to **SQL Editor** → click **New Query**
5. Copy the full contents of `SUPABASE_SETUP.sql` and paste it → click **Run**
6. Go to **Settings → API** and copy:
   - **Project URL** → looks like `https://xxxxxxxx.supabase.co`
   - **anon public key** → long string starting with `eyJ...`

---

## STEP 2 — ImgBB (Free Photo Hosting)

1. Go to **https://imgbb.com** → Sign up free
2. Click your username (top right) → **API**
3. Click **Add API key** → give it a name → copy the key

---

## STEP 3 — Fill in config.js

Open `config.js` and replace the placeholders:

```js
const SUPABASE_URL  = 'https://YOUR_PROJECT.supabase.co';   // from Step 1
const SUPABASE_KEY  = 'eyJ...';                              // from Step 1
const IMGBB_API_KEY = 'your_imgbb_key';                      // from Step 2
```

---

## STEP 4 — Deploy to GitHub Pages

1. Create a new repo on GitHub (name it anything, e.g. `cp-issue-tracker`)
2. Upload **all files** maintaining this structure:
```
/
├── index.html
├── login.html
├── management.html
├── department.html
├── config.js
├── cp_logo.png
├── manifest.json
├── sw.js
└── icons/
    └── icon-*.png (all 8 files)
```
3. Go to repo **Settings → Pages → Branch: main → / (root)** → Save
4. Your site will be live at: `https://yourusername.github.io/repo-name/`

---

## DEFAULT LOGIN CREDENTIALS

| Username      | Password     | Access        |
|---------------|--------------|---------------|
| management    | cp.mgmt2024  | Full mgmt     |
| engineering   | eng2024      | Engineering   |
| housekeeping  | hk2024       | Housekeeping  |
| frontoffice   | fo2024       | Front Office  |
| fnb           | fnb2024      | F&B           |
| security      | sec2024      | Security      |

⚠️ **Change all passwords** in Supabase after first login:
Dashboard → Table Editor → users → edit the password field

---

## FREE TIER LIMITS

| Service       | Free Limit              | Notes                        |
|---------------|-------------------------|------------------------------|
| Supabase      | 500MB DB, 50k req/month | More than enough for a hotel |
| ImgBB         | Unlimited uploads, 32MB/photo | Free forever          |
| GitHub Pages  | Unlimited               | 100GB bandwidth/month        |

