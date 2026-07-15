import type { BoardPolicyDocument } from "../boardPolicyTypes"

const doc: BoardPolicyDocument = {
  slug: "digital-lending-policy",
  title: "Digital Lending Policy",
  subtitle: "Board-approved Digital Lending Policy covering LSPs, disclosures, fund flows, and data privacy.",
  pdfHref: "/policies/digital-lending-policy.pdf",
  pdfFileName: "digital-lending-policy.pdf",
  badge: "RBI Compliant",
  ctaTitle: "Questions About Digital Lending?",
  ctaBody: "Our team can explain partner roles, disclosures, and borrower protections.",
  showFlowchart: false,
  sections: [
  {
    id: "1-preamble-and-regulatory-basis",
    title: "1. Preamble and Regulatory Basis",
    blocks: [
        { type: "paragraph", text: "Bhawana Capital Private Limited (“the Company”) is a non-deposit-taking Non-Banking Financial Company – Base Layer registered with the Reserve Bank of India (“RBI”), extending loans through a fully digital process. This Policy is adopted by the Board in conformity with Chapter III (Paragraphs 6–30) of the Reserve Bank of India (Non-Banking Financial Companies – Credit Facilities) Directions, 2025, read with the Reserve Bank of India (Non-Banking Financial Companies – Responsible Business Conduct) Directions, 2025 (Key Fact Statement and penal charges). It applies to all digital lending operations of the Company and to every Loan Service Provider (“LSP”) and Digital Lending App (“DLA”) engaged by it, and is not specific to any partner, product or LSP." }
    ],
  },
  {
    id: "2-engagement-and-oversight-of-lsps",
    title: "2. Engagement and Oversight of LSPs",
    blocks: [
        { type: "paragraph", text: "The Company enters into an agreement with an LSP only after enhanced due diligence covering, among other things, the LSP’s technical capabilities, data privacy policies and practices, storage systems, fairness in conduct with borrowers and ability to comply with applicable regulations." },
        { type: "paragraph", text: "The conduct of each LSP is reviewed periodically against the terms of the contractual agreement." },
        { type: "paragraph", text: "The Company remains fully responsible and liable for all acts and omissions of its LSPs. Credit decisioning and the determination of compliance with regulatory norms are not outsourced." }
    ],
  },
  {
    id: "3-customer-journey-and-disclosures-to-the-borrower",
    title: "3. Customer Journey and Disclosures to the Borrower",
    blocks: [
        { type: "paragraph", text: "A Key Fact Statement in the prescribed standardised format, including the Annual Percentage Rate and all charges, is provided to every prospective borrower before execution of the loan contract, with the prescribed validity period. No charge not disclosed in the KFS is charged at any stage without the borrower’s explicit consent." },
        { type: "paragraph", text: "Digitally executed documents — the KFS, the loan agreement with enclosures, and sanction communications — flow automatically to the borrower on their verified email / SMS upon execution." },
        { type: "paragraph", text: "The borrower has an explicit option to exit the loan during the cooling-off period disclosed in the KFS (not less than the prescribed minimum) by paying the principal and proportionate APR, without penalty; a disclosed one-time processing fee may be retained." },
        { type: "paragraph", text: "Creditworthiness is assessed on the basis of the borrower’s economic profile, captured and recorded in an auditable way, before any credit limit is sanctioned. There is no automatic increase in credit limit without the borrower’s explicit request and consent on record." }
    ],
  },
  {
    id: "4-fund-flow",
    title: "4. Fund Flow",
    blocks: [
        { type: "paragraph", text: "Disbursement is made directly into the bank account of the borrower." },
        { type: "paragraph", text: "All loan servicing and repayments are executed by the borrower directly into the Company’s bank account, without any pass-through account or pool account of any third party, including any LSP. Cash collection, where unavoidable for delinquent loans, is receipted and deposited on the same day." },
        { type: "paragraph", text: "Fees, charges and reimbursements payable to an LSP are paid directly by the Company and are not charged to, or collected from, the borrower." }
    ],
  },
  {
    id: "5-data-consent-and-privacy",
    title: "5. Data, Consent and Privacy",
    blocks: [
        { type: "paragraph", text: "Collection of borrower data is need-based and with the borrower’s prior explicit consent, with an auditable trail. The DLA does not access mobile phone resources except one-time access where necessary, with consent." },
        { type: "paragraph", text: "The borrower is provided options to deny or revoke consent for use of specific data, restrict disclosure to third parties, and require deletion of data." },
        { type: "paragraph", text: "Borrower data is stored on servers located in India. Where any processing occurs outside India, the data is deleted from offshore servers within the prescribed time and brought back to India." },
        { type: "paragraph", text: "A comprehensive privacy policy, including details of third parties permitted to collect personal information through the DLA, is published on the Company’s website and on each DLA." }
    ],
  },
  {
    id: "6-website-and-dla-disclosures",
    title: "6. Website and DLA Disclosures",
    blocks: [
        { type: "paragraph", text: "The Company prominently publishes on its website: details of its digital lending products and DLAs; details of its LSPs and their DLAs along with the activities for which they are engaged; the particulars of grievance redressal officers; and links to the RBI Complaint Management System and the RBI Sachet portal. Each DLA and LSP links back to the Company’s website." }
    ],
  },
  {
    id: "7-grievance-redressal",
    title: "7. Grievance Redressal",
    blocks: [
        { type: "paragraph", text: "The Company and each LSP with a borrower interface designate nodal Grievance Redressal Officers to deal with complaints relating to digital lending, including complaints against the DLA. Their contact details are displayed on the Company’s website, on the DLA and in the KFS. Responsibility for resolution remains with the Company; complaints unresolved within 30 days may be escalated to the RBI in the manner set out in the Grievance Redressal Mechanism." }
    ],
  },
  {
    id: "8-reporting",
    title: "8. Reporting",
    blocks: [
        { type: "paragraph", text: "All DLAs of the Company and of its LSPs are reported, and kept updated, on the RBI’s Centralised Information Management System (CIMS) portal in the prescribed format, with the prescribed certification." },
        { type: "paragraph", text: "All lending through DLAs is reported to Credit Information Companies irrespective of nature or tenor, in accordance with the applicable credit information reporting directions." }
    ],
  },
  {
    id: "9-default-loss-guarantee-dlg",
    title: "9. Default Loss Guarantee (DLG)",
    blocks: [
        { type: "paragraph", text: "Any default loss guarantee arrangement is entered into only in accordance with Paragraphs 19–29 of Chapter III of the Credit Facilities Directions: with eligible providers, under a Board-approved framework and prior due diligence; in the permitted forms (cash deposit, lien-marked fixed deposit or bank guarantee); with the total DLG cover on any outstanding portfolio not exceeding five per cent of the amount disbursed out of that portfolio at any time; with recognition of individual loan assets as NPA and consequent provisioning remaining the Company’s responsibility; and with the prescribed invocation timelines, tenor and disclosure requirements." }
    ],
  },
  {
    id: "10-review",
    title: "10. Review",
    blocks: [
        { type: "paragraph", text: "The Board reviews this Policy at least annually and whenever required by a change in the applicable RBI Directions. In the event of any inconsistency, the RBI framework prevails." }
    ],
  }
  ],
}

export default doc
