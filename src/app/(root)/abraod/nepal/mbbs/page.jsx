import CareerAfterMBBSNepal from '@/components/abroad-mbbs/nepal/careerAfterMBBSAP'
import ClinicalExposureNepal from '@/components/abroad-mbbs/nepal/clinicalExposureAP'
import ExploreMoreAbroad from '@/components/abroad-mbbs/nepal/exploreMoreMBBSIndia'
import FaqNepal from '@/components/abroad-mbbs/nepal/faqMbbs'
import NepalHero from '@/components/abroad-mbbs/nepal/mbbbHero'
import MbbsAdmissionProcessNepal from '@/components/abroad-mbbs/nepal/mbbsDurationStructure'
import MbbsEligibilityNepal from '@/components/abroad-mbbs/nepal/mbbsEligibilityAP'
import MbbsFeesNepal from '@/components/abroad-mbbs/nepal/mbbsFeesAP'
import StartMBBSJourneyNepal from '@/components/abroad-mbbs/nepal/startMBBSJourneyAP'
import TopCityNepal from '@/components/abroad-mbbs/nepal/topCitiesAP'
import WhyChooseNepal from '@/components/abroad-mbbs/nepal/whyChooseAP'
import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <NepalHero/>
      <TopCityNepal/>
      <WhyChooseNepal/>
      <MbbsEligibilityNepal/>
      <MbbsAdmissionProcessNepal/>
      <MbbsFeesNepal/>
      <ClinicalExposureNepal/>
      <CareerAfterMBBSNepal/>
      <WhyChooseUs/>
      <StartMBBSJourneyNepal/>
      <ExploreMoreAbroad/>
      <FaqNepal/>
      <Footer/>
    </div>
  )
}

export default page
