import { CheckCircle } from "lucide-react";
import React from "react";

const MbbsAdmissionProcessTajikistan = () => {
  const steps = [
    {
      title: "1. Application Submission",
      details: [
        "Guidance for selecting the right university based on NEET performance.",
      ],
    },
    {
      title: "2. Document Verification",
      details: [
        "Screening of academic records and eligibility confirmation.",
      ],
    },
    {
      title: "3. Admission Letter Processing",
      details: [
        "Support for invitation letter and seat allocation.",
      ],
    },
    {
      title: "4. Fee Confirmation",
      details: [
        "Transparent breakdown of tuition, hostel, and other charges.",
      ],
    },
    {
      title: "5. Visa Support",
      details: [
        "Complete assistance for visa documentation and processing.",
      ],
    },
    {
      title: "6. Travel & Pre-Departure",
      details: [
        "Guidance for air travel, accommodation, and essential preparations.",
      ],
    },
    {
      title: "7. On-Arrival Support",
      details: [
        "Help with airport pickup, hostel onboarding, and orientation.",
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
          MBBS Admission Process in <span className="text-primary">Tajikistan</span>
        </h1>

        <p className="text-muted-foreground text-base md:text-lg mb-6 max-w-3xl">
          All About Doctor Education Pvt Ltd ensures end-to-end assistance for a smooth admission journey.
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

export default MbbsAdmissionProcessTajikistan;
