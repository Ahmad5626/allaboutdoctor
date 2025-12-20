import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import CareerAfterMBBSAP from '@/components/mbbs/andhra-pradesh/careerAfterMBBSAP'


import AssamHero from '@/components/mbbs/assam/andhrapradeshHero'
import ClinicalExposureAssam from '@/components/mbbs/assam/clinicalExposureAP'
import ExploreMoreIndia from '@/components/mbbs/assam/exploreMoreMBBSIndia'
import FaqAsam from '@/components/mbbs/assam/faqAndhraPradesh'
import MbbsAdmissionProcessAssam from '@/components/mbbs/assam/mbbsAdmissionProcessAP'
import MbbsDurationStructureAssam from '@/components/mbbs/assam/mbbsDurationStructure'
import MbbsEligibilityAssam from '@/components/mbbs/assam/mbbsEligibilityAP'
import MbbsFeesAssam from '@/components/mbbs/assam/mbbsFeesAP'
import StartMBBSJourneyAP from '@/components/mbbs/assam/startMBBSJourneyAP'
import TopCitiesAssam from '@/components/mbbs/assam/topCitiesAP'
import WhyChooseAssam from '@/components/mbbs/assam/whyChooseAP'
import WhyChooseUs from '@/components/mbbs/why-choose-us'


import React from 'react'
export const metadata = {
  title: "MBBS in Assam - All About Doctor",
  description:
    "Secure your MBBS admission in Assam with All About Doctor Education Pvt Ltd. Get expert guidance on NEET counseling, top medical cities, clinical exposure, internships, and career opportunitie ",
    alternates: {
    canonical: "https://www.allaboutdoctor.in/india/assam/mbbs",
  },
};
const page = () => {
  return (
    <div>
<Navbar/>
  <AssamHero/>
  <TopCitiesAssam/>
  <WhyChooseAssam/>
  <MbbsDurationStructureAssam/>
  <MbbsEligibilityAssam/>
  <MbbsAdmissionProcessAssam/>
  <MbbsFeesAssam/>
  <ClinicalExposureAssam/>
  <CareerAfterMBBSAP/>
  <WhyChooseUs  />
  <StartMBBSJourneyAP/>
  <ExploreMoreIndia/>
  <FaqAsam/>
<Footer/>
    </div>
  )
}

export default page
