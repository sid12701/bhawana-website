import type { BoardPolicyDocument } from "../boardPolicyTypes"

const doc: BoardPolicyDocument = {
  slug: "rbi-ombudsman-salient-features",
  title: "RBI Ombudsman — Salient Features",
  subtitle: "Complaint escalation to RBI and salient features of the Reserve Bank – Integrated Ombudsman Scheme, 2021.",
  pdfHref: "/policies/rbi-ombudsman-salient-features.pdf",
  pdfFileName: "rbi-ombudsman-salient-features.pdf",
  badge: "RB-IOS 2021",
  ctaTitle: "Need Escalation Guidance?",
  ctaBody: "First use our Grievance Redressal Mechanism; then escalate to RBI if unresolved.",
  showFlowchart: false,
  sections: [
  {
    id: "1-first-level-complaint-with-the-company",
    title: "1. First Level — Complaint with the Company",
    blocks: [
        { type: "paragraph", text: "A customer with a grievance should first lodge a complaint with the Company under its Grievance Redressal Mechanism (available on this website). The Company acknowledges complaints within 3 working days and endeavours to resolve them within 30 days." }
    ],
  },
  {
    id: "2-second-level-complaint-with-the-reserve-bank-of-india",
    title: "2. Second Level — Complaint with the Reserve Bank of India",
    blocks: [
        { type: "paragraph", text: "If the complaint is not resolved within 30 days of lodging it with the Company, or if the customer is not satisfied with the response, the customer may lodge a complaint with the Reserve Bank of India, free of cost:" },
        { type: "paragraph", text: "Online: on the RBI Complaint Management System (CMS) at https://cms.rbi.org.in" },
        { type: "paragraph", text: "Physical: to the Centralised Receipt and Processing Centre (CRPC), Reserve Bank of India, 4th Floor, Sector 17, Chandigarh – 160017 (in the prescribed form)" },
        { type: "paragraph", text: "Toll-free contact centre: 14448" }
    ],
  },
  {
    id: "3-salient-features-of-the-reserve-bank-integrated-ombudsman-scheme-2021",
    title: "3. Salient Features of the Reserve Bank – Integrated Ombudsman Scheme, 2021",
    blocks: [
        { type: "paragraph", text: "The Scheme integrates the earlier Ombudsman schemes into a single, jurisdiction-neutral scheme — one portal, one email and one postal address for complaints against entities regulated by RBI." },
        { type: "paragraph", text: "A complaint may be filed for any deficiency in service by a covered regulated entity, after the entity has been given the opportunity described above (no reply within 30 days, or reply not satisfactory)." },
        { type: "paragraph", text: "The complaint must be filed within one year of receiving the entity’s reply, or, where no reply is received, within one year and 30 days of the complaint to the entity." },
        { type: "paragraph", text: "No fee is payable, and no lawyer is required, for filing or pursuing a complaint." },
        { type: "paragraph", text: "An Award of the Ombudsman is appealable before the Appellate Authority (Executive Director in charge of the Consumer Education and Protection Department, RBI)." }
    ],
  },
  {
    id: "4-applicability-note",
    title: "4. Applicability Note",
    blocks: [
        { type: "paragraph", text: "The Reserve Bank – Integrated Ombudsman Scheme, 2021 covers non-deposit-taking NBFCs with an asset size of ₹100 crore and above. Complaints against regulated entities not covered by the Scheme, lodged on the CMS portal, are dealt with under the RBI’s Consumer Education and Protection framework by the concerned office of the Reserve Bank. In either case, the customer’s route is the same: first the Company’s Grievance Redressal Officer, and thereafter the RBI through the CMS portal or the CRPC, Chandigarh." }
    ],
  }
  ],
}

export default doc
