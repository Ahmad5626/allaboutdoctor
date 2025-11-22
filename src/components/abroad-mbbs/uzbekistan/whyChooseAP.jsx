import { CheckCircle } from "lucide-react";
import React from "react";

const WhyChooseUzbekistan = () => {
  const points = [
    "NMC-approved and globally recognized MBBS programs",
    "Affordable fee structure compared to many abroad destinations",
    "English-medium instruction throughout the course",
    "Modern labs, clinical training facilities, and experienced faculty",
    "Safe environment with comfortable accommodation options",
    "High patient flow ensuring practical learning in hospitals",
    "Strong academic system aligned with global medical requirements",
    "Easy accessibility and good relations with India",
    "Uzbekistan has emerged as a popular MBBS destination due to its affordability, quality education, and practical medical exposure.",
  ];

  return (
    <section className="px-4 md:px-8 border-b border-primary/20">
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-14">

        <h1
          className="text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
          style={{ animationDelay: "100ms" }}
        >
          Why Choose <span className="text-primary">Uzbekistan</span> for MBBS?
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

export default WhyChooseUzbekistan;
