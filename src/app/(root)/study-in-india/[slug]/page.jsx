
import Link from "next/link"
import STUDY_INDIA_DATA from "@/app/utils/study-india-data"
import { ChevronRight } from "lucide-react"
import { use } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/Hedaer"
import Footer from "@/components/Footer"

export default function StatePage({ params }) {
   const { slug } = use(params) // ✅ unwrap the Promi
const state = STUDY_INDIA_DATA.states.find((state) => state.slug === slug)

  if (!state) {
    return (
      <main className="min-h-screen p-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-foreground">State not found</p>
        </div>
      </main>
    )
  }

  return (
 <>
 <Navbar/>
     <main className=" ">
      <div className="">
        {/* Breadcrumb */}
        
      <div className=" md:flex  justify-between items-center mx-auto max-w-7xl px-6 py-10 md:py-10">
        <div className="space-y-6">
          <div className="space-y-3">
            <span
              className="inline-flex items-center rounded-full border border-border/60 bg-card px-3 py-1 text-xs font-medium text-muted-foreground animate-fade-up"
              style={{ animationDelay: "40ms" }}
            >
            All About Doctor Education Pvt Ltd
            </span>
             <h1  className="text-pretty text-4xl font-semibold leading-tight sm:text-5xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}>
            Study <span className="text-primary"> in {state.name}</span>
          </h1>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

       
         <div className="pt-0 space-y-4 max-w-3xl">
            <p className="mt-4 max-w-2xl text-sm/6 md:text-base/7 text-muted-foreground">
              
            Explore world-class medical education across India's top universities. From government institutions to
            private colleges, find your perfect medical school with All About Doctor Education.
         
           
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
          <div className="flex items-center gap-2 border border-border rounded-lg px-4 py-2">
            <span className="text-2xl font-bold text-primary">700+</span>
            <span className="text-sm text-muted-foreground">NMC-Approved Colleges</span>
          </div>
          <div className="flex items-center gap-2 border border-border rounded-lg px-4 py-2">
            <span className="text-2xl font-bold text-primary">10,000+</span>
            <span className="text-sm text-muted-foreground">Successful Students</span>
          </div>
          <div className="flex items-center gap-2 border border-border rounded-lg px-4 py-2">
            <span className="text-2xl font-bold text-primary">95%</span>
            <span className="text-sm text-muted-foreground">Admission Success Rate</span>
          </div>
        </div>
        </div>
        <div className="pt-10 md:pt-0">
    <img src="https://allaboutdoctor.in/include/img/mbbs%20in%20india%20new.jpg" className="md:w-[500px]" alt="" />
        </div>
      </div>
 

        {/* Cities Grid */}
      <div className="bg-primary text-[#f5f5f5] py-16">
        <div className="text-center space-y-4 mb-10">
          <h1 className="text-4xl font-semibold">
            Medical Colleges Across{" "}
            <span className="text-secondary">{state.name}</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Select a state from the list below to find top-ranked medical
            institutions and admission information.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  mx-auto max-w-7xl   md:py-10">
      
      {state.cities.map((city,i) => (
        <div
          key={i}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href={`/study-in-india/${state.slug}/${city.slug}`}
            className="group block border border-border rounded-2xl p-6 bg-card  shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
            
              <div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {city.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Discover colleges in {city.name}
                </p>
              </div>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>

            <div className="mt-4 border-t border-border pt-4">
              <p className="text-sm text-muted-foreground">
                Explore top institutes, courses, and more in {city.name}.
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
      </div>
      </div>
    </main>
    <Footer/>
 </>
  )
}
