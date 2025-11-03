import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import AdmissionProcess from '@/components/ms/gynaecology/admissionProcess'
import Career from '@/components/ms/gynaecology/career'
import CourseHighlights from '@/components/ms/gynaecology/courseHighlights'
import EligibilityCriteria from '@/components/ms/gynaecology/eligibilityCriteria'
import FAQ from '@/components/ms/gynaecology/faq'

import Journey from '@/components/ms/gynaecology/journey'
import RightChoice from '@/components/ms/gynaecology/rightChoice'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'
import { MsHero } from '@/components/ms/gynaecology/msdHero'

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
