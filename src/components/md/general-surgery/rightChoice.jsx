import { CheckCircle } from "lucide-react";
import React from "react";

const RightChoice = () => {
  const whyChoose = [
    "Critical Role in Healthcare: Emergency physicians are the first line of defense in saving lives during medical crises.",
    "High Clinical Exposure: Training involves real-time management of trauma, cardiac, neurological, and pediatric emergencies.",
    "Global Career Scope: Growing demand in hospitals, trauma care units, and air medical transport services worldwide.",
    "Continuous Learning & Specialization: Opportunities for super-specialization in Critical Care, Trauma Medicine, and Disaster Management.",
  ];

  return (
    <div>
      {/* Why Choose MD in Emergency Medicine */}
      <section className="px-4 md:px-8 border-b border-primary/20 bg-primary/5">
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}
          >
            Why Choose <span className="text-primary">MD in Emergency Medicine?</span>
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
