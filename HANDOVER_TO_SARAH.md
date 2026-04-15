# 🤝 Handover to Sarah — Durand Clinic Marketing Launch

**From:** Paven + Claude (agency)
**Date:** 2026-04-15
**Status:** Active project, foundation being built

---

## 📖 TL;DR — What This Project Is

We're launching **The Durand Clinic** — a premium Executive Health + Longevity brand — distinct from `durand.life` (DFH parent).

**Domain:** `durand.clinic` (Paven owns, at Netfirms, not yet pointed at the Vercel site)
**Current live site:** `durandhealth.com` (WordPress, will be retired/redirected)
**New site:** this `durand-clinic` repo → deployed to `durand-clinic.vercel.app`

Claude (me) is acting as the agency. I'm handling all strategy + code. You and Paven provide approvals, credentials, and domain/DNS control.

---

## ✅ Decisions Already Locked In

1. **Domain:** switching to `durand.clinic` (Paven handles Netfirms DNS himself when instructions are ready)
2. **Positioning:** premium Executive Health + Longevity. Paramedicals are optional/secondary.
3. **`durandhealth.com`:** full 301 redirect to `durand.clinic` (preserves 6 years of SEO equity)
4. **GA4:** start a FRESH property for `durand.clinic` (don't reuse the Hamilton property `G-2FGYQ02L5V`)
5. **GTHA (Ontario) focus** for Executive Health paid marketing. Global inbound for clinic enquiries.
6. **Top competitors:** Medpoint, Medcan, Cleveland Clinic Canada, LaVie
7. **Budget logic:** ROI-driven, reinvest at ~10% margin
8. **Paramedicals** not marketed, not core to licensee model — stay on site but de-emphasized

---

## 🔨 What's Already Built (in this repo, not yet committed)

- ✅ `robots.txt` — tells search engines how to crawl, allows AI bots (ChatGPT, Claude, Perplexity)
- ✅ `sitemap.xml` — lists all 31 pages with SEO priorities (exec health + longevity = highest priority, paramedicals = lowest)

Both are ready to commit. I was mid-way through upgrading schema markup (the structured data that helps Google understand the site) when Paven signed off.

---

## 📋 Remaining Technical Work (Claude to complete)

Next session with Claude, ask it to continue these items:

- [ ] **Upgrade schema markup** on index.html (GTHA geo, MedicalClinic, FAQ, Physician types)
- [ ] **Update canonical URLs** across all 31 HTML files from `durand-clinic.vercel.app` → `durand.clinic`
- [ ] **Add GA4 + Google Tag Manager** snippets to every page (scaffolding first, activate when GA4 measurement ID is ready)
- [ ] **Create `vercel.json`** with security headers and redirect scaffolding
- [ ] **Write `LAUNCH_CHECKLIST.md`** — every item to verify before going live

Claude will have full context if you point it at this file and `CLAUDE.md` in the repo.

---

## 🔑 YOUR TASK LIST, SARAH

These are things only you can do (credentials + Google account access). No marketing knowledge required — step-by-step instructions below for each.

### 🥇 Priority 1 — Do These First (30 min total)

#### Task 1: Create a new GA4 property called "Durand Clinic"
1. Go to **analytics.google.com** (sign in with the Google account that manages durandhealth.com today)
2. Bottom-left, click the **gear/settings icon**
3. Click **"+ Create"** → **"Property"**
4. Name it: **"Durand Clinic"**
5. Reporting time zone: **Eastern Time (Toronto)**
6. Currency: **Canadian Dollar (CAD)**
7. Click **Next** → fill in Industry: **Health Care**, Business size: **Small**
8. Click **Next** → check: "Generate leads", "Drive online sales", "Examine user behavior"
9. Click **Create** → accept terms
10. When it asks how to collect data, choose **Web**
11. Website URL: `https://durand.clinic`
12. Stream name: **Durand Clinic Main**
13. Click **Create stream**
14. **Copy the "Measurement ID"** — it looks like `G-XXXXXXXXXX` → **paste it in an email to Paven + Claude**

#### Task 2: Create Google Search Console property
1. Go to **search.google.com/search-console**
2. Click **+ Add property**
3. Choose **Domain** (not URL prefix)
4. Type: `durand.clinic`
5. It will show a DNS TXT record → **copy it and send to Paven** (he'll paste it at Netfirms)

#### Task 3: Check what else already exists (5 min)
Check if these exist by trying to sign in (with the Google account that runs durandhealth.com):

- [ ] **Google Business Profile** for "Durand Integrated Health Group" — go to business.google.com
- [ ] **Google Ads account** — ads.google.com
- [ ] **Facebook/Meta Business Manager** — business.facebook.com
- [ ] **LinkedIn company page** for the clinic — linkedin.com → search
- [ ] **Email marketing tool** (Mailchimp, HubSpot, Constant Contact?)
- [ ] **Booking tool on current site** (Jane App? Cliniko? Acuity? Or just phone?)

For each: reply YES (share access) / NO (we'll create later) / NOT SURE.

### 🥈 Priority 2 — Once Task 1-3 are done

Claude will tell you next steps based on what exists. Likely:
- Add Paven and Claude as users to discovered accounts
- Create missing accounts (Meta Pixel, LinkedIn Insight Tag, etc.)
- Set up Microsoft Clarity (free session recording — super helpful)

---

## 🌐 Paven's Task (When Ready)

Paven will handle the Netfirms DNS step himself. Claude will prepare exact instructions like:
> "Log into Netfirms → durand.clinic → DNS settings → add these 2 records..."

He's waiting on Claude to finalize which Vercel IP/CNAME to point at.

---

## 💬 How to Continue Working With Claude

**Easiest path:** In Claude Code, navigate to `~/durand-clinic` and start a new session. Say:
> "Read HANDOVER_TO_SARAH.md and CLAUDE.md — we're continuing the marketing launch. Paven is signed off. Ready to proceed with the remaining Phase 1a technical work."

Claude will pick up exactly where we left off.

**If you want to keep it simple:** Ping Paven whenever you finish a task, and he can drive the next Claude session. No pressure to drive it yourself.

---

## 📁 Where Everything Lives

- **This repo:** `~/durand-clinic` (code for the new site)
- **Audit doc:** `DFH Brain/Working/Marketing Plan/00_Audit_Findings_2026-04-15.md` (Paven's Google Drive)
- **This handover:** `~/durand-clinic/HANDOVER_TO_SARAH.md` (you're reading it)
- **Claude project context:** `~/durand-clinic/CLAUDE.md` (auto-loaded by Claude)

---

## ❓ Questions Still Open

Sarah, if you know these, please answer in email:

1. What tool (if any) powers "Book Appointment" on durandhealth.com today?
2. Rough pricing range for a typical Executive Health assessment? ($3K? $8K? $15K?) — needed to model ad budgets
3. Is there an email list / CRM of existing patients we can talk to about the new launch?

---

**Welcome aboard. Paven and I are delighted you're on this.** 🎉
