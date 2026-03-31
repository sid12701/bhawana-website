import type { Metadata } from "next"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { LspClosureLoanfrontContent } from "../components/LspClosureLoanfrontContent"

export const metadata: Metadata = {
  title: "Notice of LSP Agreement Closure — LoanFront (VVPL) | Bhawana Capital Private Limited",
  description:
    "Public notice regarding termination of the Loan Service Provider agreement with Vaibhav Vyapaar Private Limited (LoanFront) effective 26 March 2026.",
  keywords:
    "LSP closure, LoanFront, Vaibhav Vyapaar, loan service provider termination, Bhawana Capital, VVPL",
  openGraph: {
    title: "Notice of LSP Agreement Closure — LoanFront (VVPL)",
    description:
      "Public notice regarding termination of the Loan Service Provider agreement with Vaibhav Vyapaar Private Limited (LoanFront).",
    type: "article",
  },
  alternates: { canonical: "/lsp-closure-loanfront" },
}

export default function LspClosureLoanfrontPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <LspClosureLoanfrontContent />
      </main>
      <Footer />
    </div>
  )
}
