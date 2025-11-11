import Hero from "@/components/mbbs/hero"
import Overview from "@/components/mbbs/overview"
import Eligibility from "@/components/mbbs/eligibility"
import EntranceExam from "@/components/mbbs/entrance-exam"
import AdmissionProcess from "@/components/mbbs/admission-process"
import Costs from "@/components/mbbs/costs"
import Accreditation from "@/components/mbbs/accreditation"
import Syllabus from "@/components/mbbs/syllabus"
import Universities from "@/components/mbbs/universities"
import Advantages from "@/components/mbbs/advantages"
import Career from "@/components/mbbs/career"
import Documents from "@/components/mbbs/documents"
import FAQs from "@/components/mbbs/faqs"
import WhyChooseUs from "@/components/mbbs/why-choose-us"
import Navbar from "@/components/Hedaer"
import Footer from "@/components/Footer"
import StateMedicalEducation from "@/components/mbbs/stateMedicalEducation"

export default function MBBSInIndiaPage() {
  return (
    <main className="w-full">
    <Navbar/>
      <Hero />
      <Overview />
      <Eligibility />
      <EntranceExam />
      <AdmissionProcess />
      <Costs />
      <Accreditation />
      <Syllabus />
      <Universities />
      <Advantages />
      <Career />
      <Documents />
      <FAQs />
      <StateMedicalEducation/>
      <WhyChooseUs />
      <Footer/>
    </main>
  )
}
