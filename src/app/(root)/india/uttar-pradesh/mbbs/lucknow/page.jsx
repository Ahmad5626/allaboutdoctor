import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import CareerAfterMBBSLucknow from '@/components/mbbs/uttar-pradesh/lucknow/careerAfterMBBSAP'
import ClinicalExposureLucknow from '@/components/mbbs/uttar-pradesh/lucknow/clinicalExposureAP'
import ExploreMoreUP from '@/components/mbbs/uttar-pradesh/lucknow/exploreMoreMBBSIndia'
import LucknowHero from '@/components/mbbs/uttar-pradesh/lucknow/mbbbHero'
import MbbsAdmissionProcessLucknow from '@/components/mbbs/uttar-pradesh/lucknow/mbbsAdmissionProcessAP'
import MbbsDurationStructureLucknow from '@/components/mbbs/uttar-pradesh/lucknow/mbbsDurationStructure'
import MbbsEligibilityLucknow from '@/components/mbbs/uttar-pradesh/lucknow/mbbsEligibilityAP'
import StartMBBSJourneyLucknow from '@/components/mbbs/uttar-pradesh/lucknow/startMBBSJourneyAP'
import TopMedicalCollegesLucknow from '@/components/mbbs/uttar-pradesh/lucknow/topCitiesAP'
import WhyChooseLucknow from '@/components/mbbs/uttar-pradesh/lucknow/whyChooseAP'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'

const page = () => {
  return (
    <div>
    <Navbar/>
    <LucknowHero/>
    <TopMedicalCollegesLucknow/>
     <WhyChooseLucknow />
      <MbbsDurationStructureLucknow />
      <MbbsEligibilityLucknow />
      <MbbsAdmissionProcessLucknow />
      <ClinicalExposureLucknow />
      <CareerAfterMBBSLucknow />
      <WhyChooseUs   />
      <ExploreMoreUP />
      <StartMBBSJourneyLucknow />
    <Footer/>
      
    </div>
  )
}

export default page
