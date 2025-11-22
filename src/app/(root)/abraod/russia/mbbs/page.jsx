import CareerAfterMBBSRussia from '@/components/abroad-mbbs/russia/careerAfterMBBSAP'
import ClinicalExposureRussia from '@/components/abroad-mbbs/russia/clinicalExposureAP'
import ExploreMoreAbroad from '@/components/abroad-mbbs/russia/exploreMoreMBBSIndia'
import FaqRussia from '@/components/abroad-mbbs/russia/faqMbbs'
import RussiaHero from '@/components/abroad-mbbs/russia/mbbbHero'
import MbbsAdmissionProcessRussia from '@/components/abroad-mbbs/russia/mbbsAdmissionProcessAP'
import MbbsDurationStructureRussia from '@/components/abroad-mbbs/russia/mbbsDurationStructure'
import MbbsEligibilityRussia from '@/components/abroad-mbbs/russia/mbbsEligibilityAP'
import MbbsFeesRussia from '@/components/abroad-mbbs/russia/mbbsFeesAP'
import StartMBBSJourneyRussia from '@/components/abroad-mbbs/russia/startMBBSJourneyAP'
import TopCityRussia from '@/components/abroad-mbbs/russia/topCitiesAP'
import WhyChooseRussia from '@/components/abroad-mbbs/russia/whyChooseAP'
import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <RussiaHero/>
      <TopCityRussia/>
      <WhyChooseRussia/>
      <MbbsDurationStructureRussia/>
      <MbbsEligibilityRussia/>
      <MbbsAdmissionProcessRussia/>
      <MbbsFeesRussia/>
      <ClinicalExposureRussia/>
      <CareerAfterMBBSRussia/>
      <WhyChooseUs/>
      <StartMBBSJourneyRussia/>
      <ExploreMoreAbroad/>
      <FaqRussia/>
      <Footer/>
    </div>
  )
}

export default page
