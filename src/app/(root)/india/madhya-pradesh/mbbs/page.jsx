import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import CareerAfterMBBSMadhyaPradesh from '@/components/mbbs/madhya-pradesh/careerAfterMBBSAP'
import ClinicalExposureMadhyaPradesh from '@/components/mbbs/madhya-pradesh/clinicalExposureAP'
import ExploreMoreIndia from '@/components/mbbs/madhya-pradesh/exploreMoreMBBSIndia'
import FaqMadhyaPradesh from '@/components/mbbs/madhya-pradesh/faqMbbs'
import MadhyaPradeshHero from '@/components/mbbs/madhya-pradesh/mbbbHero'
import MbbsAdmissionProcessMadhyaPradesh from '@/components/mbbs/madhya-pradesh/mbbsAdmissionProcessAP'
import MbbsDurationStructureMadhyaPradesh from '@/components/mbbs/madhya-pradesh/mbbsDurationStructure'
import MbbsEligibilityMadhyaPradesh from '@/components/mbbs/madhya-pradesh/mbbsEligibilityAP'
import MbbsFeesMadhyaPradesh from '@/components/mbbs/madhya-pradesh/mbbsFeesAP'
import StartMBBSJourneyMadhyaPradesh from '@/components/mbbs/madhya-pradesh/startMBBSJourneyAP'
import TopCityMadhyaPradesh from '@/components/mbbs/madhya-pradesh/topCitiesAP'
import WhyChooseMadhyaPradesh from '@/components/mbbs/madhya-pradesh/whyChooseAP'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <MadhyaPradeshHero/>
      <TopCityMadhyaPradesh/>
      <WhyChooseMadhyaPradesh/>
      <MbbsDurationStructureMadhyaPradesh/>
      <MbbsEligibilityMadhyaPradesh/>
      <MbbsAdmissionProcessMadhyaPradesh/>
      <MbbsFeesMadhyaPradesh/>
      <ClinicalExposureMadhyaPradesh/>
      <CareerAfterMBBSMadhyaPradesh/>
      <WhyChooseUs/>
      <StartMBBSJourneyMadhyaPradesh/>
      <ExploreMoreIndia/>
      <FaqMadhyaPradesh/>
      <Footer/>
    </div>
  )
}

export default page
