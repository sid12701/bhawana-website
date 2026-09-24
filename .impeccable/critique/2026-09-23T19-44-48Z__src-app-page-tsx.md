---
target: homepage + representative pages
total_score: 15
max_score: 40
na_heuristics: 
p0_count: 1
p1_count: 3
timestamp: 2026-09-23T19-44-48Z
slug: src-app-page-tsx
---
Method: dual-agent (A: design review sub-agent · B: detector + browser sub-agent)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 1 | Disabled submit with no reason; "Email draft prepared" shown even if no mail client opened; policies carry no effective/updated date |
| 2 | Match System / Real World | 2 | US-dollar hero photo; "DSA and LSP", "KYC-AML-CFT", "EWI", "KFS", "APR 30–87%" unexplained |
| 3 | User Control and Freedom | 2 | Carousel pauses on mouse hover only; mobile drawer can't scroll |
| 4 | Consistency and Standards | 1 | Three visual systems; "Request a Call Back" → "Open Email Draft"; Contact link breaks on subpages |
| 5 | Error Prevention | 2 | 20-char message minimum, link ban and phone format revealed only on failure |
| 6 | Recognition Rather Than Recall | 1 | 18-item flat policy dropdown; 18 footer links in Online/PDF pairs |
| 7 | Flexibility and Efficiency | 1 | No policies hub, no TOC on 7–17k px policy pages, dropdowns not keyboard-openable |
| 8 | Aesthetic and Minimalist Design | 2 | Placeholder trust box and icon tiles; footer link wall; PDF embed + full text duplicated |
| 9 | Error Recovery | 1 | "Please enter a valid phone number" gives no format; no mailto fallback; broken blog covers |
| 10 | Help and Documentation | 2 | Rates page and grievance flowchart are genuinely good but buried (flowchart 16.7 screens down on mobile) |
| **Total** | | **15/40** | **Poor** |

## Design Specificity Verdict
Category-interchangeable template (shadcn + Tailwind defaults, Western stock photos incl. US dollars under "Customer-First Policies", shield-icon placeholder box, calendar-icon blog tiles, three unrelated visual systems across home/product/policy pages). The only lender-specific surfaces are regulatory artefacts: the ₹ penal-charge table with worked example, the named grievance escalation flowchart, CIN/CoR/Sachet/CMS links, Hindi versions. Detector: 14 CLI findings on built HTML, 2 confirmed (side-tab on PersonalLoanContent.tsx:162, "seamless" buzzword), 12 gray-on-color false positives; browser overlay flagged justified text (~51 on FPC), long line lengths, Inter as overused font.

## Priority Issues
- [P0] Apply/contact dead ends: Apply buttons with no href (PersonalLoanContent.tsx:93, SalaryAdvanceContent.tsx:323-333), hero "View Policies" → "/#" (content.ts:28), header Contact "#contact" broken on 26/27 pages. → harden
- [P1] Nav fails keyboard + phone: desktop dropdowns hover-only (Header.tsx:97-110), mobile drawer not scrollable (Header.tsx:164), no focus trap/Escape. → harden
- [P1] Policy findability: 18 flat items mixing statutory docs with shipping/return boilerplate; footer omits 5 policies; grievance steps buried as an image. → layout, distill
- [P1] No product character, three visual systems, hot-linked KrazyBee image, US-dollar photo. → shape, typeset, colorize
- [P2] Homepage never states the offer (no ₹/tenure/rate on cards, rotating hero) and is opacity:0 until hydration. → clarify, optimize

## Persona Red Flags
- Jordan: unexplained jargon ("DSA and LSP", "RBI CoR", "APR 30–87%"); "Request a Call Back" form opens an email draft; Online vs PDF duplicates.
- Riley: dead Apply buttons, /#, broken Contact on subpages; blog covers "[object Object]" + 404 + competitor hotlink; success shown when mailto fails; 20-char minimum rejects "Please call me"; salary-advance figures contradict rates page.
- Casey: blank until JS; 44 sub-44px targets (dots 12px, arrows 38px); form 7.2 screens down; no sticky Apply/Call; drawer overflows; flowchart unreadable at 390px.

## Minor Observations
Subtitles left-aligned under centred H2s (SectionHeading.tsx:14); square director photos in round frame (DirectorsSection.tsx:56-61); H1 rotates every 5s; global Arrow-key hijack (HeroCarousel.tsx:41-49); copy typos ("management.Prior", "in the in the"); justified ~150-char policy lines; 14px blog body.

## Questions to Consider
- Applications happen in KarmaLife — why pretend to have an "Apply Now"?
- Why doesn't the ₹ worked example lead the homepage instead of "transparent" ×3?
- Is this built for a delivery rider on a budget phone or for an RBI inspector?
- What if the grievance flowchart were the trust section instead of a shield in a grey box?
