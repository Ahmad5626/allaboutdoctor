import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import AndhraPradeshHero from '@/components/mbbs/andhra-pradesh/andhrapradeshHero'
import CareerAfterMBBSAP from '@/components/mbbs/andhra-pradesh/careerAfterMBBSAP'
import ClinicalExposureAP from '@/components/mbbs/andhra-pradesh/clinicalExposureAP'
import ExploreMoreIndia from '@/components/mbbs/andhra-pradesh/exploreMoreMBBSIndia'
import FaqAndhraPradesh from '@/components/mbbs/andhra-pradesh/faqAndhraPradesh'
import MbbsAdmissionProcessAP from '@/components/mbbs/andhra-pradesh/mbbsAdmissionProcessAP'
import MbbsDurationStructure from '@/components/mbbs/andhra-pradesh/mbbsDurationStructure'
import MbbsEligibilityAP from '@/components/mbbs/andhra-pradesh/mbbsEligibilityAP'
import MbbsFeesAP from '@/components/mbbs/andhra-pradesh/mbbsFeesAP'
import StartMBBSJourneyAP from '@/components/mbbs/andhra-pradesh/startMBBSJourneyAP'
import TopCitiesAP from '@/components/mbbs/andhra-pradesh/topCitiesAP'
import WhyChooseAP from '@/components/mbbs/andhra-pradesh/whyChooseAP'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'
export const metadata = {
  title: "MBBS in Andhra Pradesh - All About Doctor",
  description:
    "Get expert guidance for MBBS in Andhra Pradesh. Explore colleges, fees, cutoffs and admission support with All About Doctor Education Pvt Ltd. Apply now for free counseling. ",
    alternates: {
    canonical: "https://www.allaboutdoctor.in/india/andhra-pradesh/mbbs",
  },
};
const page = () => {
  return (
    <div>
<Navbar/>
<AndhraPradeshHero/>
<TopCitiesAP/>
<WhyChooseAP/>
<MbbsDurationStructure/>
<MbbsEligibilityAP/>
<MbbsAdmissionProcessAP/>
<MbbsFeesAP/>
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
