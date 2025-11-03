import { CheckCircle } from "lucide-react";
import React from "react";

const RightChoice = () => {
  const whyChoose = [
    "Core Surgical Foundation: Develop the knowledge and technical skills required to perform essential surgical procedures across multiple specialties.",
    "Gateway to Super-Specialization: After completing MS General Surgery, doctors can specialize further in areas like cardiothoracic surgery, neurosurgery, urology, or gastrointestinal surgery.",
    "High Global Demand: Trained surgeons are in high demand in hospitals, trauma centers, and surgical departments both in India and abroad.",
    "Hands-on Clinical Experience: Gain real-time exposure to emergency surgeries, trauma management, and critical care.",
  ];

  return (
    <div>
      {/* Why Choose MS in General Surgery */}
      <section className="px-4 md:px-8 border-b border-primary/20 bg-primary/5">
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}
          >
            Why Choose <span className="text-primary">MS in General Surgery?</span>
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
