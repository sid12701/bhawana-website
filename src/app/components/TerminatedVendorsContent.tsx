import { AlertTriangle, FileText, List } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import Reveal from "./Reveal"

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
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-4 flex items-center justify-center md:mb-6">
              <List className="h-10 w-10 md:h-12 md:w-12 text-primary mr-4" />
              <AlertTriangle className="h-10 w-10 md:h-12 md:w-12 text-secondary" />
            </div>
            <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4 md:mb-6">
              Directory of Terminated Vendors
            </h1>
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-background px-5 py-2 text-sm font-medium text-secondary">
              <FileText className="w-4 h-4 mr-2" />
              Public Disclosure
            </div>
          </div>
        </div>
      </section>

      {/* Subtitle / Description */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Reveal className="text-center max-w-4xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-secondary">
              List of Terminated Vendors as on 31<sup>st</sup> March 2026
            </h2>
            <p className="text-neutralText mt-2">
              (Including the terminated cases on mutually agreed terms before expiry of contract period)
            </p>
          </Reveal>
        </div>
      </section>

      {/* Table */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead>
                        <tr className="bg-primary text-white">
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
                            className={`border-b border-neutralDivider transition-colors hover:bg-primary/5 ${
                              index % 2 === 0 ? "bg-white" : "bg-neutralBg"
                            }`}
                          >
                            <td className="px-5 py-4 text-neutralText">{vendor.region}</td>
                            <td className="px-5 py-4 text-secondary font-medium">{vendor.vendorName}</td>
                            <td className="px-5 py-4 text-neutralText">{vendor.activity}</td>
                            <td className="px-5 py-4 text-neutralText whitespace-nowrap">{vendor.date}</td>
                            <td className="px-5 py-4 text-neutralText">{vendor.reason}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
