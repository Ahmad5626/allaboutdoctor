import { CheckCircle } from "lucide-react";
import React from "react";

const WhyChoosePuducherry = () => {
  const points = [
    "Well-established government, private & deemed medical universities",
    "High-quality hospital infrastructure with strong OPD/IPD inflow",
    "NEET-based transparent counselling system (CENTAC & MCC)",
    "Safe, peaceful, and academically supportive student environment",
    "Modern labs, digital anatomy systems & skill development centers",
    "Strong internship and clinical posting opportunities",
    "Affordable living costs and excellent medical education standards",
    "Puducherry has become one of the top choices for students aiming for quality MBBS education in a structured and student-friendly academic environment.",
  ];

  return (
    <section className="px-4 md:px-8 border-b border-primary/20">
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-14">

        <h1
          className="text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
          style={{ animationDelay: "100ms" }}
        >
          Why Choose <span className="text-primary">Puducherry</span> for MBBS?
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

export default WhyChoosePuducherry;
