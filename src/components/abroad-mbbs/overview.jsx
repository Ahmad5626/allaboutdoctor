"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Overview() {
  const [activePhase, setActivePhase] = useState(0);

  const highlights = [
    { label: "Affordable Education", value: "Low Tuition Fees", icon: "💰" },
    { label: "Global Recognition", value: "NMC, WHO, WFME Approved", icon: "🌍" },
    { label: "No Donation", value: "100% Transparent Admission", icon: "✅" },
    { label: "Medium", value: "English", icon: "🗣️" },
  ];

  const benefits = [
    "Affordable tuition fees and cost of living compared to private Indian medical colleges.",
    "Globally recognized universities approved by NMC, WHO, ECFMG, WFME, and UNESCO.",
    "No donation or capitation fees required.",
    "English-medium instruction throughout the program.",
    "International exposure and hands-on medical training with global peers.",
    "High FMGE/NExT pass rates from reputed universities.",
  ];

  const nextPhase = () => {
    setActivePhase((prev) => (prev + 1) % benefits.length);
  };

  const prevPhase = () => {
    setActivePhase((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

  return (
    <section className="w-full">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        {/* Header Section */}
        <div className="space-y-4">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}
          >
            Why Pursue <span className="text-primary">MBBS Abroad?</span>
          </h1>
          <div className="h-1 w-20 bg-primary rounded-full"></div>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Every year, thousands of Indian students choose to study medicine overseas because of the benefits it offers:
          </p>
        </div>

        {/* Highlights Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="border border-border rounded-lg p-6 space-y-3 hover:border-primary transition-colors duration-300"
            >
              <div className="text-3xl">{item.icon}</div>
              <p className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wide">
                {item.label}
              </p>
              <p className="text-lg md:text-2xl font-bold text-primary">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-foreground">Top Benefits</h3>

          <div className="relative">
            {/* Benefit Slider Container */}
            <div className="overflow-hidden">
              <div className="transition-all duration-500 ease-out">
                <div className="border border-border rounded-lg p-8 md:p-10 space-y-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-2xl md:text-3xl font-bold text-primary">
                      Benefit {activePhase + 1}
                    </h4>
                    <div className="text-sm text-muted-foreground font-medium">
                      {activePhase + 1} / {benefits.length}
                    </div>
                  </div>

                  <p className="text-foreground font-medium text-lg">
                    {benefits[activePhase]}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={prevPhase}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                aria-label="Previous benefit"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex gap-2">
                {benefits.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhase(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === activePhase ? "bg-primary w-8" : "bg-border"
                    }`}
                    aria-label={`Go to benefit ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextPhase}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                aria-label="Next benefit"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
