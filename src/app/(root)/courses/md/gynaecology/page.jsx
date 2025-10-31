import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import AdmissionProcess from '@/components/md/gynaecology/admissionProcess'
import Career from '@/components/md/gynaecology/career'
import CourseHighlights from '@/components/md/gynaecology/courseHighlights'
import EligibilityCriteria from '@/components/md/gynaecology/eligibilityCriteria'
import FAQ from '@/components/md/gynaecology/faq'
import { GeneralMdHero } from '@/components/md/gynaecology/generalMdHero'
import Journey from '@/components/md/gynaecology/journey'
import RightChoice from '@/components/md/gynaecology/rightChoice'
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
