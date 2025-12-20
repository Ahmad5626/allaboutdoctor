import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import CareerAfterMBBSTelangana from '@/components/mbbs/telangana/careerAfterMBBSAP'
import ClinicalExposureTelangana from '@/components/mbbs/telangana/clinicalExposureAP'
import ExploreMoreIndia from '@/components/mbbs/telangana/exploreMoreMBBSIndia'
import FaqTelangana from '@/components/mbbs/telangana/faqMbbs'
import TelanganaHero from '@/components/mbbs/telangana/mbbbHero'
import MbbsAdmissionProcessTelangana from '@/components/mbbs/telangana/mbbsAdmissionProcessAP'
import MbbsDurationStructureTelangana from '@/components/mbbs/telangana/mbbsDurationStructure'
import MbbsEligibilityTelangana from '@/components/mbbs/telangana/mbbsEligibilityAP'
import MbbsFeesTelangana from '@/components/mbbs/telangana/mbbsFeesAP'
import StartMBBSJourneyTelangana from '@/components/mbbs/telangana/startMBBSJourneyAP'
import TopCityTelangana from '@/components/mbbs/telangana/topCitiesAP'
import WhyChooseTelangana from '@/components/mbbs/telangana/whyChooseAP'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'

export const metadata = {
  title: "MBBS in Telangana - All About Doctor",
  description:
    "Get expert guidance for MBBS in Telangana. Explore colleges, fees, cutoffs and admission support with All About Doctor Education Pvt Ltd. Apply now for free counseling. ",
    alternates: {
    canonical: "https://www.allaboutdoctor.in/india/telangana/mbbs",
  },
};
const page = () => {
  return (
    <div>
      <Navbar/>
      <TelanganaHero/>
      <TopCityTelangana/>
      <WhyChooseTelangana/>
      <MbbsDurationStructureTelangana/>
      <MbbsEligibilityTelangana/>
      <MbbsAdmissionProcessTelangana/>
      <MbbsFeesTelangana/>
      <ClinicalExposureTelangana/>
      <CareerAfterMBBSTelangana/>
      <WhyChooseUs/>
      <StartMBBSJourneyTelangana/>
      <ExploreMoreIndia/>
      <FaqTelangana/>
      <Footer/>
    </div>
  )
}

export default page
