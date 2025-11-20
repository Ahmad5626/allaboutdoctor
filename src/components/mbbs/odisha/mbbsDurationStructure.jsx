import { CheckCircle } from "lucide-react";
import React from "react";

const MbbsDurationStructureOdisha = () => {
  const points = [
    "Total Duration: 5.5 Years",
    "4.5 Years: Academic Learning",
    "1 Year: Compulsory Rotatory Internship",
    "Core Subjects Include: Anatomy, Physiology, Biochemistry, Pathology, Pharmacology, Microbiology, Forensic Medicine, Community Medicine, General Medicine, Surgery, Pediatrics, ENT, Ophthalmology, Orthopedics, Obstetrics & Gynecology, Psychiatry, Dermatology, and more.",
    "Learning Methods Include: Classroom teaching, Clinical postings, Ward rounds, Hands-on diagnostic & procedural training, Skill lab simulations, Community health postings.",
    "Internship: Students receive structured internship rotations in major cities like Bhubaneswar, Cuttack, Berhampur, Rourkela, and Sambalpur, ensuring extensive real-case exposure across multiple specialties.",
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
          The MBBS curriculum in Odisha follows the NMC competency-based format:
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

export default MbbsDurationStructureOdisha;
