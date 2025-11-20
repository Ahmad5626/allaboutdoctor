import { CheckCircle } from "lucide-react";
import React from "react";

const WhyChooseHimachal = () => {
  const points = [
    "NMC-recognized medical colleges",
    "Peaceful and student-friendly learning environment",
    "Affordable government MBBS seats",
    "Balanced private medical institutions",
    "Consistent patient flow for clinical postings",
    "Transparent NEET-based admission system",
    "Modern labs, skill training centers & teaching hospitals",
    "Internship opportunities across multi-specialty hospitals",
    "Himachal Pradesh is known for its disciplined academic structure, safe environment, and high-quality medical teaching standards.",
  ];

  return (
    <section className="px-4 md:px-8 border-b border-primary/20">
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-14">

        <h1
          className="text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
          style={{ animationDelay: "100ms" }}
        >
          Why Choose <span className="text-primary">Himachal Pradesh</span> for MBBS?
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

export default WhyChooseHimachal;
