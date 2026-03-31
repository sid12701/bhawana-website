"use client"

import { useEffect, useState } from "react"
import { motion, Variants } from "framer-motion"
import {
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  FileText,
  AlertCircle,
  ExternalLink,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { getReducedMotion } from "../lib/utils"

export default function GrievanceRedressalContent() {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    setReducedMotion(getReducedMotion())
  }, [])

  const pageVariants: Variants | undefined = reducedMotion
    ? undefined
    : {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.3, ease: "easeOut" },
        },
      }

  const sectionVariants: Variants | undefined = reducedMotion
    ? undefined
    : {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: "easeOut" },
        },
      }

  const complaintChannels = [
    {
      method: "Email",
      contact: "info@bhawanafinance.com",
      icon: <Mail className="h-6 w-6" />,
      description: "Send detailed complaint via email",
    },
    {
      method: "In Person",
      contact: "Level 18, One Horizon Centre, DLF5, Gurgaon-122002, India",
      icon: <MapPin className="h-6 w-6" />,
      description: "Visit our corporate office",
    },
    {
      method: "Postal Mail",
      contact:
        "Customer Care Department, Bhawana Capital Private Limited, Corporate Office: Level 18, One Horizon Centre, DLF5, Gurgaon-122002, India",
      icon: <FileText className="h-6 w-6" />,
      description: "Send written complaint by post",
    },
    {
      method: "Phone",
      contact: "0124-6687879 (09:00 AM to 08:00 PM, except holidays)",
      icon: <Phone className="h-6 w-6" />,
      description: "Call for follow-up on written complaints",
    },
  ]

  const requiredInfo = [
    "Customer's full name",
    "Registered mobile number in working condition",
    "Loan ID allotted by the Company",
    "Specific details of the complaint & supporting documents",
    "Registered email address",
  ]

  const escalationLevels = [
    {
      level: "FIRST LEVEL",
      title: "Customer Care Department",
      contact: "Grievance Redressal Officer",
      address: "Level 18, One Horizon Centre, DLF5, Gurgaon-122002, India",
      phone: "0124-6687879",
      email: "info@bhawanafinance.com",
    },
    {
      level: "SECOND LEVEL",
      title: "Senior Grievance Officer",
      contact: "Mr. Manoj Aggarwal",
      address: "Level 18, One Horizon Centre, DLF5, Gurgaon-122002, India",
      phone: "0124-6687879",
      email: "manoj@bhawanafinance.com",
    },
    {
      level: "THIRD LEVEL",
      title: "Reserve Bank of India",
      contact: "Office-in-Charge, Department of Supervision (NBFC)",
      address: "6, Sansad Marg, Sansad Marg Area, New Delhi, Delhi 110001",
      phone: "011-23714456",
      note: "If complaint not resolved within 30 working days",
    },
  ]

  const principles = [
    "Customers shall be treated fairly at all times",
    "All complaints are responded with courtesy and resolved in timely manner",
    "Customers are informed of escalation avenues and alternative remedies",
    "All complaints dealt efficiently, expeditiously and fairly",
    "Employees work in good faith without prejudice to customer interests",
    "Comply with regulatory requirement guidelines",
  ]

  return (
    <motion.div variants={pageVariants} initial="hidden" animate="visible">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <MessageSquare className="h-12 w-12 text-primary mr-4" />
              <Users className="h-12 w-12 text-secondary" />
            </div>
            <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
              Grievance Redressal Mechanism
            </h1>
            <p className="text-lg md:text-xl text-neutralText mb-8">
              Prompt and fair resolution of customer complaints and grievances
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium">
              <CheckCircle className="h-4 w-4 mr-2" />
              RBI Guidelines Compliant
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="mb-12">
                <CardContent className="p-8">
                  <h2 className="font-poppins text-2xl font-bold text-secondary mb-6 flex items-center">
                    <MessageSquare className="h-6 w-6 mr-3 text-primary" />
                    Introduction
                  </h2>
                  <div className="space-y-6">
                    <p className="text-lg text-neutralText leading-relaxed">
                      Bhawana Capital Private Limited aims to impart good customer services and enhance level of
                      customer satisfaction. We believe that customer satisfaction is the key to business growth as well
                      as ensuring a long-lasting relationship with customers.
                    </p>
                    <p className="text-neutralText leading-relaxed">
                      This Grievance Redressal Mechanism aims at ensuring prompt redressal of customer complaints and
                      grievances. It also deals with issues relating to services provided by outsourced agencies.
                    </p>
                    <p className="text-neutralText leading-relaxed">
                      Our Grievance Redressal Mechanism is formulated in line with the Reserve Bank of India's
                      guidelines on Fair Practices Code and outlines the framework for addressing customer grievances.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Principles */}
            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="mb-12">
                <CardContent className="p-8">
                  <h3 className="font-poppins text-xl font-semibold text-secondary mb-6">
                    Our Grievance Redressal Principles
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {principles.map((principle, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-neutralBg rounded-lg">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-neutralText text-sm">{principle}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grounds for Complaint */}
      <section className="py-16 md:py-24 bg-neutralBg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h2 className="font-poppins text-2xl font-bold text-secondary mb-6 flex items-center">
                    <AlertCircle className="h-6 w-6 mr-3 text-primary" />
                    Grounds for Filing a Complaint
                  </h2>
                  <div className="space-y-6">
                    <p className="text-neutralText leading-relaxed">
                      Customers can raise/register complaint(s) in writing, containing the nature of
                      grievance/deficiency, with regard to:
                    </p>
                    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg">
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-neutralText">Non-observance of directions issued by RBI to NBFCs</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-neutralText">
                            Non-adherence to any provisions of RBI guidelines on Fair Practices Code
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-accent pl-6">
                      <h4 className="font-semibold text-secondary mb-3">Important Clarifications:</h4>
                      <ul className="space-y-2 text-sm text-neutralText">
                        <li>• Complaint is not an enquiry, feedback, or request for data modification</li>
                        <li>• Grievances via calls are considered complaints only with written representation</li>
                        <li>• Anonymous or incomplete complaints will not be addressed</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Raise Complaints */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="text-center mb-12">
                <h2 className="font-poppins text-3xl font-bold text-secondary mb-4">How to Raise Complaints</h2>
                <p className="text-lg text-neutralText">Multiple channels available for your convenience</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {complaintChannels.map((channel, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                          {channel.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-poppins font-semibold text-secondary mb-2">{channel.method}</h3>
                          <p className="text-sm text-neutralText mb-3">{channel.description}</p>
                          <p className="text-sm text-neutralText font-medium">{channel.contact}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Required Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-primary">
                    <FileText className="h-6 w-6" />
                    Required Information for Complaints
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutralText mb-4">
                    While raising a complaint, the following information must be provided in writing:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {requiredInfo.map((info, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-neutralBg rounded-lg">
                        <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <span className="text-neutralText text-sm">{info}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resolution Process */}
      <section className="py-16 md:py-24 bg-neutralBg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h2 className="font-poppins text-2xl font-bold text-secondary mb-6 flex items-center">
                    <Clock className="h-6 w-6 mr-3 text-primary" />
                    Resolution Process & Timeline
                  </h2>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg">
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Mail className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="font-semibold text-secondary mb-2">Acknowledgment</h3>
                        <p className="text-sm text-neutralText">Within 3 working days</p>
                      </div>

                      <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg">
                        <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Users className="h-8 w-8 text-secondary" />
                        </div>
                        <h3 className="font-semibold text-secondary mb-2">Investigation</h3>
                        <p className="text-sm text-neutralText">Thorough review process</p>
                      </div>

                      <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg">
                        <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CheckCircle className="h-8 w-8 text-accent" />
                        </div>
                        <h3 className="font-semibold text-secondary mb-2">Resolution</h3>
                        <p className="text-sm text-neutralText">Within 30 working days</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg">
                      <h4 className="font-semibold text-secondary mb-3">Treatment of Complaints:</h4>
                      <ul className="space-y-2 text-sm text-neutralText">
                        <li>• Immediate resolution for complaints that can be resolved instantly</li>
                        <li>• Ticket creation for complaints requiring investigation</li>
                        <li>• Regular updates on progress and expected timelines</li>
                        <li>• Reasonable attempts to reach customer for resolution</li>
                        <li>• Extension notification if additional time needed beyond 30 days</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Escalation Matrix */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="text-center mb-12">
                <h2 className="font-poppins text-3xl font-bold text-secondary mb-4">Escalation Matrix</h2>
                <p className="text-lg text-neutralText">Three-level escalation process for complaint resolution</p>
              </div>

              <div className="space-y-6">
                {escalationLevels.map((level, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-poppins font-bold text-secondary">{level.level}</h3>
                            {index < escalationLevels.length - 1 && <ArrowRight className="h-5 w-5 text-neutralText" />}
                          </div>
                          <h4 className="font-semibold text-primary mb-2">{level.title}</h4>
                          <p className="text-neutralText mb-2">{level.contact}</p>
                          <div className="grid md:grid-cols-2 gap-4 text-sm text-neutralText">
                            <div className="flex items-center space-x-2">
                              <MapPin className="h-4 w-4 text-primary" />
                              <span>{level.address}</span>
                            </div>
                            {level.phone && (
                              <div className="flex items-center space-x-2">
                                <Phone className="h-4 w-4 text-primary" />
                                <span>{level.phone}</span>
                              </div>
                            )}
                            {level.email && (
                              <div className="flex items-center space-x-2">
                                <Mail className="h-4 w-4 text-primary" />
                                <span>{level.email}</span>
                              </div>
                            )}
                          </div>
                          {level.note && (
                            <div className="mt-3 p-3 bg-accent/10 rounded-lg">
                              <p className="text-sm text-accent font-medium">{level.note}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RBI CMS Portal */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ExternalLink className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="font-poppins text-2xl font-bold text-secondary mb-4">
                    RBI Complaint Management System (CMS)
                  </h2>
                  <p className="text-neutralText mb-6 leading-relaxed">
                    RBI's Complaint Management System enables online filing of complaints against RBI-regulated
                    entities. It provides features like SMS/Email notifications, status tracking, and closure
                    advisories.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild className="bg-primary hover:bg-primary/90">
                      <a
                        href="https://cms.rbi.org.in/cms/IndexPage.aspx?aspxerrorpath=/cms/cms/indexpage.aspx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        File Complaint on RBI Portal
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a
                        href="https://cms.rbi.org.in/cms/VideoGallery/en-US/How_to_File_a_Complaint/index.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        Watch Guide Video
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="font-poppins text-3xl font-bold text-secondary mb-6">Need to File a Complaint?</h2>
              <p className="text-lg text-neutralText mb-8">
                We're committed to resolving your concerns promptly and fairly. Contact us through any of the channels
                above.
              </p>

              <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                    <a
                      href="tel:01246687879"
                      className="text-primary hover:text-primary/80 font-semibold transition-colors"
                    >
                      0124-6687879
                    </a>
                    <p className="text-sm text-neutralText mt-1">09:00 AM - 08:00 PM</p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                    <a
                      href="mailto:info@bhawanafinance.com"
                      className="text-secondary hover:text-secondary/80 font-semibold transition-colors"
                    >
                      info@bhawanafinance.com
                    </a>
                    <p className="text-sm text-neutralText mt-1">24/7 Email Support</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
