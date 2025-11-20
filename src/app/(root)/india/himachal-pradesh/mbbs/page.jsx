import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import CareerAfterMBBSHimachal from '@/components/mbbs/himachal-pradesh/careerAfterMBBSAP'
import ClinicalExposureHimachal from '@/components/mbbs/himachal-pradesh/clinicalExposureAP'
import ExploreMoreIndia from '@/components/mbbs/himachal-pradesh/exploreMoreMBBSIndia'
import FaqHimachal from '@/components/mbbs/himachal-pradesh/faqMbbs'
import HimachalHero from '@/components/mbbs/himachal-pradesh/mbbbHero'
import MbbsAdmissionProcessHimachal from '@/components/mbbs/himachal-pradesh/mbbsAdmissionProcessAP'
import MbbsDurationStructureHimachal from '@/components/mbbs/himachal-pradesh/mbbsDurationStructure'
import MbbsEligibilityHimachal from '@/components/mbbs/himachal-pradesh/mbbsEligibilityAP'
import MbbsFeesHimachal from '@/components/mbbs/himachal-pradesh/mbbsFeesAP'
import StartMBBSJourneyHimachal from '@/components/mbbs/himachal-pradesh/startMBBSJourneyAP'
import TopCityHimachal from '@/components/mbbs/himachal-pradesh/topCitiesAP'
import WhyChooseHimachal from '@/components/mbbs/himachal-pradesh/whyChooseAP'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <HimachalHero/>
      <TopCityHimachal/>
      <WhyChooseHimachal/>
      <MbbsDurationStructureHimachal/>
      <MbbsEligibilityHimachal/>
      <MbbsAdmissionProcessHimachal/>
      <MbbsFeesHimachal/>
      <ClinicalExposureHimachal/>
      <CareerAfterMBBSHimachal/>
      <WhyChooseUs/>
      <StartMBBSJourneyHimachal/>
      <ExploreMoreIndia/>
      <FaqHimachal/>
      <Footer/>

    </div>
  )
}

export default page
