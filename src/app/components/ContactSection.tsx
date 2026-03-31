"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import SectionHeading from "./SectionHeading"
import { contactFormSchema, type ContactFormData } from "../lib/schemas"
import { legal } from "../lib/content"
import { getReducedMotion } from "../lib/utils"
import emailjs from "@emailjs/browser"


export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [reducedMotion, setReducedMotion] = useState(false)
  const [captchaValue, setCaptchaValue] = useState("")
  const [captchaQuestion, setCaptchaQuestion] = useState("")
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    setReducedMotion(getReducedMotion())
    generateCaptcha()
    // Set form start time for spam protection
    sessionStorage.setItem("formStartTime", Date.now().toString())
  }, [])

  // Generate simple math captcha
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1
    const num2 = Math.floor(Math.random() * 10) + 1
    setCaptchaQuestion(`${num1} + ${num2} = ?`)
    setCaptchaValue("")
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsError(false)
      setErrorMessage("")

      // Validate captcha
      const [num1, num2] = captchaQuestion.match(/\d+/g)?.map(Number) || []
      const expectedAnswer = num1 + num2
      
      if (captchaValue !== expectedAnswer.toString()) {
        throw new Error("Please enter the correct answer to the security question")
      }

      // Simple spam protection - check if form was filled too quickly
      const formStartTime = sessionStorage.getItem("formStartTime")
      if (!formStartTime || Date.now() - parseInt(formStartTime) < 3000) {
        throw new Error("Please take your time filling out the form")
      }

      // Send email using EmailJS
      const templateParams = {
        to_email: "info@bhawanafinance.com",
        from_name: data.name,
        from_email: data.email,
        from_phone: data.phone,
        message: data.message,
        submitted_at: new Date().toISOString(),
      }

      await emailjs.send(
        "service_c0g7q98", // Replace with your EmailJS service ID
        "template_hf1b6ub", // Replace with your EmailJS template ID
        templateParams,
        { publicKey: "ZP7cjgCbfqrgA19hF" } // Replace with your EmailJS user ID
      )

      setIsSubmitted(true)
      reset()
      generateCaptcha()
      
      // Reset honeypot field
      if (formRef.current) {
        const honeypotField = formRef.current.querySelector('[name="honeypot"]') as HTMLInputElement
        if (honeypotField) honeypotField.value = ""
      }

      // Hide success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      setIsError(true)
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message")
      
      // Hide error message after 5 seconds
      setTimeout(() => {
        setIsError(false)
        setErrorMessage("")
      }, 5000)
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
          {/* Company Information */}
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

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="font-poppins text-xl text-secondary">Request a Call Back</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  {...successMotionProps}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3"
                >
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="text-green-800 font-medium">Message sent successfully!</p>
                    <p className="text-green-700 text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                </motion.div>
              )}

              {/* Error Message */}
              {isError && (
                <motion.div
                  {...successMotionProps}
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3"
                >
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                  <div>
                    <p className="text-red-800 font-medium">Error sending message</p>
                    <p className="text-red-700 text-sm">{errorMessage}</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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

                 <div>
                   <label htmlFor="captcha" className="block text-sm font-medium text-secondary mb-2">
                     Security Question *
                   </label>
                   <div className="space-y-2">
                     <p className="text-sm text-neutralText">{captchaQuestion}</p>
                     <Input
                       id="captcha"
                       type="text"
                       value={captchaValue}
                       onChange={(e) => setCaptchaValue(e.target.value)}
                       placeholder="Enter your answer"
                       className="max-w-xs"
                     />
                   </div>
                 </div>

                 <Button type="submit" size="lg" className="w-full" disabled={!isValid || isSubmitting}>
                   {isSubmitting ? "Sending..." : "Send Message"}
                 </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
