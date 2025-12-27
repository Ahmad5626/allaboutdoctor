import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import CounsellingProcedure from '@/components/neet-pg/counselling-procedure'
import CounsellingProcess from '@/components/neet-pg/counsellingProcess'
import Documents from '@/components/neet-pg/documents'
import Eligibility from '@/components/neet-pg/eligibility'
import ExamOverview from '@/components/neet-pg/exam-overview'
import FAQ from '@/components/neet-pg/faq'
import Hero from '@/components/neet-pg/hero'
import Highlights from '@/components/neet-pg/highlights'
import ImportantDates from '@/components/neet-pg/important-dates'
import KeyHighlights from '@/components/neet-pg/keyHighlights'
import PreparationGuidance from '@/components/neet-pg/preparation-guidance'
import SeatsReservation from '@/components/neet-pg/seats-reservation'
import StudyOpportunities from '@/components/neet-pg/study-opportunities'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'
import Packages from '@/components/neet-pg/packages'
import { Counter } from '@/components/neet-pg/Couter'
import WhyNeetCounselling from '@/components/neet-pg/WhyNeetCounselling'
import EligibilityPg from '@/components/neet-pg/eligibility'
import NeetCounsellingOverviewPg from '@/components/neet-pg/NeetCounsellingOverview'
import NeetCounsellingProcessPg from '@/components/neet-pg/NeetCounsellingProcess'
import NeetDocumentsRequiredPg from '@/components/neet-pg/NeetDocumentsRequired'
import NeetReservationPolicyPg from '@/components/neet-pg/NeetReservationPolicy'
import NeetStateCoveragePg from '@/components/neet-pg/NeetStateCoverage'
import NeetRankPredictorPg from '@/components/neet-pg/NeetRankPredictorAnalysis'
import WhyChooseUsPg from '@/components/neet-pg/why-choose-us'

const page = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Counter/>
    <WhyNeetCounselling/>
    <EligibilityPg/>
<NeetCounsellingOverviewPg/>
<NeetCounsellingProcessPg/>
<NeetDocumentsRequiredPg/>
 <NeetReservationPolicyPg/>
  <NeetStateCoveragePg/>
   <NeetRankPredictorPg/> 
        {/* 
          
          
         
         
         */}
    {/* <Highlights />
     
      <CounsellingProcess/>
      <KeyHighlights/>
      
      <WhyChooseUs /> */}
      {/* <Packages/> */}
      <FAQ />
<WhyChooseUsPg/>

    <Footer/>
      
    </div>
  )
}

export default page
