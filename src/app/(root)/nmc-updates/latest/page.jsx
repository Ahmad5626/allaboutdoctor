import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import NmcLatestNews from '@/components/nmc-updates/latest/letestHero'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <NmcLatestNews/>
      <Footer/>
    </div>
  )
}

export default page
