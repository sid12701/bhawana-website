import type { Metadata } from "next"
import Header from "../components/Header"
import Footer from "../components/Footer"
import BoardPolicyContent from "../components/BoardPolicyContent"
import { getBoardPolicy } from "../lib/policies"

export const metadata: Metadata = {
  title: "Collection and Recovery Policy | Bhawana Capital Private Limited",
  description:
    "Collection and Recovery Policy of Bhawana Capital Private Limited covering fair collection practices and agent conduct.",
}

export default function CollectionAndRecoveryPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <BoardPolicyContent document={getBoardPolicy("collection-and-recovery-policy")} />
      </main>
      <Footer />
    </div>
  )
}
