import CareerAfterMBBSKazakhstan from '@/components/abroad-mbbs/kazakhstan/careerAfterMBBSAP'
import ClinicalExposureKazakhstan from '@/components/abroad-mbbs/kazakhstan/clinicalExposureAP'
import KazakhstanHero from '@/components/abroad-mbbs/kazakhstan/mbbbHero'
import MbbsAdmissionProcessKazakhstan from '@/components/abroad-mbbs/kazakhstan/mbbsAdmissionProcessAP'
import MbbsDurationStructureKazakhstan from '@/components/abroad-mbbs/kazakhstan/mbbsDurationStructure'
import MbbsEligibilityKazakhstan from '@/components/abroad-mbbs/kazakhstan/mbbsEligibilityAP'
import MbbsFeesKazakhstan from '@/components/abroad-mbbs/kazakhstan/mbbsFeesAP'
import StartMBBSJourneyKazakhstan from '@/components/abroad-mbbs/kazakhstan/startMBBSJourneyAP'
import TopCityKazakhstan from '@/components/abroad-mbbs/kazakhstan/topCitiesAP'
import WhyChooseKazakhstan from '@/components/abroad-mbbs/kazakhstan/whyChooseAP'
import ExploreMoreAbroad from '@/components/abroad-mbbs/krygystan/exploreMoreMBBSIndia'
import FaqKazakhstan from '@/components/abroad-mbbs/krygystan/faqMbbs'
import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <KazakhstanHero/>
      <TopCityKazakhstan/>
      <WhyChooseKazakhstan/>
      <MbbsDurationStructureKazakhstan/>
      <MbbsEligibilityKazakhstan/>
      <MbbsAdmissionProcessKazakhstan/>
      <MbbsFeesKazakhstan/>
      <ClinicalExposureKazakhstan/>
      <CareerAfterMBBSKazakhstan/>
      <WhyChooseUs/>
      <StartMBBSJourneyKazakhstan/>
      <ExploreMoreAbroad/>
      <FaqKazakhstan/>
      <Footer/>
    </div>
  )
}

export default page
