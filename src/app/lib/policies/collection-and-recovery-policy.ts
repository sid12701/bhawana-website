import type { BoardPolicyDocument } from "../boardPolicyTypes"

const doc: BoardPolicyDocument = {
  slug: "collection-and-recovery-policy",
  title: "Collection and Recovery Policy",
  subtitle: "Fair collection practices, agent conduct, and recovery principles under RBI Directions.",
  pdfHref: "/policies/collection-and-recovery-policy.pdf",
  pdfFileName: "collection-and-recovery-policy.pdf",
  badge: "RBI Compliant",
  ctaTitle: "Questions About Collection Practices?",
  ctaBody: "Raise concerns through our Grievance Redressal Mechanism at any time.",
  showFlowchart: false,
  sections: [
  {
    id: "1-preamble-and-regulatory-basis",
    title: "1. Preamble and Regulatory Basis",
    blocks: [
        { type: "paragraph", text: "This Policy is adopted by the Board of Directors of Bhawana Capital Private Limited (“the Company”) in conformity with the Reserve Bank of India (Non-Banking Financial Companies – Responsible Business Conduct) Directions, 2025 — including the Fair Practices Code provisions on recovery and the provisions on engagement of recovery agents — read with Chapter III of the Reserve Bank of India (Non-Banking Financial Companies – Credit Facilities) Directions, 2025 for loans sourced or serviced through digital lending channels. It applies to all collection and recovery activity, whether undertaken directly or through any Loan Service Provider (“LSP”) or agent, and is not specific to any partner, product or LSP." }
    ],
  },
  {
    id: "2-principles-of-conduct",
    title: "2. Principles of Conduct",
    blocks: [
        { type: "paragraph", text: "Collection is carried out with dignity and courtesy, in the vernacular language or a language understood by the borrower." },
        { type: "paragraph", text: "The Company and persons acting on its behalf do not resort to undue harassment — including persistently bothering the borrower at odd hours, the use of muscle power, intimidation, or humiliation — and do not contact borrowers before 8:00 a.m. or after 7:00 p.m." },
        { type: "paragraph", text: "The borrower’s information is kept confidential; the fact of default is not disclosed to third parties except as permitted by law or for credit information reporting." },
        { type: "paragraph", text: "No coercive, misleading or deceptive practice is used at any stage of collection." }
    ],
  },
  {
    id: "3-collection-process",
    title: "3. Collection Process",
    blocks: [
        { type: "paragraph", text: "Repayment reminders are sent in accordance with the collection schedule. Whenever a reminder for non-compliance of material terms and conditions is sent, the applicable penal charges are communicated; any instance of levy of penal charges and the reason therefor is also communicated to the borrower." },
        { type: "paragraph", text: "All recoveries are collected directly into the Company’s bank account, without any pass-through or pool account of any third party, including any LSP. Cash collection, where unavoidable in respect of delinquent loans, is against receipt and is deposited into the Company’s account on the same day." },
        { type: "paragraph", text: "Penal charges, where levied, are governed by the Company’s Interest Rate Policy and the Board-approved schedule of charges: they are levied as charges (not penal interest), only on the amount under default, are not capitalised, and are disclosed upfront in the loan agreement and the Key Fact Statement." },
        { type: "paragraph", text: "Any decision to recall or accelerate payment is in consonance with the loan agreement." }
    ],
  },
  {
    id: "4-conduct-of-lsps-agents-and-recovery-personnel",
    title: "4. Conduct of LSPs, Agents and Recovery Personnel",
    blocks: [
        { type: "paragraph", text: "Collection activity through an LSP or agent is undertaken only under a written agreement, after due diligence, and subject to a code of conduct consistent with this Policy. The Company remains fully responsible for the acts and omissions of its LSPs and agents." },
        { type: "paragraph", text: "Staff of the Company and of its LSPs and agents who interact with borrowers receive training on appropriate conduct with customers." },
        { type: "paragraph", text: "Where a recovery agent is engaged in respect of a borrower, the borrower is notified of the particulars of the agent, and the agent carries authorisation and identification." },
        { type: "paragraph", text: "Complaints regarding collection conduct are dealt with under the Company’s Grievance Redressal Mechanism, with escalation to the Reserve Bank of India where unresolved within 30 days." }
    ],
  },
  {
    id: "5-hardship-settlement-and-waiver",
    title: "5. Hardship, Settlement and Waiver",
    blocks: [
        { type: "paragraph", text: "Requests of borrowers in genuine financial difficulty are considered under a documented process. Any settlement or waiver, including waiver of penal charges, is granted only in accordance with the approvals laid down in the Board-approved framework, with the reason recorded." }
    ],
  },
  {
    id: "6-credit-information-reporting",
    title: "6. Credit Information Reporting",
    blocks: [
        { type: "paragraph", text: "Defaults and repayment conduct are reported to Credit Information Companies in accordance with the applicable credit information reporting directions." }
    ],
  },
  {
    id: "7-review",
    title: "7. Review",
    blocks: [
        { type: "paragraph", text: "The Board reviews this Policy at least annually and whenever required by a change in the applicable RBI Directions. In the event of any inconsistency, the RBI framework prevails." }
    ],
  }
  ],
}

export default doc
