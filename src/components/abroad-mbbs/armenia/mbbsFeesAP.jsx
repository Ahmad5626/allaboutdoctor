import { CheckCircle } from "lucide-react";
import React from "react";

const MbbsFeesArmenia = () => {
  const fees = [
    "Public Universities – Moderate and affordable",
    "Private Universities – Mid-range fee structure",
    "International Standard Universities – Premium category",
    "A customized fee chart is provided as per your preferred city and medical college.",
  ];

  return (
    <section className="px-4 md:px-8 border-b border-primary/20">
      <div className="relative mx-auto max-w-7xl px-6 py-12">

        <h1
          className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up mb-6"
          style={{ animationDelay: '100ms' }}
        >
          MBBS <span className="text-primary">Fees in Armenia</span>
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

export default MbbsFeesArmenia;
