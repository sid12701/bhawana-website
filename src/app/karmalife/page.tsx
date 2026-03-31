import type { Metadata } from "next"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { KarmalifeContent } from "../components/KarmalifeContent"

export const metadata: Metadata = {
  title: "DSA/LSP Partnership - KarmaLife | Bhawana Capital Private Limited",
  description:
    "Learn about our partnership with KarmaLife, our authorized Digital Lending Application partner for seamless loan services.",
  keywords: "DSA, LSP, KarmaLife, Digital Lending, Loan Service Provider, Bhawana Capital",
  openGraph: {
    title: "DSA/LSP Partnership - KarmaLife",
    description:
      "Learn about our partnership with KarmaLife, our authorized Digital Lending Application partner for seamless loan services.",
    type: "article",
  },
  alternates: { canonical: "/karmalife" },
}

export default function KarmaLife() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <KarmalifeContent />
      </main>
      <Footer />
    </div>
  )
}
