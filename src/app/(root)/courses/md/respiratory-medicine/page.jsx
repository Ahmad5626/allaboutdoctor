import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import AdmissionProcess from '@/components/md/respiratory-medicine/admissionProcess'
import Career from '@/components/md/respiratory-medicine/career'
import CourseHighlights from '@/components/md/respiratory-medicine/courseHighlights'
import EligibilityCriteria from '@/components/md/respiratory-medicine/eligibilityCriteria'
import FAQ from '@/components/md/respiratory-medicine/faq'
import { GeneralMdHero } from '@/components/md/respiratory-medicine/generalMdHero'
import Journey from '@/components/md/respiratory-medicine/journey'
import RightChoice from '@/components/md/respiratory-medicine/rightChoice'
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
      <FAQ/>
      <Journey/>
      <Footer/>

    </div>
  )
}

export default page
