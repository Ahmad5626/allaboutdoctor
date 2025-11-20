import { CheckCircle } from "lucide-react";
import React from "react";

const MbbsDurationStructureMeghalaya = () => {
  const points = [
    "Total Duration: 5.5 Years",
    "4.5 Years: Academic Study",
    "1 Year: Compulsory Internship",
    "Core Subjects Covered: Anatomy, Physiology, Biochemistry, Pathology, Microbiology, Pharmacology, Forensic Medicine, Community Medicine, Pediatrics, OBG, General Medicine, General Surgery, ENT, Ophthalmology, Orthopedics, Psychiatry, Dermatology, and more.",
    "Learning Methods: Classroom lectures, Department-wise clinical postings, OPD/IPD ward rounds, Community medicine fieldwork, Skill lab practice, Simulation-based learning modules.",
    "Internship: Students are placed in recognized hospitals across Shillong and Ri-Bhoi, working in all major departments under qualified medical professionals.",
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
          The MBBS program in Meghalaya follows the NMC’s competency-based education framework.
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

export default MbbsDurationStructureMeghalaya;
