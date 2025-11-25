import AboradEligibility from '@/components/abroad-mbbs/abroad-eligility'
import AdmissionProcess from '@/components/abroad-mbbs/admission-process'
import CareerScope from '@/components/abroad-mbbs/careerScope'
import CountryList from '@/components/abroad-mbbs/country-list'
import CourseOverview from '@/components/abroad-mbbs/courseOverview'
import Documents from '@/components/abroad-mbbs/documents'
import EducationSystemAbroad from '@/components/abroad-mbbs/educationSystemAbroad'
import Eligibility from '@/components/abroad-mbbs/eligibility'
import FAQsAbroad from '@/components/abroad-mbbs/faqs'
import FeesStructure from '@/components/abroad-mbbs/feesStructure'
import Hero from '@/components/abroad-mbbs/hero'
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

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <CountryList/>
      <Overview/>
      <Eligibility/>
      <CourseOverview/>
      <AboradEligibility/>
      <Documents/>
      <AdmissionProcess/>
      <TopCountries/>
      <TopUniversities/>
      <FeesStructure/>
      <EducationSystemAbroad/>
      <ScholarshipOptions/>
      <CareerScope/>
      <MBSSyllabus/>
      <UniversityRecognition/>
      <MBBSAbroadProsCons/>
      <WhyChooseAAD/>
      <FAQsAbroad/>
      <WhyChooseUs/>
      <Footer/>
    </div>
  )
}

export default page
