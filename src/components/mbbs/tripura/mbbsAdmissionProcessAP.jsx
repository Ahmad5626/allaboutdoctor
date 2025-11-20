import { CheckCircle } from "lucide-react";
import React from "react";

const MbbsAdmissionProcessTripura = () => {
  const steps = [
    {
      title: "1. Counseling Registration",
      details: [
        "Support for online registration and document uploads on the official state counseling portal.",
      ],
    },
    {
      title: "2. College Selection Based on NEET Score",
      details: [
        "Personalized shortlisting across medical hubs including Agartala and West Tripura.",
      ],
    },
    {
      title: "3. Choice Filling Guidance",
      details: [
        "Location & campus facilities",
        "Clinical exposure",
        "Patient flow",
        "Fee structure",
        "Hostel facilities",
        "Previous year cutoff trends",
      ],
    },
    {
      title: "4. Seat Allotment Monitoring",
      details: [
        "Continuous tracking across all counseling rounds (Round 1, Round 2, Mop-up).",
      ],
    },
    {
      title: "5. Admission & Reporting Support",
      details: [
        "Guidance for reporting to allotted college, document verification, and fee submission.",
      ],
    },
    {
      title: "6. Post-Admission Support",
      details: [
        "Hostel and accommodation guidance",
        "Travel and onboarding support",
        "Academic orientation",
        "NExT preparation roadmap",
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
          MBBS Admission Process in <span className="text-primary">Tripura</span>
        </h1>

        <p className="text-muted-foreground text-base md:text-lg mb-6 max-w-3xl">
          All About Doctor Education Pvt Ltd offers end-to-end MBBS counseling and admission support.
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

export default MbbsAdmissionProcessTripura;
