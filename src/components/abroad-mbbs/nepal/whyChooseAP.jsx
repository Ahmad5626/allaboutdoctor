import { CheckCircle } from "lucide-react";
import React from "react";

const WhyChooseNepal = () => {
  const points = [
    "NMC-approved and globally recognized MBBS degrees",
    "Affordable tuition fees compared to many abroad destinations",
    "Curriculum similar to Indian medical education structure",
    "Strong clinical exposure in multispecialty hospitals",
    "English-medium instruction",
    "Safe environment and cultural similarity with India",
    "No language barrier for Indian students",
    "Easy travel and connectivity from India",
    "Nepal is widely preferred by Indian students due to its academic familiarity and reliable medical education ecosystem.",
  ];

  return (
    <section className="px-4 md:px-8 border-b border-primary/20">
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-14">

        <h1
          className="text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
          style={{ animationDelay: "100ms" }}
        >
          Why Choose <span className="text-primary">Nepal</span> for MBBS?
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

export default WhyChooseNepal;
