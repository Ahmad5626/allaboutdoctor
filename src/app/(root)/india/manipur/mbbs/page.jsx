import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import CareerAfterMBBSManipur from '@/components/mbbs/manipur/careerAfterMBBSAP'
import ClinicalExposureManipur from '@/components/mbbs/manipur/clinicalExposureAP'
import ExploreMoreIndia from '@/components/mbbs/manipur/exploreMoreMBBSIndia'
import FaqManipur from '@/components/mbbs/manipur/faqMbbs'
import ManipurHero from '@/components/mbbs/manipur/mbbbHero'
import MbbsAdmissionProcessManipur from '@/components/mbbs/manipur/mbbsAdmissionProcessAP'
import MbbsDurationStructureManipur from '@/components/mbbs/manipur/mbbsDurationStructure'
import MbbsEligibilityManipur from '@/components/mbbs/manipur/mbbsEligibilityAP'
import MbbsFeesManipur from '@/components/mbbs/manipur/mbbsFeesAP'
import StartMBBSJourneyManipur from '@/components/mbbs/manipur/startMBBSJourneyAP'
import TopCityManipur from '@/components/mbbs/manipur/topCitiesAP'
import WhyChooseManipur from '@/components/mbbs/manipur/whyChooseAP'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <ManipurHero/>
      <TopCityManipur/>
      <WhyChooseManipur/>
      <MbbsDurationStructureManipur/>
      <MbbsEligibilityManipur/>
      <MbbsAdmissionProcessManipur/>
      <MbbsFeesManipur/>
      <ClinicalExposureManipur/>
      <CareerAfterMBBSManipur/>
      <WhyChooseUs/>
      <StartMBBSJourneyManipur/>
      <ExploreMoreIndia/>
      <FaqManipur/>
      <Footer/>
    </div>
  )
}

export default page
