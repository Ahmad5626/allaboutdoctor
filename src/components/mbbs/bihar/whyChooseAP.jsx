import { CheckCircle } from "lucide-react";
import React from "react";

const WhyChooseBihar = () => {
  const points = [
    "NMC-recognized government & private medical colleges",
    "Affordable tuition fees across major institutions",
    "High patient inflow ensuring strong clinical exposure",
    "Student-friendly academic environment",
    "Transparent NEET-based admission and counseling",
    "Modern laboratories, teaching hospitals & community training facilities",
    "Internship opportunities in multi-specialty hospitals",
    "Bihar is known for providing structured medical education and consistent academic performance across its medical institutions"
  ];

  return (
    <section className="px-4 md:px-8 border-b border-primary/20">
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-14">

        <h1
          className="text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
          style={{ animationDelay: "100ms" }}
        >
          Why Choose <span className="text-primary">Bihar</span> for MBBS?
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

export default WhyChooseBihar;
