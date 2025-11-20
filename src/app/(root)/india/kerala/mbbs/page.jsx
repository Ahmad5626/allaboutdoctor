import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import CareerAfterMBBSKerala from '@/components/mbbs/kerala/careerAfterMBBSAP'
import ClinicalExposureKerala from '@/components/mbbs/kerala/clinicalExposureAP'
import ExploreMoreIndia from '@/components/mbbs/kerala/exploreMoreMBBSIndia'
import FaqKerala from '@/components/mbbs/kerala/faqMbbs'
import KeralaHero from '@/components/mbbs/kerala/mbbbHero'
import MbbsAdmissionProcessKerala from '@/components/mbbs/kerala/mbbsAdmissionProcessAP'
import MbbsDurationStructureKerala from '@/components/mbbs/kerala/mbbsDurationStructure'
import MbbsEligibilityKerala from '@/components/mbbs/kerala/mbbsEligibilityAP'
import MbbsFeesKerala from '@/components/mbbs/kerala/mbbsFeesAP'
import StartMBBSJourneyKerala from '@/components/mbbs/kerala/startMBBSJourneyAP'
import TopCityKerala from '@/components/mbbs/kerala/topCitiesAP'
import WhyChooseKerala from '@/components/mbbs/kerala/whyChooseAP'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'

const page = () => {
  return (
    <div>
    <Navbar/>
    <KeralaHero/>
    <TopCityKerala/>
    <WhyChooseKerala/>
    <MbbsDurationStructureKerala/>
    <MbbsEligibilityKerala/>
    <MbbsAdmissionProcessKerala/>
    <MbbsFeesKerala/>
    <ClinicalExposureKerala/>
    <CareerAfterMBBSKerala/>
    <WhyChooseUs/>
    <StartMBBSJourneyKerala/>
    <ExploreMoreIndia/>
    <FaqKerala/>
    <Footer/>

      
    </div>
  )
}

export default page
