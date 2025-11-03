import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import AdmissionProcess from '@/components/ms/anesthesiology/admissionProcess'
import Career from '@/components/ms/anesthesiology/career'
import CourseHighlights from '@/components/ms/anesthesiology/courseHighlights'
import EligibilityCriteria from '@/components/ms/anesthesiology/eligibilityCriteria'
import FAQ from '@/components/ms/anesthesiology/faq'

import Journey from '@/components/ms/anesthesiology/journey'
import RightChoice from '@/components/ms/anesthesiology/rightChoice'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'
import { MsHero } from '@/components/ms/anesthesiology/msdHero'

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
