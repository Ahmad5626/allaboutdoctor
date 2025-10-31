import { CheckCircle } from "lucide-react";
import React from "react";

const CourseHighlights = () => {
  const highlights = [
    "Duration: 2–3 years full-time postgraduate program.",
    "Curriculum Includes:",
    "Principles of general and systemic pathology",
    "Laboratory techniques and diagnostic methods",
    "Clinical pathology and blood banking",
    "Cytology, histochemistry, and molecular testing",
    "Research work, case studies, and seminars",
    "Training Exposure: Hands-on experience in clinical laboratories, hospitals, and academic research departments under expert supervision.",
    "Accreditation: Program recognized by NMC and aligned with international postgraduate standards.",
  ];

  return (
    <section className="px-4 md:px-8 bg-background border-b border-primary/20 bg-primary/5">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <h1
          className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
          style={{ animationDelay: "100ms" }}
        >
          Course <span className="text-primary">Highlights</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-6 py-6">
          {highlights.map((item, idx) => (
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

export default CourseHighlights;
