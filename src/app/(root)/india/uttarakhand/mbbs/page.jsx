import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import CareerAfterMBBSUttarakhand from '@/components/mbbs/uttarakhand/careerAfterMBBSAP'
import ClinicalExposureUttarakhand from '@/components/mbbs/uttarakhand/clinicalExposureAP'
import ExploreMoreIndia from '@/components/mbbs/uttarakhand/exploreMoreMBBSIndia'
import FaqUttarakhand from '@/components/mbbs/uttarakhand/faqMbbs'
import UttarakhandHero from '@/components/mbbs/uttarakhand/mbbbHero'
import MbbsAdmissionProcessUttarakhand from '@/components/mbbs/uttarakhand/mbbsAdmissionProcessAP'
import MbbsDurationStructureUttarakhand from '@/components/mbbs/uttarakhand/mbbsDurationStructure'
import MbbsEligibilityUttarakhand from '@/components/mbbs/uttarakhand/mbbsEligibilityAP'
import MbbsFeesUttarakhand from '@/components/mbbs/uttarakhand/mbbsFeesAP'
import StartMBBSJourneyUttarakhand from '@/components/mbbs/uttarakhand/startMBBSJourneyAP'
import TopCityUttarakhand from '@/components/mbbs/uttarakhand/topCitiesAP'
import WhyChooseUttarakhand from '@/components/mbbs/uttarakhand/whyChooseAP'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <UttarakhandHero/>
      <TopCityUttarakhand/>
      <WhyChooseUttarakhand/>
      <MbbsDurationStructureUttarakhand/>
      <MbbsEligibilityUttarakhand/>
      <MbbsAdmissionProcessUttarakhand/>
      <MbbsFeesUttarakhand/>
      <ClinicalExposureUttarakhand/>
      <CareerAfterMBBSUttarakhand/>
      <WhyChooseUs/>
      <StartMBBSJourneyUttarakhand/>
      <ExploreMoreIndia/>
      <FaqUttarakhand/>
      <Footer/>
    </div>
  )
}

export default page
