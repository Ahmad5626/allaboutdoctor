import CareerAfterMBBSGeorgia from '@/components/abroad-mbbs/georgia/careerAfterMBBSAP'
import ClinicalExposureGeorgia from '@/components/abroad-mbbs/georgia/clinicalExposureAP'
import ExploreMoreAbroad from '@/components/abroad-mbbs/georgia/exploreMoreMBBSIndia'
import FaqGeorgia from '@/components/abroad-mbbs/georgia/faqMbbs'
import GeorgiaHero from '@/components/abroad-mbbs/georgia/mbbbHero'
import MbbsAdmissionProcessGeorgia from '@/components/abroad-mbbs/georgia/mbbsAdmissionProcessAP'
import MbbsDurationStructureGeorgia from '@/components/abroad-mbbs/georgia/mbbsDurationStructure'
import MbbsEligibilityGeorgia from '@/components/abroad-mbbs/georgia/mbbsEligibilityAP'
import MbbsFeesGeorgia from '@/components/abroad-mbbs/georgia/mbbsFeesAP'
import StartMBBSJourneyGeorgia from '@/components/abroad-mbbs/georgia/startMBBSJourneyAP'
import TopCityGeorgia from '@/components/abroad-mbbs/georgia/topCitiesAP'
import WhyChooseGeorgia from '@/components/abroad-mbbs/georgia/whyChooseAP'
import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <GeorgiaHero/>
      <TopCityGeorgia/>
      <WhyChooseGeorgia/>
      <MbbsDurationStructureGeorgia/>
      <MbbsEligibilityGeorgia/>
      <MbbsAdmissionProcessGeorgia/>
      <MbbsFeesGeorgia/>
      <ClinicalExposureGeorgia/>
      <CareerAfterMBBSGeorgia/>
      <WhyChooseUs/>
      <StartMBBSJourneyGeorgia/>
      <ExploreMoreAbroad/>
      <FaqGeorgia/>
      <Footer/>
    </div>
  )
}

export default page
