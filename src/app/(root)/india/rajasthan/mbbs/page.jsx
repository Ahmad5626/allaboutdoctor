import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import CareerAfterMBBSRajasthan from '@/components/mbbs/rajasthan/careerAfterMBBSAP'
import ClinicalExposureRajasthan from '@/components/mbbs/rajasthan/clinicalExposureAP'
import ExploreMoreIndia from '@/components/mbbs/rajasthan/exploreMoreMBBSIndia'
import FaqRajasthan from '@/components/mbbs/rajasthan/faqMbbs'
import RajasthanHero from '@/components/mbbs/rajasthan/mbbbHero'
import MbbsAdmissionProcessRajasthan from '@/components/mbbs/rajasthan/mbbsAdmissionProcessAP'
import MbbsDurationStructureRajasthan from '@/components/mbbs/rajasthan/mbbsDurationStructure'
import MbbsEligibilityRajasthan from '@/components/mbbs/rajasthan/mbbsEligibilityAP'
import MbbsFeesRajasthan from '@/components/mbbs/rajasthan/mbbsFeesAP'
import StartMBBSJourneyRajasthan from '@/components/mbbs/rajasthan/startMBBSJourneyAP'
import TopCityRajasthan from '@/components/mbbs/rajasthan/topCitiesAP'
import WhyChooseRajasthan from '@/components/mbbs/rajasthan/whyChooseAP'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <RajasthanHero />
      <TopCityRajasthan />
      <WhyChooseRajasthan />
      <MbbsDurationStructureRajasthan />
      <MbbsEligibilityRajasthan />
      <MbbsAdmissionProcessRajasthan />
      <MbbsFeesRajasthan />
      <ClinicalExposureRajasthan />
      <CareerAfterMBBSRajasthan />
      <WhyChooseUs />
      <StartMBBSJourneyRajasthan />
      <ExploreMoreIndia />
      <FaqRajasthan />
      <Footer />
    </div>
  )
}

export default page
