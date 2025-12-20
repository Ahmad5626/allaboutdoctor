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

export const metadata = {
  title: "MBBS in Sikkim - All About Doctor",
  description:
    "Get expert guidance for MBBS in Sikkim. Explore colleges, fees, cutoffs and admission support with All About Doctor Education Pvt Ltd. Apply now for free counseling. ",
    alternates: {
    canonical: "https://www.allaboutdoctor.in/india/sikkim/mbbs",
  },
};
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
