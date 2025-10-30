import Career from '@/components/courseBams/career'
import Curriculum from '@/components/courseBams/curriculum'
import Faq from '@/components/courseBams/faq'
import Hero from '@/components/courseBams/hero'
import Journey from '@/components/courseBams/journey'
import OverView from '@/components/courseBams/overView'
import RightChoice from '@/components/courseBams/rightChoice'
import Support from '@/components/courseBams/support'
import WhatIsBams from '@/components/courseBams/whatIsBams'
import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <WhatIsBams/>
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
