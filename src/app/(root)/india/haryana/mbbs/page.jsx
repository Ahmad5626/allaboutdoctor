import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import CareerAfterMBBSHaryana from '@/components/mbbs/haryana/careerAfterMBBSAP'
import ClinicalExposureHaryana from '@/components/mbbs/haryana/clinicalExposureAP'
import ExploreMoreIndia from '@/components/mbbs/haryana/exploreMoreMBBSIndia'
import FaqHaryana from '@/components/mbbs/haryana/faqMbbs'

import HaryanaHero from '@/components/mbbs/haryana/mbbbHero'
import MbbsAdmissionProcessHaryana from '@/components/mbbs/haryana/mbbsAdmissionProcessAP'
import MbbsDurationStructureHaryana from '@/components/mbbs/haryana/mbbsDurationStructure'
import MbbsFeesHaryana from '@/components/mbbs/haryana/mbbsFeesAP'
import StartMBBSJourneyHaryana from '@/components/mbbs/haryana/startMBBSJourneyAP'
import TopCityHaryana from '@/components/mbbs/haryana/topCitiesAP'
import WhyChooseHaryana from '@/components/mbbs/haryana/whyChooseAP'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'

const page = () => {
  return (
    <div>
    <Navbar/>
    <HaryanaHero/>
    <TopCityHaryana/>
    <WhyChooseHaryana/>
    <MbbsDurationStructureHaryana/>
    <MbbsAdmissionProcessHaryana/>
    <MbbsFeesHaryana/>
    <ClinicalExposureHaryana/>
    <CareerAfterMBBSHaryana/>
    <WhyChooseUs/>
    <StartMBBSJourneyHaryana/>
    <ExploreMoreIndia/>
    <FaqHaryana/>
    <Footer/>
      
    </div>
  )
}

export default page
