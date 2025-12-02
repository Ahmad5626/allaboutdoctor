import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import CareerAfterMBBSSitapur from '@/components/mbbs/uttar-pradesh/sitapur/career-after-mbbs-sitapur'
import ClinicalExposureSitapur from '@/components/mbbs/uttar-pradesh/sitapur/clinical-exposure-sitapur'
import ExploreMoreUP from '@/components/mbbs/uttar-pradesh/sitapur/explore-more-up'
import MbbsAdmissionProcessSitapur from '@/components/mbbs/uttar-pradesh/sitapur/mbbs-admission-process-sitapur'
import MbbsDurationStructureSitapur from '@/components/mbbs/uttar-pradesh/sitapur/mbbs-duration-structure-sitapur'
import MbbsEligibilitySitapur from '@/components/mbbs/uttar-pradesh/sitapur/mbbs-eligibility-sitapur'
import SitapurHero from '@/components/mbbs/uttar-pradesh/sitapur/sitapur-hero'
import StartMBBSJourneySitapur from '@/components/mbbs/uttar-pradesh/sitapur/start-mbbs-journey-sitapur'
import TopMedicalCollegeSitapur from '@/components/mbbs/uttar-pradesh/sitapur/top-medical-college-sitapur'
import WhyChooseSitapur from '@/components/mbbs/uttar-pradesh/sitapur/why-choose-sitapur'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'

const page = () => {
  return (
    <div>
    <Navbar/>
      <SitapurHero />
      <TopMedicalCollegeSitapur />
      <WhyChooseSitapur />
      <MbbsDurationStructureSitapur />
      <MbbsEligibilitySitapur />
      <MbbsAdmissionProcessSitapur />
      <ClinicalExposureSitapur />
      <CareerAfterMBBSSitapur />
      <WhyChooseUs />
      <ExploreMoreUP />
      <StartMBBSJourneySitapur />
      <Footer/>
    </div>
  )
}

export default page
