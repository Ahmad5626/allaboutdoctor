import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import CareerAfterMBBSNagaland from '@/components/mbbs/nagaland/careerAfterMBBSAP'
import ClinicalExposureNagaland from '@/components/mbbs/nagaland/clinicalExposureAP'
import ExploreMoreIndia from '@/components/mbbs/nagaland/exploreMoreMBBSIndia'
import FaqNagaland from '@/components/mbbs/nagaland/faqMbbs'
import NagalandHero from '@/components/mbbs/nagaland/mbbbHero'
import MbbsAdmissionProcessNagaland from '@/components/mbbs/nagaland/mbbsAdmissionProcessAP'
import MbbsDurationStructureNagaland from '@/components/mbbs/nagaland/mbbsDurationStructure'
import MbbsFeesNagaland from '@/components/mbbs/nagaland/mbbsFeesAP'
import StartMBBSJourneyNagaland from '@/components/mbbs/nagaland/startMBBSJourneyAP'
import TopCityNagaland from '@/components/mbbs/nagaland/topCitiesAP'
import WhyChooseNagaland from '@/components/mbbs/nagaland/whyChooseAP'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <NagalandHero/>
      <TopCityNagaland/>
      <WhyChooseNagaland/>
      <MbbsDurationStructureNagaland/>
      <MbbsAdmissionProcessNagaland/>
      <MbbsFeesNagaland/>
      <ClinicalExposureNagaland/>
      <CareerAfterMBBSNagaland/>
      <WhyChooseUs/>
      <StartMBBSJourneyNagaland/>
      <ExploreMoreIndia/>
      <FaqNagaland/>
      <Footer/>
    </div>
  )
}

export default page
