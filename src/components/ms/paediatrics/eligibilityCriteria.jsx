import { GraduationCap, ClipboardCheck, Award, FileCheck } from "lucide-react";
import React from "react";

const EligibilityCriteria = () => {
  const criteria = [
    {
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      text: "MBBS degree from a recognized university.",
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-primary" />,
      text: "Completion of a one-year compulsory internship.",
    },
    {
      icon: <FileCheck className="w-8 h-8 text-primary" />,
      text: "Valid registration with State Medical Council or NMC.",
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      text: "Qualifying score in NEET-PG or equivalent postgraduate entrance examination.",
    },
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {criteria.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-primary/20 shadow-sm p-6 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <p className="text-foreground/80 text-lg font-medium leading-snug">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EligibilityCriteria;
