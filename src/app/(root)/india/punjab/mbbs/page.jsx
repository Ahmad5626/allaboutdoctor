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
