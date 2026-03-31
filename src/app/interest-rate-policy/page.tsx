import type { Metadata } from "next"
import Header from "../components/Header"
import Footer from "../components/Footer"
import InterestRatePolicyContent from "../components/InterestRatePolicyContent";

export const metadata: Metadata = {
  title: "Interest Rate Policy | Bhawana Capital Private Limited",
  description:
    "Interest Rate Policy of Bhawana Capital Private Limited - Learn about our approach to interest rate determination, risk gradation, and transparent lending practices as per RBI guidelines.",
  keywords: ["interest rate policy", "NBFC rates", "risk gradation", "RBI guidelines", "lending rates"],
  openGraph: {
    title: "Interest Rate Policy | Bhawana Capital Private Limited",
    description: "Interest Rate Policy and risk gradation approach of Bhawana Capital Private Limited",
    type: "article",
  },
}

export default function InterestRatePolicyPage() {
  return (
    <>
      <Header />
      <main>
        <InterestRatePolicyContent />
      </main>
      <Footer />
    </>
  )
}
