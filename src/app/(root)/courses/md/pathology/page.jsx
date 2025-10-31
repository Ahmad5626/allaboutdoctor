import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import AdmissionProcess from '@/components/md/pathology/admissionProcess'
import Career from '@/components/md/pathology/career'
import CourseHighlights from '@/components/md/pathology/courseHighlights'
import EligibilityCriteria from '@/components/md/pathology/eligibilityCriteria'
import FAQ from '@/components/md/pathology/faq'
import { GeneralMdHero } from '@/components/md/pathology/generalMdHero'
import Journey from '@/components/md/pathology/journey'
import RightChoice from '@/components/md/pathology/rightChoice'
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
