import type { Metadata } from "next"
import Header from "../components/Header"
import Footer from "../components/Footer"
import RefundCancellationPolicyContent from "../components/RefundCancellationPolicyContent"

export const metadata: Metadata = {
  title: "Refund/Cancellation Policy - Bhawana Capital Private Limited",
  description:
    "Refund and cancellation policy for Bhawana Capital Private Limited. Learn about our customer-friendly approach to delays beyond your control.",
  openGraph: {
    title: "Refund/Cancellation Policy - Bhawana Capital Private Limited",
    description:
      "Our customer-friendly approach to refunds and cancellations when delays are beyond your control.",
    type: "article",
  },
  alternates: { canonical: "/refund-policy" },
}

export default function RefundCancellationPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <RefundCancellationPolicyContent />
      </main>
      <Footer />
    </div>
  )
}
