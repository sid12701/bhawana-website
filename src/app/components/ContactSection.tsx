"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { AlertCircle, CheckCircle, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { legal } from "../lib/content"
import { contactFormSchema, type ContactFormData } from "../lib/schemas"
import { getReducedMotion } from "../lib/utils"
import SectionHeading from "./SectionHeading"

const GENERIC_ERROR_MESSAGE = "We could not open your email app right now. Please contact us directly."

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    setReducedMotion(getReducedMotion())
  }, [])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      website: "",
    },
  })

  const showGenericError = () => {
    setIsSubmitted(false)
    setIsError(true)
    setErrorMessage(GENERIC_ERROR_MESSAGE)

    window.setTimeout(() => {
      setIsError(false)
      setErrorMessage("")
    }, 5000)
  }

  const onSubmit = (data: ContactFormData) => {
    setIsError(false)
    setErrorMessage("")
    setIsSubmitted(false)

    if ((data.website ?? "").trim().length > 0) {
      showGenericError()
      return
    }

    const sanitizedPhone = data.phone.replace(/[\s\-()]/g, "")
    const subject = `Website callback request from ${data.name}`
    const body = [
      "A website visitor requested a call back.",
      "",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${sanitizedPhone}`,
      "",
      "Message:",
      data.message,
    ].join("\n")

    try {
      window.location.href = `mailto:${legal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

      setIsSubmitted(true)
      reset()

      window.setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch {
      showGenericError()
    }
  }

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
                <p className="text-xs">
                  <a
                    href="/grievance-redressal-policy#grievance-flowchart"
                    className="text-primary hover:text-primary/80 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                  >
                    View our complaint handling &amp; escalation flowchart
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="font-poppins text-xl text-secondary">Request a Call Back</CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted && (
                <motion.div
                  {...successMotionProps}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3"
                >
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="text-green-800 font-medium">Email draft prepared.</p>
                    <p className="text-green-700 text-sm">Please send it from your email app.</p>
                  </div>
                </motion.div>
              )}

              {isError && (
                <motion.div
                  {...successMotionProps}
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3"
                >
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                  <div>
                    <p className="text-red-800 font-medium">Unable to prepare message</p>
                    <p className="text-red-700 text-sm">{errorMessage}</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
                  {...register("website")}
                />

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

                <Button type="submit" size="lg" className="w-full" disabled={!isValid || isSubmitting}>
                  {isSubmitting ? "Preparing..." : "Open Email Draft"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
