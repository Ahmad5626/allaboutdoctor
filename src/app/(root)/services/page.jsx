"use client"

import ServicesHero from "@/components/services/services-hero"
import ServicesOfferings from "@/components/services/services-offerings"
// import ServicesWhyChoose from "@/components/services/services-why-choose"
import ServicesCTA from "@/components/services/services-cta"
import Navbar from "@/components/Hedaer"
import WhyChooseUs from "@/components/mbbs/why-choose-us"
import Footer from "@/components/Footer"

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
    <Navbar/>
      <ServicesHero />
      <ServicesOfferings />
      <WhyChooseUs />
      {/* <ServicesWhyChoose /> */}
      <ServicesCTA />
      <Footer/>
    </main>
  )
}
