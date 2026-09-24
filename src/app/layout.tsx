import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

// The generated CSS carries every unicode-range Google serves, Devanagari included, so Hindi text uses this
// same family and the browser fetches the Devanagari files only on pages that contain Hindi.
// `subsets` only decides what gets preloaded. A second Poppins() for Devanagari re-declared the Latin faces
// under the same family name, which made browsers ignore the preloads and download those fonts twice.
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bhawanafinance.com"),
  title: "Bhawana Capital Private Limited - Personal Loans & Salary Advance",
  description:
    "Registered NBFC providing fast, transparent, and reliable personal loans and salary advance solutions. RBI regulated with customer-first policies.",
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
    apple: "/images/final_logo.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-inter antialiased">{children}</body>
    </html>
  )
}
