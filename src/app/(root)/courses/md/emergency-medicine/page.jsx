import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import AdmissionProcess from '@/components/md/emergency-medicine/admissionProcess'
import Career from '@/components/md/emergency-medicine/career'
import CourseHighlights from '@/components/md/emergency-medicine/courseHighlights'
import EligibilityCriteria from '@/components/md/emergency-medicine/eligibilityCriteria'
import FAQ from '@/components/md/emergency-medicine/faq'
import { GeneralMdHero } from '@/components/md/emergency-medicine/generalMdHero'
import Journey from '@/components/md/emergency-medicine/journey'
import RightChoice from '@/components/md/emergency-medicine/rightChoice'
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
