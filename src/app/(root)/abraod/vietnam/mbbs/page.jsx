import CareerAfterMBBSVietnam from '@/components/abroad-mbbs/vietnam/careerAfterMBBSAP'
import ClinicalExposureVietnam from '@/components/abroad-mbbs/vietnam/clinicalExposureAP'
import ExploreMoreAbroad from '@/components/abroad-mbbs/vietnam/exploreMoreMBBSIndia'
import FaqVietnam from '@/components/abroad-mbbs/vietnam/faqMbbs'
import VietnamHero from '@/components/abroad-mbbs/vietnam/mbbbHero'
import MbbsAdmissionProcessVietnam from '@/components/abroad-mbbs/vietnam/mbbsAdmissionProcessAP'
import MbbsDurationStructureVietnam from '@/components/abroad-mbbs/vietnam/mbbsDurationStructure'
import MbbsEligibilityVietnam from '@/components/abroad-mbbs/vietnam/mbbsEligibilityAP'
import MbbsFeesVietnam from '@/components/abroad-mbbs/vietnam/mbbsFeesAP'
import StartMBBSJourneyVietnam from '@/components/abroad-mbbs/vietnam/startMBBSJourneyAP'
import TopCityVietnam from '@/components/abroad-mbbs/vietnam/topCitiesAP'
import WhyChooseVietnam from '@/components/abroad-mbbs/vietnam/whyChooseAP'
import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <VietnamHero/>
      <TopCityVietnam/>
      <WhyChooseVietnam/>
      <MbbsDurationStructureVietnam/>
      <MbbsEligibilityVietnam/>
      <MbbsAdmissionProcessVietnam/>
      <MbbsFeesVietnam/>
      <ClinicalExposureVietnam/>
      <CareerAfterMBBSVietnam/>
      <WhyChooseUs/>
      <StartMBBSJourneyVietnam/>
      <ExploreMoreAbroad/>
      <FaqVietnam/>
      <Footer/>
    </div>
  )
}

export default page
