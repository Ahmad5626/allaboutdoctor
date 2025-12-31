import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import CareerAfterMBBSRajasthan from '@/components/mbbs/rajasthan/careerAfterMBBSAP'
import ClinicalExposureRajasthan from '@/components/mbbs/rajasthan/clinicalExposureAP'
import ExploreMoreIndia from '@/components/mbbs/rajasthan/exploreMoreMBBSIndia'
import FaqRajasthan from '@/components/mbbs/rajasthan/faqMbbs'
import RajasthanHero from '@/components/mbbs/rajasthan/mbbbHero'
import MbbsAdmissionProcessRajasthan from '@/components/mbbs/rajasthan/mbbsAdmissionProcessAP'
import MbbsDurationStructureRajasthan from '@/components/mbbs/rajasthan/mbbsDurationStructure'
import MbbsEligibilityRajasthan from '@/components/mbbs/rajasthan/mbbsEligibilityAP'
import MbbsFeesRajasthan from '@/components/mbbs/rajasthan/mbbsFeesAP'
import MbbsStateCTA from '@/components/mbbs/rajasthan/MbbsStateCTA'
import StartMBBSJourneyRajasthan from '@/components/mbbs/rajasthan/startMBBSJourneyAP'
import StateDomicileQuota from '@/components/mbbs/rajasthan/StateDomicileQuota'
import StateMbbsWorkflow from '@/components/mbbs/rajasthan/StateMbbsWorkflow'
import StateStatus from '@/components/mbbs/rajasthan/StateStatus'
import TopCitiesStates from '@/components/mbbs/rajasthan/topCitiesAP'

import WhyChooseState from '@/components/mbbs/rajasthan/whyChooseAP'
import WhyChooseRajasthan from '@/components/mbbs/rajasthan/whyChooseAP'
import WhyChooseUsIndia from '@/components/mbbs/why-choose-us'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'

export const metadata = {
  title: "MBBS in Rajasthan - All About Doctor",
  description:
    "Get expert guidance for MBBS in Rajasthan. Explore colleges, fees, cutoffs and admission support with All About Doctor Education Pvt Ltd. Apply now for free counseling. ",
    alternates: {
    canonical: "https://www.allaboutdoctor.in/india/rajasthan/mbbs",
  },
};
const page = () => {
  return (
    <div>
      <Navbar />
      <RajasthanHero />
      <WhyChooseState/>
      <TopCitiesStates />
      <MbbsDurationStructureRajasthan />
      <MbbsEligibilityRajasthan />
      <StateDomicileQuota/>
      <StateMbbsWorkflow/>
     <StateStatus/>
      <MbbsFeesRajasthan />
      <ClinicalExposureRajasthan />
      <CareerAfterMBBSRajasthan />
      <MbbsStateCTA/>
      <WhyChooseUsIndia />
      
      {/* <ExploreMoreIndia /> */}
      <FaqRajasthan />
      <Footer />
    </div>
  )
}

export default page
