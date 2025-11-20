import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import CareerAfterMBBSTamilNadu from '@/components/mbbs/tamil-nadu/careerAfterMBBSAP'
import ClinicalExposureTamilNadu from '@/components/mbbs/tamil-nadu/clinicalExposureAP'
import ExploreMoreIndia from '@/components/mbbs/tamil-nadu/exploreMoreMBBSIndia'
import FaqTamilNadu from '@/components/mbbs/tamil-nadu/faqMbbs'
import TamilNaduHero from '@/components/mbbs/tamil-nadu/mbbbHero'
import MbbsAdmissionProcessTamilNadu from '@/components/mbbs/tamil-nadu/mbbsAdmissionProcessAP'
import MbbsDurationStructureTamilNadu from '@/components/mbbs/tamil-nadu/mbbsDurationStructure'
import MbbsEligibilityTamilNadu from '@/components/mbbs/tamil-nadu/mbbsEligibilityAP'
import MbbsFeesTamilNadu from '@/components/mbbs/tamil-nadu/mbbsFeesAP'
import StartMBBSJourneyTamilNadu from '@/components/mbbs/tamil-nadu/startMBBSJourneyAP'
import TopCityTamilNadu from '@/components/mbbs/tamil-nadu/topCitiesAP'
import WhyChooseTamilNadu from '@/components/mbbs/tamil-nadu/whyChooseAP'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <TamilNaduHero/>
      <TopCityTamilNadu/>
      <WhyChooseTamilNadu/>
      <MbbsDurationStructureTamilNadu/>
      <MbbsEligibilityTamilNadu/>
      <MbbsAdmissionProcessTamilNadu/>
      <MbbsFeesTamilNadu/>
      <ClinicalExposureTamilNadu/>
      <CareerAfterMBBSTamilNadu/>
      <WhyChooseUs/>
      <StartMBBSJourneyTamilNadu/>
      <ExploreMoreIndia/>
      <FaqTamilNadu/>
      <Footer/>
    </div>
  )
}

export default page
