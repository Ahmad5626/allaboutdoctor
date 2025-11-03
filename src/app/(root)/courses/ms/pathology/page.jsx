import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import AdmissionProcess from '@/components/ms/pathology/admissionProcess'
import Career from '@/components/ms/pathology/career'
import CourseHighlights from '@/components/ms/pathology/courseHighlights'
import EligibilityCriteria from '@/components/ms/pathology/eligibilityCriteria'
import FAQ from '@/components/ms/pathology/faq'

import Journey from '@/components/ms/pathology/journey'
import RightChoice from '@/components/ms/pathology/rightChoice'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'
import { MsHero } from '@/components/ms/pathology/msdHero'

const page = () => {
  return (
    <div>
      <Navbar/>
      <MsHero/>
      <RightChoice/>
      <EligibilityCriteria/>
      <CourseHighlights/>
      <AdmissionProcess/>
      <Career/>
      <WhyChooseUs/>
      <FAQ/>
      <Journey/>
      <Footer/>

    </div>
  )
}

export default page
