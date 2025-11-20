import { CheckCircle } from "lucide-react";
import React from "react";

const WhyChooseGujarat = () => {
  const points = [
    "Multiple NMC-recognized government & private medical colleges",
    "Stable and transparent NEET-based admission system",
    "Strong patient flow in major cities like Ahmedabad, Vadodara & Surat",
    "Safe academic environment with excellent hostel and campus facilities",
    "Modern medical infrastructure, simulation labs & teaching hospitals",
    "High-quality internship programs across multi-specialty departments",
    "Balanced fee structure with affordable government seats",
    "Gujarat is considered one of India’s most efficient states for medical education due to strong academics, advanced medical systems, and excellent career outcomes.",
  ];

  return (
    <section className="px-4 md:px-8 border-b border-primary/20">
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-14">

        <h1
          className="text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
          style={{ animationDelay: "100ms" }}
        >
          Why Choose <span className="text-primary">Gujarat</span> for MBBS?
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

export default WhyChooseGujarat;
