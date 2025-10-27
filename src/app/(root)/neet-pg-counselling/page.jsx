import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import CounsellingProcedure from '@/components/neet-pg/counselling-procedure'
import Documents from '@/components/neet-pg/documents'
import Eligibility from '@/components/neet-pg/eligibility'
import ExamOverview from '@/components/neet-pg/exam-overview'
import FAQ from '@/components/neet-pg/faq'
import Hero from '@/components/neet-pg/hero'
import Highlights from '@/components/neet-pg/highlights'
import ImportantDates from '@/components/neet-pg/important-dates'
import PreparationGuidance from '@/components/neet-pg/preparation-guidance'
import SeatsReservation from '@/components/neet-pg/seats-reservation'
import StudyOpportunities from '@/components/neet-pg/study-opportunities'
import WhyChooseUs from '@/components/neet/why-choose-us'
import React from 'react'

const page = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Highlights />
      <ImportantDates />
      <Eligibility />
      <CounsellingProcedure />
      <SeatsReservation />
      <Documents />
      <ExamOverview />
      <PreparationGuidance />
      <StudyOpportunities />
      <WhyChooseUs />
      <FAQ />
    <Footer/>
      
    </div>
  )
}

export default page
