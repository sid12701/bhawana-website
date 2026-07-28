import type { BoardPolicyDocument } from "../boardPolicyTypes"

const doc: BoardPolicyDocument = {
  slug: "loan-transfer-policy",
  title: "Loan Transfer Policy",
  subtitle: "Policy on transfer and acquisition of loan exposures.",
  pdfHref: "/policies/loan-transfer-policy.pdf",
  pdfFileName: "loan-transfer-policy.pdf",
  badge: "RBI Compliant",
  ctaTitle: "Questions About Loan Transfers?",
  ctaBody: "Contact us for clarification on assignment and borrower notification.",
  showFlowchart: false,
  sections: [
  {
    id: "introduction",
    title: "Introduction",
    blocks: [
        { type: "paragraph", text: "Bhawana Capital Private Limited (\"the Company\" or “BCPL”) is a Non-Deposit Taking Non-Banking Finance Company registered with Reserve Bank of India (\"RBI\"). The Company is presently in the business of providing short-term loans and advances, through digital platforms, primarily through arrangements with Loan Service Providers ('LSPs')." },
        { type: "paragraph", text: "The Reserve Bank of India has issued Master Direction – Reserve Bank of India (Non-Banking Financial Companies - Transfer and Distribution of Credit Risk) Directions, 2025, as amended from time to time (“RBI Directions”)." },
        { type: "paragraph", text: "Part A and Part B of the RBI Directions came into effect from November 28, 2025 and January 1, 2026, respectively, and replaced all existing instructions/directions on the matter of sale / transfer of loan exposures etc." },
        { type: "paragraph", text: "As per the said RBI Directions, the identified entities, including all Non-Banking Finance Companies (NBFCs) are required to, inter alia, adopt a comprehensive Board approved policy for transfer and acquisition of loan exposures providing for: (a) minimum quantitative and qualitative standards relating to due diligence; (b) valuation, requisite IT systems for capture, storage and management of data; (c) risk management; and (d) periodic board level oversight etc." },
        { type: "paragraph", text: "Credit risk in BCPL's loan portfolio arises from borrower default on repayment of principal and interest. This Policy governs how that credit risk is managed — whether retained by BCPL, partially transferred to the LSP through a Default Loss Guarantee ('DLG'), or transferred to third parties through assignment of loan assets." },
        { type: "paragraph", text: "This Policy lays out how BCPL manages, transfers, and distributes credit risk arising from its loan portfolio, which inter-alia includes loans originates through its Loan Service Provider ('LSP') arrangements." }
    ],
  },
  {
    id: "permitted-loan-transfers-other-than-stressed-loans",
    title: "PERMITTED LOAN TRANSFERS (OTHER THAN STRESSED LOANS)",
    blocks: [
        { type: "paragraph", text: "The Company is not permitted to acquire loans." },
        { type: "paragraph", text: "This Policy will be applicable to all permitted transfers undertaken by the Company as a transferor." },
        { type: "paragraph", text: "The transfer of loans between the Company and its related parties (as defined under the Companies Act, 2013) shall require prior approval from the board of directors of the Company." }
    ],
  },
  {
    id: "definitions",
    title: "DEFINITIONS",
    blocks: [
        { type: "paragraph", text: "“credit enhancement” shall mean a contractual arrangement in which an entity provides some degree of added protection to other parties to a transaction so as to mitigate the credit risk of their acquired exposures." },
        { type: "paragraph", text: "“default” shall mean non-payment of debt (as defined under the Insolvency and Bankruptcy Code, 2016) when whole or any part or instalment of the debt has become due and payable and is not paid by the debtor or the corporate debtor, as the case may be." },
        { type: "paragraph", text: "“loan participation” shall mean a transaction through which the transferor transfers all or part of its economic interest in a loan exposure to transferee(s) without the actual transfer of the loan contract, and the transferee(s) fund the transferor to the extent of the economic interest transferred which may be equal to the principal, interest, fees and other payments, if any, under the transfer agreement." },
        { type: "paragraph", text: "“minimum holding period (MHP)” shall mean the minimum period for which a transferor must hold the loan exposures before the same is transferred to transferee(s)." },
        { type: "paragraph", text: "“net book value (NBV)” shall mean the funded outstanding in a loan exposure reduced by the specific provisions made against such exposure." },
        { type: "paragraph", text: "“permitted transferees” shall mean the lenders i.e. Scheduled Commercial Banks, All India Financial Institutions (NABARD, NHB, EXIM Banks, SIDBI and NaBFID), Small Finance Banks; and Non-Banking Finance Companies (NBFCs) including Housing Finance Companies (HFCs)." },
        { type: "paragraph", text: "“portfolio” shall mean a set of loan exposures transferred together at a point of time under the same transfer agreement." },
        { type: "paragraph", text: "“stressed loans” shall mean the loan exposures that are classified as non-performing assets (NPA) or as special mention accounts (SMA)." },
        { type: "paragraph", text: "“transfer” shall mean a transfer of economic interest in loan exposures by the transferor to the transferee(s), with or without the transfer of the underlying loan contract, in the manner permitted in the RBI Directions." },
        { type: "paragraph", text: "“transferee” shall mean the entity to which the economic interest in a loan exposure is transferred under the RBI Directions." },
        { type: "paragraph", text: "“transferor” shall mean the entity which transfers the economic interest in a loan exposure under these directions." }
    ],
  },
  {
    id: "minimum-quantitative-and-qualitative-standards-for-acquisition-and-transfer-of-l",
    title: "MINIMUM QUANTITATIVE AND QUALITATIVE STANDARDS FOR ACQUISITION AND TRANSFER OF LOAN EXPOSURES RELATING TO:",
    blocks: [
        { type: "subheading", text: "Due Diligence" },
        { type: "paragraph", text: "Due diligence in respect of the loans should be carried out by the transferee’s own staff with the same rigor and as per the same policies as would have been done for originating any loan as per the terms of its own Credit Policy." },
        { type: "paragraph", text: "The transferee shall provide a duly signed confirming independent due diligence of the loans." },
        { type: "subheading", text: "Transaction Approval Process" },
        { type: "paragraph", text: "The proposals for sell-down/ transfer/ assignment/ novation/ transfer of loan exposures by the Company to any permitted transferee shall be recommended by any one of the Directors and should be approved by the Board of Directors of the Company and must conform to the provisions of the RBI Directions." },
        { type: "paragraph", text: "In addition to the above, the transfer of loans between the Company and its related parties, shall also require a valuation report from an independent valuer." },
        { type: "subheading", text: "Valuation" },
        { type: "paragraph", text: "The pricing of the loans transferred will be arrived at based on commercial negotiations and determined on arm’s length basis, and shall be computed as the Net Present Value of future cash flows from the pool, discounted at an appropriate market rate reflecting credit risk and liquidity." },
        { type: "paragraph", text: "IT Systems for capture, storage and management of data" },
        { type: "paragraph", text: "A robust IT system and process for storing the detailed data-base for transfer and acquisition of Permitted Loan Transfers should be maintained." },
        { type: "paragraph", text: "The Company shall maintain all data, documents, agreements, KYC records etc., whether physical or digital, for all loans being transferred." },
        { type: "paragraph", text: "Risk management" },
        { type: "paragraph", text: "All risk management and systems related aspects will be followed for acquisition of loans for the Permitted Loan Transfers with the same rigour as per the Credit Policy and Risk policies as would have been done for originating any loan." },
        { type: "paragraph", text: "Periodic Board level oversight" },
        { type: "paragraph", text: "The policy shall be reviewed annually or as required due to change in regulations." }
    ],
  },
  {
    id: "borrower-notification",
    title: "BORROWER NOTIFICATION",
    blocks: [
        { type: "paragraph", text: "The Company shall notify each borrower whose loan has been assigned, within 30 days of the effective date of acquisition/transfer of loan. The notification shall inform the borrower: (a) that their loan has been transferred to the transferee; (b) that the terms and conditions of their loan are unchanged; and (c) the contact details of the transferee for future queries." }
    ],
  },
  {
    id: "accounting-treatment",
    title: "ACCOUNTING TREATMENT",
    blocks: [
        { type: "paragraph", text: "Assigned loans shall be de-recognized from the Company’s balance sheet on the effective date of the assignment, provided the transaction qualifies as a true sale." },
        { type: "paragraph", text: "Gain or loss on assignment (difference between net book value of loans and consideration received) shall be recognised in the Profit & Loss Account in the year of transfer." },
        { type: "paragraph", text: "Any outstanding provision held against assigned loans shall be written back upon derecognition." },
        { type: "paragraph", text: "The assignment transaction shall be disclosed in the Notes to Accounts in BCPL's Annual Financial Statements." }
    ],
  },
  {
    id: "true-sale-and-non-recourse",
    title: "TRUE SALE AND NON-RECOURSE",
    blocks: [
        { type: "paragraph", text: "Every assignment by BCPL shall be structured as a true sale on a non-recourse basis, meaning:" },
        { type: "paragraph", text: "Full legal and beneficial ownership of the assigned loans shall pass to the Assignee through a duly executed and stamped agreement." },
        { type: "paragraph", text: "BCPL shall not provide any guarantee, comfort letter, or liquidity support to the Assignee in respect of the assigned loans, except as expressly agreed in the transaction documents." },
        { type: "paragraph", text: "The Assignee shall bear all credit risk on the assigned loans from the effective date of assignment." }
    ],
  },
  {
    id: "general-conditions",
    title: "GENERAL CONDITIONS",
    blocks: [
        { type: "paragraph", text: "Loan transfers should result in transfer of economic interest without being accompanied by any change in underlying terms and conditions of the loan contract usually." },
        { type: "paragraph", text: "The Company, regardless of whether it is transferor or otherwise, should not offer Credit Enhancements or liquidity facilities in any form in the case of loan transfers" },
        { type: "paragraph", text: "The Company cannot re-acquire a loan exposure, either fully or partially that had been transferred by the entity previously, except as a part of a resolution plan under the directions issued by Reserve Bank of India." },
        { type: "paragraph", text: "A loan transfer should result in immediate separation of the transferor from the risks and rewards associated with loans to the extent that the economic interest has been transferred. In case of any retained economic interest in the exposure by the transferor, the loan transfer agreement should clearly specify the distribution of the principal and interest income from the transferred loan between the transferor and the transferee(s)." },
        { type: "paragraph", text: "The transferor shall have no obligation to re-acquire or fund the re-payment of the loans or any part of it or substitute loans held by the transferee(s) or provide additional loans to the transferee(s) at any time except those arising out of breach of warranties or representations made at the time of transfer. The transferor should be able to demonstrate that a notice to this effect has been given to the transferee(s) and that the transferee(s) have acknowledged the absence of such obligation." }
    ],
  },
  {
    id: "minimum-holding-period",
    title: "MINIMUM HOLDING PERIOD",
    blocks: [
        { type: "paragraph", text: "As a matter of good practice and in alignment with the spirit of the directions issued by RBI, the following minimum holding periods shall apply before a loan is assigned:" },
        { type: "paragraph", text: "Given that the Company's current loan products are short-tenure (1–12 months), most loans will fall in the first row. No assignment shall be executed for a loan before the applicable MHP has elapsed." },
        { type: "table", headers: ["Loan Original Tenor", "Minimum Holding (MHP)", "Reckoned From"], rows: [
            ["Up to 12 months", "3 months", "Date of first disbursement"],
            ["12 months to 24 months", "6 months", "Date of first disbursement"],
            ["Above 24 months", "12 months", "Date of first disbursement"],
          ] }
    ],
  },
  {
    id: "eligible-assets-loans",
    title: "ELIGIBLE ASSETS / LOANS",
    blocks: [
        { type: "subheading", text: "Only the following loans are eligible for assignment" },
        { type: "paragraph", text: "Loans classified as Standard Assets — i.e., not overdue by more than 90 days (DPD < 90) at the proposed Cut-Off Date." },
        { type: "paragraph", text: "Loans with complete documentation on record: executed loan agreement, KYC, disbursement evidence, and repayment history." },
        { type: "paragraph", text: "Loans not subject to any legal dispute, court attachment, or regulatory flag." },
        { type: "paragraph", text: "Loans where the borrower has not been identified as a wilful defaulter or fraud case." },
        { type: "paragraph", text: "NPA accounts (DPD ≥ 90 days) shall not be included in a standard assignment pool. NPA disposals, if any, shall be handled separately with specific Board approval." }
    ],
  },
  {
    id: "approval-authority",
    title: "APPROVAL AUTHORITY",
    blocks: [
        { type: "paragraph", text: "Every assignment of loans shall require prior approval from the board of Directors of the Company." },
        { type: "paragraph", text: "****" }
    ],
  }
  ],
}

export default doc
