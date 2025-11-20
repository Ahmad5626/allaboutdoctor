import { CheckCircle } from "lucide-react";
import React from "react";

const WhyChooseKerala = () => {
  const points = [
    "NMC-recognized medical colleges",
    "Highly qualified and experienced teaching faculty",
    "Strong clinical exposure with high patient flow",
    "Well-structured government and private medical institutions",
    "Transparent NEET-based admission process",
    "Safe, clean, and student-friendly environment",
    "Advanced simulation labs & skill training centers",
    "Internship opportunities across multi-specialty hospitals",
    "Kerala is widely known for its disciplined medical education system, strong hospital networks, and an academic environment that emphasizes both theory and hands-on learning.",
  ];

  return (
    <section className="px-4 md:px-8 border-b border-primary/20">
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-14">

        <h1
          className="text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
          style={{ animationDelay: "100ms" }}
        >
          Why Choose <span className="text-primary">Kerala</span> for MBBS?
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

export default WhyChooseKerala;
