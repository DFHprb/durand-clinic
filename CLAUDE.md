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
