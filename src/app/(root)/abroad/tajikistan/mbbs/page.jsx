import CareerAfterMBBSTajikistan from '@/components/abroad-mbbs/tajikistan/careerAfterMBBSAP'
import ClinicalExposureTajikistan from '@/components/abroad-mbbs/tajikistan/clinicalExposureAP'
import FaqTajikistan from '@/components/abroad-mbbs/tajikistan/faqMbbs'
import TajikistanHero from '@/components/abroad-mbbs/tajikistan/mbbbHero'
import MbbsAdmissionProcessTajikistan from '@/components/abroad-mbbs/tajikistan/mbbsAdmissionProcessAP'
import MbbsDurationStructureTajikistan from '@/components/abroad-mbbs/tajikistan/mbbsDurationStructure'
import MbbsEligibilityTajikistan from '@/components/abroad-mbbs/tajikistan/mbbsEligibilityAP'
import MbbsFeesTajikistan from '@/components/abroad-mbbs/tajikistan/mbbsFeesAP'
import StartMBBSJourneyTajikistan from '@/components/abroad-mbbs/tajikistan/startMBBSJourneyAP'
import TopCityTajikistan from '@/components/abroad-mbbs/tajikistan/topCitiesAP'
import WhyChooseTajikistan from '@/components/abroad-mbbs/tajikistan/whyChooseAP'
import ExploreMoreAbroad from '@/components/abroad-mbbs/vietnam/exploreMoreMBBSIndia'
import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <TajikistanHero/>
      <TopCityTajikistan/>
      <WhyChooseTajikistan/>
      <MbbsDurationStructureTajikistan/>
      <MbbsEligibilityTajikistan/>
      <MbbsAdmissionProcessTajikistan/>
      <MbbsFeesTajikistan/>
      <ClinicalExposureTajikistan/>
      <CareerAfterMBBSTajikistan/>
      <WhyChooseUs/>
      <StartMBBSJourneyTajikistan/>
      <ExploreMoreAbroad/>
      <FaqTajikistan/>
      <Footer/>
    </div>
  )
}

export default page
