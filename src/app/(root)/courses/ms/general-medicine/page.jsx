import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import AdmissionProcess from '@/components/ms/general-medicine/admissionProcess'
import Career from '@/components/ms/general-medicine/career'
import CourseHighlights from '@/components/ms/general-medicine/courseHighlights'
import EligibilityCriteria from '@/components/ms/general-medicine/eligibilityCriteria'
import FAQ from '@/components/ms/general-medicine/faq'

import Journey from '@/components/ms/general-medicine/journey'
import RightChoice from '@/components/ms/general-medicine/rightChoice'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'
import { MsHero } from '@/components/ms/general-medicine/msdHero'

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
