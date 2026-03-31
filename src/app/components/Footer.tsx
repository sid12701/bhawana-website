import Link from "next/link"
import { Mail, Phone, Download } from "lucide-react"
import { legal } from "../lib/content"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company & Legal */}
          <div className="lg:col-span-2">
            <h3 className="font-poppins text-lg font-bold mb-4">Bhawana Capital Private Limited</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <p>
                <strong>CIN:</strong> {legal.cin}
              </p>
              <p>
                <strong>RBI Registration No:</strong> {legal.rbiRegNo}
              </p>
              <div className="space-y-2">
                <p>{legal.registeredOffice}</p>
                <p>{legal.corporateOffice}</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={legal.termsHref}
                  className="text-gray-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <a
                  href="/grievance-redressal-policy"
                  className="text-gray-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm flex items-center space-x-2"
                >
                  <span>Grievance Redressal</span>
                  <Download className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="/fair-practice-code"
                  className="text-gray-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm flex items-center space-x-2"
                >
                  <span>Fair Practice Code</span>
                  <Download className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-poppins font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <a
                href={`mailto:${legal.email}`}
                className="text-gray-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm flex items-center space-x-2"
              >
                <Mail className="h-4 w-4" />
                <span>{legal.email}</span>
              </a>
              <a
                href={`tel:${legal.phone}`}
                className="text-gray-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm flex items-center space-x-2"
              >
                <Phone className="h-4 w-4" />
                <span>{legal.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© {currentYear} Bhawana Capital Private Limited. All rights reserved.</p>
            <div className="mt-2 md:mt-0">
              <p>Regulated by Reserve Bank of India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            name: "Bhawana Capital Private Limited",
            description: "Registered NBFC providing personal loans and salary advance solutions",
            url: "https://bhawanafinance.com",
            telephone: legal.phone,
            email: legal.email,
            address: {
              "@type": "PostalAddress",
              addressCountry: "IN",
            },
            sameAs: [],
            identifier: {
              "@type": "PropertyValue",
              name: "CIN",
              value: legal.cin,
            },
          }),
        }}
      />
    </footer>
  )
}
