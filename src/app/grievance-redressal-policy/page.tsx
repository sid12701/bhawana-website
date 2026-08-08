import type { Metadata } from "next"
import Header from "../components/Header"
import Footer from "../components/Footer"
import BoardPolicyContent from "../components/BoardPolicyContent"
import { getBoardPolicy } from "../lib/policies"

export const metadata: Metadata = {
  title: "Grievance Redressal Mechanism | Bhawana Capital Private Limited",
  description:
    "Grievance Redressal Mechanism of Bhawana Capital Private Limited — how to raise complaints and escalate to RBI.",
  keywords: [
    "grievance redressal",
    "complaint",
    "NBFC grievance",
    "RBI CMS",
    "Bhawana Capital",
  ],
  alternates: { canonical: "/grievance-redressal-policy/" },
}

export default function GrievanceRedressalPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <BoardPolicyContent document={getBoardPolicy("grievance-redressal-mechanism")} />
      </main>
      <Footer />
    </div>
  )
}
