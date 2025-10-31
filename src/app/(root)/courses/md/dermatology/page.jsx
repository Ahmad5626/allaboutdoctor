import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import AdmissionProcess from '@/components/md/dermatology/admissionProcess'
import Career from '@/components/md/dermatology/career'
import CourseHighlights from '@/components/md/dermatology/courseHighlights'
import EligibilityCriteria from '@/components/md/dermatology/eligibilityCriteria'
import FAQ from '@/components/md/dermatology/faq'
import { GeneralMdHero } from '@/components/md/dermatology/generalMdHero'
import Journey from '@/components/md/dermatology/journey'
import RightChoice from '@/components/md/dermatology/rightChoice'
import React from 'react'

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
