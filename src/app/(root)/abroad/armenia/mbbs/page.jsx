import CareerAfterMBBSArmenia from '@/components/abroad-mbbs/armenia/careerAfterMBBSAP'
import ClinicalExposureArmenia from '@/components/abroad-mbbs/armenia/clinicalExposureAP'
import ExploreMoreArmenia from '@/components/abroad-mbbs/armenia/exploreMoreMBBSIndia'
import FaqArmenia from '@/components/abroad-mbbs/armenia/faqMbbs'
import ArmeniaHero from '@/components/abroad-mbbs/armenia/mbbbHero'
import MbbsAdmissionProcessArmenia from '@/components/abroad-mbbs/armenia/mbbsAdmissionProcessAP'
import MbbsDurationStructureArmenia from '@/components/abroad-mbbs/armenia/mbbsDurationStructure'
import MbbsEligibilityArmenia from '@/components/abroad-mbbs/armenia/mbbsEligibilityAP'
import MbbsFeesArmenia from '@/components/abroad-mbbs/armenia/mbbsFeesAP'
import StartMBBSJourneyArmenia from '@/components/abroad-mbbs/armenia/startMBBSJourneyAP'
import TopCityArmenia from '@/components/abroad-mbbs/armenia/topCitiesAP'
import WhyChooseArmenia from '@/components/abroad-mbbs/armenia/whyChooseAP'
import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <ArmeniaHero/>
      <TopCityArmenia/>
      <WhyChooseArmenia/>
      <MbbsDurationStructureArmenia/>
      <MbbsEligibilityArmenia/>
      <MbbsAdmissionProcessArmenia/>
      <MbbsFeesArmenia/>
      <ClinicalExposureArmenia/>
      <CareerAfterMBBSArmenia/>
      <WhyChooseUs/>
      <StartMBBSJourneyArmenia/>
<ExploreMoreArmenia/>
<FaqArmenia/>
<Footer/>
    </div>
  )
}

export default page
