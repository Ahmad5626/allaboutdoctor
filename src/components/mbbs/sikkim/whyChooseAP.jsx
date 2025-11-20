import { CheckCircle } from "lucide-react";
import React from "react";

const WhyChooseSikkim = () => {
  const points = [
    "NMC-recognized medical college(s) offering quality education",
    "Calm, safe, and student-friendly study atmosphere",
    "Modern classrooms, digital learning tools & updated laboratories",
    "Experienced and supportive teaching faculty",
    "Good patient exposure through district-level & specialty hospitals",
    "Transparent NEET-based admissions",
    "Ideal environment for focused medical study",
    "Supportive internship ecosystem",
    "Sikkim is preferred by students seeking a peaceful and academically focused MBBS journey with personalized mentoring.",
  ];

  return (
    <section className="px-4 md:px-8 border-b border-primary/20">
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-14">

        <h1
          className="text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
          style={{ animationDelay: "100ms" }}
        >
          Why Choose <span className="text-primary">Sikkim</span> for MBBS?
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

export default WhyChooseSikkim;
