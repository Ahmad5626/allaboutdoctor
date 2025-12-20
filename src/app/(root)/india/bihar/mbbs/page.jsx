import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import MbbsBiharIntro from '@/components/mbbs/bihar/andhrapradeshHero'
import CareerAfterMBBSBihar from '@/components/mbbs/bihar/careerAfterMBBSAP'
import ClinicalExposureBihar from '@/components/mbbs/bihar/clinicalExposureAP'
import ExploreMoreIndia from '@/components/mbbs/bihar/exploreMoreMBBSIndia'
import FaqBihar from '@/components/mbbs/bihar/faqAndhraPradesh'
import MbbsAdmissionProcessBihar from '@/components/mbbs/bihar/mbbsAdmissionProcessAP'
import MbbsFeesBihar from '@/components/mbbs/bihar/mbbsFeesAP'
import StartMBBSJourneyBihar from '@/components/mbbs/bihar/startMBBSJourneyAP'
import BiharTopCities from '@/components/mbbs/bihar/topCitiesAP'
import WhyChooseBihar from '@/components/mbbs/bihar/whyChooseAP'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'
export const metadata = {
  title: "MBBS in Bihar - All About Doctor",
  description:
    "Explore MBBS in Bihar with All About Doctor Education Pvt Ltd. Get guidance on NEET admission, clinical training, internships, and career opportunities.",
    alternates: {
    canonical: "https://www.allaboutdoctor.in/india/bihar/mbbs",
  },
};
const page = () => {
  return (
    <div>
      <Navbar/>
      <MbbsBiharIntro/>
      <BiharTopCities/>
      <WhyChooseBihar/>
      <MbbsAdmissionProcessBihar/>
      <MbbsFeesBihar/>
      <ClinicalExposureBihar/>
      <CareerAfterMBBSBihar/>
      <WhyChooseUs/>
      <StartMBBSJourneyBihar/>
        <ExploreMoreIndia/>
        <FaqBihar/>
        <Footer/>
    </div>
  )
}

export default page
