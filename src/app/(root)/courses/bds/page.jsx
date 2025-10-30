import Career from '@/components/courseBds/career'
import Curriculum from '@/components/courseBds/curriculum'
import Faq from '@/components/courseBds/faq'
import Hero from '@/components/courseBds/hero'
import Journey from '@/components/courseBds/journey'
import OverView from '@/components/courseBds/overView'
import RightChoice from '@/components/courseBds/rightChoice'
import Support from '@/components/courseBds/support'
import WhatIsBds from '@/components/courseBds/whatIsBds'
import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <WhatIsBds/>
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
