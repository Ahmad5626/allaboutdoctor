import Career from '@/components/courseBhms/career'
import Curriculum from '@/components/courseBhms/curriculum'
import Faq from '@/components/courseBhms/faq'
import Hero from '@/components/courseBhms/hero'
import Journey from '@/components/courseBhms/journey'
import OverView from '@/components/courseBhms/overView'
import RightChoice from '@/components/courseBhms/rightChoice'
import Support from '@/components/courseBhms/support'
import WhatIsBhms from '@/components/courseBhms/whatIsBhms'
import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <WhatIsBhms/>
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
