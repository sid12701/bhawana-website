"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import SectionHeading from "./SectionHeading"
import { contactFormSchema, type ContactFormData } from "../lib/schemas"
import { legal } from "../lib/content"
import { getReducedMotion } from "../lib/utils"

export default function ContactSection() {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    setReducedMotion(getReducedMotion())
  }, [])

  const {
    register,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
  })

  const successVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25 },
    },
  }

  const successMotionProps = reducedMotion
    ? {}
    : { variants: successVariants, initial: "hidden" as const, animate: "visible" as const }

  return (
    <section className="py-16 md:py-24 bg-background" id="contact">
      <div className="container mx-auto px-4">
        <SectionHeading title="Contact Us" subtitle="Get in touch for personalized financial solutions" centered />

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-poppins text-xl text-secondary">Company Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-secondary">Email</p>
                    <a
                      href={`mailto:${legal.email}`}
                      className="text-neutralText hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                    >
                      {legal.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-secondary">Phone</p>
                    <a
                      href={`tel:${legal.phone}`}
                      className="text-neutralText hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                    >
                      {legal.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-secondary mb-2">Offices</p>
                    <div className="space-y-2 text-sm text-neutralText">
                      <p>{legal.registeredOffice}</p>
                      <p>{legal.corporateOffice}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-poppins text-xl text-secondary">Legal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-neutralText">
                <p>
                  <strong>CIN:</strong> {legal.cin}
                </p>
                <p>
                  <strong>RBI Registration No:</strong> {legal.rbiRegNo}
                </p>
                <p className="pt-2 text-xs">
                  Bhawana Capital Private Limited is a Registered Non-Banking Financial Company (NBFC) regulated by the
                  Reserve Bank of India. We are committed to fair lending practices and customer protection.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="font-poppins text-xl text-secondary">Request a Call Back</CardTitle>
            </CardHeader>
            <CardContent>
              <motion.div {...successMotionProps}>
                <form onSubmit={(event) => event.preventDefault()} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      {...register("name")}
                      placeholder="Enter your full name"
                      aria-invalid={errors.name ? "true" : "false"}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-sm text-red-600">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="Enter your email address"
                      aria-invalid={errors.email ? "true" : "false"}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      placeholder="Enter your phone number"
                      aria-invalid={errors.phone ? "true" : "false"}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-1 text-sm text-red-600">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      placeholder="Tell us about your requirements..."
                      rows={4}
                      aria-invalid={errors.message ? "true" : "false"}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-sm text-red-600">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button type="button" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
