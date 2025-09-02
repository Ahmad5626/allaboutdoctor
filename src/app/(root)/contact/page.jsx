"use client"

import { useState } from "react"
import { Phone, MapPin, Mail, Send } from "lucide-react"
import Navbar from "@/components/Hedaer"
import Footer from "@/components/Footer"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"

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

         <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-12">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
    <Footer/>
   </>
  )
}
