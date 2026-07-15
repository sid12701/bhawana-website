import type { Metadata } from "next"
import Header from "../components/Header"
import Footer from "../components/Footer"
import BoardPolicyContent from "../components/BoardPolicyContent"
import { getBoardPolicy } from "../lib/policies"

export const metadata: Metadata = {
  title: "Interest Rate Policy | Bhawana Capital Private Limited",
  description:
    "Board-approved Interest Rate Policy of Bhawana Capital Private Limited covering the interest-rate model, risk gradation, penal charges, APR/KFS disclosures, and RBI Responsible Business Conduct Directions, 2025.",
  keywords: [
    "interest rate policy",
    "NBFC rates",
    "risk gradation",
    "penal charges",
    "APR",
    "Key Fact Statement",
    "RBI guidelines",
    "Bhawana Capital",
  ],
  openGraph: {
    title: "Interest Rate Policy | Bhawana Capital Private Limited",
    description:
      "Board-approved Interest Rate Policy covering interest-rate model, risk gradation, and borrower disclosures.",
    type: "article",
  },
}

export default function InterestRatePolicyPage() {
  return (
    <>
      <Header />
      <main>
        <BoardPolicyContent document={getBoardPolicy("interest-rate-policy")} />
      </main>
      <Footer />
    </>
  )
}
