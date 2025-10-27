import Hero from '@/components/admissions/hero'
import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
// import { University } from 'lucide-react'
import University from '@/components/admissions/university'
import StepByStep from '@/components/admissions/stepByStep'
import Benefit from '@/components/admissions/benefit'
import React from 'react'
import Related from '@/components/admissions/related'
import Faq from '@/components/admissions/faq'
import Journey from '@/components/admissions/journey'

const page = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <University/>
    <StepByStep/>
    <Benefit/>
    <Related/>
    <Faq/>
    <Journey/>
    <Footer/  >
      
    </div>
  )
}

export default page
