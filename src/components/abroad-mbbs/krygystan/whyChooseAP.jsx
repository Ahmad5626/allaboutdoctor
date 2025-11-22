import { CheckCircle } from "lucide-react";
import React from "react";

const WhyChooseKyrgyzstan = () => {
  const points = [
    "NMC-approved and globally recognized MBBS degrees",
    "Highly affordable tuition fees and living costs",
    "English-medium medical curriculum",
    "Easy admission process with minimal complications",
    "Strong clinical exposure in multispecialty hospitals",
    "Modern classrooms, labs, and training facilities",
    "Culturally friendly environment for Indian students",
    "High FMGE/NExT performance among graduates",
    "Safe cities with good quality of life",
    "Kyrgyzstan remains an excellent choice for Indian students due to its cost-effectiveness, teaching quality, and accessible medical education system.",
  ];

  return (
    <section className="px-4 md:px-8 border-b border-primary/20">
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-14">

        <h1
          className="text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
          style={{ animationDelay: "100ms" }}
        >
          Why Choose <span className="text-primary">Kyrgyzstan</span> for MBBS?
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

export default WhyChooseKyrgyzstan;
