import { CheckCircle } from "lucide-react";
import React from "react";

const MbbsAdmissionProcessRussia = () => {
  const steps = [
    {
      title: "1. Application & Document Evaluation",
      details: ["University shortlisting and profile-based guidance."],
    },
    {
      title: "2. Issuance of Admission Letter",
      details: ["Support for rapid admission confirmation."],
    },
    {
      title: "3. Fee Submission & Seat Confirmation",
      details: ["Guidance on fee structure and payment formalities."],
    },
    {
      title: "4. Invitation Letter from Ministry of Education",
      details: ["Document verification and official invitation assistance."],
    },
    {
      title: "5. Visa Processing Support",
      details: [
        "Complete visa guidance, documentation, and appointment scheduling.",
      ],
    },
    {
      title: "6. Pre-Departure Guidance",
      details: [
        "Flight booking, travel planning, and pre-departure briefings.",
      ],
    },
    {
      title: "7. Arrival & On-Campus Support",
      details: [
        "Pickup arrangement, hostel accommodation support, and university onboarding.",
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
          MBBS Admission Process in <span className="text-primary">Russia</span>
        </h1>

        <p className="text-muted-foreground text-base md:text-lg mb-6 max-w-3xl">
          All About Doctor Education Pvt Ltd assists you through every admission step.
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

export default MbbsAdmissionProcessRussia;
