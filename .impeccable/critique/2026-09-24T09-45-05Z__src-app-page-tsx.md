---
target: homepage + representative pages (after layout, optimize, polish)
total_score: 24
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 4
timestamp: 2026-09-24T09-45-05Z
slug: src-app-page-tsx
---
Method: dual-agent (A: design review sub-agent · B: detector + browser sub-agent) · plus separate technical audit sub-agent (15/20). Run after layout, optimize and polish passes; PRODUCT.md and DESIGN.md now exist and were used as the yardstick. Agents were interrupted once by a usage limit and resumed from their own transcripts.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | No current-page state in the header; breadcrumbs only on blog posts; most policies show no effective date (only the rates page does). Contents rail and carousel pill are good. |
| 2 | Match System / Real World | 2 | "DSA and LSP" top-level label; CoR, EWI, KYC-AML-CFT undefined; Sachet labelled "File Complaint"; Hindi document wrapped in English chrome |
| 3 | User Control and Freedom | 3 | Modal drawer (trap, Escape, scroll lock), Escape-closing dropdowns, pausable carousel; carousel keeps rotating behind the open drawer |
| 4 | Consistency and Standards | 2 | Personal Loan vs Salary Advance use different templates; PL Key Features rows styled differently (centred 48px vs left 40px icons); two GRO numbers on /karmalife/ |
| 5 | Error Prevention | 3 | Proper input types, autocomplete, inputmode, honeypot; "Apply Now" silently opens Google Play |
| 6 | Recognition Rather Than Recall | 2 | 18-item flat Policies menu; footer lists a different subset; EN/HI versions don't cross-link; product pages don't link the rates schedule |
| 7 | Flexibility and Efficiency | 2 | Online + PDF + contents rail; no disclosures index, no search, no skip link |
| 8 | Aesthetic and Minimalist Design | 2 | Calm, consistent type and colour; homepage filler: empty "Trusted & Regulated" panel, placeholder blog tiles, blank third blog cover, twin decorative header icons, 20-link footer |
| 9 | Error Recovery | 3 | Inline linked errors, focus to first invalid field, input kept after submit; phone error gives no format |
| 10 | Help and Documentation | 3 | Sachet + CMS route in every footer, contact bands, flowchart; no inline glossary; hardship blog post never points to Bhawana's own help |
| **Total** | | **24/40** | **Acceptable** |

## Design Specificity Verdict

**LLM assessment:** Split. The policy surfaces now embody "The Public Register": tinted document header, PDF card, sticky contents rail with position tracking, a ~640px reading column, the grievance flowchart up top, and a rates page with a per-day penal schedule, caps and a worked ₹ example. The homepage and product pages remain category-generic (autoplay stock carousel, icon-card grids, an empty shield panel, placeholder blog tiles), and the facts that differentiate Bhawana (CoR, CIN, rate range, penal cap, named GRO) sit at the bottom of the homepage or in the footer.

**Deterministic scan:** source `src/app`: 0 findings. Built `out/`: 15 findings, 1 confirmed ("seamless", PersonalLoanContent.tsx:94), 1 intentional (Inter, chosen in DESIGN.md), 13 false positives (Next.js runtime colours, next/font fallback faces, gray/amber co-occurring in one stylesheet, Privacy's 2px hairline indent). Overlay on 5 pages confirmed long measure on Personal Loan (96–134 chars) and KarmaLife (up to ~151) and one hover image transform on /blog/. Clean loads: no console errors, no 4xx/5xx, no overflow at 390/1440. Found: the hidden mobile PDF iframe still downloads the PDF; favicon requested twice (icon + shortcut links); blog cover hot-linked from another lender's CDN.

**Visual overlays:** injection succeeded; the tab was closed, so no overlay is currently visible.

## Overall Impression

The document side of the site is now genuinely good: navigable, readable, verifiable. The marketing side is still a template, and the homepage still leads with a carousel while the register (the thing no unregulated app can copy) waits 6,000px down on mobile. The biggest remaining opportunity is structural and mostly needs owner decisions on visible content.

## What's Working

- Board-policy template: PDF card (Download primary, Open secondary), readable HTML, sticky position-tracking contents rail, collapsible contents on mobile, no embedded viewer on phones.
- Regulatory facts in every footer plus a verifiable rates schedule with worked example and effective date.
- Interaction hygiene: modal drawer, keyboard dropdowns, pausable carousel with a single stable H1, honest form status that keeps input, 24px+ targets, no horizontal scroll anywhere. Lighthouse accessibility 100.

## Priority Issues

- **[P1] Homepage puts conversion ahead of disclosure.** First rate or complaint route ~6,000px down on mobile; first screen is a carousel plus ~180px blank (tallest-slide sizer). Fix: a fact panel from existing content.ts strings (CoR, CIN, rate range, penal cap, GRO, CMS) in place of the empty shield; three audience entry links under the hero; consider a static hero. → /impeccable layout, /impeccable distill. Visible content moves: owner approval.
- **[P1] Disclosures are hard to find and inconsistently listed.** 18-item flat menu vs a different footer subset; no inventory or effective dates. Fix: grouped menu, a disclosures index (document | online | PDF | Hindi | effective date), footer mirroring the groups. → /impeccable clarify, /impeccable layout. Group labels are new wording: owner approval.
- **[P1] Complaint route is weak on mobile, and the GRO number conflicts.** Level 1/2 contacts first appear as ~4px text inside the flowchart image; /karmalife/ lists 080 4736 0383 and +91 9355598772 for the same GRO. Fix: an HTML escalation list with tel:/mailto: above the flowchart; owner to confirm the correct GRO number, then serve every contact fact from content.ts. → /impeccable adapt, /impeccable harden. Content-bound in part.
- **[P1] The hidden PDF viewer still downloads on phones** (48–296 KB per policy page, grievance PDF requested twice) — `display:none` doesn't stop an iframe loading. Fix: don't render it below md; lazy-load on desktop. → /impeccable optimize. Not content-bound.
- **[P2] Product pages don't match and Hindi pages are wrapped in English.** Different PL/SA templates, no link to the rates schedule, Apply doesn't say it opens KarmaLife on Google Play; Hindi document pages have English H1, PDF card and "Contents", and EN/HI versions don't cross-link. → /impeccable polish, /impeccable adapt. Largely content-bound.

## Persona Red Flags

**Jordan (first-timer):** no numbers on homepage product cards; "DSA and LSP", EWI, CoR undefined; Salary Advance gives no rate; Apply opens the Play Store in a new tab unannounced.

**Riley (stress tester):** two GRO numbers; Sachet labelled "File Complaint"; PL shows APR 30–87% but the rates page has no range; SA step 1 mentions an "online form" though applications happen only in the app; blank third blog cover; first cover hot-linked from ik.imagekit.io/krazybee; carousel runs behind the drawer.

**Casey (mobile):** complaint route ~6,000px down the homepage; GRO details are untappable image text; 18 policies in the drawer need their own scroll; 14px inputs make iOS zoom on focus; PDF downloads despite the hidden viewer. Positives: 40px+ targets, full-width PDF buttons, no sideways scroll.

**Meena (KarmaLife borrower, overdue EWI, reads Hindi first — from PRODUCT.md):** penal charge is Home → menu → Policies → 1 of 18 → Rates (table then clear); conflicting GRO numbers; no Hindi summary of rates or grievance; Hindi pages wrapped in English; the "finances worsening" post never links Bhawana's own help.

**Mr. Rao (RBI inspector — from PRODUCT.md):** no single disclosures index; menu and footer disagree; most policies lack an effective date; "RBI Compliant" pills are self-assertions; Return/Shipping mixed in with RBI documents. Positives: CoR and CIN on every page; every policy online and as PDF.

## Minor Observations

- Contents rail breaks words mid-word ("Enquirie/s") because of `overflow-wrap: anywhere`.
- Scroll-revealed sections print blank (no print style); Apache serves no custom 404 (`ErrorDocument` missing).
- Layout overflows at 200% text-only scaling (nowrap buttons, fixed header breakpoint).
- Drawer "Menu" heading is Bhawana Blue (Two Blues Rule); Products outline button fills blue on hover (DESIGN.md says Wash).
- framer-motion (~49 KB gz) ships on every route for a 150ms menu fade.
- Token layer duplicated (:root + @theme), leftover shadcn variables, names differ from DESIGN.md.
- Content-bound: Antti's short bio repeats his role; blog dates "18/7/2024"; flowchart alt text doesn't describe the path.

## Questions to Consider

- What if the homepage's second band were the register itself — the one thing an unregulated app can't copy?
- Does a lender whose first job is disclosure need a rotating carousel?
- If an RBI inspector asked for every mandated document and its effective date on one screen, which URL would you send?
- Why does a Hindi reader get a Hindi document inside an English page?
