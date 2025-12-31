"use client";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function MbbsRajasthanCTAWhite() {
  return (
    <section className="relative bg-white py-5 overflow-hidden">

      {/* subtle background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(circle_at_20%_10%,rgba(1,52,158,0.06),transparent_40%)]" />
        <div className="absolute bottom-0 right-0 h-full w-full bg-[radial-gradient(circle_at_80%_80%,rgba(246,139,30,0.08),transparent_45%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Main Card */}
        <div className="grid lg:grid-cols-2 gap-16 items-center rounded-[36px] 
          border border-slate-200 bg-white px-10 py-16
          shadow-[0_40px_90px_rgba(0,0,0,0.08)]">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer fade-item">
              Start Your{" "}
              MBBS Journey
              in Rajasthan
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Begin your medical career with expert guidance and personalized counselling.
            </p>

            {/* CTA Button */}
            <div className="mt-10">
              <button className="group relative inline-flex items-center gap-4 
                rounded-full border-2 border-primary px-10 py-4
                text-white font-semibold text-lg overflow-hidden
                transition-all duration-300 hover:text-white hover:scale-105 bg-gradient-to-r from-primary to-secondary">

                {/* fill animation */}
               

                {/* glow */}
                <span className="absolute 
                  shadow-[0_0_40px_rgba(1,52,158,0.5)] " />

                <span className="relative z-10">
                  Request Your Free MBBS Admission Plan Now
                </span>

                <ArrowRight className="relative z-10 transition-transform duration-300 group-hover:translate-x-2" />
              </button>
            </div>
          </div>

          {/* RIGHT FEATURES */}
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Free MBBS Counselling",
              "NEET Rank-Based College Mapping",
              "City-Wise Admission Support",
              "Documentation & Reporting Assistance",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 rounded-2xl 
                  border border-slate-200 bg-slate-50 p-6
                  hover:border-primary/40 hover:bg-white transition"
              >
                <CheckCircle className="h-6 w-6 text-secondary shrink-0 mt-1" />
                <span className="text-slate-700 text-sm md:text-base leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
