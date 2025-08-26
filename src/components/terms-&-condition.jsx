"use client"

import { useState } from "react"
import Link from "next/link"
import Footer from "./Footer"
import Navbar from "./Hedaer"

export default function TermsConditions() {
  const [activeSection, setActiveSection] = useState("terms")

  const sections = [
    { id: "terms", title: "Terms of Service", icon: "📋" },
    { id: "privacy", title: "Privacy Policy", icon: "🔒" },
    { id: "cookies", title: "Cookie Policy", icon: "🍪" },
    { id: "refund", title: "Refund Policy", icon: "💰" },
  ]

  return (
    <>
    <Navbar fixed={true}/>
        <div className="min-h-screen bg-background my-10">
      {/* Header */}
      <div className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-muted-foreground mb-4">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span className="mx-2">&gt;</span>
            <span>Terms & Conditions</span>
          </nav>
        
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-card rounded-lg shadow-sm border p-6 sticky top-8">
              <h3 className="font-semibold text-lg mb-4 ">Quick Navigation</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                      activeSection === section.id
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span className="text-lg">{section.icon}</span>
                    <span className="font-medium">{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-card rounded-lg shadow-sm border p-8">
              {activeSection === "terms" && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4  text-primary">Terms of Service</h2>
                    <p className="text-muted-foreground mb-6">
                      Welcome to our wedding and event planning platform. By using our services, you agree to these
                      terms and conditions.
                    </p>
                  </div>

                  <section>
                    <h3 className="text-xl font-semibold mb-3 ">1. Acceptance of Terms</h3>
                    <p className="text-muted-foreground mb-4">
                      By accessing and using this website, you accept and agree to be bound by the terms and provision
                      of this agreement.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold mb-3 ">2. Service Description</h3>
                    <p className="text-muted-foreground mb-4">
                      Our platform connects users with wedding and event service providers including venues,
                      photographers, caterers, decorators, and other wedding professionals.
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Venue booking and management</li>
                      <li>Vendor discovery and communication</li>
                      <li>Event planning tools and resources</li>
                      <li>Review and rating system</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold mb-3 ">3. User Responsibilities</h3>
                    <p className="text-muted-foreground mb-4">Users are responsible for:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Providing accurate and truthful information</li>
                      <li>Maintaining the confidentiality of account credentials</li>
                      <li>Using the platform in accordance with applicable laws</li>
                      <li>Respecting other users and service providers</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold mb-3 ">4. Payment Terms</h3>
                    <p className="text-muted-foreground mb-4">
                      Payment terms vary by service provider. All transactions are subject to the individual vendor's
                      payment policies and our platform fees.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold mb-3 ">5. Limitation of Liability</h3>
                    <p className="text-muted-foreground mb-4">
                      We act as a platform connecting users with service providers. We are not responsible for the
                      quality, delivery, or fulfillment of services provided by third-party vendors.
                    </p>
                  </section>
                </div>
              )}

              {activeSection === "privacy" && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4  text-primary">Privacy Policy</h2>
                    <p className="text-muted-foreground mb-6">
                      We are committed to protecting your privacy and ensuring the security of your personal
                      information.
                    </p>
                  </div>

                  <section>
                    <h3 className="text-xl font-semibold mb-3 ">Information We Collect</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Personal information (name, email, phone number)</li>
                      <li>Event details and preferences</li>
                      <li>Communication with vendors</li>
                      <li>Usage data and analytics</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold mb-3 ">How We Use Your Information</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>To provide and improve our services</li>
                      <li>To connect you with relevant vendors</li>
                      <li>To send important updates and notifications</li>
                      <li>To analyze platform usage and performance</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold mb-3 ">Data Security</h3>
                    <p className="text-muted-foreground mb-4">
                      We implement industry-standard security measures to protect your personal information from
                      unauthorized access, disclosure, or misuse.
                    </p>
                  </section>
                </div>
              )}

              {activeSection === "cookies" && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4  text-primary">Cookie Policy</h2>
                    <p className="text-muted-foreground mb-6">
                      We use cookies to enhance your browsing experience and provide personalized services.
                    </p>
                  </div>

                  <section>
                    <h3 className="text-xl font-semibold mb-3 ">Types of Cookies</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-semibold">Essential Cookies</h4>
                        <p className="text-muted-foreground">Required for basic website functionality</p>
                      </div>
                      <div className="border-l-4 border-secondary pl-4">
                        <h4 className="font-semibold">Analytics Cookies</h4>
                        <p className="text-muted-foreground">Help us understand how users interact with our site</p>
                      </div>
                      <div className="border-l-4 border-accent pl-4">
                        <h4 className="font-semibold">Marketing Cookies</h4>
                        <p className="text-muted-foreground">Used to deliver relevant advertisements</p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold mb-3 ">Managing Cookies</h3>
                    <p className="text-muted-foreground mb-4">
                      You can control cookie settings through your browser preferences. Note that disabling certain
                      cookies may affect website functionality.
                    </p>
                  </section>
                </div>
              )}

              {activeSection === "refund" && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4  text-primary">Refund Policy</h2>
                    <p className="text-muted-foreground mb-6">
                      Our refund policy varies depending on the type of service and the individual vendor's policies.
                    </p>
                  </div>

                  <section>
                    <h3 className="text-xl font-semibold mb-3 ">Platform Fees</h3>
                    <p className="text-muted-foreground mb-4">
                      Platform service fees are generally non-refundable once services have been initiated, except in
                      cases of platform error or technical issues.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold mb-3 ">Vendor Services</h3>
                    <p className="text-muted-foreground mb-4">
                      Refunds for vendor services are subject to individual vendor policies. We recommend reviewing each
                      vendor's cancellation and refund terms before booking.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold mb-3 ">Dispute Resolution</h3>
                    <p className="text-muted-foreground mb-4">
                      In case of disputes, we provide mediation services to help resolve issues between users and
                      vendors. Contact our support team for assistance.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold mb-3 ">Contact Information</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-muted-foreground mb-2">For refund requests or questions:</p>
                      <p className="font-medium">Email: support@weddingplatform.com</p>
                      <p className="font-medium">Phone: +1 (555) 123-4567</p>
                      <p className="font-medium">Response time: 24-48 hours</p>
                    </div>
                  </section>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
