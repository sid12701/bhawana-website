import type { BoardPolicyDocument } from "../boardPolicyTypes"

const doc: BoardPolicyDocument = {
  slug: "interest-rate-policy",
  title: "Interest Rate Policy",
  subtitle: "Board-approved Interest Rate Policy covering the interest-rate model, risk gradation, charges, and borrower disclosures.",
  pdfHref: "/policies/interest-rate-policy.pdf",
  pdfFileName: "interest-rate-policy.pdf",
  badge: "RBI Compliant",
  ctaTitle: "Questions About Our Interest Rates?",
  ctaBody: "Our team can explain how rates are determined and which disclosures apply to your loan.",
  showFlowchart: false,
  sections: [
  {
    id: "1-preamble-and-regulatory-basis",
    title: "1. Preamble and Regulatory Basis",
    blocks: [
        { type: "paragraph", text: "Bhawana Capital Private Limited (“the Company”) is a non-deposit-taking Non-Banking Financial Company – Base Layer (Investment and Credit Company) registered with the Reserve Bank of India (“RBI”), CIN U65100DL1995PTC071089, CoR No. B-14.02856." },
        { type: "paragraph", text: "This Policy is adopted in conformity with Paragraphs 22–24 of the Reserve Bank of India (Non-Banking Financial Companies – Responsible Business Conduct) Directions, 2025 (“the RBC Directions”), read with Paragraphs 7(3), 13, 15, 29 (Key Fact Statement and Annual Percentage Rate), 30 (penal charges) and 34 (pre-payment) thereof, and, for loans sourced or serviced through digital lending channels, Chapter III of the Reserve Bank of India (Non-Banking Financial Companies – Credit Facilities) Directions, 2025." }
    ],
  },
  {
    id: "2-objective-and-scope",
    title: "2. Objective and Scope",
    blocks: [
        { type: "paragraph", text: "This Policy lays down the Company’s interest-rate model, the approach for gradation of risk and the basis for other charges, so that rates of interest are fair, transparent and communicated clearly to borrowers. It applies to all loan products of the Company, whether sourced and serviced directly or through any Loan Service Provider (“LSP”) / Digital Lending App, and is not specific to any product, partner or LSP." }
    ],
  },
  {
    id: "3-disclosure-at-sanction",
    title: "3. Disclosure at Sanction",
    blocks: [
        { type: "paragraph", text: "At the time of sanction of a loan, the Company intimates the borrower in writing, through the sanction letter and the Key Fact Statement (“KFS”), of:" },
        { type: "list", items: [
            "the loan amount sanctioned",
            "the annualised rate of interest and the method of its application",
            "all fees and charges, whether levied by the Company or payable to a third party through the Company",
            "the tenure of the loan, the repayment frequency and the due dates of the instalments",
            "the Annual Percentage Rate (APR), including all charges levied by the Company.",
          ] },
        { type: "paragraph", text: "The borrower’s acceptance of these terms and conditions is kept on the Company’s record. No fee or charge that is not mentioned in the KFS is charged to the borrower at any stage during the term of the loan, without the explicit consent of the borrower." }
    ],
  },
  {
    id: "4-interest-rate-model",
    title: "4. Interest Rate Model",
    blocks: [
        { type: "paragraph", text: "The Board has adopted an interest rate model under which the rate of interest for each product and borrower is determined on an annualised basis, having regard to the following components:" },
        { type: "list", items: [
            "cost of funds, including the cost of capital deployed",
            "customer-acquisition and servicing costs, including fees payable to any LSP, which are borne by the Company",
            "administrative and operational costs",
            "credit-risk premium, reflecting the borrower’s risk profile and expected losses",
            "the tenor of the loan, prevailing market conditions and a reasonable margin.",
          ] },
        { type: "paragraph", text: "Interest is computed on a reducing-balance basis and expressed as an annualised rate. Where a processing fee is deducted upfront from the loan amount at disbursal, the full sanctioned loan amount is booked as principal and is disclosed as such in the KFS. Rates of interest may change as warranted by movements in these components; any revision is effected under the Board-adopted interest rate model, is disclosed to the borrower before loan acceptance and, in respect of existing loans, is applied only prospectively." }
    ],
  },
  {
    id: "5-approach-for-gradation-of-risk",
    title: "5. Approach for Gradation of Risk",
    blocks: [
        { type: "paragraph", text: "The Company allocates a credit grade to each borrower through a system-driven credit assessment, and the rate of interest is differentiated by credit grade. Gradation takes into account, among other factors: the borrower’s credit-bureau record and repayment history; income source and repayment capacity; existing indebtedness; and the product type and tenor." },
        { type: "paragraph", text: "The rate of interest, the approach for gradation of risk and the rationale for charging different rates of interest to different categories of borrowers are disclosed to the borrower in the application form, communicated explicitly in the sanction letter, and made available on the Company’s website." }
    ],
  },
  {
    id: "6-other-charges-penal-charges-and-pre-payment",
    title: "6. Other Charges, Penal Charges and Pre-payment",
    blocks: [
        { type: "paragraph", text: "Other charges. All fees and charges, including the processing fee, are levied only as disclosed in the KFS." },
        { type: "paragraph", text: "Penal charges. Where the borrower fails to comply with a material term or condition of the loan contract, the Company may levy a penal charge, in conformity with Paragraph 30 of the RBC Directions, on the following principles:" },
        { type: "list", items: [
            "(a) Penal charges are levied as charges and not in the form of penal interest added to the rate of interest; the Company does not introduce any additional component to the rate of interest.",
            "(b) Penal charges are levied only on the amount under default, are reasonable and commensurate with the non-compliance, and are not used as a revenue-enhancement tool.",
            "(c) Penal charges are non-discriminatory within a given loan / product category. Penal charges for individual borrowers availing loans for purposes other than business are not higher than those applicable to non-individual borrowers for similar non-compliance.",
            "(d) Penal charges are not capitalised: no further interest is computed on such charges, and no additional or fresh penal charge is levied on the outstanding amount of penal charges. The normal compounding of interest at the contracted rate in the loan account is unaffected.",
            "(e) The material terms and conditions whose breach may attract a penal charge, and the quantum of the charge, are defined in the Board-approved schedule of charges read with the Company’s Credit Policy, and may vary from one product to another.",
            "(f) The quantum and the reason for penal charges are disclosed to the borrower upfront in the loan agreement (in bold) and in the KFS, and are displayed on the Company’s website under “Interest Rates and Service Charges”. Reminders sent to the borrower for non-compliance state the applicable penal charges, and any instance of levy of penal charges and the reason therefor are communicated to the borrower.",
            "(g) Any levy of penal charges is effected on a rule-based, system-driven basis; any waiver is granted only under a documented process, with the reason recorded. Applicable taxes on penal charges are levied in accordance with the instructions of the Central Board of Indirect Taxes and Customs.",
          ] },
        { type: "paragraph", text: "These principles apply uniformly to all loans, irrespective of the LSP through which the loan is sourced or serviced." },
        { type: "paragraph", text: "Pre-payment. Pre-payment and foreclosure charges, if any, are levied only as disclosed in the KFS and in accordance with Paragraph 34 of the RBC Directions." }
    ],
  },
  {
    id: "7-communication-and-transparency",
    title: "7. Communication and Transparency",
    blocks: [
        { type: "paragraph", text: "A KFS in the prescribed standardised format, disclosing the all-inclusive APR and all charges, is provided to every prospective borrower before execution of the loan contract, with the prescribed validity period." },
        { type: "paragraph", text: "The rate of interest is an annualised rate, so that the borrower is aware of the exact rate applicable to the account." },
        { type: "paragraph", text: "The rates of interest and the approach for gradation of risk are made available on the Company’s website and are updated whenever there is a change in the rates of interest." },
        { type: "paragraph", text: "Notice of any change in terms and conditions, including interest rates and charges, is given to the borrower, and changes in interest rates and charges are effected only prospectively." }
    ],
  },
  {
    id: "8-loans-sourced-through-a-loan-service-provider",
    title: "8. Loans Sourced through a Loan Service Provider",
    blocks: [
        { type: "paragraph", text: "Where loans are sourced or serviced through an LSP, this Policy and the interest-rate model apply uniformly. Fees and charges payable to the LSP are paid directly by the Company and are not charged to, or collected from, the borrower. All repayments and other borrower receipts flow directly into the Company’s bank account, without any pass-through account or pool account of the LSP or any other third party. The Company remains the lender of record and is responsible for compliance with this Policy." }
    ],
  },
  {
    id: "9-review",
    title: "9. Review",
    blocks: [
        { type: "paragraph", text: "The Board of Directors reviews this Policy at least annually and whenever required by a change in the applicable RBI Directions. The Company abides by all applicable RBI directions, guidelines and instructions in force from time to time; in the event of any inconsistency, the RBI framework prevails over this Policy." }
    ],
  }
  ],
}

export default doc
