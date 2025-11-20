import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import CareerAfterMBBSJharkhand from '@/components/mbbs/jharkhand/careerAfterMBBSAP'
import ClinicalExposureJharkhand from '@/components/mbbs/jharkhand/clinicalExposureAP'
import ExploreMoreIndia from '@/components/mbbs/jharkhand/exploreMoreMBBSIndia'
import FaqJharkhand from '@/components/mbbs/jharkhand/faqMbbs'
import JharkhandHero from '@/components/mbbs/jharkhand/mbbbHero'
import MbbsAdmissionProcessJharkhand from '@/components/mbbs/jharkhand/mbbsAdmissionProcessAP'
import MbbsDurationStructureJharkhand from '@/components/mbbs/jharkhand/mbbsDurationStructure'
import MbbsFeesJharkhand from '@/components/mbbs/jharkhand/mbbsFeesAP'
import StartMBBSJourneyJharkhand from '@/components/mbbs/jharkhand/startMBBSJourneyAP'
import TopCityJharkhand from '@/components/mbbs/jharkhand/topCitiesAP'
import WhyChooseJharkhand from '@/components/mbbs/jharkhand/whyChooseAP'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <JharkhandHero/>
      <TopCityJharkhand/>
      <WhyChooseJharkhand/>
      <MbbsDurationStructureJharkhand/>
      <MbbsAdmissionProcessJharkhand/>
      <MbbsFeesJharkhand/>
      <ClinicalExposureJharkhand/>
      <CareerAfterMBBSJharkhand/>
      <WhyChooseUs/>
      <StartMBBSJourneyJharkhand/>
      <ExploreMoreIndia/>
      <FaqJharkhand/>
      <Footer/>
    </div>
  )
}

export default page
