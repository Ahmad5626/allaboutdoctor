import { CheckCircle } from "lucide-react";
import React from "react";

const MbbsDurationStructureBulgaria = () => {
  const points = [
    "Total Duration: 6 years (5 years classroom & lab learning + 1-year clinical internship)",
    "Key Subjects Include: Anatomy, Physiology, Biochemistry, Pathology, Microbiology, Pharmacology, Internal Medicine, Surgery, Pediatrics, Ophthalmology, ENT, Gynecology, Community Medicine, Emergency Care, and more.",
    "Teaching Methods: Classroom & digital lectures, Simulation-based training, Advanced laboratory sessions, Hospital postings, Case study-based clinical learning, Research modules.",
    "Rotational Internships: Completed in top hospitals across Sofia, Pleven, Varna, Plovdiv, and other major Bulgarian medical hubs.",
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
          The MBBS program in Bulgaria follows the European Union–aligned medical education model.
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

export default MbbsDurationStructureBulgaria;
