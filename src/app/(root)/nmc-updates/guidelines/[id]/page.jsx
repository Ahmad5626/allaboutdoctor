import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import GuidelinesDetails from '@/components/nmc-updates/guidelines/guidelinesDetails'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <GuidelinesDetails/>
      <Footer/>
    </div>
  )
}

export default page
