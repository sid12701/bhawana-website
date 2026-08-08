import type { Metadata } from "next"
import Header from "../components/Header"
import Footer from "../components/Footer"
import TermsAndConditionsContent from "../components/TermsAndConditionsContent"

export const metadata: Metadata = {
  title: "Terms & Conditions | Bhawana Capital Private Limited",
  description:
    "Terms and Conditions for using Bhawana Capital Private Limited’s personal loan and salary advance services.",
  alternates: { canonical: "/terms-conditions/" },
}

export default function TermsAndConditionsPage() {
  return (
    <>
      <Header />
      <main>
        <TermsAndConditionsContent />
      </main>
      <Footer />
    </>
  )
}
