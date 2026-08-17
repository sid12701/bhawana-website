import type { Metadata } from "next"
import Link from "next/link"

import Footer from "./components/Footer"
import Header from "./components/Header"

export const metadata: Metadata = {
  title: "Page Not Found | Bhawana Capital Private Limited",
  description: "The requested page could not be found.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto flex min-h-[65vh] items-center px-4 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-poppins text-lg font-semibold text-primary">404</p>
          <h1 className="mt-3 font-poppins text-3xl font-bold text-secondary md:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-neutralText">
            The page you requested does not exist or is no longer available.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="rounded-md bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
            >
              Return home
            </Link>
            <Link
              href="/terminated-vendors/"
              className="rounded-md border border-secondary px-6 py-3 font-semibold text-secondary transition-colors hover:bg-secondary hover:text-white"
            >
              View terminated vendors
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
