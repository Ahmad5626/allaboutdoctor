import { CheckCircle } from "lucide-react";
import React from "react";

const MbbsDurationStructureKazakhstan = () => {
  const points = [
    "Total Duration: 5 years",
    "4 Years: Academic Education",
    "1 Year: Clinical Internship",
    "Core Subjects Include: Anatomy, Physiology, Biochemistry, Pharmacology, Pathology, Microbiology, Medicine, Surgery, Pediatrics, Gynecology & Obstetrics, Community Medicine, Emergency Medicine, Orthopedics, Radiology, ENT, Ophthalmology, and more.",
    "Modes of Learning: Classroom theoretical sessions, Skill labs and simulation-based training, Clinical rotations in university hospitals, Research projects and case-based discussions, Hands-on patient care under faculty supervision.",
    "Internship: Completed in leading Kazakh medical hubs such as Almaty, Astana, Karaganda, Shymkent, and Semey.",
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
          The MBBS program in Kazakhstan follows an internationally aligned medical curriculum.
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

export default MbbsDurationStructureKazakhstan;
