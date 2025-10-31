import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import AdmissionProcess from '@/components/md/general-medicine/admissionProcess'
import Career from '@/components/md/general-medicine/career'
import CourseHighlights from '@/components/md/general-medicine/courseHighlights'
import EligibilityCriteria from '@/components/md/general-medicine/eligibilityCriteria'
import FAQ from '@/components/md/general-medicine/faq'
import { GeneralMdHero } from '@/components/md/general-medicine/generalMdHero'
import Journey from '@/components/md/general-medicine/journey'
import RightChoice from '@/components/md/general-medicine/rightChoice'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
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
