import { CheckCircle } from "lucide-react";
import React from "react";

const WhyChooseBulgaria = () => {
  const points = [
    "Globally recognized MBBS degrees (NMC, WHO, ECFMG, WFME listed)",
    "EU-aligned medical curriculum",
    "English-medium teaching for international students",
    "Strong patient flow in major clinical hospitals",
    "Affordable tuition fees compared to European Union countries",
    "Safe, friendly, and multicultural learning environment",
    "No entrance exam required (NEET mandatory for Indian students)",
    "Easy visa processing and smooth admission pathway",
    "Bulgaria remains a preferred medical education hub due to its structured academic system and internationally accepted MBBS degrees.",
  ];

  return (
    <section className="px-4 md:px-8 border-b border-primary/20">
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-14">

        <h1
          className="text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
          style={{ animationDelay: "100ms" }}
        >
          Why Choose <span className="text-primary">Bulgaria</span> for MBBS?
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

export default WhyChooseBulgaria;
