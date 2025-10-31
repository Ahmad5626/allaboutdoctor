import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import AdmissionProcess from '@/components/md/paediatrics/admissionProcess'
import Career from '@/components/md/paediatrics/career'
import CourseHighlights from '@/components/md/paediatrics/courseHighlights'
import EligibilityCriteria from '@/components/md/paediatrics/eligibilityCriteria'
import FAQ from '@/components/md/paediatrics/faq'
import { GeneralMdHero } from '@/components/md/paediatrics/generalMdHero'
import Journey from '@/components/md/paediatrics/journey'
import RightChoice from '@/components/md/paediatrics/rightChoice'
import React from 'react'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
const page = () => {
  return (
    <div>
      <Navbar/>
      <GeneralMdHero/>
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
