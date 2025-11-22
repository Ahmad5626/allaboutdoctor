import { CheckCircle } from "lucide-react";
import React from "react";

const MbbsDurationStructureUzbekistan = () => {
  const points = [
    "Total Duration: 6 years (5 years academic + 1-year internship)",
    "Main Subjects Covered: Anatomy, Physiology, Biochemistry, Pathology, Pharmacology, Microbiology, Surgery, Medicine, Pediatrics, Gynecology & Obstetrics, Orthopedics, Ophthalmology, Psychiatry, Community Medicine, Emergency Medicine, and more.",
    "Modes of Learning: Classroom-based theoretical learning, Skill labs & simulation training, Clinical rotations in multispecialty hospitals, Bedside learning, Community medical activities, Case-based discussions.",
    "Internship: Completed in training hospitals across Samarkand, Bukhara, Tashkent, Fergana, Andijan and other approved regions.",
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
          The MBBS program in Uzbekistan follows a modern, globally aligned medical curriculum.
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

export default MbbsDurationStructureUzbekistan;
