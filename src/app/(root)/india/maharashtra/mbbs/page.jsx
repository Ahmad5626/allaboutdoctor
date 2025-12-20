import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import FaqMadhyaPradesh from '@/components/mbbs/madhya-pradesh/faqMbbs'
import CareerAfterMBBSMaharashtra from '@/components/mbbs/maharashtra/careerAfterMBBSAP'
import ClinicalExposureMaharashtra from '@/components/mbbs/maharashtra/clinicalExposureAP'
import ExploreMoreIndia from '@/components/mbbs/maharashtra/exploreMoreMBBSIndia'
import MaharashtraHero from '@/components/mbbs/maharashtra/mbbbHero'
import MbbsAdmissionProcessMaharashtra from '@/components/mbbs/maharashtra/mbbsAdmissionProcessAP'
import MbbsDurationStructureMaharashtra from '@/components/mbbs/maharashtra/mbbsDurationStructure'
import MbbsEligibilityMaharashtra from '@/components/mbbs/maharashtra/mbbsEligibilityAP'
import MbbsFeesMaharashtra from '@/components/mbbs/maharashtra/mbbsFeesAP'
import StartMBBSJourneyMaharashtra from '@/components/mbbs/maharashtra/startMBBSJourneyAP'
import TopCityMaharashtra from '@/components/mbbs/maharashtra/topCitiesAP'
import WhyChooseMaharashtra from '@/components/mbbs/maharashtra/whyChooseAP'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'
export const metadata = {
  title: "MBBS in Maharashtra - All About Doctor",
  description:
    "Get expert guidance for MBBS in Maharashtra. Explore colleges, fees, cutoffs and admission support with All About Doctor Education Pvt Ltd. Apply now for free counseling. ",
    alternates: {
    canonical: "https://www.allaboutdoctor.in/india/maharashtra/mbbs",
  },
};
const page = () => {
  return (
    <div>
      <Navbar />
      <MaharashtraHero />
      <TopCityMaharashtra />
      <WhyChooseMaharashtra />
      <MbbsDurationStructureMaharashtra />
      <MbbsEligibilityMaharashtra />
      <MbbsAdmissionProcessMaharashtra />
      <MbbsFeesMaharashtra />
      <ClinicalExposureMaharashtra />
      <CareerAfterMBBSMaharashtra />
      <WhyChooseUs />
      <StartMBBSJourneyMaharashtra />
      <ExploreMoreIndia />
      <FaqMadhyaPradesh />
      <Footer />

    </div>
  )
}


export default page
