import { CheckCircle } from "lucide-react";
import React from "react";

const WhyChooseTamilNadu = () => {
  const points = [
    "India’s top NMC-recognized government & private medical colleges",
    "Highest patient flow in government medical hospitals",
    "Advanced medical technology, digital labs, and super-specialty units",
    "Transparent and structured NEET-based admission system",
    "Highly experienced medical faculty and research-driven curriculum",
    "Skill labs, simulation centers & advanced diagnostic facilities",
    "Excellent internship programs across major medical hubs",
    "Safe, supportive & academically-oriented environment",
    "Tamil Nadu is preferred by students seeking outstanding clinical exposure, strong academics, and advanced healthcare training.",
  ];

  return (
    <section className="px-4 md:px-8 border-b border-primary/20">
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-14">

        <h1
          className="text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
          style={{ animationDelay: "100ms" }}
        >
          Why Choose <span className="text-primary">Tamil Nadu</span> for MBBS?
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

export default WhyChooseTamilNadu;
