---
target: homepage + representative pages (re-score after steps 1-5)
total_score: 22
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 4
timestamp: 2026-09-24T05-42-11Z
slug: src-app-page-tsx
---
Method: dual-agent (A: design review sub-agent · B: detector + browser sub-agent) · plus separate technical audit sub-agent (14/20)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | No current-page state in nav; policies show no effective date; contact form reports "Email draft prepared" even when no mail app opened |
| 2 | Match System / Real World | 2 | KFS, APR, LSP, GRO, KYC-AML-CFT and the "DSA and LSP" menu label go unexplained |
| 3 | User Control and Freedom | 3 | Carousel pause, Escape everywhere, focus return; "Apply" leaves for Google Play in a new tab without saying so |
| 4 | Consistency and Standards | 2 | Apply CTA on Personal Loan hero but not Salary Advance; homepage blog cards use icon placeholders while /blog/ uses covers; footer policy list differs from nav |
| 5 | Error Prevention | 2 | Validation on blur, but the 20-character message minimum and phone format are only revealed on failure |
| 6 | Recognition Rather Than Recall | 2 | 18 ungrouped policy links; rates/amounts only on product pages; no TOC on 8–14k px policy pages |
| 7 | Flexibility and Efficiency | 2 | Online + PDF + Hindi versions and tap-to-call exist; no in-document anchors, no persistent Apply |
| 8 | Aesthetic and Minimalist Design | 2 | Placeholder "Trusted & Regulated" tile, icon-only blog cards, twin decorative icons on every policy header, footer repeats the contact card |
| 9 | Error Recovery | 2 | Clear field errors with focus management, but the form resets after mailto, losing input if nothing opened |
| 10 | Help and Documentation | 3 | Call/email on every policy page, Sachet + CMS links, named escalation flowchart; flowchart sits ~75% down the grievance page |
| **Total** | | **22/40** | **Acceptable** |

## Design Specificity Verdict

**LLM assessment:** Coherent but category-interchangeable. One visual system now holds across every page (navy, brand blue, Poppins/Inter), but the homepage composition (gradient hero with rotating stock carousel, centred headings, icon-in-circle cards) could belong to any lender. The product-specific material exists and is strong: the ₹ rates-and-charges tables, the explicit APR range, the named grievance flowchart, CIN/RBI registration. It is buried on inner pages while the homepage leads with "Fast, Transparent, Reliable" and an empty shield tile. The real offer (₹1,500–30,000 over 3–12 months; ₹5,000–50,000 over 7–90 days; apply in KarmaLife) never appears above the fold.

**Deterministic scan:** `detect.mjs` on source: 0 findings. On the built `out/`: 13 findings, 2 confirmed (Inter as overused body font, "seamless" buzzword in PersonalLoanContent.tsx:96), 11 false positives (8 gray-on-color matching footer grey against an unrelated amber box in the same file; 3 side-tab on Privacy's 2px sub-clause divider). Browser overlay ran on 5 pages at 390 and 1440 px: confirmed long measure on policy pages (48 paragraphs at ~106 characters on Fair Practice Code) and KarmaLife/Personal Loan. It also surfaced two real bugs outside the rule set: a 404 cover image (`/images/blog/my-financial-situation-is-worsening.png`) and preloaded Poppins files that go unused because the Devanagari Poppins instance re-declares the family (one weight downloads twice).

**Visual overlays:** injection succeeded during Assessment B, but that tab was closed; no overlay is currently visible.

## Overall Impression

Steps 1–5 fixed what was broken: no dead ends, keyboard and screen-reader paths that work, fast loads, one visual system, no overflow. What remains is structural. The site still doesn't lead with its offer or its proof, and the policy pages are long walls with no way to navigate them. Biggest opportunity: make the homepage a rate card with one "Apply on KarmaLife" action, and give policy pages a table of contents.

## What's Working

- Regulatory transparency built into pages, not asserted: rates tables, explicit APR, CIN/RBI number, Sachet/CMS links, named escalation flowchart.
- Interaction foundations: keyboard dropdowns, modal drawer with focus trap, pausable carousel, labelled form with focus-to-first-error; no horizontal overflow at 320–1440 px; Lighthouse accessibility 100 on /.
- The blog article page (17 px / 1.75 in a 736 px column) is the reading model the policy pages should follow.

## Priority Issues

- **[P1] Homepage never states the offer, and its H1 disappears.** Three slides rotate every 5 s with no amounts, rates or tenure and no Apply action; product cards say "competitive interest rates". `SlideHeading` becomes h2 on slides 2–3, so the page has no H1 once autoplay advances (HeroCarousel.tsx). Fix: a static hero with both products' real ranges, "Apply on KarmaLife" primary and "See rates & charges" secondary, ranges on product cards, one static H1. → /impeccable distill, /impeccable layout. Partly content-bound (numbers already exist on-site).
- **[P1] Policy pages have no navigation.** Fair Practice Code is 7.9k px desktop / 14.4k px mobile; no TOC, no anchors, no effective date; text ~106 characters per line; subsections share H2 with parents; a 70vh PDF iframe precedes the text and generally doesn't render on phones. Fix: TOC with anchors, ~70ch measure, subsections as H3, effective date, PDF viewer hidden on small screens, escalation summary + flowchart at the top of the grievance page. → /impeccable layout, /impeccable typeset, /impeccable adapt. Not content-bound.
- **[P1] Contact form claims success it can't verify.** mailto never throws, so "Email draft prepared" always shows and the form resets; status disappears after 5 s; 20-character minimum and phone format are hidden until failure (ContactSection.tsx). Fix: honest status, no reset, visible email/phone fallback, upfront hints, messages persist. → /impeccable harden, /impeccable clarify. Title wording is content.
- **[P1] Invisible "Email Support" button** on /return-policy/, /shipping-policy/, /refund-cancellation-policy/: outline variant keeps its white background under white text (1:1). Found by the audit; the design review missed it. Fix: bg-transparent, plus an outline-inverse Button variant. → /impeccable harden.
- **[P2] Placeholders and broken assets.** About section's empty shield tile, icon-only homepage blog cards, 404 blog cover, a blog cover hot-linked from another lender's CDN (ik.imagekit.io/krazybee). → /impeccable distill, /impeccable polish. Image choice is content.

## Persona Red Flags

**Jordan (first-timer):** no amount/rate/tenure on the homepage while the hero changes under them; "Apply Now" opens Google Play in a new tab with no warning; KarmaLife is only explained under "DSA and LSP"; KFS/APR/GST undefined in the spec table; "Request a Call Back" is actually "email us from your own app".

**Riley (stress tester):** GRO phone differs within /karmalife/ (080 4736 0383 vs +91 9355598772); short director bios contradict full bios; H1 vanishes on slides 2–3; false success on the form; missing and hot-linked blog covers; homepage vs /blog/ titles and excerpts differ; /salary-advance/ help block phone and email are plain text, not links.

**Casey (mobile):** products start ~1,670 px down the homepage; no sticky or thumb-zone Apply, and Apply is Android-only; Fair Practice Code is 14,440 px with a ~590 px PDF iframe before the text; the drawer's expanded policy list is 1,242 px long.

## Minor Observations

- Mobile director names are an h3 inside a button, which flattens them for screen readers.
- Blog dates are ambiguous ("18/7/2024"); blog H1 and body columns don't share a left edge.
- "Our Products" H2 on a single-product page; a decorative underline bar that appears only on Salary Advance.
- Legal details are duplicated between the contact card and the footer.
- The 404 page's secondary action is "View terminated vendors".
- Content-bound: Western stock photography; APR up to 87% with no representative example; Return and Shipping policies on a lender's site.

## Questions to Consider

- If the homepage were a rate card (two products, real ranges, one "Apply on KarmaLife"), would it still need a carousel?
- With APR up to 87%, does a shield build trust, or would a worked total-cost example beside Apply?
- Is the 18-item Policies menu for the RBI inspector or the borrower, and should those be two entry points?
- If KarmaLife is the only way to apply, why is it hidden under "DSA and LSP" instead of named on the Apply button?
