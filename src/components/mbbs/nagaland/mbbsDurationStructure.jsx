import { CheckCircle } from "lucide-react";
import React from "react";

const MbbsDurationStructureNagaland = () => {
  const points = [
    "Total Duration: 5.5 Years",
    "4.5 Years: Academic learning",
    "1 Year: Mandatory internship",
    "Core Subjects Include: Anatomy, Physiology, Biochemistry, Pathology, Pharmacology, Microbiology, Forensic Medicine, Community Medicine, Pediatrics, OBG, General Medicine, General Surgery, Orthopedics, ENT, Ophthalmology, Psychiatry, Dermatology, and more.",
    "Learning Methods Include: Classroom teaching, Clinical postings, OPD & IPD training, Skill lab and simulation-based learning, Community medicine field visits, Case-based and competency-driven training.",
    "Internship: Students undergo rotations across key departments in recognized hospitals located in Kohima and other associated medical centers.",
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
          Nagaland follows the NMC CBME (Competency-Based Medical Education) pattern.
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

export default MbbsDurationStructureNagaland;
