import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import ChhattisgarhHero from '@/components/mbbs/chhattisgarh/andhrapradeshHero'
import CareerAfterMBBSChhattisgarh from '@/components/mbbs/chhattisgarh/careerAfterMBBSAP'
import ClinicalExposureChhattisgarh from '@/components/mbbs/chhattisgarh/clinicalExposureAP'
import ExploreMoreIndia from '@/components/mbbs/chhattisgarh/exploreMoreMBBSIndia'
import FaqChhattisgarh from '@/components/mbbs/chhattisgarh/faqAndhraPradesh'
import MbbsDurationStructureChhattisgarh from '@/components/mbbs/chhattisgarh/mbbsDurationStructure'
import MbbsFeesChhattisgarh from '@/components/mbbs/chhattisgarh/mbbsFeesAP'
import StartMBBSJourneyChhattisgarh from '@/components/mbbs/chhattisgarh/startMBBSJourneyAP'
import TopCitiesChhattisgarh from '@/components/mbbs/chhattisgarh/topCitiesAP'
import WhyChooseChhattisgarh from '@/components/mbbs/chhattisgarh/whyChooseAP'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'
export const metadata = {
  title: "MBBS in Chhattisgarh - All About Doctor",
  description:
    "Get expert guidance for MBBS in Chhattisgarh. Explore colleges, fees, cutoffs and admission support with All About Doctor Education Pvt Ltd. Apply now for free counseling. ",
    alternates: {
    canonical: "https://www.allaboutdoctor.in/india/chhattisgarh/mbbs",
  },
};
const page = () => {
  return (
    <div>
      <Navbar/>
      <ChhattisgarhHero/>
      <TopCitiesChhattisgarh/>
      <WhyChooseChhattisgarh/>
      <MbbsDurationStructureChhattisgarh/>
      <MbbsFeesChhattisgarh/>
      <ClinicalExposureChhattisgarh/>
      <CareerAfterMBBSChhattisgarh/>
      <WhyChooseUs/>
      <StartMBBSJourneyChhattisgarh/>
      <ExploreMoreIndia/>
      <FaqChhattisgarh/>
      <Footer/>
    </div>
  )
}

export default page
