import type { Metadata } from "next"
import Link from "next/link"
import Header from "../components/Header"
import Footer from "../components/Footer"

export const metadata: Metadata = {
  title: "LoanFront Partnership Ended | Bhawana Capital Private Limited",
  description:
    "The LoanFront DSA/LSP partnership with Bhawana Capital Private Limited has ended. See KarmaLife for current partners.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  alternates: {
    canonical: "/karmalife",
  },
}

/**
 * Former DSA/LSP partner page retained only as a noindex stub so Google can
 * drop /loanfront/ from search results. Active partner: KarmaLife only.
 */
export default function LoanfrontRemovedPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-24 pt-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-poppins text-3xl font-bold text-secondary md:text-4xl">
            LoanFront partnership ended
          </h1>
          <p className="mt-6 text-lg text-neutralText leading-relaxed">
            Bhawana Capital Private Limited no longer partners with LoanFront
            (Vaibhav Vyapaar Private Limited) as a Digital Lending Application /
            Loan Service Provider.
          </p>
          <p className="mt-4 text-neutralText leading-relaxed">
            Our current DSA/LSP partner is KarmaLife. Former partners appear on
            the Terminated Vendors page.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/karmalife"
              className="rounded-md bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
            >
              View KarmaLife partnership
            </Link>
            <Link
              href="/terminated-vendors"
              className="rounded-md border border-secondary px-6 py-3 font-semibold text-secondary transition-colors hover:bg-secondary hover:text-white"
            >
              Terminated vendors
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
