import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import CareerAfterMBBSTripura from '@/components/mbbs/tripura/careerAfterMBBSAP'
import ClinicalExposureTripura from '@/components/mbbs/tripura/clinicalExposureAP'
import ExploreMoreIndia from '@/components/mbbs/tripura/exploreMoreMBBSIndia'
import FaqTripura from '@/components/mbbs/tripura/faqMbbs'
import TripuraHero from '@/components/mbbs/tripura/mbbbHero'
import MbbsAdmissionProcessTripura from '@/components/mbbs/tripura/mbbsAdmissionProcessAP'
import MbbsDurationStructureTripura from '@/components/mbbs/tripura/mbbsDurationStructure'
import MbbsEligibilityTripura from '@/components/mbbs/tripura/mbbsEligibilityAP'
import MbbsFeesTripura from '@/components/mbbs/tripura/mbbsFeesAP'
import StartMBBSJourneyTripura from '@/components/mbbs/tripura/startMBBSJourneyAP'
import TopCityTripura from '@/components/mbbs/tripura/topCitiesAP'
import WhyChooseTripura from '@/components/mbbs/tripura/whyChooseAP'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'

const page = () => {
  return (
    <div>
    <Navbar/>
    <TripuraHero/>
    <TopCityTripura/>
    <WhyChooseTripura/>
    <MbbsDurationStructureTripura/>
    <MbbsEligibilityTripura/>
    <MbbsAdmissionProcessTripura/>
    <MbbsFeesTripura/>
    <ClinicalExposureTripura/>
    <CareerAfterMBBSTripura/>
    <WhyChooseUs/>
    <StartMBBSJourneyTripura/>
      <ExploreMoreIndia/>
      <FaqTripura/>
      <Footer/>
    </div>
  )
}

export default page
