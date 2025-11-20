import { CheckCircle } from "lucide-react";
import React from "react";

const WhyChooseTripura = () => {
  const points = [
    "NMC-approved government & private medical colleges",
    "Steady patient inflow for strong clinical exposure",
    "Affordable fee structure compared to several other states",
    "Peaceful and student-friendly environment for focused learning",
    "Skilled medical faculty with academic and clinical expertise",
    "Transparent NEET-based admission and counseling system",
    "Updated laboratories, skill labs & digital classrooms",
    "Tripura is ideal for students who want quality education and solid clinical training without a highly competitive or crowded environment.",
  ];

  return (
    <section className="px-4 md:px-8 border-b border-primary/20">
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-14">

        <h1
          className="text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
          style={{ animationDelay: "100ms" }}
        >
          Why Choose <span className="text-primary">Tripura</span> for MBBS?
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

export default WhyChooseTripura;
