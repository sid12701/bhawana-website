import type { Metadata } from "next"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { SalaryAdvanceContent } from "../components/SalaryAdvanceContent"

export const metadata: Metadata = {
  title: "Salary Advance Loans - Quick Cash When You Need It | Bhawana Capital",
  description:
    "Get instant salary advance loans from ₹5,000 to ₹50,000 with flexible tenure of 7-90 days. Quick approval, minimal documentation, and transparent terms.",
  keywords: "salary advance, instant loans, quick cash, emergency funds, short term loans, Bhawana Capital",
}

export default function SalaryAdvancePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <SalaryAdvanceContent />
      </main>
      <Footer />
    </div>
  )
}
