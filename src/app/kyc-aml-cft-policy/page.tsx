import type { Metadata } from "next"
import Header from "../components/Header"
import Footer from "../components/Footer"
import BoardPolicyContent from "../components/BoardPolicyContent"
import { getBoardPolicy } from "../lib/policies"

export const metadata: Metadata = {
  title: "KYC-AML-CFT Policy | Bhawana Capital Private Limited",
  description:
    "Know Your Customer, Anti-Money Laundering and Combating the Financing of Terrorism Policy of Bhawana Capital Private Limited.",
  openGraph: {
    title: "KYC-AML-CFT Policy | Bhawana Capital Private Limited",
    description:
      "Board-approved KYC, AML and CFT Policy aligned with RBI Master Directions and PMLA.",
    type: "article",
  },
  alternates: { canonical: "/kyc-aml-cft-policy/" },
}

export default function KycAmlCftPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <BoardPolicyContent document={getBoardPolicy("kyc-aml-cft-policy")} />
      </main>
      <Footer />
    </div>
  )
}
