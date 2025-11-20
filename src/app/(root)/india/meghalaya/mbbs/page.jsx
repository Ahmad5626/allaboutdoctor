import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import FaqMeghalaya from '@/components/mbbs/manipur/faqMbbs'

import CareerAfterMBBSMeghalaya from '@/components/mbbs/meghalaya/careerAfterMBBSAP'
import ClinicalExposureMeghalaya from '@/components/mbbs/meghalaya/clinicalExposureAP'
import ExploreMoreIndia from '@/components/mbbs/meghalaya/exploreMoreMBBSIndia'
import MeghalayaHero from '@/components/mbbs/meghalaya/mbbbHero'
import MbbsAdmissionProcessMeghalaya from '@/components/mbbs/meghalaya/mbbsAdmissionProcessAP'
import MbbsDurationStructureMeghalaya from '@/components/mbbs/meghalaya/mbbsDurationStructure'
import MbbsEligibilityMeghalaya from '@/components/mbbs/meghalaya/mbbsEligibilityAP'
import MbbsFeesMeghalaya from '@/components/mbbs/meghalaya/mbbsFeesAP'
import StartMBBSJourneyMeghalaya from '@/components/mbbs/meghalaya/startMBBSJourneyAP'
import TopCityMeghalaya from '@/components/mbbs/meghalaya/topCitiesAP'
import WhyChooseMeghalaya from '@/components/mbbs/meghalaya/whyChooseAP'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <MeghalayaHero/>
      <TopCityMeghalaya/>
      <WhyChooseMeghalaya/>
      <MbbsDurationStructureMeghalaya/>
      <MbbsEligibilityMeghalaya/>
      <MbbsAdmissionProcessMeghalaya/>
      <MbbsFeesMeghalaya/>
      <ClinicalExposureMeghalaya/>
      <CareerAfterMBBSMeghalaya/>
      <WhyChooseUs/>
      <StartMBBSJourneyMeghalaya/>
      <ExploreMoreIndia/>
      <FaqMeghalaya/>
      <Footer/>

    </div>
  )
}

export default page
