import { CheckCircle } from "lucide-react";
import React from "react";

const MbbsDurationStructureTajikistan = () => {
  const points = [
    "Total Duration: 6 years (5 years classroom & practical learning + 1-year clinical internship)",
    "Academic Coverage Includes: Anatomy, Physiology, Biochemistry, Pathology, Microbiology, Pharmacology, Surgery, Medicine, Pediatrics, Gynecology, Orthopedics, Ophthalmology, Community Medicine, Emergency Medicine, and more.",
    "Training Methods: Classroom teaching, Skill labs & simulation practice, Hospital postings, Clinical rotations, Case presentations, Community medical programs.",
    "Internship: Completed in major hospitals across Dushanbe, Khujand, and Dangara depending on university guidelines.",
  ];

  return (
    <section className="px-4 md:px-8 bg-primary/5 border-b border-primary/20">
      <div className="relative mx-auto max-w-7xl px-6 py-12">

        <h2
          className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up"
          style={{ animationDelay: "100ms" }}
        >
          MBBS Course <span className="text-primary">Duration & Structure</span>
        </h2>

        <p className="mt-4 text-muted-foreground text-lg max-w-3xl">
          The MBBS program in Tajikistan follows modern medical education standards aligned with global guidelines.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
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

export default MbbsDurationStructureTajikistan;
