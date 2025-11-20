import { CheckCircle } from "lucide-react";
import React from "react";

const WhyChooseDelhi = () => {
  const points = [
    "India’s top-ranked NMC-approved medical colleges",
    "Strongest clinical exposure due to high and diverse patient flow",
    "Excellent safety and academic ecosystem",
    "Best-in-class laboratories, simulation centers & research facilities",
    "Transparent NEET-based admission system",
    "Large multi-specialty teaching hospitals",
    "Internship opportunities across super-specialty departments",
    "Delhi is considered one of India’s premium medical education hubs due to consistent academic performance, strong career outcomes, and national-level reputation.",
  ];

  return (
    <section className="px-4 md:px-8 border-b border-primary/20">
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-14">

        <h1
          className="text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
          style={{ animationDelay: "100ms" }}
        >
          Why Choose <span className="text-primary">Delhi</span> for MBBS?
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

export default WhyChooseDelhi;
