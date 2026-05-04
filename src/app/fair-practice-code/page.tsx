import type { Metadata } from "next"
import  Header  from "../components/Header"
import  Footer  from "../components/Footer"
import  {FairPracticeCodeContent}  from "../components/FairPracticeCodeContent"

export const metadata: Metadata = {
  title: "Fair Practice Code (English) | Bhawana Capital Private Limited",
  description:
    "English version of the Fair Practice Code of Bhawana Capital Private Limited.",
  keywords:
    "fair practice code english, NBFC guidelines, customer protection, RBI compliance, ethical lending, Bhawana Capital",
}

export default function FairPracticeCodePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <FairPracticeCodeContent documentCode="en" />
      </main>
      <Footer />
    </div>
  )
}
