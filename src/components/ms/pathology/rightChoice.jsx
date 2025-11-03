import { CheckCircle } from "lucide-react";
import React from "react";

const RightChoice = () => {
  const whyChoose = [
    "Crucial Role in Surgery: Anesthesiologists are essential members of surgical teams, responsible for patient comfort and safety throughout procedures.",
    "Advanced Clinical Expertise: Develop in-depth knowledge of anesthesia administration, pain relief techniques, and intensive care management.",
    "High Career Demand: There is a consistent global demand for anesthesiologists in hospitals, trauma centers, and surgical units.",
    "Expanding Specializations: Graduates can further specialize in cardiac anesthesia, neuroanesthesia, pediatric anesthesia, or critical care medicine.",
  ];

  return (
    <div>
      {/* Why Choose MS in Anesthesiology */}
      <section className="px-4 md:px-8 border-b border-primary/20 bg-primary/5">
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}
          >
            Why Choose <span className="text-primary">MS in Anesthesiology?</span>
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
