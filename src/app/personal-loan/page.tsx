import type { Metadata } from "next"
import { PersonalLoanContent } from "@/app/components/PersonalLoanContent" // adjust path if needed
import Header from "../components/Header"
import Footer from "../components/Footer"

export const metadata: Metadata = {
  title: "Personal Loans | Bhawana Capital Private Limited",
  description:
    "Get instant personal loans from ₹1,500 to ₹30,000 with flexible tenure of 3-12 months. 100% digital process with quick approval.",
  keywords:
    "personal loans, instant loans, digital lending, unsecured loans, Bhawana Capital, NBFC",
}

export default function PersonalLoanPage() {
  return (
    <>
      <Header />
      <main>
        <PersonalLoanContent />
      </main>
      <Footer />
    </>
  )
}
