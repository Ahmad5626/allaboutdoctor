import Hero from "@/components/about/hero"
import Overview from "@/components/about/overview"
import Services from "@/components/about/services"
import Team from "@/components/about/team"
import Management from "@/components/about/management"
import Partners from "@/components/about/partners"
import Footer from "@/components/Footer"
import Header from "@/components/Hedaer"
import WhatWeDo from "@/components/about/whatWeDo"
import WhyTrustUs from "@/components/about/whyTrustUs"
import Journey from "@/components/about/journey"
import FoundersMessage from "@/components/about/foundersMessage"

export default function AboutAllAboutDoctorPage() {
  return (
    <main className="min-h-dvh">
    <Header/>
      <Hero />
      <Overview />
      <Services />
      <WhatWeDo/>
      <WhyTrustUs/>
    
      <Partners />
      <FoundersMessage/>
     <Journey/>
      <Footer/>
    </main>
  )
}
