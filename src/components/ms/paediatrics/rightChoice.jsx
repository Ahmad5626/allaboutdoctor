import { CheckCircle } from "lucide-react";
import React from "react";

const RightChoice = () => {
  const whyChoose = [
    "Integral Role in Medical Diagnosis: Pathologists form the backbone of medical decision-making by identifying the root causes of diseases through laboratory analysis.",
    "Diverse Subspecialties: Gain expertise in histopathology, cytopathology, hematology, clinical biochemistry, and immunopathology.",
    "Expanding Career Opportunities: High demand for skilled pathologists in hospitals, diagnostic centers, and medical research institutions worldwide.",
    "Research and Teaching Potential: MS Pathology opens doors to academic careers, laboratory management, and cutting-edge research in disease mechanisms and diagnostics.",
  ];

  return (
    <div>
      {/* Why Choose MS in Pathology */}
      <section className="px-4 md:px-8 border-b border-primary/20 bg-primary/5">
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}
          >
            Why Choose <span className="text-primary">MS in Pathology?</span>
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
