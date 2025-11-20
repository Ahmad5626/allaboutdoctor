import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import CareerAfterMBBSPuducherry from '@/components/mbbs/puducherry/careerAfterMBBSAP'
import ClinicalExposurePuducherry from '@/components/mbbs/puducherry/clinicalExposureAP'
import ExploreMoreIndia from '@/components/mbbs/puducherry/exploreMoreMBBSIndia'
import FaqPuducherry from '@/components/mbbs/puducherry/faqMbbs'
import PuducherryHero from '@/components/mbbs/puducherry/mbbbHero'
import MbbsAdmissionProcessPuducherry from '@/components/mbbs/puducherry/mbbsAdmissionProcessAP'
import MbbsDurationStructurePuducherry from '@/components/mbbs/puducherry/mbbsDurationStructure'
import MbbsEligibilityPuducherry from '@/components/mbbs/puducherry/mbbsEligibilityAP'
import MbbsFeesPuducherry from '@/components/mbbs/puducherry/mbbsFeesAP'
import StartMBBSJourneyPuducherry from '@/components/mbbs/puducherry/startMBBSJourneyAP'
import TopCityPuducherry from '@/components/mbbs/puducherry/topCitiesAP'
import WhyChoosePuducherry from '@/components/mbbs/puducherry/whyChooseAP'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <PuducherryHero/>
      <TopCityPuducherry/>
      <WhyChoosePuducherry/>
      <MbbsDurationStructurePuducherry/>
      <MbbsEligibilityPuducherry/>
      <MbbsAdmissionProcessPuducherry/>
      <MbbsFeesPuducherry/>
      <ClinicalExposurePuducherry/>
      <CareerAfterMBBSPuducherry/>
      <WhyChooseUs/>
      <StartMBBSJourneyPuducherry/>
      <ExploreMoreIndia/>
      <FaqPuducherry/>
      <Footer/>
    </div>
  )
}

export default page
