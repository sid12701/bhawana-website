import type { Metadata } from "next"
import Header from "../components/Header"
import Footer from "../components/Footer"
import BoardPolicyContent from "../components/BoardPolicyContent"
import { getBoardPolicy } from "../lib/policies"

export const metadata: Metadata = {
  title: "Fair Practice Code (Hindi) | Bhawana Capital Private Limited",
  description:
    "Hindi version of the Fair Practice Code of Bhawana Capital Private Limited.",
  keywords:
    "fair practice code hindi, निष्पक्ष आचरण संहिता, NBFC guidelines, Bhawana Capital",
  alternates: { canonical: "/fair-practice-code-hindi/" },
}

export default function FairPracticeCodeHindiPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <BoardPolicyContent document={getBoardPolicy("fair-practice-code-hindi")} />
      </main>
      <Footer />
    </div>
  )
}
