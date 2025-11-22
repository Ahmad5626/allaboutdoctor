import { CheckCircle } from "lucide-react";
import React from "react";

const WhyChooseArmenia = () => {
  const points = [
    "Globally recognized MBBS degrees (NMC, WHO, WFME, ECFMG listed)",
    "Fully English-medium academic curriculum",
    "Affordable tuition fees compared to many European and Asian countries",
    "Practical-focused learning with strong clinical exposure",
    "Safe, peaceful, and student-friendly environment",
    "No language barrier for Indian students",
    "Simple admission and visa process",
    "NEET compulsory for Indian applicants, no separate entrance exams",
    "Armenia is becoming a preferred MBBS destination due to its low cost of study, high academic standards, and globally accepted medical degrees.",
  ];

  return (
    <section className="px-4 md:px-8 border-b border-primary/20">
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-14">

        <h1
          className="text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
          style={{ animationDelay: "100ms" }}
        >
          Why Choose <span className="text-primary">Armenia</span> for MBBS?
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

export default WhyChooseArmenia;
