"use client"

import Image from "next/image"
import { useEffect, useState } from "react";

export default function HeroSection() {

    const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  
useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
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
     

      {/* POPUP BACKDROP */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          {/* POPUP BOX */}
          <div className="bg-white rounded-xl max-w-4xl w-full mx-4 p-6 md:p-10 relative">
            
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-gray-600 text-xl font-bold"
            >
              ✕
            </button>

            <div className="grid md:grid-cols-2 gap-10">

              {/* LEFT SIDE */}
              <div>
                <ul className="space-y-4 text-[17px] text-blue-900">
                  <li>✔ Expert Guidance for MBBS Admissions</li>
                  <li>✔ University Selection Based on Budget & NEET Score</li>
                  <li>✔ Complete Support: Documentation, Visa & Hostel</li>
                  <li>✔ Personal Counselling & Student Assistance</li>
                </ul>

                {/* Doctors Image */}
                <div className="flex gap-4 mt-8">
                  <img
                    src="/assets/img/man-1.png"
                    alt="doctor male"
                    className="w-40 rounded-md"
                  />
                  <img
                    src="/assets/img/girl-1.png"
                    alt="doctor female"
                    className=" rounded-md"
                  />
                </div>
              </div>

              {/* RIGHT SIDE FORM */}
              <div>

                <h2 className="text-3xl font-bold text-orange-600 leading-tight">
                  START YOUR MBBS <br /> JOURNEY WITH CONFIDENCE
                </h2>

                <p className="mt-1 text-sm text-blue-800">
                  SECURE ADMISSION IN TOP MEDICAL UNIVERSITIES IN INDIA & ABROAD
                </p>

                {/* Icons Row */}
                <div className="grid grid-cols-2 gap-4 mt-4 text-center text-xs text-blue-800">
                  <div>
                    🎓 <br /> 15,000+ Students Guided
                  </div>
                  <div>
                    🛡️ <br /> Trusted Since 2015
                  </div>
                  <div>
                    🌍 <br /> Official Tie-Ups With Universities
                  </div>
                  <div>
                    ☎️ <br /> Dedicated Counsellor Support
                  </div>
                </div>

                {/* FORM */}
                <div className="mt-6 space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-orange-400 rounded-md outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="w-full px-4 py-3 border border-orange-400 rounded-md outline-none"
                  />
                </div>

                {/* Checkbox */}
                <label className="flex items-start gap-3 mt-5 text-sm text-blue-800">
                  <input type="checkbox" className="mt-1 w-5 h-5 accent-orange-500" />
                  <span>
                    I agree to be contacted by All About Doctor Education through call, WhatsApp, and SMS for admission guidance.
                  </span>
                </label>

                {/* Submit Button */}
                <button className="w-full mt-6 bg-orange-500 text-white py-3 rounded-md font-semibold text-lg">
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
