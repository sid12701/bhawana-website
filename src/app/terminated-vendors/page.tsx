import type { Metadata } from "next"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { TerminatedVendorsContent } from "../components/TerminatedVendorsContent"

export const metadata: Metadata = {
  title: "List of Terminated Outsourced Service Providers | Bhawana Capital Private Limited",
  description:
    "List of terminated vendors including LSPs, DSAs, and service providers whose agreements with Bhawana Capital Private Limited have been terminated.",
  keywords:
    "terminated vendors, LSP termination, DSA termination, Bhawana Capital, vendor directory",
  openGraph: {
    title: "Directory of Terminated Vendors | Bhawana Capital Private Limited",
    description:
      "List of terminated vendors including LSPs, DSAs, and service providers whose agreements with Bhawana Capital Private Limited have been terminated.",
    type: "article",
  },
  alternates: { canonical: "/terminated-vendors" },
}

export default function TerminatedVendorsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <TerminatedVendorsContent />
      </main>
      <Footer />
    </div>
  )
}
