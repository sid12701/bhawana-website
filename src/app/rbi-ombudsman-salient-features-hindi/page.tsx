import type { Metadata } from "next"
import Header from "../components/Header"
import Footer from "../components/Footer"
import BoardPolicyContent from "../components/BoardPolicyContent"
import { getBoardPolicy } from "../lib/policies"

export const metadata: Metadata = {
  title: "RBI Ombudsman Salient Features (Hindi) | Bhawana Capital Private Limited",
  description:
    "Hindi version of RBI Ombudsman salient features and the three-tier complaint redressal process for Bhawana Capital Private Limited.",
  keywords:
    "RBI ombudsman hindi, लोकपाल योजना, शिकायत निवारण, NBFC, Bhawana Capital",
}

export default function RbiOmbudsmanSalientFeaturesHindiPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <BoardPolicyContent document={getBoardPolicy("rbi-ombudsman-salient-features-hindi")} />
      </main>
      <Footer />
    </div>
  )
}
