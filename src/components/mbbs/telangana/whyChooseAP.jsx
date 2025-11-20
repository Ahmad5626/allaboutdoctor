import { CheckCircle } from "lucide-react";
import React from "react";

const WhyChooseTelangana = () => {
  const points = [
    "NMC-recognized government & private medical colleges",
    "Strong patient inflow in urban & semi-urban hospitals",
    "Modern healthcare & diagnostic infrastructure",
    "Transparent NEET-UG counseling system",
    "High-quality clinical exposure during postings",
    "Safe, student-friendly environment with well-developed campuses",
    "Research-focused teaching hospitals",
    "Strong internship opportunities in multi-specialty hospitals",
    "Telangana is preferred by medical aspirants seeking advanced academics with practical, hands-on medical training.",
  ];

  return (
    <section className="px-4 md:px-8 border-b border-primary/20">
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-14">

        <h1
          className="text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
          style={{ animationDelay: "100ms" }}
        >
          Why Choose <span className="text-primary">Telangana</span> for MBBS?
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

export default WhyChooseTelangana;
