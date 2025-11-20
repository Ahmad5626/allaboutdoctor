import { CheckCircle } from "lucide-react";
import React from "react";

const MbbsFeesHaryana = () => {
  const fees = [
    "Government Medical Colleges: Economical",
    "Private Medical Colleges: Moderate to higher",
    "Deemed Universities: Premium fee structure",
    "A customized fee plan can be provided based on rank, quota, and city preference",
  ];

  return (
    <section className="px-4 md:px-8 border-b border-primary/20 bg-primary/5">
      <div className="relative mx-auto max-w-7xl px-6 py-12">

        <h1
          className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up mb-6"
          style={{ animationDelay: "100ms" }}
        >
          MBBS <span className="text-primary">Fees in Haryana</span>
        </h1>

        <div className="space-y-5">
          {fees.map((item, idx) => (
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

export default MbbsFeesHaryana;
