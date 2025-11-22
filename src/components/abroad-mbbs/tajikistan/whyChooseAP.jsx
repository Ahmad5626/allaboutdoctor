import { CheckCircle } from "lucide-react";
import React from "react";

const WhyChooseTajikistan = () => {
  const points = [
    "NMC-approved and globally recognized medical degrees",
    "Affordable fee structure for international students",
    "English-medium instruction throughout the program",
    "Structured curriculum aligned with global medical standards",
    "Strong practical learning in multispecialty hospitals",
    "Comfortable lifestyle and safe environment",
    "Indian mess & familiar food availability in major regions",
    "Smooth travel access from India",
    "Tajikistan is steadily growing as a preferred destination due to its affordability, strong academics, and supportive learning ecosystem.",
  ];

  return (
    <section className="px-4 md:px-8 border-b border-primary/20">
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-14">

        <h1
          className="text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
          style={{ animationDelay: "100ms" }}
        >
          Why Choose <span className="text-primary">Tajikistan</span> for MBBS?
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

export default WhyChooseTajikistan;
