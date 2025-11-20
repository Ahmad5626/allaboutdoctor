import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import CareerAfterMBBSMizoram from '@/components/mbbs/mizoram/careerAfterMBBSAP'
import ClinicalExposureMizoram from '@/components/mbbs/mizoram/clinicalExposureAP'
import ExploreMoreIndia from '@/components/mbbs/mizoram/exploreMoreMBBSIndia'
import FaqMizoram from '@/components/mbbs/mizoram/faqMbbs'
import MizoramHero from '@/components/mbbs/mizoram/mbbbHero'
import MbbsAdmissionProcessMizoram from '@/components/mbbs/mizoram/mbbsAdmissionProcessAP'
import MbbsDurationStructureMizoram from '@/components/mbbs/mizoram/mbbsDurationStructure'
import MbbsEligibilityMizoram from '@/components/mbbs/mizoram/mbbsEligibilityAP'
import MbbsFeesMizoram from '@/components/mbbs/mizoram/mbbsFeesAP'
import StartMBBSJourneyMizoram from '@/components/mbbs/mizoram/startMBBSJourneyAP'
import WhyChooseMizoram from '@/components/mbbs/mizoram/whyChooseAP'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <MizoramHero/>
      <WhyChooseMizoram/>
      <MbbsDurationStructureMizoram/>
      <MbbsEligibilityMizoram/>
      <MbbsAdmissionProcessMizoram/>
      <MbbsFeesMizoram/>
      <ClinicalExposureMizoram/>
      <CareerAfterMBBSMizoram/>
      <WhyChooseUs/>
      <StartMBBSJourneyMizoram/>
      <ExploreMoreIndia/>
      <FaqMizoram/>
      <Footer/>
    </div>
  )
}

export default page
