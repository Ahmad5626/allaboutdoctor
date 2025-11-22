import CareerAfterMBBSKyrgyzstan from '@/components/abroad-mbbs/krygystan/careerAfterMBBSAP'
import ClinicalExposureKyrgyzstan from '@/components/abroad-mbbs/krygystan/clinicalExposureAP'
import ExploreMoreAbroad from '@/components/abroad-mbbs/krygystan/exploreMoreMBBSIndia'
import FaqKyrgyzstan from '@/components/abroad-mbbs/krygystan/faqMbbs'
import KyrgyzstanHero from '@/components/abroad-mbbs/krygystan/mbbbHero'
import MbbsAdmissionProcessKyrgyzstan from '@/components/abroad-mbbs/krygystan/mbbsAdmissionProcessAP'
import MbbsDurationStructureKyrgyzstan from '@/components/abroad-mbbs/krygystan/mbbsDurationStructure'
import MbbsEligibilityKyrgyzstan from '@/components/abroad-mbbs/krygystan/mbbsEligibilityAP'
import MbbsFeesKyrgyzstan from '@/components/abroad-mbbs/krygystan/mbbsFeesAP'
import StartMBBSJourneyKyrgyzstan from '@/components/abroad-mbbs/krygystan/startMBBSJourneyAP'
import TopCityKyrgyzstan from '@/components/abroad-mbbs/krygystan/topCitiesAP'
import WhyChooseKyrgyzstan from '@/components/abroad-mbbs/krygystan/whyChooseAP'
import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <KyrgyzstanHero/>
      <TopCityKyrgyzstan/>
      <WhyChooseKyrgyzstan/>
      <MbbsDurationStructureKyrgyzstan/>
      <MbbsEligibilityKyrgyzstan/>
      <MbbsAdmissionProcessKyrgyzstan/>
      <MbbsFeesKyrgyzstan/>
      <ClinicalExposureKyrgyzstan/>
      <CareerAfterMBBSKyrgyzstan/>
      <WhyChooseUs/>
      <StartMBBSJourneyKyrgyzstan/>
      <ExploreMoreAbroad/>
      <FaqKyrgyzstan/>
      <Footer/>
    </div>
  )
}

export default page
