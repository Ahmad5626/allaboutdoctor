import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import NMCUpdatesHero from '@/components/nmc-updates/nmcHero'
import NmcUpdatesNavigation from '@/components/nmc-updates/nmcUpdatesNavigation'
import WhyTrustAllAboutDoctor from '@/components/nmc-updates/whyTrustAllAboutDoctor'

import React from 'react'

const page = () => {
  return (
    <div>
    <Navbar/>
    <NMCUpdatesHero/>
    <NmcUpdatesNavigation/>
    <WhyTrustAllAboutDoctor/>
    <Footer/>
      
    </div>
  )
}

export default page
