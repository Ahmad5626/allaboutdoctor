import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import CareerAfterMBBSWestBengal from '@/components/mbbs/west-bengal/careerAfterMBBSAP'
import ClinicalExposureWestBengal from '@/components/mbbs/west-bengal/clinicalExposureAP'
import ExploreMoreIndia from '@/components/mbbs/west-bengal/exploreMoreMBBSIndia'
import FaqWestBengal from '@/components/mbbs/west-bengal/faqMbbs'
import WestBengalHero from '@/components/mbbs/west-bengal/mbbbHero'
import MbbsAdmissionProcessWestBengal from '@/components/mbbs/west-bengal/mbbsAdmissionProcessAP'
import MbbsDurationStructureWestBengal from '@/components/mbbs/west-bengal/mbbsDurationStructure'
import MbbsEligibilityWestBengal from '@/components/mbbs/west-bengal/mbbsEligibilityAP'
import MbbsFeesWestBengal from '@/components/mbbs/west-bengal/mbbsFeesAP'
import StartMBBSJourneyWestBengal from '@/components/mbbs/west-bengal/startMBBSJourneyAP'
import TopCityWestBengal from '@/components/mbbs/west-bengal/topCitiesAP'
import WhyChooseWestBengal from '@/components/mbbs/west-bengal/whyChooseAP'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <WestBengalHero/>
      <TopCityWestBengal/>
      <WhyChooseWestBengal/>
      <MbbsDurationStructureWestBengal/>
      <MbbsEligibilityWestBengal/>
      <MbbsAdmissionProcessWestBengal/>
      <MbbsFeesWestBengal/>
      <ClinicalExposureWestBengal/>
      <CareerAfterMBBSWestBengal/>
      <WhyChooseUs/>
      <StartMBBSJourneyWestBengal/>
      <ExploreMoreIndia/>
      <FaqWestBengal/>
      <Footer/>
      

    </div>
  )
}

export default page
