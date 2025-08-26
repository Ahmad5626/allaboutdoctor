"use client"

import { useState } from "react"
import { Phone, MapPin, Mail, Send } from "lucide-react"
import Navbar from "@/components/Hedaer"
import Footer from "@/components/Footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission logic here
  }

  return (
   <>
   <Navbar fixed={true} />
     <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="bg-[#4b5563] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-white">
            <nav className="text-sm mb-4">
              <span className="opacity-75">Home</span>
              <span className="mx-2">{">"}</span>
              <span>Contact</span>
            </nav>
            <h1 className="text-4xl font-bold font-sans">Contact</h1>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Phone Card */}
            <div className="bg-card rounded-lg p-8 shadow-sm border border-border text-center">
              <div className="w-12 h-12 bg-[#0891b2] rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <p className="text-card-foreground font-medium">+91-111-2222-333</p>
            </div>

            {/* Address Card */}
            <div className="bg-card rounded-lg p-8 shadow-sm border border-border text-center">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <p className="text-card-foreground font-medium">400 Young Road, New York, USA</p>
            </div>

            {/* Email Card */}
            <div className="bg-card rounded-lg p-8 shadow-sm border border-border text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <p className="text-card-foreground font-medium">build@example.com</p>
            </div>
          </div>

          {/* Contact Form and Map Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter Your Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-foreground placeholder-muted-foreground"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-foreground placeholder-muted-foreground"
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Enter Email Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-foreground placeholder-muted-foreground"
                    required
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Write Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-foreground placeholder-muted-foreground resize-none"
                    required
                  />
                </div>

                {/* reCAPTCHA Placeholder */}
                <div className="bg-muted border border-border rounded-md p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 border-2 border-gray-400 rounded"></div>
                    <span className="text-sm text-muted-foreground">I'm not a robot</span>
                    <div className="ml-auto">
                      <div className="text-xs text-muted-foreground">reCAPTCHA</div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-3 rounded-md font-medium transition-colors duration-200 flex items-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send</span>
                </button>
              </form>
            </div>

            {/* Map Section */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm border border-border">
              <div className="w-full h-full min-h-[500px] bg-muted flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1635959872076!5m2!1sen!2s"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
   </>
  )
}
