import type { Metadata } from "next"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { LoanfrontLspContent } from "../components/LoanfrontLspContent"

export const metadata: Metadata = {
  title: "DSA/LSP Partnership - LoanFront | Bhawana Capital Private Limited",
  description:
    "Learn about our partnership with LoanFront, our authorized Digital Lending Application partner operated by Vaibhav Vyapaar Private Limited.",
  keywords: "DSA, LSP, LoanFront, Digital Lending, Loan Service Provider, Bhawana Capital, VVPL",
  openGraph: {
    title: "DSA/LSP Partnership - LoanFront",
    description:
      "Learn about our partnership with LoanFront, our authorized Digital Lending Application partner operated by Vaibhav Vyapaar Private Limited.",
    type: "article",
  },
  alternates: { canonical: "/loanfront" },
}

export default function LoanfrontLspPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <LoanfrontLspContent />
      </main>
      <Footer />
    </div>
  )
}
