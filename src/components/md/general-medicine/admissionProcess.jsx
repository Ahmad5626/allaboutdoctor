import { CheckCircle } from "lucide-react";
import React from "react";

const AdmissionProcess = () => {
  const steps = [
    "Apply through the postgraduate medical admission portal.",
    "Appear and qualify for the required entrance exam.",
    "Participate in the counseling process.",
    "Get university shortlisting and end-to-end guidance from All About Doctor Education Pvt. Ltd.",
    "Complete admission formalities and begin your journey toward becoming a specialist physician.",
  ];

  return (
    <section className="px-4 md:px-8  border-b ">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <h1
          className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
          style={{ animationDelay: "100ms" }}
        >
          Admission <span className="text-primary">Process</span>
        </h1>

        <p className="text-foreground/80 text-lg mb-6 max-w-3xl">
          The admission process for MD (General Medicine) is designed to ensure transparency and fairness.
          Here’s how you can begin your journey toward specialization:
        </p>

        <div className="space-y-4">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-foreground/80 text-lg">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcess;
