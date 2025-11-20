import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import GujaratHero from '@/components/mbbs/gujarat/mbbbHero'
import CareerAfterMBBSGujarat from '@/components/mbbs/gujarat/careerAfterMBBSAP'
import ClinicalExposureGujarat from '@/components/mbbs/gujarat/clinicalExposureAP'
import ExploreMoreIndia from '@/components/mbbs/gujarat/exploreMoreMBBSIndia'
import FaqGujarat from '@/components/mbbs/gujarat/faqMbbs'
import MbbsAdmissionProcessGujarat from '@/components/mbbs/gujarat/mbbsAdmissionProcessAP'
import MbbsDurationStructureGujarat from '@/components/mbbs/gujarat/mbbsDurationStructure'
import MbbsEligibilityGujarat from '@/components/mbbs/gujarat/mbbsEligibilityAP'
import MbbsFeesGujarat from '@/components/mbbs/gujarat/mbbsFeesAP'
import StartMBBSJourneyGujarat from '@/components/mbbs/gujarat/startMBBSJourneyAP'
import TopCityGujarat from '@/components/mbbs/gujarat/topCitiesAP'
import WhyChooseGujarat from '@/components/mbbs/gujarat/whyChooseAP'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <GujaratHero/>
      <TopCityGujarat/>

      <WhyChooseGujarat/>
      <MbbsDurationStructureGujarat/>
      <MbbsEligibilityGujarat/>
      <MbbsAdmissionProcessGujarat/>
      <MbbsFeesGujarat/>
      <ClinicalExposureGujarat/>
      <CareerAfterMBBSGujarat/>
      <WhyChooseUs/>
      <StartMBBSJourneyGujarat/>
      <ExploreMoreIndia/>
      <FaqGujarat/>
      <Footer/>
    </div>
  )
}

export default page
