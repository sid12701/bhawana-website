import type { Metadata } from "next"
import Header from "../components/Header"
import Footer from "../components/Footer"
import KycAmlPolicyContent from "../components/KycAmlPolicyContent"

export const metadata: Metadata = {
  title: "KYC & AML Policy | Bhawana Capital Private Limited",
  description:
    "Know Your Customer and Anti-Money Laundering Policy of Bhawana Capital Private Limited, aligned with RBI Master Directions and the Prevention of Money Laundering Act.",
  openGraph: {
    title: "KYC & AML Policy | Bhawana Capital Private Limited",
    description:
      "Know Your Customer and Anti-Money Laundering Policy aligned with RBI Master Directions and PMLA.",
    type: "article",
  },
  alternates: {
    canonical: "/kyc-aml-policy", // keep as-is unless you rename the route to /kyc-aml-policy
  },
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <KycAmlPolicyContent />
      </main>
      <Footer />
    </div>
  )
}
