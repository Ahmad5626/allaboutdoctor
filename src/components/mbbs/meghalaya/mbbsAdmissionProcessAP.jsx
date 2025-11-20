import { CheckCircle } from "lucide-react";
import React from "react";

const MbbsAdmissionProcessMeghalaya = () => {
  const steps = [
    {
      title: "1. Counseling Registration",
      details: [
        "Guidance for form submission, documentation, and portal registration.",
      ],
    },
    {
      title: "2. College Selection Based on NEET Rank",
      details: [
        "Personalized options across Shillong and Ri-Bhoi.",
      ],
    },
    {
      title: "3. Choice Filling Assistance",
      details: [
        "City preference",
        "Campus & hostel facilities",
        "Fee structure",
        "Cutoff history",
        "Patient flow & hospital exposure",
      ],
    },
    {
      title: "4. Seat Allotment Monitoring",
      details: [
        "Real-time updates until the final seat is allotted.",
      ],
    },
    {
      title: "5. Reporting & Admission Completion",
      details: [
        "Support for physical reporting, fee payment, and verification procedures.",
      ],
    },
    {
      title: "6. Post-Admission Support",
      details: [
        "Hostel allocation",
        "Travel coordination",
        "Academic orientation",
        "NExT pathway guidance",
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
          MBBS Admission Process in <span className="text-primary">Meghalaya</span>
        </h1>

        <p className="text-muted-foreground text-base md:text-lg mb-6 max-w-3xl">
          All About Doctor Education Pvt Ltd supports aspirants throughout the complete admission cycle.
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

export default MbbsAdmissionProcessMeghalaya;
