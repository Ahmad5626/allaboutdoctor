import { CheckCircle } from "lucide-react";
import React from "react";

const CourseHighlights = () => {
  const highlights = [
    "Duration: 2–3 years full-time postgraduate program.",
    "Curriculum Includes:",
    "Diagnostic Radiology (X-ray, CT, MRI, PET, Ultrasound)",
    "Interventional Radiology and image-guided procedures",
    "Radiation safety and protection",
    "Anatomy and pathology correlation",
    "Radiological research and case discussions",
    "Training Exposure: Students receive hands-on training in advanced imaging modalities, radiology departments, and interventional suites under expert supervision.",
    "Accreditation: The program adheres to NMC and internationally recognized postgraduate medical education standards.",
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
