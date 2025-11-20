import { CheckCircle } from "lucide-react";
import React from "react";

const WhyChooseMizoram = () => {
  const points = [
    "NMC-approved and well-structured medical education",
    "Calm, pollution-free environment ideal for academic focus",
    "Experienced faculty and student-friendly teaching methods",
    "Modern laboratories and skill-based learning",
    "Affordable living and hostel facilities",
    "Transparent NEET-based seat allocation",
    "Strong community health exposure and public healthcare programs",
    "Quality internship opportunities in recognized hospitals",
    "Mizoram is preferred by medical aspirants seeking dedicated study environments, holistic clinical experience, and a balanced academic lifestyle.",
  ];

  return (
    <section className="px-4 md:px-8 border-b border-primary/20">
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-14">

        <h1
          className="text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
          style={{ animationDelay: "100ms" }}
        >
          Why Choose <span className="text-primary">Mizoram</span> for MBBS?
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

export default WhyChooseMizoram;
