"use client"

import Image from "next/image"
import { useEffect, useState } from "react";

export default function HeroSection() {
 const [show, setShow] = useState(false);

  // Auto open after 3 seconds
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(t);
  }, []);
  return (

    <>

   
    <main className="relative overflow-hidden">
      {/* Background accent (subtle, solid + light vignette) */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        {/* Soft vignette using tokens */}
        <div className="absolute inset-0 bg-background" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            background: "radial-gradient(700px 340px at 80% 25%, currentColor, transparent 60%)",
            color: "hsl(var(--primary))",
          }}
        />
      </div>

      <section className="mx-auto max-w-7xl px-4 py-12 md:py-10">
        <div className="grid grid-cols-1  gap-10 lg:grid-cols-2">
          {/* LEFT: Copy & CTAs */}
          <div className="space-y-6">
            <span
              className="inline-flex items-center rounded-full border border-border/60 bg-card px-3 py-1 text-xs font-medium text-muted-foreground animate-fade-up"
              style={{ animationDelay: "40ms" }}
            >
            All About Doctor Education Pvt Ltd
            </span>

            <h1
              className="text-pretty text-4xl font-semibold leading-tight sm:text-5xl animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
            From NEET to NExT <span className="text-primary">Your Global Medical</span> Future Begins Here

            </h1>

            <p
              className="max-w-xl text-muted-foreground leading-relaxed animate-fade-up"
              style={{ animationDelay: "180ms" }}
            >
              At <b>All About Doctor</b> , we redefine the medical education journey. With Doctor-Led Mentorship and <b>Smart Education Technology</b>, we empower aspiring medical professionals to navigate every milestone with confidence — from NEET to NExT, in India or abroad.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row animate-fade-up" style={{ animationDelay: "260ms" }}>
              <a
                href="#get-started"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Get Your Free Plan
              </a>
              <a
                href="#talk"
                className="inline-flex items-center justify-center rounded-xl border border-input bg-background px-5 py-3 text-sm font-medium text-foreground hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Talk to a Counsellor
              </a>
            </div>

            {/* Trust copy */}
            <div className="space-y-3 animate-fade-up" style={{ animationDelay: "320ms" }}>
              <p className="text-sm text-muted-foreground">95% Admission Success Rate</p>
              <div className="flex flex-wrap items-center gap-3">
                {/* Compact trust pills instead of only logos */}
                <MetricPill label="850+ Partner Universities" />
                <MetricPill label="12+ Countries" />
                <MetricPill label="10000+ Students Guided" />
              </div>
            </div>

            {/* Partner logos */}
            {/* <div className="animate-fade-up" style={{ animationDelay: "380ms" }}>
              <p className="mb-3 text-xs font-medium text-muted-foreground">Proudly associated with</p>
              <div className="flex items-center gap-6 opacity-80">
                <Image src="/university-crest.jpg" alt="University Crest" width={80} height={28} />
                <Image src="/british-council-logo.jpg" alt="British Council" width={120} height={28} />
                <Image src="/icef-logo.jpg" alt="ICEF" width={80} height={28} />
              </div>
            </div> */}
          </div>

          {/* RIGHT: Visual Composition */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-card p-6 shadow-md ring-1 ring-border md:p-8">
              {/* rotating ring accent */}
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-60 w-60 rounded-full border-2 border-primary/30 animate-spin-slow"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -left-6 bottom-10 h-24 w-24 rounded-full border border-primary/20"
                aria-hidden="true"
              />

              {/* Main Illustration */}
              <div className="relative z-10 mt-2 flex items-end justify-center h-[450px]">
               <img
                  src="/assets/img/desktopGirlImg.webp"
                  alt="Student with laptop and AI assistant"
                 
                  className="max-w-full animate-float drop-shadow-md w-full h-full object-cover rounded-3xl"
                  
                />
              </div>

              {/* Floating badges */}
              <FloatingBadge className="left-4 top-4" delay="120ms" text="1:1 Live Meeting " />
              <FloatingBadge className="right-4 top-20" delay="220ms" text="Scholarship Guidance" />
            </div>
          </div>
        </div>
      </section>

      {/* Updated animation set */}
      <style jsx>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes floaty {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-fade-up { opacity: 0; animation: fadeUp 700ms ease forwards; }
        .animate-float { animation: floaty 6s ease-in-out infinite; }
        .animate-spin-slow { animation: spinSlow 24s linear infinite; }
      `}</style>
    </main>

    {/* OPEN BUTTON */}
     

       {show && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">

          {/* POPUP BOX */}
          <div className="bg-white rounded-2xl max-w-6xl w-full shadow-2xl overflow-hidden relative animate-fadeIn">
            <button
              onClick={() => setShow(false)}
              className="absolute top-3 right-3 bg-black/70 text-white w-8 h-8 rounded-full flex items-center justify-center text-xl z-50"
            >
              ×
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              
              {/* LEFT SIDE EXACT AS YOUR DESIGN */}
              <div className="p-8 flex flex-col justify-between">
                
                {/* Bullet Points */}
                <div className="space-y-4 text-[#003b99] font-semibold text-lg">
                  <p className="flex items-start gap-2">
                    <span className="text-[#0057ff] text-2xl">✔</span> Expert Guidance for MBBS Admissions
                  </p>
                  <p className="flex items-start gap-2 ml-6">
                    <span className="text-[#0057ff] text-2xl">✔</span> University Selection Based on Budget & NEET Score
                  </p>
                  <p className="flex items-start gap-2 ml-10">
                    <span className="text-[#0057ff] text-2xl">✔</span> Complete Support: Documentation, Visa & Hostel
                  </p>
                  <p className="flex items-start gap-2 ml-16">
                    <span className="text-[#0057ff] text-2xl">✔</span> Personal Counselling & Student Assistance
                  </p>
                </div>

                {/* Doctor Images */}
                <div className=" mt-8 flex  justify-center">
                  <img
                    src="/assets/img/man-1.png"
                    className="w-56 md:w-64  z-10"
                  />
                  <img
                    src="/assets/img/girl-1.png"
                    className="w-44 md:w-54 object-cover  bottom-0"
                  />
                </div>
              </div>

              {/* RIGHT SIDE EXACT AS YOUR DESIGN */}
              <div className="p-8">
                <h2 className="text-[34px] md:text-[34px] font-bold text-[#f68b1e] leading-tight text-center">
                  START YOUR MBBS <br /> JOURNEY WITH CONFIDENCE
                </h2>

                <p className="mt-3 text-[#003b99] font-semibold text-sm border-b pb-2">
                  SECURE ADMISSION IN TOP MEDICAL UNIVERSITIES IN INDIA & ABROAD
                </p>

                {/* Icons Row */}
                <p className="text-center mt-4 text-[14px] font-semibold text-[#003b99]">
                  With All About Doctor Global Medical Admission Program
                </p>

                <div className="mt-3 grid grid-cols-4 gap-3 text-center text-[10px] font-semibold text-[#003b99]">
                  <div>
                    <img src="/assets/img/popup-icon-1.png" className="w-8 mx-auto" />
                    15,000+ <br /> STUDENTS GUIDED
                  </div>
                  <div>
                    <img src="/assets/img/popup-icon-2.png" className="w-8 mx-auto" />
                    TRUSTED SINCE <br /> 2015
                  </div>
                  <div>
                    <img src="/assets/img/popup-icon-3.png" className="w-8 mx-auto" />
                    OFFICIAL TIE-UPS <br /> TOP UNIVERSITIES
                  </div>
                  <div>
                    <img src="/assets/img/popup-icon-4.png" className="w-8 mx-auto" />
                    DEDICATED <br /> COUNSELLOR SUPPORT
                  </div>
                </div>

                {/* Form */}
                <div className="mt-6 space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full border border-[#f68b1e] p-3 rounded-xl text-[#003b99] font-semibold"
                  />
                  <input
                    type="text"
                    placeholder="Mobile"
                    className="w-full border border-[#f68b1e] p-3 rounded-xl text-[#003b99] font-semibold"
                  />
                </div>

                {/* Checkbox */}
                <div className="mt-4 flex gap-3">
                  <div className="bg-[#f68b1e] w-6 h-6 rounded flex items-center justify-center text-white font-bold">✔</div>
                  <p className="text-[13px] text-[#003b99]">
                    I agree to be contacted by All About Doctor Education through call, WhatsApp, and SMS for admission guidance.
                  </p>
                </div>

                {/* Button */}
                <button className="mt-6 w-full bg-[#f68b1e] hover:bg-[#e27a17] text-white font-bold py-3 rounded-xl text-lg">
                  GET FREE COUNSELLING →
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
     </>
  )
}

// New small UI helpers for the redesigned hero
function MetricPill({ label }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground/80">
      {label}
    </span>
  )
}

function FloatingBadge({ text, className = "", delay = "0ms" }) {
  return (
    <div
      className={`absolute z-10 inline-flex items-center gap-2 rounded-xl border border-border bg-background/90 px-3 py-2 text-xs font-medium text-foreground shadow backdrop-blur animate-fade-up ${className}`}
      style={{ animationDelay: delay }}
    >
      <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary" aria-hidden="true" />
      {text}
    </div>
  )
}
