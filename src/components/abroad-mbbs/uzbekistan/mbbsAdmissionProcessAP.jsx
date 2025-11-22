import { CheckCircle } from "lucide-react";
import React from "react";

const MbbsAdmissionProcessUzbekistan = () => {
  const steps = [
    {
      title: "1. Application Form Submission",
      details: [
        "University selection based on NEET rank and student preference.",
      ],
    },
    {
      title: "2. Document Verification",
      details: [
        "Academic and eligibility screening by the university.",
      ],
    },
    {
      title: "3. Admission Letter Issuance",
      details: [
        "Fast processing from top Uzbekistan medical universities.",
      ],
    },
    {
      title: "4. Fee Confirmation & Seat Locking",
      details: [
        "Clear, transparent fee structure with no hidden charges.",
      ],
    },
    {
      title: "5. Visa Assistance",
      details: [
        "Complete support with documentation and application.",
      ],
    },
    {
      title: "6. Pre-Departure Preparation",
      details: [
        "Travel planning, packing guidance, and accommodation support.",
      ],
    },
    {
      title: "7. On-Arrival Assistance",
      details: [
        "Airport pickup, hostel allocation, and first-week orientation support.",
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
          MBBS Admission Process in <span className="text-primary">Uzbekistan</span>
        </h1>

        <p className="text-muted-foreground text-base md:text-lg mb-6 max-w-3xl">
          All About Doctor Education Pvt Ltd offers step-by-step support for the entire admission journey.
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

export default MbbsAdmissionProcessUzbekistan;
