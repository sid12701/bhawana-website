import { ShieldCheck } from "lucide-react"
import SectionHeading from "./SectionHeading"
import { about } from "../lib/content"

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-background" id="about">
      <div className="container mx-auto px-4">
        <SectionHeading title="Bhawana Capital Private Limited" centered />

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {about.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg text-neutralText leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="flex items-center space-x-3 pt-4">
                <ShieldCheck className="h-6 w-6 text-primary flex-shrink-0" />
                <p className="text-sm text-neutralText">
                  <strong>RBI Registered NBFC</strong> - Committed to regulatory compliance and customer protection
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl flex items-center justify-center">
                <div className="text-center text-neutralText">
                  <div className="w-24 h-24 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <ShieldCheck className="h-12 w-12 text-primary" />
                  </div>
                  <p className="text-sm font-medium">Trusted & Regulated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
