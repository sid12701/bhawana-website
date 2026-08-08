import type { Metadata } from "next"
import Header from "../components/Header"
import Footer from "../components/Footer"
import BoardPolicyContent from "../components/BoardPolicyContent"
import { getBoardPolicy } from "../lib/policies"

export const metadata: Metadata = {
  title: "Digital Lending Policy | Bhawana Capital Private Limited",
  description:
    "Board-approved Digital Lending Policy of Bhawana Capital Private Limited covering LSPs, disclosures, fund flows, and data privacy.",
  alternates: { canonical: "/digital-lending-policy/" },
}

export default function DigitalLendingPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <BoardPolicyContent document={getBoardPolicy("digital-lending-policy")} />
      </main>
      <Footer />
    </div>
  )
}
