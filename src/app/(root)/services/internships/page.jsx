import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import Faq from '@/components/internships/faq'
import Hero from '@/components/internships/hero'
import Journey from '@/components/internships/journey'
import ServicesOfferings from '@/components/internships/university'
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
