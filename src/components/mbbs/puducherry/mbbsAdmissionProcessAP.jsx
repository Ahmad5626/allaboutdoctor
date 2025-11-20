import { CheckCircle } from "lucide-react";
import React from "react";

const MbbsAdmissionProcessPuducherry = () => {
  const steps = [
    {
      title: "1. Counseling Registration",
      details: [
        "Support for form submission and document upload on CENTAC and MCC portals.",
      ],
    },
    {
      title: "2. College Selection Based on NEET Rank",
      details: [
        "Personalized guidance across major cities including: Puducherry and Karaikal.",
      ],
    },
    {
      title: "3. Choice Filling Support",
      details: [
        "City and campus preference",
        "Hostel & accommodation facilities",
        "Fee structure comparison",
        "Previous cutoffs",
        "Patient flow & clinical exposure",
      ],
    },
    {
      title: "4. Seat Allotment Monitoring",
      details: [
        "Round-wise tracking across state and national counselling.",
      ],
    },
    {
      title: "5. Reporting & Admission Completion",
      details: [
        "Guidance for physical reporting, fee payment, and joining formalities.",
      ],
    },
    {
      title: "6. Post-Admission Support",
      details: [
        "Hostel guidance",
        "Travel & relocation help",
        "Academic orientation",
        "NExT exam preparation roadmap",
      ],
    },
  ];

  return (
    <section className="px-4 md:px-8 border-b border-primary/20 bg-primary/5">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-12">

        <h1
          className="text-pretty text-3xl md:text-4xl font-semibold leading-tight animate-fade-up my-4"
          style={{ animationDelay: "100ms" }}
        >
          MBBS Admission Process in <span className="text-primary">Puducherry</span>
        </h1>

        <p className="text-muted-foreground text-base md:text-lg mb-6 max-w-3xl">
          All About Doctor Education Pvt Ltd guides aspirants through complete NEET-based admission steps.
        </p>

        <div className="space-y-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-primary/20 shadow-sm p-5 md:p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-2">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h2 className="text-lg md:text-xl font-semibold text-foreground">
                  {step.title}
                </h2>
              </div>

              <ul className="pl-9 space-y-1.5 text-sm md:text-base text-foreground/80">
                {step.details.map((line, i) => (
                  <li key={i} className="list-disc">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MbbsAdmissionProcessPuducherry;
