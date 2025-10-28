import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import Faq from '@/components/medical-tourism/faq'
import Hero from '@/components/medical-tourism/hero'
import Journey from '@/components/medical-tourism/journey'
import ServicesOfferings from '@/components/medical-tourism/university'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <ServicesOfferings/>
      <Faq/>
      <Journey/>
      <Footer/>
    </div>
  )
}

export default page
