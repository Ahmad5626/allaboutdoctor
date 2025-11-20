import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import CareerAfterMBBSSikkim from '@/components/mbbs/sikkim/careerAfterMBBSAP'
import ClinicalExposureSikkim from '@/components/mbbs/sikkim/clinicalExposureAP'
import ExploreMoreIndia from '@/components/mbbs/sikkim/exploreMoreMBBSIndia'
import FaqSikkim from '@/components/mbbs/sikkim/faqMbbs'
import SikkimHero from '@/components/mbbs/sikkim/mbbbHero'
import MbbsAdmissionProcessSikkim from '@/components/mbbs/sikkim/mbbsAdmissionProcessAP'
import MbbsDurationStructureSikkim from '@/components/mbbs/sikkim/mbbsDurationStructure'
import MbbsEligibilitySikkim from '@/components/mbbs/sikkim/mbbsEligibilityAP'
import MbbsFeesSikkim from '@/components/mbbs/sikkim/mbbsFeesAP'
import StartMBBSJourneySikkim from '@/components/mbbs/sikkim/startMBBSJourneyAP'
import TopCitySikkim from '@/components/mbbs/sikkim/topCitiesAP'
import WhyChooseSikkim from '@/components/mbbs/sikkim/whyChooseAP'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <SikkimHero/>
      <TopCitySikkim/>
      <WhyChooseSikkim/>
      <MbbsDurationStructureSikkim/>
      <MbbsEligibilitySikkim/>
      <MbbsAdmissionProcessSikkim/>
      <MbbsFeesSikkim/>
      <ClinicalExposureSikkim/>
      <CareerAfterMBBSSikkim/>
      <WhyChooseUs/>
      <StartMBBSJourneySikkim/>
      <ExploreMoreIndia/>
      <FaqSikkim/>
      <Footer/>
    </div>
  )
}

export default page
