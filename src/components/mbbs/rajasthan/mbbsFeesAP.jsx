"use client";
import { IndianRupee, Building2, GraduationCap } from "lucide-react";

export default function MbbsFeesRajasthan() {
  return (
    <section className="relative overflow-hidden py-10 bg-primary text-white">
      
      {/* layered background glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 left-1/4 h-[420px] w-[420px] rounded-full bg-secondary/30 blur-[180px]" />
        <div className="absolute bottom-0 right-1/4 h-[420px] w-[420px] rounded-full bg-white/10 blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer fade-item">
            MBBS Fees in{" "}
          Rajasthan
          </h2>

          <p className="mt-4 text-lg text-white/80  fade-item">
            Fee structure varies based on college type, quota, and seat category.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Government */}
          <div className="group relative rounded-3xl bg-white/10 backdrop-blur border border-white/20 p-8 hover:bg-white/15 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                <Building2 />
              </span>
              <h3 className="text-xl font-semibold">
                Government Medical Colleges
              </h3>
            </div>

            <p className="text-white/85 leading-relaxed">
             Affordable and subsidized
            </p>
          </div>

          {/* Private */}
          <div className="group relative rounded-3xl bg-white/10 backdrop-blur border border-white/20 p-8 hover:bg-white/15 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                <GraduationCap />
              </span>
              <h3 className="text-xl font-semibold">
                Private Medical Colleges
              </h3>
            </div>

            <p className="text-white/85 leading-relaxed">
              Moderate to higher fee range
            </p>
          </div>

          {/* NRI / Management */}
          <div className="group relative rounded-3xl bg-white/10 backdrop-blur border border-white/20 p-8 hover:bg-white/15 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                <IndianRupee />
              </span>
              <h3 className="text-xl font-semibold">
                NRI / Management Seats
              </h3>
            </div>

            <p className="text-white/85 leading-relaxed">
              Premium fee structure
            </p>
          </div>

        </div>

        {/* Bottom Info Box */}
        <div className="mt-16 max-w-4xl rounded-3xl bg-white/10 backdrop-blur border border-white/20 p-8">
          <p className="text-lg text-white/90 leading-relaxed">
            A{" "}
            
              customized fee breakdown
            
             is provided based on NEET score, seat category, and preferred city.
          </p>
        </div>

      </div>
    </section>
  );
}
