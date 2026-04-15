# CLAUDE.md — Durand Health Clinic Website

## Overview
This is the marketing website for **Durand Health Exec+Longevity** — a clinic-based executive health and longevity testing business. It is completely separate from durand.life (Durand Future Health employer platform).

## What This Business Does
- Advanced executive health assessments (50,000+ biomarkers)
- Exclusive longevity testing (epigenetics, proteomics, multi-omics)
- Paramedical services
- Trauma services (available but NOT publicly linked to Bronte Springs)
- Weekend Spa (coming soon)
- Year-round health intelligence via the Durand Future Health platform
- Optional $1M global treatment insurance (~$85/month)
- Licensable clinic model for global expansion

## Key Differentiators vs. Competitors (Medcan, Cleveland Clinic, Harrison Health)
- 2x more testing at lower cost
- Longevity assessment included (competitors don't offer it)
- Advanced cardiac stress testing included (Medcan doesn't even do this)
- VIP experience — not a factory/assembly line
- Zero upselling — everything included in the price
- Year-round health intelligence platform (competitors cut you off after visit)
- Secure AI health chat (anonymous, no ID revealed)
- 30+ wearable/app integrations and EHR integration

## Pricing Tiers
- **Durand Essentials:** Starting at $499 (health assessment + longevity)
- **Exec + Longevity:** Contact for pricing (50,000+ markers, exclusive — price NOT published but less than competitors)

## Tech Stack
- Pure HTML/CSS/JS — no framework, no build tools
- Shared CSS in `css/styles.css`
- Shared JS in `js/main.js` (nav/footer injection, mobile menu, animations)
- Individual HTML files per page
- GitHub → Vercel auto-deploy

## File Structure
```
durand-clinic/
├── index.html        # Home page
├── about.html        # About the clinic
├── services.html     # All services
├── pricing.html      # Pricing tiers
├── team.html         # Physicians & team
├── faq.html          # FAQ accordion
├── contact.html      # Contact form + info
├── css/styles.css    # Full design system
├── js/main.js        # Shared components & logic
├── images/           # Site images (add here)
└── CLAUDE.md         # This file
```

## Design System
- **Style:** Futuristic, dark, high-contrast, bio-tech aesthetic
- **Fonts:** Space Grotesk (headings) + Inter (body) via Google Fonts
- **Colors:** Charcoal slate bg (#2d3347), electric blue accent (#00b4ff), cyan (#00e5ff), purple (#8b5cf6), magenta (#d946ef)
- **Effects:** Glow borders, gradient text, glassmorphism cards, animated orbs, scroll fade-ins

## How Components Work
- Navigation and footer are injected via JavaScript (`main.js`)
- Each page has `data-page="pagename"` on the body tag for active nav highlighting
- FAQ uses accordion pattern (click to expand/collapse)
- All scroll animations use Intersection Observer
- Mobile menu is a hamburger toggle

## Collaboration
- **Two editors:** Paven (DFHprb) + Sarah Heyer (s-heyer / sarah@durandhealth.com)
- **IMPORTANT:** Always run `git pull` before making edits — Sarah also edits this repo
- Both have push access to main branch

## Deploy
- Repo: DFHprb/durand-clinic (GitHub)
- Vercel auto-deploys on push to main
- No build step required — static files only
- Images go in root `images/` folder

## Important Notes
- Trauma services: Available but do NOT publicly mention Bronte Springs
- Weekend Spa: Listed as "Coming Soon"
- Exec + Longevity pricing: Do NOT publish — use "Contact Us"
- Team page has placeholder content — real bios/photos to be added
- Contact form is client-side only — needs backend integration for production

---

## 🚀 ACTIVE: Marketing Launch Project (started 2026-04-15)

**Claude is serving as the marketing agency for this launch.** Read `HANDOVER_TO_SARAH.md` for full project status.

### Brand & Domain Strategy (locked)
- **Primary domain:** `durand.clinic` (Paven owns at Netfirms, not yet pointed at Vercel)
- **Distinct from `durand.life`** (DFH parent employer platform)
- **`durandhealth.com` legacy site:** full 301 redirect to `durand.clinic`, preserves 6 years of SEO equity
- **Canonical URLs** must be `https://durand.clinic/...` (currently pointing at `durand-clinic.vercel.app` — needs mass update)

### Three Marketing Tracks
1. **Executive Health** — GTHA Ontario focus, paid-heavy, ROI-driven (10% margin reinvest), B2C high-ticket + B2B corporate
2. **Paramedicals** — geo-detected, PEPM fulfillment, NOT marketed (optional/secondary)
3. **Clinic enquiries** — global inbound, organic SEO only, minimal spend

### Competitive Set (GTHA Exec Health)
- **Medpoint** — Toronto, concierge exec health
- **Medcan** — 85K clients, feels corporate/factory
- **Cleveland Clinic Canada** — prestige brand, thin on longevity science
- **LaVie** — boutique longevity, smaller science stack

### Durand Clinic's Differentiators to Pound in Marketing
- 50,000+ biomarkers (more than any competitor)
- Multi-omics + epigenetic depth (competitors don't)
- Advanced cardiac stress testing included (Medcan doesn't)
- Year-round health intelligence (not annual-only)
- AI-native platform tied to DFH ecosystem
- "No factory lines. No upselling. VIP experience."
- Licensable clinic model for global expansion

### Analytics & Tracking (critical gap)
- **NEW GA4 property** required (don't reuse the Hamilton `G-2FGYQ02L5V`) — Sarah to create
- **No tracking currently installed on new site** — must add GA4 + GTM to all 31 HTML pages
- **No Meta Pixel, no LinkedIn Insight Tag** — to add when ads campaigns go live
- **No Microsoft Clarity** (session recording) — free to add, recommended

### What's Built So Far
- ✅ `robots.txt` (AI bots allowed)
- ✅ `sitemap.xml` (31 pages, priority-weighted)
- ✅ `HANDOVER_TO_SARAH.md` (credential-gather guide)

### What's Next in Phase 1a (not yet done)
- [ ] Upgrade schema markup (GTHA geo, MedicalClinic with address, FAQ, Physician)
- [ ] Update canonical URLs across all 31 pages (vercel.app → durand.clinic)
- [ ] Add GA4 + GTM snippet scaffolding to all pages
- [ ] Create `vercel.json` (security headers + redirect scaffolding)
- [ ] Write `LAUNCH_CHECKLIST.md`
- [ ] Draft Netfirms DNS instructions for Paven
- [ ] Build page-by-page redirect map for durandhealth.com → durand.clinic

### Phase 2 & 3 (after launch foundation is set)
- Full 0/30/60/90-day marketing plan document
- Keyword research (GTHA exec health + global clinic enquiries)
- Deep competitive analysis (Medpoint, Medcan, Cleveland Clinic Canada, LaVie)
- IA reorganization proposal (exec health + longevity primary, paramedicals secondary) — await Paven approval
- Google Business Profile setup
- SEM campaign structure (Google Ads, LinkedIn Ads, Meta Ads)

### Project Context Docs
- **Handover for Sarah:** `HANDOVER_TO_SARAH.md` (this repo)
- **Audit findings:** `DFH Brain/Working/Marketing Plan/00_Audit_Findings_2026-04-15.md`
- **Marketing plan folder:** `DFH Brain/Working/Marketing Plan/` (Paven's Google Drive)

### Budget Strategy (decided 2026-04-15)
- **Minimal paid Google spend for now** — SEO-first, earn rankings rather than buy clicks
- Revisit paid media after 30-60 days of SEO traction + measurement data in GA4
- Exception: high-intent branded search protection if competitors bid on "Durand Clinic"

### Content & Editorial Voice (strict guardrails — decided 2026-04-15)
**WHAT WE ARE:** The authoritative source for leading-edge, science-backed health intelligence in Canada. The clinic doctors and hospitals respect.

**Content pillars (in priority order):**
1. **Breaking research** — new peer-reviewed findings translated into plain English (JAMA, NEJM, Nature, Lancet, Cell)
2. **Health tech & diagnostics** — real innovations (AI in medicine, validated new biomarkers, wearables with actual evidence)
3. **Myth-busting** — call out sketchy health trends with evidence (peptide hype, unvalidated cancer blood tests, miracle supplements)
4. **Evidence-based longevity** — what actually works (VO2max, sleep architecture, strength, specific biomarkers, ApoB, Lp(a), CAC scoring)
5. **Expert physician commentary** — Durand clinicians weighing in on health news
6. **Patient outcomes** (never "testimonials" — outcomes, with permission and detail)

**STRICT NO-GO LIST (do NOT create content promoting or validating these):**
- ❌ Supplements marketing (neither selling nor promoting)
- ❌ Peptides (sketchy off-label use, semaglutide hype-cycle stuff)
- ❌ Unvalidated cancer blood tests (Galleri-style multi-cancer screening without strong evidence)
- ❌ Generic "wellness" content (skin care tips, holiday detox, Easter wellness)
- ❌ IV vitamin drip content
- ❌ Stem cell tourism / unproven regenerative therapies
- ❌ "Miracle" language, fear-based marketing, influencer-y tone
- ❌ Anything a responsible physician would roll their eyes at

**VOICE:** Authoritative, restrained, science-literate, not alarmist, not hype-y. Think *The Atlantic meets JAMA*. Concise sentences. Cite sources. Acknowledge uncertainty when real.

**PERSONALITY vs SCIENCE (strict editorial principle, decided 2026-04-15):**
- We are a **science-first, future-focused** brand. We do NOT build founder personality cults or clinician celebrity.
- **No founder hero videos.** No "meet the founder" content series. No founder-as-influencer.
- The founder's voice lives in ONE place: the written `founder-message.html` page on the site. That's it.
- Occasional founder LinkedIn text posts are fine (strategic commentary), but the brand is never about the person.
- Clinicians appear as experts commenting on research, NOT as personalities.
- Every piece of content should answer: *"Does this advance the science story, or the person story?"* If it's the person story — rethink it.
- This is the opposite of most clinic marketing, and that's the point.

**PUBLISHING CADENCE (initial target):** 2-3 pieces per week across channels. Paven personally sources leading-edge health news; Claude drafts; Paven + clinicians review.

**CHANNELS (priority):**
1. **LinkedIn** — primary for B2B exec health + physician credibility
2. **Blog/resource hub on durand.clinic** — SEO foundation
3. **Instagram** — patient-facing, visual science explainers (not lifestyle)
4. **Email newsletter** — curated weekly "What you missed in health science"
5. **YouTube** — longer-form founder + physician commentary (later phase)
6. ~~TikTok~~ — skip (brand mismatch for premium exec health)
