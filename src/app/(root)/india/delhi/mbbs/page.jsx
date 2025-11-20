import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'


import DelhiHero from '@/components/mbbs/delhi/andhrapradeshHero'
import CareerAfterMBBSDelhi from '@/components/mbbs/delhi/careerAfterMBBSAP'
import ClinicalExposureDelhi from '@/components/mbbs/delhi/clinicalExposureAP'
import ExploreMoreIndia from '@/components/mbbs/delhi/exploreMoreMBBSIndia'
import FaqChhattisgarh from '@/components/mbbs/delhi/faqAndhraPradesh'
import MbbsAdmissionProcessDelhi from '@/components/mbbs/delhi/mbbsAdmissionProcessAP'
import MbbsDurationStructureDelhi from '@/components/mbbs/delhi/mbbsDurationStructure'
import MbbsEligibilityDelhi from '@/components/mbbs/delhi/mbbsEligibilityAP'
import MbbsFeesDelhi from '@/components/mbbs/delhi/mbbsFeesAP'
import StartMBBSJourneyDelhi from '@/components/mbbs/delhi/startMBBSJourneyAP'
import TopCityDelhi from '@/components/mbbs/delhi/topCitiesAP'
import WhyChooseDelhi from '@/components/mbbs/delhi/whyChooseAP'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <DelhiHero/>
      <TopCityDelhi/>
      <WhyChooseDelhi/>
      <MbbsDurationStructureDelhi/>
      <MbbsEligibilityDelhi/>
      <MbbsAdmissionProcessDelhi/>
      <MbbsFeesDelhi/>
      <ClinicalExposureDelhi/>
      <CareerAfterMBBSDelhi/>
      <WhyChooseUs/>
      <StartMBBSJourneyDelhi/>
      <ExploreMoreIndia/>
      <FaqChhattisgarh/>
      <Footer/>
    </div>
  )
}

export default page
