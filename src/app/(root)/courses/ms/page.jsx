import Career from '@/components/ms/career'
import Curriculum from '@/components/ms/curriculum'
import Faq from '@/components/ms/faq'
import Hero from '@/components/ms/hero'
import Journey from '@/components/ms/journey'
import OverView from '@/components/ms/overView'
import RightChoice from '@/components/ms/rightChoice'
import Support from '@/components/ms/support'
import WhatIsMs from '@/components/ms/whatIsMs'
import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import React from 'react'
import PopularMdSpecializations from '@/components/ms/popularMdSpecializations'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <WhatIsMs/>
      <PopularMdSpecializations/>
     
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
