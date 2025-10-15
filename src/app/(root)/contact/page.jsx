import Hero from "@/components/contact/hero"

import Header from "@/components/Hedaer"
import Footer from "@/components/Footer"
import ContactSection from "@/components/contact/get-in-touch"
import Branches from "@/components/contact/branch"
import UpcomingBranches from "@/components/contact/upcomingBranches"

export default function Page() {
  return (
    <>
    <Header />
    <main className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8 py-10 md:py-14">
 
      <Hero />
      <ContactSection />
      <Branches /> 
      <UpcomingBranches />  
    </main>
    <Footer/>
    </>
  )
}
