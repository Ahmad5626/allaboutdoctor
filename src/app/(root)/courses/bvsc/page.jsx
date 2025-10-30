import Career from '@/components/courseBvsc/career'
import Curriculum from '@/components/courseBvsc/curriculum'
import Faq from '@/components/courseBvsc/faq'
import Hero from '@/components/courseBvsc/hero'
import Journey from '@/components/courseBvsc/journey'
import OverView from '@/components/courseBvsc/overView'
import RightChoice from '@/components/courseBvsc/rightChoice'
import Support from '@/components/courseBvsc/support'
import WhatIsBvsc from '@/components/courseBvsc/whatIsBvsc'
import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <WhatIsBvsc/>
      <OverView/>
      <Curriculum/>
      <Career/>
      <Support/>
      <RightChoice/>
      <Faq/>
      <Journey/>
      <Footer/>
    </div>
  )
}

export default page
