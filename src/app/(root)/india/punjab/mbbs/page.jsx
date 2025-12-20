import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import CareerAfterMBBSPunjab from '@/components/mbbs/punjab/careerAfterMBBSAP'
import ClinicalExposurePunjab from '@/components/mbbs/punjab/clinicalExposureAP'
import ExploreMoreIndia from '@/components/mbbs/punjab/exploreMoreMBBSIndia'
import FaqPunjab from '@/components/mbbs/punjab/faqMbbs'
import PunjabHero from '@/components/mbbs/punjab/mbbbHero'
import MbbsAdmissionProcessPunjab from '@/components/mbbs/punjab/mbbsAdmissionProcessAP'
import MbbsDurationStructurePunjab from '@/components/mbbs/punjab/mbbsDurationStructure'
import MbbsEligibilityPunjab from '@/components/mbbs/punjab/mbbsEligibilityAP'
import MbbsFeesPunjab from '@/components/mbbs/punjab/mbbsFeesAP'
import StartMBBSJourneyPunjab from '@/components/mbbs/punjab/startMBBSJourneyAP'
import TopCityPunjab from '@/components/mbbs/punjab/topCitiesAP'
import WhyChoosePunjab from '@/components/mbbs/punjab/whyChooseAP'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'

export const metadata = {
  title: "MBBS in Punjab - All About Doctor",
  description:
    "Get expert guidance for MBBS in Punjab. Explore colleges, fees, cutoffs and admission support with All About Doctor Education Pvt Ltd. Apply now for free counseling. ",
    alternates: {
    canonical: "https://www.allaboutdoctor.in/india/punjab/mbbs",
  },
};
const page = () => {
  return (
    <div>
      <Navbar/>
      <PunjabHero/>
      <TopCityPunjab/>
      <WhyChoosePunjab/>
      <MbbsDurationStructurePunjab/>
      <MbbsEligibilityPunjab/>
      <MbbsAdmissionProcessPunjab/>
<MbbsFeesPunjab/>
<ClinicalExposurePunjab/>
<CareerAfterMBBSPunjab/>
<WhyChooseUs/>
<StartMBBSJourneyPunjab/>

<ExploreMoreIndia/>
<FaqPunjab/>
<Footer/>
    </div>
  )
}

export default page
