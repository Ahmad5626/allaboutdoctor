import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import AdmissionProcess from '@/components/ms/general-surgery/admissionProcess'
import Career from '@/components/ms/general-surgery/career'
import CourseHighlights from '@/components/ms/general-surgery/courseHighlights'
import EligibilityCriteria from '@/components/ms/general-surgery/eligibilityCriteria'
import FAQ from '@/components/ms/general-surgery/faq'

import Journey from '@/components/ms/general-surgery/journey'
import RightChoice from '@/components/ms/general-surgery/rightChoice'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'
import { MsHero } from '@/components/ms/general-surgery/msdHero'

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
