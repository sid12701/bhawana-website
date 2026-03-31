import type { Metadata } from "next"
import Header from "../components/Header"
import Footer from "../components/Footer"
import GrievanceRedressalContent from "../components/GrievanceRedressalContent";

export const metadata: Metadata = {
  title: "Grievance Redressal Mechanism | Bhawana Capital Private Limited",
  description:
    "Comprehensive grievance redressal mechanism of Bhawana Capital Private Limited - Learn about our customer complaint handling process, escalation procedures, and RBI compliance.",
  keywords: [
    "grievance redressal",
    "customer complaints",
    "RBI guidelines",
    "complaint resolution",
    "customer service",
  ],
  openGraph: {
    title: "Grievance Redressal Mechanism | Bhawana Capital Private Limited",
    description: "Customer complaint handling process and escalation procedures of Bhawana Capital Private Limited",
    type: "article",
  },
}

export default function GrievanceRedressalPage() {
  return (
    <>
      <Header />
      <main>
        <GrievanceRedressalContent />
      </main>
      <Footer />
    </>
  )
}
