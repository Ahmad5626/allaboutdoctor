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
import StatesList from "@/components/study-india/states-list"
import AdmissionPage from "@/components/mbbs/admissionPage"
import StartYourMBBS from "@/components/mbbs/startyourmbbs"
import Complete from "@/components/mbbs/complete"
export const metadata = {
  title: "MBBS in India – Admission, Fees & Top Colleges | All About Doctor",
  description:
    "Learn everything about MBBS in India—eligibility, fees, NEET process, top colleges and admission steps. Start your medical career with All About Doctor Education Pvt. Ltd. ",
    alternates: {
    canonical: "https://www.allaboutdoctor.in/india/mbbs",
  },
};
export default function MBBSInIndiaPage() {
  return (
    <main className="w-full">
    <Navbar/>
      <Hero />
      <StatesList />
      <Overview />
      <Eligibility />
      <EntranceExam />
      <AdmissionProcess />
      <AdmissionPage/>
      <Costs />
      <Accreditation />
      <Syllabus />
      <Universities />
      <StartYourMBBS/>
      <Advantages />
      <Career />
      <Documents />
      <Complete/>
      <FAQs />
      <WhyChooseUs />
      <Footer/>
    </main>
  )
}
