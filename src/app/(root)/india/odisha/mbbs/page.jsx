import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import CareerAfterMBBSOdisha from '@/components/mbbs/odisha/careerAfterMBBSAP'
import ClinicalExposureOdisha from '@/components/mbbs/odisha/clinicalExposureAP'
import ExploreMoreIndia from '@/components/mbbs/odisha/exploreMoreMBBSIndia'
import FaqOdisha from '@/components/mbbs/odisha/faqMbbs'
import OdishaHero from '@/components/mbbs/odisha/mbbbHero'
import MbbsAdmissionProcessOdisha from '@/components/mbbs/odisha/mbbsAdmissionProcessAP'
import MbbsDurationStructureOdisha from '@/components/mbbs/odisha/mbbsDurationStructure'
import MbbsEligibilityOdisha from '@/components/mbbs/odisha/mbbsEligibilityAP'
import MbbsFeesOdisha from '@/components/mbbs/odisha/mbbsFeesAP'
import StartMBBSJourneyOdisha from '@/components/mbbs/odisha/startMBBSJourneyAP'
import TopCityOdisha from '@/components/mbbs/odisha/topCitiesAP'
import WhyChooseOdisha from '@/components/mbbs/odisha/whyChooseAP'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <OdishaHero/>
      <TopCityOdisha/>
      <WhyChooseOdisha/>
      <MbbsDurationStructureOdisha/>
      <MbbsEligibilityOdisha/>
      <MbbsAdmissionProcessOdisha/>
      <MbbsFeesOdisha/>
      <ClinicalExposureOdisha/>
      <CareerAfterMBBSOdisha/>
      <WhyChooseUs/>
      <StartMBBSJourneyOdisha/>
      <ExploreMoreIndia/>
      <FaqOdisha/>
      <Footer/>
    </div>
  )
}

export default page
