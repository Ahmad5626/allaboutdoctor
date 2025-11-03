import { CheckCircle } from "lucide-react";
import React from "react";

const RightChoice = () => {
  const whyChoose = [
    "High-Demand Medical Specialization: Radiology is one of the most sought-after postgraduate branches in medicine due to its critical role in modern diagnostics and patient management.",
    "Technological Mastery: Gain proficiency in cutting-edge imaging systems, radiographic interpretation, and interventional radiology techniques.",
    "Global Career Opportunities: Radiologists are in high demand across hospitals, diagnostic centers, research labs, and healthcare startups worldwide.",
    "Dynamic and Evolving Field: Stay at the forefront of innovation in healthcare through continuous exposure to AI-driven imaging, teleradiology, and minimally invasive interventions.",
  ];

  return (
    <div>
      {/* Why Choose MS in Radiology */}
      <section className="px-4 md:px-8 border-b border-primary/20 bg-primary/5">
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}
          >
            Why Choose <span className="text-primary">MS in Radiology?</span>
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
