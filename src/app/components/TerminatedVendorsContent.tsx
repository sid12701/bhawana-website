"use client"

import { motion } from "framer-motion"
import { AlertTriangle, FileText, List } from "lucide-react"
import { Card, CardContent } from "./ui/card"

const terminatedVendors = [
  {
    region: "Corporate",
    vendorName: "Vaibhav Vyapaar Private Limited (LoanFront)",
    activity: "LSP / DLA Services",
    date: "19-Nov-25",
    reason: "Mutually Agreed",
  },
]

export function TerminatedVendorsContent() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <List className="w-12 h-12 text-white mr-4" />
              <AlertTriangle className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Directory of Terminated Vendors
            </h1>
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
              <FileText className="w-4 h-4 mr-2" />
              Public Disclosure
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subtitle / Description */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              List of Terminated Vendors as on 31<sup>st</sup> March 2026
            </h2>
            <p className="text-gray-600 mt-2">
              (Including the terminated cases on mutually agreed terms before expiry of contract period)
            </p>
          </motion.div>
        </div>
      </section>

      {/* Table */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead>
                        <tr className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                          <th className="px-5 py-4 font-semibold whitespace-nowrap">Region</th>
                          <th className="px-5 py-4 font-semibold whitespace-nowrap">Vendor Name</th>
                          <th className="px-5 py-4 font-semibold whitespace-nowrap">Type of Activity</th>
                          <th className="px-5 py-4 font-semibold whitespace-nowrap">Date of Termination</th>
                          <th className="px-5 py-4 font-semibold whitespace-nowrap">Reason for Termination</th>
                        </tr>
                      </thead>
                      <tbody>
                        {terminatedVendors.map((vendor, index) => (
                          <tr
                            key={index}
                            className={`border-b border-gray-200 transition-colors hover:bg-blue-50/60 ${
                              index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                            }`}
                          >
                            <td className="px-5 py-4 text-gray-700">{vendor.region}</td>
                            <td className="px-5 py-4 text-gray-900 font-medium">{vendor.vendorName}</td>
                            <td className="px-5 py-4 text-gray-700">{vendor.activity}</td>
                            <td className="px-5 py-4 text-gray-700 whitespace-nowrap">{vendor.date}</td>
                            <td className="px-5 py-4 text-gray-700">{vendor.reason}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
