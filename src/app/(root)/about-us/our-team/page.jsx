import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import AdvisoryBoard from '@/components/our-team/advisoryBoard'

import ExpertDoctorPanel from '@/components/our-team/expertDoctorPanel'
import Hero from '@/components/our-team/hero'
import Management from '@/components/our-team/management'

import Team from '@/components/our-team/team'
import UnitedForSuccess from '@/components/our-team/unitedForSuccess'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <ExpertDoctorPanel/>
      <Team/>
      <AdvisoryBoard/>
      <Management/>
      <UnitedForSuccess/>
      <Footer/>
    </div>
  )
}

export default page
