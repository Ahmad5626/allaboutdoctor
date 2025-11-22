import { CheckCircle } from "lucide-react";
import React from "react";

const WhyChooseGeorgia = () => {
  const points = [
    "Globally recognized MBBS degrees (NMC, WHO, ECFMG, WFME listed)",
    "English-medium academic curriculum",
    "European-standard teaching methods",
    "Strong clinical exposure in well-equipped training hospitals",
    "Affordable tuition fees compared to Western countries",
    "Safe, hospitable, and student-friendly environment",
    "Simplified admission and visa process",
    "No entrance exam required (NEET mandatory for Indian students)",
    "Georgia remains a top destination for medical studies due to its global acceptance, modern infrastructure, and structured learning environment.",
  ];

  return (
    <section className="px-4 md:px-8 border-b border-primary/20">
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-14">

        <h1
          className="text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
          style={{ animationDelay: "100ms" }}
        >
          Why Choose <span className="text-primary">Georgia</span> for MBBS?
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

export default WhyChooseGeorgia;
