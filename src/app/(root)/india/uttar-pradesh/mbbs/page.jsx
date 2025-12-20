import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import CareerAfterMBBSUttarPradesh from '@/components/mbbs/uttar-pradesh/careerAfterMBBSAP'
import ClinicalExposureUttarPradesh from '@/components/mbbs/uttar-pradesh/clinicalExposureAP'
import ExploreMoreIndia from '@/components/mbbs/uttar-pradesh/exploreMoreMBBSIndia'
import FaqUttarPradesh from '@/components/mbbs/uttar-pradesh/faqMbbs'
import UttarPradeshHero from '@/components/mbbs/uttar-pradesh/mbbbHero'
import MbbsAdmissionProcessUttarPradesh from '@/components/mbbs/uttar-pradesh/mbbsAdmissionProcessAP'
import MbbsDurationStructureUttarPradesh from '@/components/mbbs/uttar-pradesh/mbbsDurationStructure'
import MbbsEligibilityUttarPradesh from '@/components/mbbs/uttar-pradesh/mbbsEligibilityAP'
import MbbsFeesUttarPradesh from '@/components/mbbs/uttar-pradesh/mbbsFeesAP'
import StartMBBSJourneyUttarPradesh from '@/components/mbbs/uttar-pradesh/startMBBSJourneyAP'
import TopCityUttarPradesh from '@/components/mbbs/uttar-pradesh/topCitiesAP'
import WhyChooseUttarPradesh from '@/components/mbbs/uttar-pradesh/whyChooseAP'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'
export const metadata = {
  title: "MBBS in Uttar Pradesh - All About Doctor",
  description:
    "Get expert guidance for MBBS in Uttar Pradesh. Explore colleges, fees, cutoffs and admission support with All About Doctor Education Pvt Ltd. Apply now for free counseling. ",
    alternates: {
    canonical: "https://www.allaboutdoctor.in/india/uttar-pradesh/mbbs",
  },
};
const page = () => {
  return (
    <div>
    <Navbar/>
    <UttarPradeshHero/>
  
    <TopCityUttarPradesh/>
    <WhyChooseUttarPradesh/>
      <MbbsDurationStructureUttarPradesh/>
      <MbbsEligibilityUttarPradesh/>
      <MbbsAdmissionProcessUttarPradesh/>
      <MbbsFeesUttarPradesh/>
      <ClinicalExposureUttarPradesh/>
      <CareerAfterMBBSUttarPradesh/>
      <WhyChooseUs/>
      <StartMBBSJourneyUttarPradesh/>
      <ExploreMoreIndia/>
      <FaqUttarPradesh/>
      <Footer/>
    </div>
  )
}

export default page
