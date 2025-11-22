import CareerAfterMBBSSerbia from '@/components/abroad-mbbs/serbia/careerAfterMBBSAP'
import ClinicalExposureSerbia from '@/components/abroad-mbbs/serbia/clinicalExposureAP'
import ExploreMoreAbroad from '@/components/abroad-mbbs/serbia/exploreMoreMBBSIndia'
import FaqSerbia from '@/components/abroad-mbbs/serbia/faqMbbs'
import SerbiaHero from '@/components/abroad-mbbs/serbia/mbbbHero'
import MbbsAdmissionProcessSerbia from '@/components/abroad-mbbs/serbia/mbbsAdmissionProcessAP'
import MbbsDurationStructureSerbia from '@/components/abroad-mbbs/serbia/mbbsDurationStructure'
import MbbsEligibilitySerbia from '@/components/abroad-mbbs/serbia/mbbsEligibilityAP'
import MbbsFeesSerbia from '@/components/abroad-mbbs/serbia/mbbsFeesAP'
import StartMBBSJourneySerbia from '@/components/abroad-mbbs/serbia/startMBBSJourneyAP'
import TopCitySerbia from '@/components/abroad-mbbs/serbia/topCitiesAP'
import WhyChooseSerbia from '@/components/abroad-mbbs/serbia/whyChooseAP'
import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <SerbiaHero/>
      <TopCitySerbia/>
      <WhyChooseSerbia/>
      <MbbsDurationStructureSerbia/>
      <MbbsEligibilitySerbia/>
      <MbbsAdmissionProcessSerbia/>
      <MbbsFeesSerbia/>
      <ClinicalExposureSerbia/>
      <CareerAfterMBBSSerbia/>
      <WhyChooseUs/>
      <StartMBBSJourneySerbia/>
      <ExploreMoreAbroad/>
      <FaqSerbia/>
      <Footer/>
    </div>
  )
}

export default page
