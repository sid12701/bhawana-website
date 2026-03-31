import type { Metadata } from "next"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ReturnPolicyContent from "../components/ReturnPolicyContent"

export const metadata: Metadata = {
  title: "Return Policy – Bhawana Capital Private Limited",
  description:
    "Understand Bhawana Capital’s Return Policy, including the 2-day return window for loans mistakenly applied and how to initiate a return.",
  openGraph: {
    title: "Return Policy – Bhawana Capital Private Limited",
    description:
      "Understand Bhawana Capital’s Return Policy, including the 2-day return window for loans mistakenly applied and how to initiate a return.",
    type: "article",
  },
  alternates: { canonical: "/return-policy" }, // adjust if you keep the route as /returnpolicy
}

export default function ReturnPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <ReturnPolicyContent />
      </main>
      <Footer />
    </div>
  )
}
