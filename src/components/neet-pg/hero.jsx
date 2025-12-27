"use client"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"



export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      
      {/* Background glow */}
      <div className="" />
      <div className="" />

      <div className="relative mx-auto max-w-7xl px-6 py-10">
        
        {/* Hero Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center-safe">
          
          {/* Left */}
          <div className="space-y-6">
           <span
                className="inline-flex items-center rounded-full border border-border/60 bg-card px-3 py-1 text-xs font-medium text-muted-foreground animate-fade-up"
                style={{ animationDelay: "40ms" }}
              >
                All About Doctor Education Pvt Ltd
              </span>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer fade-item">
            NEET PG Counselling Complete Guidance for MD, MS & PG Diploma Admissions
            </h1>

            <h2 className="text-lg md:text-xl text-primary font-semibold fade-item"> Expert Counselling Support to Secure the Right Postgraduate Medical Seat </h2>

            <h2 className="mt-4 max-w-2xl text-sm/6 md:text-base/7 text-muted-foreground fade-item"> NEET PG counselling is the centralized admission process through which eligible doctors secure seats in MD, MS, and PG Diploma courses across India. Qualifying NEET PG alone does not guarantee admission—strategic counselling, correct choice filling, and timely decision-making are critical to securing the best possible postgraduate medical seat. </h2>

            <div className="flex flex-col gap-3 sm:flex-row animate-fade-up" style={{ animationDelay: "260ms" }}>
                <Link
                  href="#get-started"
                  className="mt-6 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Get Your Free Plan
                </Link>
                <Link
                  href="#talk"
                  className="mt-6 px-6 py-3 rounded-lg bg-gradient-to-r from-white to-white text-primary font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Talk to a Counsellor
                </Link>
              </div>
          </div>

          {/* Right Image Card */}
           <div className="pt-10 md:pt-0">
            <img
              src="../assets/img/abroad.jpg"
              alt="NEET PG Counselling"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>

      
      </div>
    </section>
  )
}

