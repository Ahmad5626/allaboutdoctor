import Branches from '@/components/contact/branch'
import UpcomingBranches from '@/components/contact/upcomingBranches'
import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import Hero from '@/components/our-branches/hero'
import WhyVisitBranches from '@/components/our-branches/whyVisitBranches'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Branches/>
      <UpcomingBranches/>
      <WhyVisitBranches/>
      <Footer/>
    </div>
  )
}

export default page
