import { CheckCircle } from "lucide-react";
import React from "react";

const WhyChooseRomania = () => {
  const points = [
    "European Union–recognized MBBS degrees (NMC, WHO, ECFMG, WFME listed)",
    "English-medium medical programs specifically designed for international students",
    "Oldest and most prestigious medical institutions in Eastern Europe",
    "Excellent clinical exposure in multi-specialty hospitals",
    "Affordable tuition fees compared to Western Europe",
    "Safe, hygienic, and student-friendly environment",
    "European lifestyle with high living standards",
    "NEET mandatory for Indian students; no separate entrance exam required",
    "Romania is becoming a preferred destination for MBBS due to its internationally respected medical education and seamless integration into European healthcare standards.",
  ];

  return (
    <section className="px-4 md:px-8 border-b border-primary/20">
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-14">

        <h1
          className="text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
          style={{ animationDelay: "100ms" }}
        >
          Why Choose <span className="text-primary">Romania</span> for MBBS?
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

export default WhyChooseRomania;
