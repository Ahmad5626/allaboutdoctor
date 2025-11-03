import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import AdmissionProcess from '@/components/ms/radiology/admissionProcess'
import Career from '@/components/ms/radiology/career'
import CourseHighlights from '@/components/ms/radiology/courseHighlights'
import EligibilityCriteria from '@/components/ms/radiology/eligibilityCriteria'
import FAQ from '@/components/ms/radiology/faq'

import Journey from '@/components/ms/radiology/journey'
import RightChoice from '@/components/ms/radiology/rightChoice'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'
import { MsHero } from '@/components/ms/radiology/msdHero'

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
