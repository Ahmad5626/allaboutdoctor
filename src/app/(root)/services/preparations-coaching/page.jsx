import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import Faq from '@/components/preparations-coaching/faq'
import Hero from '@/components/preparations-coaching/hero'
import Journey from '@/components/preparations-coaching/journey'
import ServicesOfferings from '@/components/preparations-coaching/university'
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
