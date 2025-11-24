"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import STUDY_INDIA_DATA from "@/app/utils/study-india-data"

export default function StatesList() {
  const [searchTerm, setSearchTerm] = useState("")
  const states = STUDY_INDIA_DATA.states

  const filteredStates = states.filter((state) =>
    state.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section className="bg-primary text-[#f5f5f5] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-10">
          <h1 className="text-4xl font-semibold">
            Medical Colleges Across{" "}
            <span className="text-secondary">Indian States</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Select a state from the list below to find top-ranked medical
            institutions and admission information.
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
                key={state.slug}
                href={`/india/${state.slug}/mbbs`}
                className="hover:underline hover:text-white transition-colors flex items-center gap-2"
              >
                {state.name}
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
