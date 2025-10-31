import { CheckCircle } from 'lucide-react'
import React from 'react'

const RightChoice = () => {
  const whyChoose = [
    "Specialized Expertise: Learn advanced management of respiratory and critical care diseases.",
    "High Global Demand: Pulmonologists are vital in hospitals, ICUs, and specialized lung care centers worldwide.",
    "Multidisciplinary Practice: Involves collaboration with cardiology, internal medicine, and infectious disease experts.",
    "Opportunities for Super-Specialization: Opens pathways for DM in Pulmonary Medicine, Critical Care, or Sleep Medicine.",
  ];

  return (
    <div>
      {/* Why Choose MD in Pulmonology */}
      <section className="px-4 md:px-8 border-b border-primary/20 bg-primary/5">
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}
          >
            Why Choose <span className="text-primary">MD in Pulmonology?</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-6 py-6">
            {whyChoose.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground/80 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RightChoice;
