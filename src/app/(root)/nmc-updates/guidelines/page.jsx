import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import Guideline from '@/components/nmc-updates/guidelines/guideline'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Guideline/>
      <Footer/>
    </div>
  )
}

export default page
