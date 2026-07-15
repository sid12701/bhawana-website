import type { Metadata } from "next"
import Header from "../components/Header"
import Footer from "../components/Footer"
import BoardPolicyContent from "../components/BoardPolicyContent"
import { getBoardPolicy } from "../lib/policies"

export const metadata: Metadata = {
  title: "RBI Ombudsman Salient Features | Bhawana Capital Private Limited",
  description:
    "Salient features of RBI complaint escalation and the Reserve Bank – Integrated Ombudsman Scheme, 2021.",
}

export default function RbiOmbudsmanSalientFeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <BoardPolicyContent document={getBoardPolicy("rbi-ombudsman-salient-features")} />
      </main>
      <Footer />
    </div>
  )
}
