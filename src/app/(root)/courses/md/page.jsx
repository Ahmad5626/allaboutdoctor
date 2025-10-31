import Career from '@/components/md/career'
import Curriculum from '@/components/md/curriculum'
import Faq from '@/components/md/faq'
import Hero from '@/components/md/hero'
import Journey from '@/components/md/journey'
import OverView from '@/components/md/overView'
import RightChoice from '@/components/md/rightChoice'
import Support from '@/components/md/support'
import WhatIsMd from '@/components/md/whatIsMd'
import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import React from 'react'
import PopularMdSpecializations from '@/components/md/popularMdSpecializations'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <WhatIsMd/>
      <PopularMdSpecializations/>
     
      <Career/>
      <Support/>
      <RightChoice/>
      <WhyChooseUs/>
      <Faq/>
      <Journey/>
      <Footer/>
    </div>
  )
}

export default page
