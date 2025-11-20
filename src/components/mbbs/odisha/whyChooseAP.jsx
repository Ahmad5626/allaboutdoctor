import { CheckCircle } from "lucide-react";
import React from "react";

const WhyChooseOdisha = () => {
  const points = [
    "NMC-recognized government & private medical colleges",
    "Advanced hospitals and well-equipped teaching facilities",
    "Strong patient flow across urban & rural healthcare centres",
    "Well-structured NEET-based admission and counselling system",
    "Safe, affordable, and student-friendly learning environment",
    "Skill labs, digital anatomy tools, and simulation-based training",
    "High-quality internship exposure across major medical districts",
    "Odisha is increasingly preferred by medical aspirants due to its affordable fees, excellent clinical exposure, and high-quality medical training ecosystem.",
  ];

  return (
    <section className="px-4 md:px-8 border-b border-primary/20">
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-14">

        <h1
          className="text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
          style={{ animationDelay: "100ms" }}
        >
          Why Choose <span className="text-primary">Odisha</span> for MBBS?
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

export default WhyChooseOdisha;
