import type { Metadata } from "next"
import  Header  from "../components/Header"
import  Footer  from "../components/Footer"
import  {FairPracticeCodeContent}  from "../components/FairPracticeCodeContent"

export const metadata: Metadata = {
  title: "Fair Practice Code | Bhawana Capital Private Limited",
  description:
    "Fair Practice Code of Bhawana Capital Private Limited - Our commitment to transparency, ethical practices, and customer protection in accordance with RBI guidelines.",
  keywords:
    "fair practice code, NBFC guidelines, customer protection, RBI compliance, ethical lending, Bhawana Capital",
}

export default function FairPracticeCodePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <FairPracticeCodeContent />
      </main>
      <Footer />
    </div>
  )
}
