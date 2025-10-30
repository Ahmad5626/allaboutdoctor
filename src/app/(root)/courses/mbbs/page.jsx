"use client"

import { useState } from "react"
import { ChevronDown, CheckCircle, Phone, MapPin, Globe } from "lucide-react"
import Navbar from "@/components/Hedaer"
import Hero from "@/components/courseMbbs/hero"
import WhatIsMbbs from "@/components/courseMbbs/whatIsMbbs"
import OverView from "@/components/courseMbbs/overView"
import Curriculum from "@/components/courseMbbs/curriculum"
import Career from "@/components/courseMbbs/career"
import Choose from "@/components/courseMbbs/choose"
import Support from "@/components/courseMbbs/support"
import RightChoice from "@/components/courseMbbs/rightChoice"
import WhyChooseUs from "@/components/mbbs/why-choose-us"
import Faq from "@/components/courseMbbs/faq"
import Journey from "@/components/courseMbbs/journey"
import Footer from "@/components/Footer"

export default function MBBSPage() {
  const [expandedFAQ, setExpandedFAQ] = useState(null)

 
  const strengths = [
    "850+ NMC-approved partner medical colleges",
    "Doctor-led counselling and mentorship",
    "NEET guidance & complete admission support",
    "Transparent, ethical, and result-driven process",
    "95% admission success rate",
  ]






  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <Navbar />
      <Hero />
      <WhatIsMbbs />
      <OverView />
      <Curriculum />
      <Career />
      <Choose />
      <Support />
      <RightChoice/>
      <WhyChooseUs/>
      <Faq/>
      <Journey/>
      <Footer/>


    </main>
  )
}
