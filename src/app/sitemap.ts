import type { MetadataRoute } from "next"

export const dynamic = "force-static"

const BASE_URL = "https://www.bhawanafinance.com"

const routes: Array<{
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
  priority: number
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/personal-loan/", changeFrequency: "monthly", priority: 0.9 },
  { path: "/salary-advance/", changeFrequency: "monthly", priority: 0.9 },
  { path: "/karmalife/", changeFrequency: "monthly", priority: 0.9 },
  { path: "/terminated-vendors/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog/", changeFrequency: "weekly", priority: 0.7 },
  { path: "/interest-rate-policy/", changeFrequency: "monthly", priority: 0.6 },
  { path: "/kyc-aml-cft-policy/", changeFrequency: "monthly", priority: 0.6 },
  { path: "/fair-practice-code/", changeFrequency: "monthly", priority: 0.6 },
  { path: "/fair-practice-code-hindi/", changeFrequency: "monthly", priority: 0.6 },
  { path: "/grievance-redressal-policy/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/loan-transfer-policy/", changeFrequency: "monthly", priority: 0.6 },
  { path: "/interest-rates-and-service-charges/", changeFrequency: "monthly", priority: 0.6 },
  { path: "/rbi-ombudsman-salient-features/", changeFrequency: "monthly", priority: 0.6 },
  { path: "/rbi-ombudsman-salient-features-hindi/", changeFrequency: "monthly", priority: 0.6 },
  { path: "/digital-lending-policy/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/collection-and-recovery-policy/", changeFrequency: "monthly", priority: 0.6 },
  { path: "/terms-conditions/", changeFrequency: "yearly", priority: 0.5 },
  { path: "/privacy-policy/", changeFrequency: "yearly", priority: 0.5 },
  { path: "/return-policy/", changeFrequency: "yearly", priority: 0.4 },
  { path: "/shipping-policy/", changeFrequency: "yearly", priority: 0.4 },
  { path: "/refund-cancellation-policy/", changeFrequency: "yearly", priority: 0.4 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
