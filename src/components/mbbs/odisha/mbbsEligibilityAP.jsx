import { CheckCircle } from "lucide-react";
import React from "react";

const MbbsEligibilityOdisha = () => {
  const eligibility = [
    "Qualify NEET-UG",
    "Complete 10+2 with Physics, Chemistry & Biology",
    "Register for OJEE/State Counselling",
    "Provide all required documents for verification",
    "Meet domicile criteria (for state quota seats)",
  ];

  return (
    <section className="px-4 md:px-8 border-b border-primary/20 bg-white">
      <div className="relative mx-auto max-w-7xl px-6 py-12">

        <h2
          className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up"
          style={{ animationDelay: "80ms" }}
        >
          Eligibility for <span className="text-primary">MBBS in Odisha</span>
        </h2>

        <div className="mt-8 space-y-5">
          {eligibility.map((item, idx) => (
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

export default MbbsEligibilityOdisha;
