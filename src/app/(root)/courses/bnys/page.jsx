import Career from '@/components/courseBnys/career'
import Curriculum from '@/components/courseBnys/curriculum'
import Faq from '@/components/courseBnys/faq'
import Hero from '@/components/courseBnys/hero'
import Journey from '@/components/courseBnys/journey'
import OverView from '@/components/courseBnys/overView'
import RightChoice from '@/components/courseBnys/rightChoice'
import Support from '@/components/courseBnys/support'
import WhatIsBnys from '@/components/courseBnys/whatIsBnys'
import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <WhatIsBnys/>
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
