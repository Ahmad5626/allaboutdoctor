import AboradEligibility from '@/components/abroad-mbbs/abroad-eligility'
import AdmissionProcess from '@/components/abroad-mbbs/admission-process'
import CareerScope from '@/components/abroad-mbbs/careerScope'
import CompleteGuide from '@/components/abroad-mbbs/completeGuide'
import CountryList from '@/components/abroad-mbbs/country-list'
import CourseOverview from '@/components/abroad-mbbs/courseOverview'
import Documents from '@/components/abroad-mbbs/documents'
import EducationSystemAbroad from '@/components/abroad-mbbs/educationSystemAbroad'
import Eligibility from '@/components/abroad-mbbs/eligibility'
import FAQsAbroad from '@/components/abroad-mbbs/faqs'
import FeesStructure from '@/components/abroad-mbbs/feesStructure'
import Hero from '@/components/abroad-mbbs/hero'
import Leading from '@/components/abroad-mbbs/leading'
import MbbsAbroad from '@/components/abroad-mbbs/MbbsAbroad'
import MBBSAbroadProsCons from '@/components/abroad-mbbs/mBBSAbroadProsCons'
import MBSSyllabus from '@/components/abroad-mbbs/mBSSyllabus'
import Overview from '@/components/abroad-mbbs/overview'
import ScholarshipOptions from '@/components/abroad-mbbs/scholarshipOptions'
import TopCountries from '@/components/abroad-mbbs/topCountries'
import TopUniversities from '@/components/abroad-mbbs/topUniversities'
import UniversityRecognition from '@/components/abroad-mbbs/universityRecognition'
import WhyChooseAAD from '@/components/abroad-mbbs/whyChooseAdd'
import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import WhyChooseUs from '@/components/mbbs/why-choose-us'

import React from 'react'
export const metadata = {
  title: "MBBS Abroad – Admission, Fees & Top Universities | All About Doctor",
  description:
    "Study MBBS abroad at top NMC-approved universities. Check fees, eligibility, and admission steps. Expert guidance from All About Doctor Education Pvt. Ltd. ",
    alternates: {
      canonical: "https://www.allaboutdoctor.in/abroad/mbbs",
    }
};
const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <CountryList/>
      <Overview/>
      <MbbsAbroad/>
      <Eligibility/>
      <CourseOverview/>
      <AboradEligibility/>
      <Documents/>
      <AdmissionProcess/>
      <TopCountries/>
      <TopUniversities/>
      <FeesStructure/>
      <Leading/>
      <EducationSystemAbroad/>
      <ScholarshipOptions/>
      <CareerScope/>
      <MBSSyllabus/>
      <UniversityRecognition/>
      <MBBSAbroadProsCons/>
      <CompleteGuide/>
      <WhyChooseAAD/>
      <FAQsAbroad/>
      <WhyChooseUs/>
      <Footer/>
    </div>
  )
}

export default page
