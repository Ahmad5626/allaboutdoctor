import { CheckCircle } from "lucide-react";
import React from "react";

const MbbsAdmissionProcessAP = () => {
  const steps = [
    {
      title: "1. Counselling Registration",
      details: [
        "Guidance for registration on the official counselling portal",
        "Support for accurate form submission and document verification",
      ],
    },
    {
      title: "2. College Selection Based on NEET Rank",
      details: [
        "Personalized college suggestions as per NEET score and preferences",
        "Major cities covered: Nellore, Vijayawada, Kurnool, Guntur, Kadapa, KAKINADA, Tirupati, RAJAMAHENDRAVARAM, and more",
      ],
    },
    {
      title: "3. Choice Filling Support",
      details: [
        "City preference planning",
        "Guidance on fee structure and budget",
        "Hostel availability overview",
        "Cutoff pattern analysis",
        "Inputs on clinical exposure levels",
      ],
    },
    {
      title: "4. Seat Allotment Guidance",
      details: [
        "Real-time monitoring of counselling rounds",
        "Support until the allotment letter is issued",
      ],
    },
    {
      title: "5. Reporting & Admission Completion",
      details: [
        "Support for joining the allotted college",
        "Assistance with documentation and on-campus formalities",
      ],
    },
    {
      title: "6. Post-Admission Support",
      details: [
        "Hostel assistance and settling-in support",
        "Travel guidance for students and parents",
        "Orientation support for academics and campus life",
        "NExT preparation roadmap and mentoring",
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
          MBBS Admission Process in{" "}
          <span className="text-primary">Andhra Pradesh</span>
        </h1>

        <p className="text-muted-foreground text-base md:text-lg mb-6 max-w-3xl">
          All About Doctor Education Pvt Ltd supports you through every step of
          the MBBS admission journey in Andhra Pradesh — from counselling
          registration to post-admission guidance.
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

export default MbbsAdmissionProcessAP;
