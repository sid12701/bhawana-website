import type { Metadata } from "next"
import Header from "../components/Header"
import Footer from "../components/Footer"
import PrivacyPolicyContent from "../components/PrivacyPolicyContent"

export const metadata: Metadata = {
  title: "Privacy Policy | Bhawana Capital Private Limited",
  description:
    "Privacy Policy and Data Protection principles of Bhawana Capital Private Limited - Learn how we process and protect your personal data in compliance with Indian data protection laws.",
  keywords: ["privacy policy", "data protection", "DPDP Act 2023", "personal data", "NBFC privacy"],
  openGraph: {
    title: "Privacy Policy | Bhawana Capital Private Limited",
    description: "Privacy Policy and Data Protection principles of Bhawana Capital Private Limited",
    type: "article",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main>
        <PrivacyPolicyContent />
      </main>
      <Footer />
    </>
  )
}
