import { CheckCircle } from "lucide-react";
import React from "react";

const AdmissionProcess = () => {
  const steps = [
    "Register and apply for postgraduate medical admission.",
    "Appear and qualify for NEET-PG or other recognized entrance exams.",
    "Participate in the national or state-level counselling process.",
    "Receive guidance from All About Doctor Education Pvt. Ltd. for university shortlisting and admission formalities.",
    "Complete document verification, hostel, and visa arrangements (for abroad options).",
    "Begin your MD in Gynaecology journey with structured mentorship and career support.",
  ];

  return (
    <section className="px-4 md:px-8 border-b border-primary/20 ">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-16">
        <h1
          className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
          style={{ animationDelay: "100ms" }}
        >
          Admission <span className="text-primary">Process</span>
        </h1>

        <p className="text-foreground/80 text-lg mb-8 max-w-3xl">
          The admission process for MD (Gynaecology) is streamlined and transparent, ensuring fair selection and complete support at every step:
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
