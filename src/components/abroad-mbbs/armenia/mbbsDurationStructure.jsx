import { CheckCircle } from "lucide-react";
import React from "react";

const MbbsDurationStructureArmenia = () => {
  const points = [
    "Total Duration: 6 years (5 years academic study + 1 year compulsory clinical internship)",
    "Core Subjects Include: Anatomy, Physiology, Biochemistry, Pathology, Microbiology, Pharmacology, Medicine, Surgery, Pediatrics, Obstetrics & Gynecology, ENT, Orthopedics, Ophthalmology, Community Medicine, Emergency Medicine, and more.",
    "Teaching Methods: Classroom lectures, Simulation-based & digital training, Laboratory sessions, Hospital postings, Case-based clinical learning, Research work.",
    "Clinical Rotations: Hands-on patient care under senior medical faculty.",
    "Internship: Completed in leading training hospitals across Yerevan and other major regions.",
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
          The MBBS program in Armenia follows globally aligned medical education standards.
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

export default MbbsDurationStructureArmenia;
