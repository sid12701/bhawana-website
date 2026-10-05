import Link from "next/link"
import { Mail, Phone, Download } from "lucide-react"
import { legal } from "../lib/content"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Company & Legal */}
          <div className="lg:col-span-4">
            <h3 className="font-poppins text-lg font-bold mb-4">Bhawana Capital Private Limited</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <p>
                <strong>CIN:</strong> {legal.cin}
              </p>
              <p>
                <strong>RBI CoR:</strong> {legal.rbiRegNo}
              </p>
              <div className="space-y-2">
                <p>{legal.registeredOffice}</p>
                <p>{legal.corporateOffice}</p>
              </div>
              <div className="space-y-2 pt-2 border-t border-gray-700">
                <p>
                  To report an unauthorised or suspicious digital lending app, use the{" "}
                  <a
                    href={legal.rbiSachetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline hover:text-gray-200 transition-colors"
                  >
                    RBI Sachet portal
                  </a>
                  .
                </p>
                <p>
                  To lodge a complaint with the RBI Ombudsman, use the{" "}
                  <a
                    href={legal.rbiCmsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline hover:text-gray-200 transition-colors"
                  >
                    RBI Complaint Management System
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-5">
            <h4 className="font-poppins font-semibold mb-3">Quick Links</h4>
            {/* Each PDF label keeps its last word and download icon together so the icon never wraps onto a line by itself */}
            <ul className="text-sm sm:columns-2 md:columns-1 lg:columns-2 gap-x-8">
              <li className="break-inside-avoid">
                <Link
                  href={legal.termsHref}
                  className="inline-flex py-1.5 text-gray-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li className="break-inside-avoid">
                <Link
                  href={legal.privacyPolicyPage}
                  className="inline-flex py-1.5 text-gray-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="break-inside-avoid">
                <a
                  href={legal.rbiSachetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex py-1.5 text-gray-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                >
                  RBI Sachet Portal
                </a>
              </li>
              <li className="break-inside-avoid">
                <a
                  href={legal.rbiCmsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex py-1.5 text-gray-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                >
                  RBI Complaint Management System (CMS)
                </a>
              </li>
              <li className="break-inside-avoid">
                <Link
                  href={legal.interestRatesChargesPage}
                  className="inline-flex py-1.5 text-gray-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                >
                  Interest Rates and Service Charges (Online)
                </Link>
              </li>
              <li className="break-inside-avoid">
                <a
                  href={legal.interestRatesChargesPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="interest-rates-and-service-charges.pdf"
                  className="inline-block py-1.5 text-gray-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                >
                  <span>
                    Interest Rates and Service Charges{" "}
                    <span className="whitespace-nowrap">
                      (PDF)
                      <Download className="ml-1.5 inline h-3 w-3 align-[-1px]" aria-hidden="true" />
                    </span>
                  </span>
                </a>
              </li>
              <li className="break-inside-avoid">
                <Link
                  href={legal.karmalifePage}
                  className="inline-flex py-1.5 text-gray-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                >
                  DSA/LSP Partnership (KarmaLife)
                </Link>
              </li>
              <li className="break-inside-avoid">
                <Link
                  href={legal.grievancePage}
                  className="inline-flex py-1.5 text-gray-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                >
                  Grievance Redressal (Online)
                </Link>
              </li>
              <li className="break-inside-avoid">
                <a
                  href={legal.grievancePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="grievance-redressal-mechanism.pdf"
                  className="inline-block py-1.5 text-gray-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                >
                  <span>
                    Grievance Redressal{" "}
                    <span className="whitespace-nowrap">
                      (PDF)
                      <Download className="ml-1.5 inline h-3 w-3 align-[-1px]" aria-hidden="true" />
                    </span>
                  </span>
                </a>
              </li>
              <li className="break-inside-avoid">
                <Link
                  href={legal.fpcPage}
                  className="inline-flex py-1.5 text-gray-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                >
                  Fair Practice Code (English, Online)
                </Link>
              </li>
              <li className="break-inside-avoid">
                <a
                  href={legal.fpcPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="fair-practice-code.pdf"
                  className="inline-block py-1.5 text-gray-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                >
                  <span>
                    Fair Practice Code (English{" "}
                    <span className="whitespace-nowrap">
                      PDF)
                      <Download className="ml-1.5 inline h-3 w-3 align-[-1px]" aria-hidden="true" />
                    </span>
                  </span>
                </a>
              </li>
              <li className="break-inside-avoid">
                <Link
                  href={legal.fpcHindiPage}
                  className="inline-flex py-1.5 text-gray-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                >
                  Fair Practice Code (Hindi, Online)
                </Link>
              </li>
              <li className="break-inside-avoid">
                <a
                  href={legal.fpcHindiPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="fair-practice-code-hindi.pdf"
                  className="inline-block py-1.5 text-gray-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                >
                  <span>
                    Fair Practice Code (Hindi{" "}
                    <span className="whitespace-nowrap">
                      PDF)
                      <Download className="ml-1.5 inline h-3 w-3 align-[-1px]" aria-hidden="true" />
                    </span>
                  </span>
                </a>
              </li>
              <li className="break-inside-avoid">
                <Link
                  href={legal.rbiOmbudsmanPage}
                  className="inline-flex py-1.5 text-gray-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                >
                  RBI Ombudsman Salient Features (English, Online)
                </Link>
              </li>
              <li className="break-inside-avoid">
                <a
                  href={legal.rbiOmbudsmanPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="rbi-ombudsman-salient-features.pdf"
                  className="inline-block py-1.5 text-gray-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                >
                  <span>
                    RBI Ombudsman Salient Features (English{" "}
                    <span className="whitespace-nowrap">
                      PDF)
                      <Download className="ml-1.5 inline h-3 w-3 align-[-1px]" aria-hidden="true" />
                    </span>
                  </span>
                </a>
              </li>
              <li className="break-inside-avoid">
                <Link
                  href={legal.rbiOmbudsmanHindiPage}
                  className="inline-flex py-1.5 text-gray-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                >
                  RBI Ombudsman Salient Features (Hindi, Online)
                </Link>
              </li>
              <li className="break-inside-avoid">
                <a
                  href={legal.rbiOmbudsmanHindiPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="rbi-ombudsman-salient-features-hindi.pdf"
                  className="inline-block py-1.5 text-gray-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                >
                  <span>
                    RBI Ombudsman Salient Features (Hindi{" "}
                    <span className="whitespace-nowrap">
                      PDF)
                      <Download className="ml-1.5 inline h-3 w-3 align-[-1px]" aria-hidden="true" />
                    </span>
                  </span>
                </a>
              </li>
              <li className="break-inside-avoid">
                <Link
                  href={legal.interestRatePage}
                  className="inline-flex py-1.5 text-gray-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                >
                  Interest Rate Policy (Online)
                </Link>
              </li>
              <li className="break-inside-avoid">
                <a
                  href={legal.interestRatePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="interest-rate-policy.pdf"
                  className="inline-block py-1.5 text-gray-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                >
                  <span>
                    Interest Rate Policy{" "}
                    <span className="whitespace-nowrap">
                      (PDF)
                      <Download className="ml-1.5 inline h-3 w-3 align-[-1px]" aria-hidden="true" />
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-poppins font-semibold mb-4">Contact</h4>
            <div className="space-y-1 text-sm">
              <a
                href={`mailto:${legal.email}`}
                className="text-gray-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm flex items-center space-x-2 py-1.5"
              >
                <Mail className="h-4 w-4 shrink-0" />
                <span>{legal.email}</span>
              </a>
              <a
                href={`tel:${legal.phoneTel}`}
                className="text-gray-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm flex items-center space-x-2 py-1.5"
              >
                <Phone className="h-4 w-4 shrink-0" />
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
            url: "https://www.bhawanafinance.com",
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
