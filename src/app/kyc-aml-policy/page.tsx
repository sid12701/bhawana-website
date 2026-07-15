import type { Metadata } from "next"
import LegacyKycRedirect from "./LegacyRedirect"

export const metadata: Metadata = {
  title: "KYC-AML-CFT Policy | Bhawana Capital Private Limited",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "/kyc-aml-cft-policy/",
  },
}

export default function LegacyKycAmlPolicyPage() {
  return <LegacyKycRedirect />
}
