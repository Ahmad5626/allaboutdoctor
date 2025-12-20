import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import CareerAfterMBBSKerala from '@/components/mbbs/kerala/careerAfterMBBSAP'
import ClinicalExposureKerala from '@/components/mbbs/kerala/clinicalExposureAP'
import ExploreMoreIndia from '@/components/mbbs/kerala/exploreMoreMBBSIndia'
import FaqKerala from '@/components/mbbs/kerala/faqMbbs'
import KeralaHero from '@/components/mbbs/kerala/mbbbHero'
import MbbsAdmissionProcessKerala from '@/components/mbbs/kerala/mbbsAdmissionProcessAP'
import MbbsDurationStructureKerala from '@/components/mbbs/kerala/mbbsDurationStructure'
import MbbsEligibilityKerala from '@/components/mbbs/kerala/mbbsEligibilityAP'
import MbbsFeesKerala from '@/components/mbbs/kerala/mbbsFeesAP'
import StartMBBSJourneyKerala from '@/components/mbbs/kerala/startMBBSJourneyAP'
import TopCityKerala from '@/components/mbbs/kerala/topCitiesAP'
import WhyChooseKerala from '@/components/mbbs/kerala/whyChooseAP'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'
export const metadata = {
  title: "MBBS in Kerala - All About Doctor",
  description:
    "Discover MBBS opportunities in Kerala with All About Doctor Education Pvt Ltd. Get guidance on NEET admissions, internships, clinical exposure, and career paths. ",
    alternates: {
    canonical: "https://www.allaboutdoctor.in/india/kerala/mbbs",
  },
};
const page = () => {
  return (
    <div>
    <Navbar/>
    <KeralaHero/>
    <TopCityKerala/>
    <WhyChooseKerala/>
    <MbbsDurationStructureKerala/>
    <MbbsEligibilityKerala/>
    <MbbsAdmissionProcessKerala/>
    <MbbsFeesKerala/>
    <ClinicalExposureKerala/>
    <CareerAfterMBBSKerala/>
    <WhyChooseUs/>
    <StartMBBSJourneyKerala/>
    <ExploreMoreIndia/>
    <FaqKerala/>
    <Footer/>

      
    </div>
  )
}

export default page
