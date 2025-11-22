import { CheckCircle } from "lucide-react";
import React from "react";

const WhyChooseSerbia = () => {
  const points = [
    "Globally recognized MBBS degrees (NMC, WHO, ECFMG, WFME listed)",
    "English-medium medical education",
    "Affordable tuition fees compared to many European countries",
    "High-quality clinical exposure in government and private hospitals",
    "Safe, student-friendly environment with European living standards",
    "Experienced faculty and research-oriented academic structure",
    "No language barrier in academics",
    "NEET mandatory for Indian students (no separate entrance exam)",
    "Serbia is becoming a preferred MBBS destination due to its globally trusted medical education model, affordable fee structure, and European training standards.",
  ];

  return (
    <section className="px-4 md:px-8 border-b border-primary/20">
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-14">

        <h1
          className="text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
          style={{ animationDelay: "100ms" }}
        >
          Why Choose <span className="text-primary">Serbia</span> for MBBS?
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

export default WhyChooseSerbia;
