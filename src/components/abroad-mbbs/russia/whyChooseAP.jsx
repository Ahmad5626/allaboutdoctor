import { CheckCircle } from "lucide-react";
import React from "react";

const WhyChooseRussia = () => {
  const points = [
    "Globally recognized medical degrees (NMC, WHO, ECFMG listed)",
    "Affordable tuition fees with high-quality education",
    "English-medium MBBS programs in top universities",
    "Strong clinical rotations in well-equipped hospitals",
    "Safe and student-friendly academic environment",
    "Large Indian student community",
    "No entrance exam required by most universities",
    "Easy admission process with transparent documentation",
    "Russia remains one of the most reliable global destinations for MBBS due to its strong academic reputation and internationally trained medical faculty.",
  ];

  return (
    <section className="px-4 md:px-8 border-b border-primary/20">
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-14">

        <h1
          className="text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
          style={{ animationDelay: "100ms" }}
        >
          Why Choose <span className="text-primary">Russia</span> for MBBS?
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

export default WhyChooseRussia;
