import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import AdmissionProcess from '@/components/ms/paediatrics/admissionProcess'
import Career from '@/components/ms/paediatrics/career'
import CourseHighlights from '@/components/ms/paediatrics/courseHighlights'
import EligibilityCriteria from '@/components/ms/paediatrics/eligibilityCriteria'
import FAQ from '@/components/ms/paediatrics/faq'

import Journey from '@/components/ms/paediatrics/journey'
import RightChoice from '@/components/ms/paediatrics/rightChoice'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'
import { MsHero } from '@/components/ms/paediatrics/msdHero'

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
