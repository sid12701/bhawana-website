import type { Metadata } from "next"
import Header from "../components/Header"
import Footer from "../components/Footer"
import BoardPolicyContent from "../components/BoardPolicyContent"
import { getBoardPolicy } from "../lib/policies"

export const metadata: Metadata = {
  title: "Interest Rates and Service Charges | Bhawana Capital Private Limited",
  description:
    "Website schedule of interest rates and service charges of Bhawana Capital Private Limited under RBI RBC Directions, 2025.",
}

export default function InterestRatesAndServiceChargesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <BoardPolicyContent document={getBoardPolicy("interest-rates-and-service-charges")} />
      </main>
      <Footer />
    </div>
  )
}
