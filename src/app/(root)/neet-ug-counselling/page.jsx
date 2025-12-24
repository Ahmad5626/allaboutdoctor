

import Hero from "@/components/neet/hero"
import Highlights from "@/components/neet/highlights"
import CounsellingDates from "@/components/neet/counselling-dates"
import Eligibility from "@/components/neet/eligibility"
import CounsellingFees from "@/components/neet/counselling-fees"
import CounsellingProcedure from "@/components/neet/counselling-procedure"
import Reservation from "@/components/neet/reservation"
import Documents from "@/components/neet/documents"
import ExamOverview from "@/components/neet/exam-overview"
import StudyOpportunities from "@/components/neet/study-opportunities"
import WhyChooseUs from "@/components/neet/why-choose-us"
import FAQ from "@/components/neet/faq"
import Navbar from "@/components/Hedaer"
import Footer from "@/components/Footer"

import WhyNeetCounselling from "@/components/neet/WhyNeetCounselling"
import NeetCounsellingOverview from "@/components/neet/NeetCounsellingOverview"
import { Counter } from "@/components/neet/Couter"
import NeetCounsellingProcess from "@/components/neet/NeetCounsellingProcess"
import NeetDocumentsRequired from "@/components/neet/NeetDocumentsRequired"
import NeetReservationPolicy from "@/components/neet/NeetReservationPolicy"
import NeetStateCoverage from "@/components/neet/NeetStateCoverage"
import NeetRankPredictorAnalysis from "@/components/neet/NeetRankPredictorAnalysis"

export default function NEETUGPage() {
  return (
    <main className="w-full">
    <Navbar/>
      <Hero />
      <Counter/>
      <WhyNeetCounselling/>
      <NeetCounsellingOverview/>
      <NeetCounsellingProcess/>
      <NeetDocumentsRequired/>
      <NeetReservationPolicy/>
      <NeetStateCoverage/>
      <NeetRankPredictorAnalysis/>
      <FAQ />
      <WhyChooseUs />
      {/* <Highlights />
      <CounsellingDates />
      <Eligibility />
      <CounsellingFees />
      <CounsellingProcedure />
      <Reservation />
      <Documents />
      <ExamOverview />
      <StudyOpportunities />
      
       */}
      <Footer/>
    </main>
  )
}
