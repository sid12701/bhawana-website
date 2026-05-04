import type { Metadata } from "next"

import Footer from "../components/Footer"
import Header from "../components/Header"
import { FairPracticeCodeContent } from "../components/FairPracticeCodeContent"

export const metadata: Metadata = {
  title: "Fair Practice Code (Hindi) | Bhawana Capital Private Limited",
  description: "Hindi version of the Fair Practice Code of Bhawana Capital Private Limited.",
  keywords:
    "fair practice code hindi, निष्पक्ष आचरण संहिता, NBFC guidelines, RBI compliance, Bhawana Capital",
}

export default function FairPracticeCodeHindiPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <FairPracticeCodeContent documentCode="hi" />
      </main>
      <Footer />
    </div>
  )
}
