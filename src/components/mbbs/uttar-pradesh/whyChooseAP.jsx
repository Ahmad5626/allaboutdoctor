import { CheckCircle } from "lucide-react";
import React from "react";

const WhyChooseUttarPradesh = () => {
  const points = [
    "NMC-approved government, private, and deemed medical colleges",
    "High patient inflow for strong clinical exposure",
    "Affordable fees and living expenses compared to many states",
    "Safe, student-friendly academic environment",
    "Experienced faculty with updated curriculum",
    "Transparent NEET-based counseling and admission process",
    "Advanced skill labs, simulation centers, and diagnostic facilities",
    "Excellent internship opportunities in multi-specialty hospitals",
    "Uttar Pradesh is ideal for students seeking a blend of high-quality academics and comprehensive practical training.",
  ];

  return (
    <section className="px-4 md:px-8 border-b border-primary/20">
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-14">

        <h1
          className="text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
          style={{ animationDelay: "100ms" }}
        >
          Why Choose <span className="text-primary">Uttar Pradesh</span> for MBBS?
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

export default WhyChooseUttarPradesh;
