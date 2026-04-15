# 🚀 The Durand Clinic — Launch Checklist

**Target domain:** `https://durand.clinic`
**Legacy domain to redirect:** `https://durandhealth.com`
**Status:** 🟡 Foundation being built — NOT LAUNCH READY YET

Check off each box as completed. Do NOT flip the DNS switch until every "🔴 Blocker" item is green.

---

## 🔴 Launch Blockers (MUST complete before DNS cutover)

### Technical Foundation
- [ ] GA4 property created (Sarah)
- [ ] GA4 Measurement ID pasted into every HTML file's `<head>`
- [ ] Google Tag Manager container created + installed on every page
- [ ] `sitemap.xml` accessible at `https://durand.clinic/sitemap.xml`
- [ ] `robots.txt` accessible at `https://durand.clinic/robots.txt`
- [ ] All `<link rel="canonical">` tags point to `durand.clinic` (✅ done)
- [ ] All Open Graph `og:url` tags point to `durand.clinic` (✅ done)
- [ ] `vercel.json` security headers live (✅ done)
- [ ] Schema markup validates on [schema.org validator](https://validator.schema.org/)
- [ ] SSL certificate issued and valid (Vercel auto-handles)
- [ ] `www.durand.clinic` and `durand.clinic` both resolve (or www → non-www redirect)
- [ ] Mobile responsive verified on real iPhone + Android
- [ ] Core Web Vitals pass: LCP < 2.5s, INP < 200ms, CLS < 0.1 — check on [PageSpeed Insights](https://pagespeed.web.dev/)

### Content & Legal
- [ ] Team page has real physician bios + photos (currently placeholder)
- [ ] Privacy policy page exists (PHIPA + PIPEDA compliant)
- [ ] Terms of Service page exists
- [ ] Accessibility statement (AODA / WCAG 2.0 AA)
- [ ] Cookie consent banner implemented (required in Ontario/EU/UK visitors)
- [ ] 404 error page branded and functional
- [ ] Contact form backend wired (currently client-side only per `CLAUDE.md`) or clearly directs to phone/email
- [ ] Booking flow works end-to-end (test a real booking)

### Marketing Foundation (Sarah-led)
- [ ] Google Search Console property claimed for `durand.clinic`
- [ ] Bing Webmaster Tools property claimed
- [ ] Google Business Profile for "The Durand Clinic" created OR existing profile updated with new brand/address
- [ ] LinkedIn company page created or renamed to "The Durand Clinic"
- [ ] Meta / Facebook Business Manager asset set up (even if no pixel yet)
- [ ] Email marketing tool configured (Mailchimp / HubSpot / ConvertKit)

---

## 🟡 Launch-Week Nice-to-Haves

- [ ] Microsoft Clarity installed (free session recording + heatmaps)
- [ ] Meta Pixel installed (fire only when ads campaign readies)
- [ ] LinkedIn Insight Tag installed (B2B retargeting)
- [ ] Blog / insights section with first 3 published posts (content pillars: breaking research, health tech, myth-busting)
- [ ] Hreflang tags on residential language variants
- [ ] OG image designed: `durand-clinic-og.jpg` (1200×630px)
- [ ] Favicon set: 16×16, 32×32, 180×180 (Apple touch icon)
- [ ] Newsletter signup form live on homepage
- [ ] First 3 Google reviews from existing patients

---

## 🟢 Launch Day Runbook (the day we flip DNS)

Run these in order. Do NOT skip steps.

### Pre-Cutover (same day, T-2 hours)
1. [ ] Final smoke test of `durand-clinic.vercel.app` (all pages load, contact form works, no JS errors)
2. [ ] GA4 real-time report shows test pageviews
3. [ ] Sarah + Paven both have admin access to: GA4, GSC, Vercel, domain registrar
4. [ ] Backup of current WordPress at `durandhealth.com` exported (just in case)

### DNS Cutover
5. [ ] Paven logs into Netfirms → `durand.clinic` DNS panel
6. [ ] Add A record `@` → Vercel IP (exact IP in DNS_INSTRUCTIONS.md — to be written by Claude)
7. [ ] Add CNAME `www` → `cname.vercel-dns.com`
8. [ ] In Vercel dashboard: add `durand.clinic` and `www.durand.clinic` as project domains
9. [ ] Wait for SSL cert to issue (usually 1-5 min on Vercel)
10. [ ] Test in incognito: `https://durand.clinic/` loads the new site

### Post-Launch Verification (T+0 to T+2 hours)
11. [ ] Submit `sitemap.xml` to Google Search Console
12. [ ] Submit `sitemap.xml` to Bing Webmaster
13. [ ] "Request indexing" on homepage via GSC URL Inspection tool
14. [ ] Test Open Graph cards: [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
15. [ ] Test Twitter cards: [Card Validator](https://cards-dev.twitter.com/validator)
16. [ ] Test schema: [Rich Results Test](https://search.google.com/test/rich-results)
17. [ ] GA4 real-time shows live traffic from your own test visit

### Legacy Site Redirect (T+24 hours, after site is healthy)
18. [ ] Export top 50 ranking URLs from `durandhealth.com` via Google Search Console
19. [ ] Build page-by-page redirect map (old URL → new URL)
20. [ ] Deploy redirects via WordPress (Redirection plugin) OR Vercel (if durandhealth.com is moved to Vercel)
21. [ ] 301-redirect all non-matched URLs to `durand.clinic/` (homepage)
22. [ ] Verify redirects with [httpstatus.io](https://httpstatus.io)

---

## 🔵 First 30 Days Post-Launch

- [ ] Daily: GA4 dashboard scan for anomalies
- [ ] Daily: Google Search Console crawl errors + index coverage
- [ ] Week 1: Bing Webmaster errors check
- [ ] Week 1: Heatmap review in Microsoft Clarity
- [ ] Week 2: First content post live (breaking research pillar)
- [ ] Week 2: LinkedIn company page first post
- [ ] Week 3: First Google review request sequence sent to existing patients
- [ ] Week 4: Performance review meeting: Paven + Sarah + Claude → decide paid-media Phase 2 go/no-go

---

## 🆘 Rollback Plan (if launch goes sideways)

If the new site is broken at DNS cutover:
1. In Netfirms: revert A record back to `66.96.160.157` (parking) OR point back at WP Engine IP (Sarah has this)
2. In Vercel: remove `durand.clinic` from project domains
3. DNS propagation takes 5-60 min — users may hit stale cache
4. Communicate outage in LinkedIn + email if it's public-facing

Do NOT delete WordPress site at `durandhealth.com` until the new site has been stable for 30 days.

---

**Last updated:** 2026-04-15 by Claude
**Owner:** Paven Bratch
