import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import ClinicalExposureAP from '@/components/mbbs/andhra-pradesh/clinicalExposureAP'
import ExploreMoreIndia from '@/components/mbbs/andhra-pradesh/exploreMoreMBBSIndia'
import StartMBBSJourneyAP from '@/components/mbbs/andhra-pradesh/startMBBSJourneyAP'
import ArunachalPradeshHero from '@/components/mbbs/arunachal-pradesh/andhrapradeshHero'
import CareerAfterMBBSAP from '@/components/mbbs/arunachal-pradesh/careerAfterMBBSAP'
import FaqAndhraPradesh from '@/components/mbbs/arunachal-pradesh/faqAndhraPradesh'
import MbbsAdmissionProcessArunachal from '@/components/mbbs/arunachal-pradesh/mbbsAdmissionProcessAP'
import MbbsDurationStructureArunachal from '@/components/mbbs/arunachal-pradesh/mbbsDurationStructure'
import MbbsEligibilityArunachal from '@/components/mbbs/arunachal-pradesh/mbbsEligibilityAP'
import MbbsFeesArunachal from '@/components/mbbs/arunachal-pradesh/mbbsFeesAP'
import TopCitiesArunachalPradesh from '@/components/mbbs/arunachal-pradesh/topCitiesAP'
import WhyChooseArunachalPradesh from '@/components/mbbs/arunachal-pradesh/whyChooseAP'
import WhyChooseUs from '@/components/mbbs/why-choose-us'

import React from 'react'
export const metadata = {
  title: "MBBS in Arunachal Pradesh - All About Doctor",
  description:
    "Get expert guidance for MBBS in Arunachal Pradesh. Explore colleges, fees, cutoffs and admission support with All About Doctor Education Pvt Ltd. Apply now for free counseling. ",
    alternates: {
    canonical: "https://www.allaboutdoctor.in/india/arunachal-pradesh/mbbs",
  },
};
const page = () => {
  return (
    <div>
<Navbar/>
<ArunachalPradeshHero/>
<TopCitiesArunachalPradesh/>
<WhyChooseArunachalPradesh/>
<MbbsDurationStructureArunachal />
<MbbsEligibilityArunachal/>
<MbbsAdmissionProcessArunachal/>
<MbbsFeesArunachal/>
<ClinicalExposureAP/>
<CareerAfterMBBSAP/>
<WhyChooseUs/>
<StartMBBSJourneyAP/>
<ExploreMoreIndia/>  
<FaqAndhraPradesh/>   
<Footer/>
    </div>
  )
}

export default page
