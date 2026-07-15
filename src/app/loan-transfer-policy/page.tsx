import type { Metadata } from "next"
import Header from "../components/Header"
import Footer from "../components/Footer"
import BoardPolicyContent from "../components/BoardPolicyContent"
import { getBoardPolicy } from "../lib/policies"

export const metadata: Metadata = {
  title: "Loan Transfer Policy | Bhawana Capital Private Limited",
  description:
    "Policy on transfer and acquisition of loan exposures of Bhawana Capital Private Limited.",
}

export default function LoanTransferPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <BoardPolicyContent document={getBoardPolicy("loan-transfer-policy")} />
      </main>
      <Footer />
    </div>
  )
}
