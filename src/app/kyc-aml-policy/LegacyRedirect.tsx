"use client"

import { useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function LegacyKycRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/kyc-aml-cft-policy/")
  }, [router])

  return (
    <main className="container mx-auto px-4 py-24 text-center">
      <h1 className="font-poppins text-2xl font-bold text-secondary">
        KYC-AML-CFT Policy moved
      </h1>
      <p className="mt-4 text-neutralText">
        Redirecting to the updated{" "}
        <Link href="/kyc-aml-cft-policy" className="text-primary underline">
          KYC-AML-CFT Policy
        </Link>
        .
      </p>
    </main>
  )
}
