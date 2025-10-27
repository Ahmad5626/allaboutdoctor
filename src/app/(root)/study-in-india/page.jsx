"use client"

import Hero from "@/components/study-india/hero"
import StatesList from "@/components/study-india/states-list"
import Services from "@/components/study-india/services"
import Navbar from "@/components/Hedaer"
import Footer from "@/components/Footer"

export default function StudyInIndiaPage() {
  return (
    <main className="min-h-screen">
    <Navbar/>
      <Hero />
      <StatesList />
      <Services />
      <Footer/>
    </main>
  )
}
