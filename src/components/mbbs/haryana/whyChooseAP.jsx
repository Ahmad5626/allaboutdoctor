import { CheckCircle } from "lucide-react";
import React from "react";

const WhyChooseHaryana = () => {
  const points = [
    "NMC-approved government and private medical colleges",
    "Balanced fee structure with quality education",
    "Modern classrooms, simulation labs & teaching hospitals",
    "Strong clinical exposure due to good patient inflow",
    "Safe, well-connected academic cities",
    "Transparent NEET-based admission system",
    "Internship opportunities across multi-specialty hospitals",
    "Haryana is considered one of North India’s rapidly growing medical education hubs with strong career outcomes and excellent academic support systems.",
  ];

  return (
    <section className="px-4 md:px-8 border-b border-primary/20">
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-14">

        <h1
          className="text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
          style={{ animationDelay: "100ms" }}
        >
          Why Choose <span className="text-primary">Haryana</span> for MBBS?
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

export default WhyChooseHaryana;
