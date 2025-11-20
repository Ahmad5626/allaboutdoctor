import { CheckCircle } from "lucide-react";
import React from "react";

const MbbsDurationStructureGujarat = () => {
  const points = [
    "Total Duration: 5.5 Years",
    "4.5 Years of academic coursework",
    "1 Year of compulsory internship",
    "Major Subjects: Anatomy, Physiology, Biochemistry, Pathology, Pharmacology, Medicine, Surgery, Pediatrics, Obstetrics & Gynecology, Orthopedics, etc.",
    "Training Methods: Classroom lectures, clinical postings, skill labs, community health programs, simulation-based learning.",
    "Internship: Rotations across key medical departments in the selected city’s hospital network.",
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
          The MBBS program in Gujarat follows the NMC academic guidelines:
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

export default MbbsDurationStructureGujarat;
