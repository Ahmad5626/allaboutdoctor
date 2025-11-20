import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import CareerAfterMBBSKashmir from '@/components/mbbs/kashmir/careerAfterMBBSAP'
import ClinicalExposureKashmir from '@/components/mbbs/kashmir/clinicalExposureAP'
import ExploreMoreIndia from '@/components/mbbs/kashmir/exploreMoreMBBSIndia'
import FaqKashmir from '@/components/mbbs/kashmir/faqMbbs'
import KashmirHero from '@/components/mbbs/kashmir/mbbbHero'
import MbbsAdmissionProcessKashmir from '@/components/mbbs/kashmir/mbbsAdmissionProcessAP'
import MbbsDurationStructureKashmir from '@/components/mbbs/kashmir/mbbsDurationStructure'
import MbbsEligibilityKashmir from '@/components/mbbs/kashmir/mbbsEligibilityAP'
import MbbsFeesKashmir from '@/components/mbbs/kashmir/mbbsFeesAP'
import StartMBBSJourneyKashmir from '@/components/mbbs/kashmir/startMBBSJourneyAP'
import TopCityKashmir from '@/components/mbbs/kashmir/topCitiesAP'
import WhyChooseKashmir from '@/components/mbbs/kashmir/whyChooseAP'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <KashmirHero/>
      <TopCityKashmir/>
      <WhyChooseKashmir/>
      <MbbsDurationStructureKashmir/>
      <MbbsEligibilityKashmir/>
      <MbbsAdmissionProcessKashmir/>
      <MbbsFeesKashmir/>
      <ClinicalExposureKashmir/>
      <CareerAfterMBBSKashmir/>
      <WhyChooseUs/>
      <StartMBBSJourneyKashmir/>
      <ExploreMoreIndia/>
      <FaqKashmir/>
      <Footer/>
    </div>
  )
}

export default page
