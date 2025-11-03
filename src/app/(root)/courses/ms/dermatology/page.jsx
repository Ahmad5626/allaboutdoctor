import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import AdmissionProcess from '@/components/ms/dermatology/admissionProcess'
import Career from '@/components/ms/dermatology/career'
import CourseHighlights from '@/components/ms/dermatology/courseHighlights'
import EligibilityCriteria from '@/components/ms/dermatology/eligibilityCriteria'
import FAQ from '@/components/ms/dermatology/faq'

import Journey from '@/components/ms/dermatology/journey'
import RightChoice from '@/components/ms/dermatology/rightChoice'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'
import { MsHero } from '@/components/ms/dermatology/msdHero'

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
