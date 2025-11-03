import { CheckCircle } from "lucide-react";
import React from "react";

const RightChoice = () => {
  const whyChoose = [
    "Comprehensive Skin Care Expertise: Gain advanced knowledge of medical, cosmetic, and surgical dermatology, covering acne, psoriasis, eczema, infections, allergies, and autoimmune conditions.",
    "High-Demand Specialization: Dermatologists are among the most sought-after specialists in hospitals, private clinics, and aesthetic centers globally.",
    "Expanding Career Avenues: Opportunities include clinical practice, cosmetology, trichology, research, and teaching.",
    "Cutting-Edge Surgical Training: Master surgical techniques such as skin biopsies, excisions, laser treatments, and aesthetic procedures like Botox, fillers, and chemical peels.",
  ];

  return (
    <div>
      {/* Why Choose MS in Dermatology */}
      <section className="px-4 md:px-8 border-b border-primary/20 bg-primary/5">
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}
          >
            Why Choose <span className="text-primary">MS in Dermatology?</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-6 py-6">
            {whyChoose.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground/80 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RightChoice;
