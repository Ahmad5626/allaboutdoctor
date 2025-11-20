import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import CareerAfterMBBSKarnataka from '@/components/mbbs/karnataka/careerAfterMBBSAP'
import ClinicalExposureKarnataka from '@/components/mbbs/karnataka/clinicalExposureAP'
import ExploreMoreIndia from '@/components/mbbs/karnataka/exploreMoreMBBSIndia'
import FaqKarnataka from '@/components/mbbs/karnataka/faqMbbs'
import KarnatakaHero from '@/components/mbbs/karnataka/mbbbHero'
import MbbsAdmissionProcessKarnataka from '@/components/mbbs/karnataka/mbbsAdmissionProcessAP'
import MbbsDurationStructureKarnataka from '@/components/mbbs/karnataka/mbbsDurationStructure'
import MbbsEligibilityKarnataka from '@/components/mbbs/karnataka/mbbsEligibilityAP'
import MbbsFeesKarnataka from '@/components/mbbs/karnataka/mbbsFeesAP'
import StartMBBSJourneyKarnataka from '@/components/mbbs/karnataka/startMBBSJourneyAP'
import TopCityKarnataka from '@/components/mbbs/karnataka/topCitiesAP'
import WhyChooseKarnataka from '@/components/mbbs/karnataka/whyChooseAP'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <KarnatakaHero/>
      <TopCityKarnataka/>
      <WhyChooseKarnataka/>
      <MbbsDurationStructureKarnataka/>
      <MbbsEligibilityKarnataka/>
      <MbbsAdmissionProcessKarnataka/>
      <MbbsFeesKarnataka/>
      <ClinicalExposureKarnataka/>
      <CareerAfterMBBSKarnataka/>
      <WhyChooseUs/>
      <StartMBBSJourneyKarnataka/>
      <ExploreMoreIndia/>
      <FaqKarnataka/>
      <Footer/>
    </div>
  )
}

export default page
