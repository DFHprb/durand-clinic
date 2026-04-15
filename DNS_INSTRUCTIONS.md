# 🌐 DNS Cutover — Netfirms → Vercel

**For:** Paven (you control Netfirms)
**When to execute:** AFTER every 🔴 blocker in `LAUNCH_CHECKLIST.md` is green
**Estimated time:** 10 minutes to execute, up to 60 min for DNS propagation

---

## Step 1: Prepare Vercel (do this first)

1. Go to **vercel.com** → sign in → open the `durand-clinic` project
2. Click **Settings** → **Domains**
3. Type `durand.clinic` → click **Add**
4. Vercel will show you exactly which DNS records to add at Netfirms — **screenshot this page**
5. Also add `www.durand.clinic` the same way (for people who type `www.`)

Vercel typically tells you to add one of these two patterns:

**Pattern A (modern, preferred):**
- `A` record `@` → `76.76.21.21`
- `CNAME` record `www` → `cname.vercel-dns.com`

**Pattern B (if Vercel suggests instead):**
- `CNAME` record `@` → `cname.vercel-dns.com` (only works if Netfirms supports CNAME flattening)
- `CNAME` record `www` → `cname.vercel-dns.com`

👉 **Use exactly what Vercel's screen shows you.** Vercel may update IPs over time.

---

## Step 2: Log Into Netfirms

1. Go to **netfirms.com** → sign in
2. Navigate to your domain list → click `durand.clinic`
3. Find **DNS Management** (may be called "DNS Settings", "Zone Editor", or "Advanced DNS")

---

## Step 3: Update DNS Records

**⚠️ Before changing anything, screenshot the current DNS records so you can roll back if needed.**

### Records to DELETE or UPDATE
- Any existing `A` record on `@` (currently `66.96.160.157` — the Netfirms parking page)
- Any existing `CNAME` record on `www`
- Any existing URL forwarding / redirect (Netfirms sometimes adds these by default)

### Records to ADD (use exactly what Vercel showed you)

| Type | Host/Name | Value | TTL |
|---|---|---|---|
| A | `@` | `76.76.21.21` *(or whatever Vercel shows)* | 3600 |
| CNAME | `www` | `cname.vercel-dns.com` | 3600 |

### Keep These (do not delete)
- `MX` records (email routing — don't touch)
- `TXT` records for SPF, DKIM, DMARC (email auth — don't touch)
- Any TXT record starting with `google-site-verification` — keep all of them

---

## Step 4: Add Google Search Console TXT Record

Sarah will give you a TXT record when she sets up Search Console. It looks like:

```
Type: TXT
Host: @
Value: google-site-verification=<long-random-string>
```

Add it to Netfirms DNS. Don't delete any existing `google-site-verification` records.

---

## Step 5: Wait & Verify

1. Save changes in Netfirms
2. DNS propagation: usually 5-30 minutes, sometimes up to 60 min
3. Test in **incognito mode**: `https://durand.clinic/` → should load new site
4. Also test `https://www.durand.clinic/` → should load (or redirect to non-www)
5. In Vercel, both domains should show a green checkmark with SSL active

### Tools to check propagation
- [dnschecker.org](https://dnschecker.org/) — enter `durand.clinic` to see propagation worldwide
- [httpstatus.io](https://httpstatus.io/) — test redirect behavior

---

## Step 6: Tell Claude / Sarah

Once DNS is live and SSL is green:
1. Go to Google Search Console → submit `https://durand.clinic/sitemap.xml`
2. Go to Bing Webmaster Tools → submit same sitemap
3. Message Claude: "durand.clinic is live" and Claude will kick off post-launch verification

---

## 🆘 Rollback (if things break)

If the new site isn't loading after 60 minutes:

1. In Netfirms DNS:
   - Remove the `A` record for `@`
   - Remove the `CNAME` record for `www`
   - Re-add the old record: `A @ 66.96.160.157` (parking)
2. Wait 15 min — site will fall back to Netfirms default
3. Ping Claude with the exact error message (screenshot helps)

---

## 📞 If Stuck

- **Vercel support:** `vercel.com/help` — very responsive chat
- **Netfirms support:** 1-888-263-8534 (Canadian hours)
- **Claude:** start a new Claude Code session in `~/durand-clinic` and describe what's broken

---

**This doc is canonical. Do not DNS cut over without completing LAUNCH_CHECKLIST.md first.**
