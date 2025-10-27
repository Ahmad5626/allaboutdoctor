import React from 'react'
import CounsellingServices from '@/components/counselling/counsellingServices'
import Hero from '@/components/counselling/hero'
import Navbar from '@/components/Hedaer'
import Footer from '@/components/Footer'
const page = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <CounsellingServices/>
    <Footer/>
    </div>
  )
}

export default page
