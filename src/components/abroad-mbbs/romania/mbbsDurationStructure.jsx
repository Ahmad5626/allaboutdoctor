import { CheckCircle } from "lucide-react";
import React from "react";

const MbbsDurationStructureRomania = () => {
  const points = [
    "Total Duration: 6 years (5 years academic training + 1-year clinical internship)",
    "Core Subjects Include: Anatomy, Physiology, Biochemistry, Pathology, Pharmacology, Microbiology, Internal Medicine, Surgery, Pediatrics, Gynecology & Obstetrics, ENT, Orthopedics, Ophthalmology, Emergency Medicine, Community Medicine, and more.",
    "Teaching Methods: Classroom theory sessions, Practical laboratory-based learning, Digital and simulation training, Hospital postings in European-standard medical centers, Case-based learning, Research projects.",
    "Clinical Rotations: Conducted under experienced Romanian medical faculty.",
    "Internship: Completed across leading training hospitals in Bucharest, Cluj-Napoca, Iași, Timișoara, and other major regions.",
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
          The MBBS program in Romania follows European Union medical education standards.
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

export default MbbsDurationStructureRomania;
