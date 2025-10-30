import Career from '@/components/courseBums/career'
import Curriculum from '@/components/courseBums/curriculum'
import Faq from '@/components/courseBums/faq'
import Hero from '@/components/courseBums/hero'
import Journey from '@/components/courseBums/journey'
import OverView from '@/components/courseBums/overView'
import RightChoice from '@/components/courseBums/rightChoice'
import Support from '@/components/courseBums/support'
import WhatIsBums from '@/components/courseBums/whatIsBums'
import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <WhatIsBums/>
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
