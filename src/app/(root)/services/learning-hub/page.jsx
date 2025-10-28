import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import Faq from '@/components/learning-hub/faq'
import Hero from '@/components/learning-hub/hero'
import Journey from '@/components/learning-hub/journey'
import ServicesOfferings from '@/components/learning-hub/university'
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
