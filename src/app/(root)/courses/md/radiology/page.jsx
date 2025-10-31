import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import AdmissionProcess from '@/components/md/radiology/admissionProcess'
import Career from '@/components/md/radiology/career'
import CourseHighlights from '@/components/md/radiology/courseHighlights'
import EligibilityCriteria from '@/components/md/radiology/eligibilityCriteria'
import FAQ from '@/components/md/radiology/faq'
import { GeneralMdHero } from '@/components/md/radiology/generalMdHero'
import Journey from '@/components/md/radiology/journey'
import RightChoice from '@/components/md/radiology/rightChoice'
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
