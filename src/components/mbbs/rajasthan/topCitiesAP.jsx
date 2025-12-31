"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"


export default function TopCitiesStates() {

    const cities = [
    "Jaipur",
    "Jodhpur",
    "Udaipur",
    "Rajsamand",
    "Bikaner",
    "Ajmer",
    "Kota",
    "Jhalawar",
    "Bharatpur",
    "Pali",
    "Churu",
    "Bhilwara",
    "Dungarpur",
    "Barmer",
    "Sikar",
    "Alwar",
    "Banswara",
    "Baran",
    "Bundi",
    "Chittorgarh",
    "Dausa",
    "Dholpur",
    "Hanumangarh",
    "Jhunjhunu",
    "Karauli",
    "Nagaur",
    "Sirohi",
    "Sawai Madhopur",
    "Sri Ganganagar",
    "Jaisalmer",
    "Tonk",
  ];
  const [searchTerm, setSearchTerm] = useState("")
  const states =cities

  const filteredStates = states.filter((state) =>
    state.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section className="bg-primary text-[#f5f5f5] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold 0 fade-item">
           Top Cities for MBBS in Rajasthan{" "}
          
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto fade-item">
     Rajasthan offers multiple well-developed medical education hubs with fully equipped teaching hospitals and modern classrooms.


          </p>
        </div>

        <div className="max-w-xl mx-auto mb-10">
          <input
            type="text"
            placeholder="Search states..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 rounded-md bg-white border border-secondary text-secondary focus:outline-none focus:ring-2 focus:ring-secondry/50 placeholder-gray-500"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-4 text-white text-lg font-medium">
          {filteredStates.length > 0 ? (
            filteredStates.map((state) => (
              <Link
                key={state}
                href={`/india/${state}/mbbs`}
                className="hover:underline hover:text-white transition-colors flex items-center gap-2 fade-item"
              >
                {state}
                <ChevronRight size={16} className="opacity-60 group-hover:opacity-100" />
              </Link>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No states found.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
