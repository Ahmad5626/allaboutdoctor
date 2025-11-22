import ClinicalExposureUzbekistan from '@/components/abroad-mbbs/uzbekistan/clinicalExposureAP'
import ExploreMoreAbroad from '@/components/abroad-mbbs/uzbekistan/exploreMoreMBBSIndia'
import UzbekistanHero from '@/components/abroad-mbbs/uzbekistan/mbbbHero'
import MbbsAdmissionProcessUzbekistan from '@/components/abroad-mbbs/uzbekistan/mbbsAdmissionProcessAP'
import MbbsDurationStructureUzbekistan from '@/components/abroad-mbbs/uzbekistan/mbbsDurationStructure'
import MbbsEligibilityUzbekistan from '@/components/abroad-mbbs/uzbekistan/mbbsEligibilityAP'
import MbbsFeesUzbekistan from '@/components/abroad-mbbs/uzbekistan/mbbsFeesAP'
import StartMBBSJourneyUzbekistan from '@/components/abroad-mbbs/uzbekistan/startMBBSJourneyAP'
import TopCityUzbekistan from '@/components/abroad-mbbs/uzbekistan/topCitiesAP'
import WhyChooseUzbekistan from '@/components/abroad-mbbs/uzbekistan/whyChooseAP'
import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'

const page = () => {
  return (
    <div>
    <Navbar/>
      <UzbekistanHero/>
      <TopCityUzbekistan/>
      <WhyChooseUzbekistan/>
      <MbbsDurationStructureUzbekistan/>
      <MbbsEligibilityUzbekistan/>
      <MbbsAdmissionProcessUzbekistan/>
      <MbbsFeesUzbekistan/>
      <ClinicalExposureUzbekistan/>
      <WhyChooseUs/>
      <StartMBBSJourneyUzbekistan/>
      <ExploreMoreAbroad/>
      <Footer/>
    </div>
  )
}

export default page
