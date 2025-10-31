import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import AdmissionProcess from '@/components/md/general-surgery/admissionProcess'
import Career from '@/components/md/general-surgery/career'
import CourseHighlights from '@/components/md/general-surgery/courseHighlights'
import EligibilityCriteria from '@/components/md/general-surgery/eligibilityCriteria'
import FAQ from '@/components/md/general-surgery/faq'
import { GeneralMdHero } from '@/components/md/general-surgery/generalMdHero'
import Journey from '@/components/md/general-surgery/journey'
import RightChoice from '@/components/md/general-surgery/rightChoice'
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
