import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import GoaHero from '@/components/mbbs/goa/andhrapradeshHero'
import CareerAfterMBBSGoa from '@/components/mbbs/goa/careerAfterMBBSAP'
import ClinicalExposureGoa from '@/components/mbbs/goa/clinicalExposureAP'
import ExploreMoreIndia from '@/components/mbbs/goa/exploreMoreMBBSIndia'
import FaqGoa from '@/components/mbbs/goa/faqAndhraPradesh'
import MbbsAdmissionProcessGoa from '@/components/mbbs/goa/mbbsAdmissionProcessAP'
import MbbsDurationStructureGoa from '@/components/mbbs/goa/mbbsDurationStructure'
import MbbsEligibilityGoa from '@/components/mbbs/goa/mbbsEligibilityAP'
import MbbsFeesGoa from '@/components/mbbs/goa/mbbsFeesAP'
import StartMBBSJourneyGoa from '@/components/mbbs/goa/startMBBSJourneyAP'
import TopCityGoa from '@/components/mbbs/goa/topCitiesAP'
import WhyChooseGoa from '@/components/mbbs/goa/whyChooseAP'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <GoaHero />
      <TopCityGoa />
      <WhyChooseGoa />
      <MbbsDurationStructureGoa />
      <MbbsEligibilityGoa />
      <MbbsAdmissionProcessGoa />
      <MbbsFeesGoa />
      <ClinicalExposureGoa />
      <CareerAfterMBBSGoa />
      <WhyChooseUs />
      <StartMBBSJourneyGoa />
      <ExploreMoreIndia />
      <FaqGoa />
      <Footer />

    </div>
  )
}

export default page
