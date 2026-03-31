import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Bhawana Capital Private Limited - Personal Loans & Salary Advance",
  description:
    "Registered NBFC providing fast, transparent, and reliable personal loans and salary advance solutions. RBI regulated with customer-first policies.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Add the favicon here */}
        <link rel="icon" href="./images/final_logo.ico" />
      </head>
      <body className="font-inter antialiased">{children}</body>
    </html>
  )
}
