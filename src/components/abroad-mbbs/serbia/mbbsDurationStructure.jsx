import { CheckCircle } from "lucide-react";
import React from "react";

const MbbsDurationStructureSerbia = () => {
  const points = [
    "Total Duration: 6 years (5 years academic study + 1-year clinical internship)",
    "Core Subjects Include: Anatomy, Physiology, Biochemistry, Pathology, Microbiology, Pharmacology, Internal Medicine, Surgery, Pediatrics, ENT, Ophthalmology, Obstetrics & Gynecology, Orthopedics, Emergency Medicine, Community Medicine, and more.",
    "Teaching & Training Methods: Classroom lectures, Advanced laboratory-based practice, Simulation-based learning, Hospital postings with real-time case exposure, Clinical rotations, Research-based learning.",
    "Internship: Completed in major teaching hospitals across Belgrade, Niš, Novi Sad, and Kragujevac.",
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
          The MBBS program in Serbia follows a European-standard medical curriculum aligned with international guidelines.
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

export default MbbsDurationStructureSerbia;
