import type { Metadata } from "next"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ShippingPolicyContent from "../components/ShippingPolicyContent"

export const metadata: Metadata = {
  title: "Shipping Policy | Bhawana Capital Private Limited",
  description:
    "Bhawana Capital Private Limited Shipping Policy outlining disbursement timelines and status tracking for loan applications.",
  openGraph: {
    title: "Shipping Policy | Bhawana Capital Private Limited",
    description:
      "Our commitment to prompt and transparent loan disbursement timelines and status tracking.",
    type: "article",
  },
  alternates: { canonical: "/shipping-policy" },
}

export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <ShippingPolicyContent />
      </main>
      <Footer />
    </div>
  )
}
