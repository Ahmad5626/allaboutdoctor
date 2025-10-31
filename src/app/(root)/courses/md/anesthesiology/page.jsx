import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import AdmissionProcess from '@/components/md/anesthesiology/admissionProcess'
import Career from '@/components/md/anesthesiology/career'
import CourseHighlights from '@/components/md/anesthesiology/courseHighlights'
import EligibilityCriteria from '@/components/md/anesthesiology/eligibilityCriteria'
import FAQ from '@/components/md/anesthesiology/faq'
import { GeneralMdHero } from '@/components/md/anesthesiology/generalMdHero'
import Journey from '@/components/md/anesthesiology/journey'
import RightChoice from '@/components/md/anesthesiology/rightChoice'
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
