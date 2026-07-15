import type { BoardPolicyDocument } from "../boardPolicyTypes"

const doc: BoardPolicyDocument = {
  slug: "interest-rates-and-service-charges",
  title: "Interest Rates and Service Charges",
  subtitle: "Website schedule of interest rates and service charges under the RBI RBC Directions, 2025.",
  pdfHref: "/policies/interest-rates-and-service-charges.pdf",
  pdfFileName: "interest-rates-and-service-charges.pdf",
  badge: "Updated with rates & charges",
  ctaTitle: "Questions About Rates or Charges?",
  ctaBody: "All loan-specific rates and charges are also disclosed in your Key Fact Statement.",
  showFlowchart: false,
  sections: [
  {
    id: "overview",
    title: "Overview",
    blocks: [
        { type: "paragraph", text: "This disclosure is made under Paragraphs 23 and 30(6) of the Reserve Bank of India (Non-Banking Financial Companies – Responsible Business Conduct) Directions, 2025, and is updated whenever there is a change in the rates of interest or charges. All rates and charges applicable to a specific loan are disclosed in the Key Fact Statement (“KFS”) provided to the borrower before execution of the loan contract." }
    ],
  },
  {
    id: "1-rates-of-interest",
    title: "1. Rates of Interest",
    blocks: [
        { type: "table", headers: ["Particulars", "Details"], rows: [
            ["Products", "Small-ticket unsecured personal loans and instalment products, offered through a fully digital process"],
            ["Rate of interest (per annum)", "17.95% – 35.95%, fixed, computed on a reducing-balance basis and expressed as an annualised rate"],
            ["Annual Percentage Rate (APR)", "As disclosed in the KFS for each loan; the APR includes the interest and all charges levied by the Company, computed on the net disbursed amount"],
            ["Approach for gradation of risk", "Each borrower is allotted a credit grade through a system-driven credit assessment based on, among other factors, the credit-bureau record and repayment history, income source and repayment capacity, existing indebtedness, and the product type and tenor. The rate of interest is differentiated by credit grade; borrowers with stronger credit profiles are offered lower rates"],
          ] }
    ],
  },
  {
    id: "2-service-charges",
    title: "2. Service Charges",
    blocks: [
        { type: "table", headers: ["Charge", "Amount"], rows: [
            ["Processing fee", "1% – 7.5% of the sanctioned amount (minimum ₹100, maximum ₹2,000), as disclosed in the KFS"],
            ["Penal charge for late payment", "₹10 per delayed instalment, levied on the amount under default, as disclosed in the KFS"],
            ["Foreclosure / pre-payment charges", "NIL"],
            ["Convenience charge for repayment", "NIL"],
            ["Any other charge", "No fee or charge of any description, other than as stated above and disclosed in the KFS, is levied on or collected from the borrower, whether by the Company or by any Loan Service Provider"],
          ] }
    ],
  },
  {
    id: "3-penal-charges-principles",
    title: "3. Penal Charges — Principles",
    blocks: [
        { type: "paragraph", text: "Penal charges are levied as charges and not in the form of penal interest added to the rate of interest; no additional component is added to the rate of interest." },
        { type: "paragraph", text: "Penal charges are levied only on the amount under default, are reasonable and commensurate with the non-compliance, and are applied in a non-discriminatory manner within a product category." },
        { type: "paragraph", text: "Penal charges are not capitalised — no further interest is computed on such charges, and no fresh penal charge is levied on outstanding penal charges." },
        { type: "paragraph", text: "The quantum and reason for penal charges are disclosed upfront in the loan agreement (in bold) and in the KFS, and are stated in reminders sent for non-compliance." }
    ],
  },
  {
    id: "4-general",
    title: "4. General",
    blocks: [
        { type: "paragraph", text: "The interest rate applicable to each loan is communicated in the application form, the KFS and the sanction letter. Any change in interest rates or charges applies prospectively only. This page is read with the Company’s Interest Rate Policy and Fair Practice Code, available on this website." }
    ],
  }
  ],
}

export default doc
