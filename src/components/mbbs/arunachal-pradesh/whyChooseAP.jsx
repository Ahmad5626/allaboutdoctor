import { CheckCircle } from "lucide-react";
import React from "react";

const WhyChooseArunachalPradesh = () => {
  const points = [
    "NMC-recognized medical college",
    "Peaceful and focused study environment",
    "Balanced clinical exposure with increasing patient flow",
    "Supportive academic atmosphere",
    "NEET-based transparent admission process",
    "Modern labs, skill labs & teaching hospital facilities",
    "Internship opportunities across key departments",
    "Arunachal Pradesh is emerging as a reliable MBBS destination for students who prefer personalized learning and practical exposure in a calm environment."
  ];

  return (
    <section className="px-4 md:px-8 border-b border-primary/20 ">
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-14">

        <h1
          className="text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
          style={{ animationDelay: "100ms" }}
        >
          Why Choose <span className="text-primary">Arunachal Pradesh</span> for MBBS?
        </h1>

        <div className="grid md:grid-cols-2 gap-6 py-6">
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

export default WhyChooseArunachalPradesh;
