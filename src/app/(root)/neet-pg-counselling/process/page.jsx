import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import AdditionalCounsellingRounds from '@/components/neet-pg/process/additionalCounsellingRounds'
import CounsellingProcedure from '@/components/neet-pg/process/counsellingProcedure'
import ExpertHelpCounselling from '@/components/neet-pg/process/expertHelpCounselling'
import KeyHighlightsOfCounselling from '@/components/neet-pg/process/keyHighlightsOfCounselling'
import ProcessHero from '@/components/neet-pg/process/processHero'


import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <ProcessHero/>
      <CounsellingProcedure/>
      <AdditionalCounsellingRounds/>
      <KeyHighlightsOfCounselling/>
      <ExpertHelpCounselling/>
      <Footer/>
    </div>
  )
}

export default page
