import Hero from "@/components/about/hero"
import Stats from "@/components/about/stats"
import Values from "@/components/about/values"
import Story from "@/components/about/story"

import Navbar from "@/components/Hedaer"
import Footer from "@/components/Footer"

export const metadata = {
  title: "About Us",
  description: "Learn about our mission to connect couples with trusted wedding vendors.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
    <Navbar fixed={true} />
      <Hero />
      <Stats />
      <Values />
      <Story />
      
      <Footer/>
    </main>
  )
}
