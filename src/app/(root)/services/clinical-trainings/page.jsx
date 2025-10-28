import Faq from '@/components/clinical-trainings/faq'
import Hero from '@/components/clinical-trainings/hero'
import Journey from '@/components/clinical-trainings/journey'
import ServicesOfferings from '@/components/clinical-trainings/university'
import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
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
