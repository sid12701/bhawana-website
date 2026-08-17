import type { Metadata } from "next"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ShippingPolicyContent from "../components/ShippingPolicyContent"

export const metadata: Metadata = {
  title: "Shipping Policy | Bhawana Capital Private Limited",
  description:
    "Bhawana Capital Private Limited Shipping Policy outlining disbursement timelines and status tracking for loan applications.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Shipping Policy | Bhawana Capital Private Limited",
    description:
      "Our commitment to prompt and transparent loan disbursement timelines and status tracking.",
    type: "article",
    url: "/shipping-policy/",
  },
  alternates: { canonical: "/shipping-policy/" },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Shipping Policy | Bhawana Capital Private Limited",
  url: "https://www.bhawanafinance.com/shipping-policy/",
  description:
    "Bhawana Capital Private Limited Shipping Policy outlining disbursement timelines and status tracking for loan applications.",
  isPartOf: {
    "@type": "WebSite",
    name: "Bhawana Capital Private Limited",
    url: "https://www.bhawanafinance.com/",
  },
}

export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="pt-20">
        <ShippingPolicyContent />
      </main>
      <Footer />
    </div>
  )
}
