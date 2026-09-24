# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Three audiences, served with equal weight (confirmed 2026-09-24):

- **KarmaLife borrowers**: salaried and gig workers who took, or are considering, a loan through the KarmaLife app. They come to check who the lender behind the app is, what it charges, and how to complain or escalate.
- **New borrowers**: people discovering Bhawana Capital directly and deciding between a Personal Loan and a Salary Advance.
- **Regulators, auditors and partners**: RBI inspectors, auditors and lending partners verifying that the mandatory public disclosures exist, are current and are easy to find.

## Product Purpose

The public website of Bhawana Capital Private Limited, an RBI-registered Non-Banking Financial Company (NBFC). Its first job is trust and disclosure: to prove that Bhawana is a real, regulated lender and to publish the policies, rates, charges and grievance routes the RBI requires. Its second job is conversion: moving convinced visitors into the KarmaLife app, where applications actually happen.

Success means a borrower can find the rate, the charges and the complaint route in a few taps, a reviewer can find any mandated document without searching, and a convinced visitor reaches the app install.

## Positioning

Bhawana is the regulated lender. KarmaLife is its Lending Service Provider (LSP), where customers apply and manage loans. The site's credibility rests on verifiable regulatory facts no unregulated app can copy: RBI registration, CIN, named directors, a named Grievance Redressal Officer, board-approved policies with PDFs, and a published schedule of rates and penal charges with worked examples.

## Operating Context

- Loan applications and servicing happen in the KarmaLife Android app. Every "Apply" action on this site leads there, not to an on-site form.
- The contact form opens a prefilled email draft to info@bhawanafinance.com. There is no form backend.
- Complaints escalate from the company's Grievance Redressal Officer to the RBI Complaint Management System (cms.rbi.org.in); the RBI Sachet portal is linked for reporting.
- Policy documents are published twice: as the board-approved PDF and as readable on-page text.
- The DSA and LSP section discloses lending partners (KarmaLife) and terminated vendors, as RBI digital-lending rules require.

## Capabilities and Constraints

- **Static hosting:** Next.js static export (`output: 'export'`, trailing slashes) deployed to cPanel/Apache. No server runtime, API routes or third-party form services. Pushing to `main` deploys straight to the live site.
- **Bilingual:** key regulatory documents (Fair Practice Code, RBI Ombudsman salient features) must stay available in Hindi as well as English.
- **Accessibility:** WCAG 2.1 AA across the site (see below).
- **Regulated facts must stay accurate:** interest rates, charges, CIN, RBI registration number, office addresses, officer names and policy text must match the approved source documents in `public/policies/`.
- **Copy:** there is no standing compliance-approval gate on wording. The copy freeze during the 2026-09 redesign pass was a scoping decision for that pass, not a permanent rule.
- **Terminology** the site uses and readers may not know: NBFC, DSA (Direct Selling Agent), LSP (Lending Service Provider), GRO (Grievance Redressal Officer), KFS (Key Fact Statement), APR, KYC-AML-CFT, Sachet, CMS.
- **Products:** Personal Loan and Salary Advance, both 100% digital and unsecured, offered through KarmaLife.

## Evidence on Hand

- Legal identity: CIN U65100DL1995PTC071089, RBI registration B-14.02856, registered and corporate office addresses (`src/app/lib/content.ts`).
- Board-approved policy PDFs: `public/policies/` (fair practice code in English and Hindi, grievance redressal, interest rate, KYC-AML-CFT, loan transfer, digital lending, collection and recovery, rates and service charges, RBI Ombudsman features in English and Hindi).
- Grievance escalation flowchart: `public/images/grievance-redressal-flowchart.svg`.
- Rates and penal-charges schedule with worked ₹ examples: `/interest-rates-and-service-charges/`.
- Three directors with bios and photos (`src/app/lib/content.ts`, `public/images/`).
- Three blog posts (`src/content/blog/`).
- Content inventory: `site-content.md`.
- **Absent, must not be fabricated:** customer testimonials, borrower or disbursal counts, ratings, press coverage, awards, partner logos beyond KarmaLife.
- Hero and blog photos are generic stock (one shows US dollars). They are placeholders, not brand assets.

## Product Principles

1. **Disclosure first, conversion second.** A mandated document, rate or complaint route is never harder to reach than a sales message.
2. **Three readers, no hunting.** A borrower, a KarmaLife user and a reviewer should each find their answer without learning the site's structure first.
3. **Verifiable over persuasive.** Trust comes from facts a reader can check (registration numbers, named officers, PDFs, worked examples), never from unverifiable claims.
4. **The app is the application.** The site never pretends to take applications itself; every apply action goes to KarmaLife, clearly labelled.
5. **Hindi readers are first-class.** Hindi documents get the same care and reachability as English ones.

## Accessibility & Inclusion

- Target: WCAG 2.1 AA.
- Hindi pages declare `lang="hi"` and render in a proper Devanagari face.
- Inferred, not yet confirmed: many KarmaLife borrowers are salaried and gig workers on budget Android phones and slow connections, and many read English as a second language. Until that's confirmed otherwise, pages stay light, usable at 320 px width, use touch targets of 24 px or more, and favour plain language.
