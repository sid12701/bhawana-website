export type InterestRateBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }

export type InterestRateSection = {
  id: string
  title: string
  blocks: InterestRateBlock[]
}

export const interestRatePolicyPdfHref = "/policies/interest-rate-policy.pdf"

export const interestRatePolicySections: InterestRateSection[] = [
  {
    id: "version-control",
    title: "VERSION CONTROL",
    blocks: [
      {
        type: "table",
        headers: ["Version", "Author", "Purpose", "Approval Date", "Effective date"],
        rows: [
          [
            "1.0",
            "Manoj Aggarwal",
            "Initial adoption (Interest Rate Policy / FPC policy set)",
            "25th January 2021",
            "25th January 2021",
          ],
          [
            "1.1",
            "Manoj Aggarwal",
            "Change in name of the Company",
            "31st January 2022",
            "31st January 2022",
          ],
          ["1.2", "Manoj Aggarwal", "RBI latest circular", "17th April 2024", "17th April 2024"],
          [
            "1.3",
            "Manoj Aggarwal",
            "Re-based to the RBI (NBFC – Responsible Business Conduct) Directions, 2025 (Para 22–24); penal-charge and APR/KFS provisions added",
            "9th July 2026",
            "9th July 2026",
          ],
        ],
      },
    ],
  },
  {
    id: "preamble",
    title: "1. Preamble and Regulatory Basis",
    blocks: [
      {
        type: "paragraph",
        text: "Bhawana Capital Private Limited (“the Company” or “Bhawana”) is a non-deposit-taking Non-Banking Financial Company – Base Layer (Investment and Credit Company), registered with the Reserve Bank of India (“RBI”), CIN U65100DL1995PTC071089, CoR No. B-14.02856.",
      },
      {
        type: "paragraph",
        text: "The RBI requires every NBFC to communicate the annualised rate of interest to the borrower, along with the approach for gradation of risk and the rationale for charging different rates of interest to different categories of borrowers, and to make the rates of interest and the approach for gradation of risk available on its website. This Policy is adopted in conformity with those requirements as now contained in the RBI (Non-Banking Financial Companies – Responsible Business Conduct) Directions, 2025 (Para 22–24), read with the RBI Digital Lending Directions (Key Fact Statement and Annual Percentage Rate). This Policy supersedes earlier references to the RBI circulars of January 2009 and March 2012.",
      },
    ],
  },
  {
    id: "objective",
    title: "2. Objective and Scope",
    blocks: [
      {
        type: "paragraph",
        text: "This Policy lays down the Company’s interest-rate model, the approach for gradation of risk, and the basis for other charges, so that rates are fair, transparent, non-usurious and communicated clearly to borrowers. It applies to all loan products of the Company, whether sourced and serviced directly or through a Loan Service Provider (“LSP”) / Digital Lending App, and is not specific to any particular product, partner or LSP.",
      },
    ],
  },
  {
    id: "disclosure",
    title: "3. Rate of Interest — Disclosure at Sanction",
    blocks: [
      {
        type: "paragraph",
        text: "At the time of sanction of a loan, the Company intimates the borrower in writing (including through the Key Fact Statement) of the following:",
      },
      {
        type: "list",
        items: [
          "Loan amount applied for and loan amount sanctioned.",
          "Rate of interest (annualised) and the manner of its application.",
          "Processing fee and other fees / charges, whether charged by the Company or through its LSP.",
          "Tenure of the loan and the repayment frequency.",
          "Due dates of the instalments and the Annual Percentage Rate (APR).",
        ],
      },
    ],
  },
  {
    id: "model",
    title: "4. Interest Rate Model",
    blocks: [
      {
        type: "paragraph",
        text: "The rate of interest for each product and borrower is arrived at on an annualised basis, having regard to the following components:",
      },
      {
        type: "list",
        items: [
          "Weighted average cost of funds (including the cost of capital deployed; the Company being presently nil-borrowings).",
          "Average customer-acquisition cost, including fees payable to any LSP (which are borne by the Company).",
          "Administrative and operational costs.",
          "Credit-risk premium, reflecting the borrower’s risk profile and expected losses.",
          "Tenor of the loan, prevailing market conditions, rates offered by comparable lenders, and a reasonable margin.",
        ],
      },
      {
        type: "paragraph",
        text: "Rates of interest are subject to change as warranted by changes in these factors and the discretion of management, and are always disclosed to the borrower before loan acceptance.",
      },
    ],
  },
  {
    id: "gradation",
    title: "5. Approach for Gradation of Risk",
    blocks: [
      {
        type: "paragraph",
        text: "The Company grants credit only to customers who have both the intention and the ability to discharge their obligations. Using its Know Your Customer process and a system-driven credit assessment, the Company allocates a credit grade to each customer, and the rate of interest is differentiated by credit grade. The rationale for charging different rates to different categories of borrowers is disclosed to the borrower and on the website.",
      },
      {
        type: "paragraph",
        text: "Gradation is based broadly on the four categories of Character (integrity and willingness to repay), Capacity (ability to repay from income and cash flow), Capital (financial resources and net worth) and Collateral (security, where applicable), and takes into account, among other factors: the borrower’s credit-bureau record and repayment history; income source and repayment capacity; existing indebtedness, overdue amounts and number of active loans; and the product type and tenor.",
      },
    ],
  },
  {
    id: "charges",
    title: "6. Other Charges and Penal Charges",
    blocks: [
      {
        type: "paragraph",
        text: "Charges such as the processing fee are levied in accordance with this Policy and are disclosed in the Key Fact Statement before disbursal; the Company does not levy any charge that is not disclosed in the Key Fact Statement.",
      },
      {
        type: "paragraph",
        text: "Charges for non-compliance with material terms of the loan are levied as “penal charges”, as a reasonable and fixed amount, and not as “penal interest”. Penal charges are not capitalised, no further interest is computed on them, and they are non-discriminatory within a product category. Only the contractual rate of interest continues to accrue on the outstanding principal; the Company does not levy any additional interest by way of penalty. The quantum and reason for penal charges are disclosed in the loan agreement, the Key Fact Statement and on the website.",
      },
    ],
  },
  {
    id: "transparency",
    title: "7. Communication and Transparency",
    blocks: [
      {
        type: "list",
        items: [
          "A Key Fact Statement disclosing the all-inclusive Annual Percentage Rate (APR) and all charges is provided to every borrower before loan execution.",
          "The rate of interest is annualised so that the borrower is aware of the exact rate applicable to the account.",
          "The rates of interest, the approach for gradation of risk, and the minimum / maximum / average rates of interest charged are made available on the Company’s website and updated periodically.",
          "Any change in the interest rate or charges is applied prospectively and only as permitted by the loan agreement.",
        ],
      },
    ],
  },
  {
    id: "lsp",
    title: "8. Loans Sourced through a Loan Service Provider",
    blocks: [
      {
        type: "paragraph",
        text: "Where loans are sourced or serviced through an LSP, this Policy and the interest-rate model apply uniformly. Fees payable to the LSP are borne by the Company and are not recovered from the borrower over and above the charges disclosed in the Key Fact Statement. The Company remains the lender of record and is responsible for compliance with this Policy.",
      },
    ],
  },
  {
    id: "review",
    title: "9. Review",
    blocks: [
      {
        type: "paragraph",
        text: "The Board of Directors reserves the right to review this Policy from time to time and will do so at least annually or as required by changes in RBI regulations. The Company will abide by all applicable RBI guidelines, directions and instructions in force from time to time; in case of any inconsistency, the RBI framework prevails.",
      },
    ],
  },
]
