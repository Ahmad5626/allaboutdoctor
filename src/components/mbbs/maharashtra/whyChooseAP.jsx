import { CheckCircle } from "lucide-react";
import React from "react";

const WhyChooseMaharashtra = () => {
  const points = [
    "NMC-recognized government & private medical colleges",
    "Top-tier super-specialty hospitals and medical universities",
    "Strong patient flow in metro, urban & rural healthcare centers",
    "Highly developed medical infrastructure",
    "Transparent NEET-based admission and counseling system",
    "Safe, student-friendly learning environment",
    "Advanced simulation labs & skill development centers",
    "Excellent internship postings across multi-specialty hospitals",
    "Maharashtra is highly preferred by medical aspirants for its clinical diversity, modern medical systems, and excellent academic standards.",
  ];

  return (
    <section className="px-4 md:px-8 border-b border-primary/20">
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-14">

        <h1
          className="text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
          style={{ animationDelay: "100ms" }}
        >
          Why Choose <span className="text-primary">Maharashtra</span> for MBBS?
        </h1>

        <div className="grid md:grid-cols-2 gap-6 py-6">
          {points.map((item, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-foreground/80 text-lg">{item}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseMaharashtra;
