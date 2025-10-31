import { GraduationCap, ClipboardCheck, Award, FileCheck } from "lucide-react";
import React from "react";

const EligibilityCriteria = () => {
  const criteria = [
    "MBBS degree from a recognized university.",
    "Completion of a one-year compulsory internship.",
    "Valid registration with the State Medical Council or NMC.",
    "Qualifying score in NEET-PG or equivalent entrance examination.",
  ];

  return (
    <section className="px-4 md:px-8 border-b border-primary/20">
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}
          >
            Eligibility <span className="text-primary">Criteria</span>
          </h1>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {criteria.map((text, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-primary/20 shadow-sm p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <p className="text-foreground/80 text-lg font-medium leading-snug">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EligibilityCriteria;
