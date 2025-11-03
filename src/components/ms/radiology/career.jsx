import { Stethoscope, Microscope, Building2, GraduationCap, Radio, Cpu } from "lucide-react";
import React from "react";

const Career = () => {
  const careerOptions = [
    {
      icon: <Stethoscope className="w-8 h-8 text-primary" />,
      title: "Consultant Radiologist or Imaging Specialist",
    },
    {
      icon: <Microscope className="w-8 h-8 text-primary" />,
      title: "Interventional Radiologist",
    },
    {
      icon: <Building2 className="w-8 h-8 text-primary" />,
      title: "Diagnostic Center Director or Hospital Imaging Head",
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      title: "Academic Professor or Researcher",
    },
    {
      icon: <Cpu className="w-8 h-8 text-primary" />,
      title: "Teleradiology Consultant or Healthcare AI Analyst",
    },
  ];

  return (
    <section className="px-4 md:px-8 bg-primary/5 border-b border-primary/20">
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10">
          <h1
            className="text-4xl sm:text-4xl font-semibold animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            Career Opportunities After{" "}
            <span className="text-primary">MS in Radiology</span>
          </h1>
          <p className="text-muted-foreground text-lg mt-3 max-w-3xl">
            Graduates can build successful careers as:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerOptions.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-primary/20 shadow-sm p-6 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <p className="text-foreground/80 text-lg font-medium leading-snug">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
