

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

export default function NEETUGPage() {
  return (
    <main className="w-full">
    <Navbar/>
      <Hero />
      <Highlights />
      <CounsellingDates />
      <Eligibility />
      <CounsellingFees />
      <CounsellingProcedure />
      <Reservation />
      <Documents />
      <ExamOverview />
      <StudyOpportunities />
      <WhyChooseUs />
      <FAQ />
      <Footer/>
    </main>
  )
}
