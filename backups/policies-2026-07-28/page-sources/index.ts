import type { BoardPolicyDocument } from "../boardPolicyTypes"

import interestRatePolicy from "./interest-rate-policy"
import kycAmlCftPolicy from "./kyc-aml-cft-policy"
import fairPracticeCode from "./fair-practice-code"
import fairPracticeCodeHindi from "./fair-practice-code-hindi"
import grievanceRedressalMechanism from "./grievance-redressal-mechanism"
import loanTransferPolicy from "./loan-transfer-policy"
import interestRatesAndServiceCharges from "./interest-rates-and-service-charges"
import rbiOmbudsmanSalientFeatures from "./rbi-ombudsman-salient-features"
import rbiOmbudsmanSalientFeaturesHindi from "./rbi-ombudsman-salient-features-hindi"
import digitalLendingPolicy from "./digital-lending-policy"
import collectionAndRecoveryPolicy from "./collection-and-recovery-policy"

export const boardPolicies: Record<string, BoardPolicyDocument> = {
  "interest-rate-policy": interestRatePolicy,
  "kyc-aml-cft-policy": kycAmlCftPolicy,
  "fair-practice-code": fairPracticeCode,
  "fair-practice-code-hindi": fairPracticeCodeHindi,
  "grievance-redressal-mechanism": grievanceRedressalMechanism,
  "loan-transfer-policy": loanTransferPolicy,
  "interest-rates-and-service-charges": interestRatesAndServiceCharges,
  "rbi-ombudsman-salient-features": rbiOmbudsmanSalientFeatures,
  "rbi-ombudsman-salient-features-hindi": rbiOmbudsmanSalientFeaturesHindi,
  "digital-lending-policy": digitalLendingPolicy,
  "collection-and-recovery-policy": collectionAndRecoveryPolicy,
}

export function getBoardPolicy(slug: string): BoardPolicyDocument {
  const doc = boardPolicies[slug]
  if (!doc) throw new Error(`Unknown board policy: ${slug}`)
  return doc
}
