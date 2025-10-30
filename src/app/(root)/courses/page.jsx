"use client"

import CoursesHero from "@/components/courses/courses-hero"
import CoursesUndergraduate from "@/components/courses/courses-undergraduate"
import CoursesPostgraduate from "@/components/courses/courses-postgraduate"
import CoursesWhyChoose from "@/components/courses/courses-why-choose"
import CoursesCTA from "@/components/courses/courses-cta"
import Navbar from "@/components/Hedaer"
import Footer from "@/components/Footer"
import WhyChooseUs from "@/components/mbbs/why-choose-us"
import Journey from "@/components/courses/journey"


export default function Page() {
  return (
    <main className="min-h-screen bg-background">
    <Navbar/>
      <CoursesHero />
      <CoursesUndergraduate />
      <CoursesPostgraduate />
      <WhyChooseUs/>
      <Journey     />
      <Footer/>
    </main>
  )
}

