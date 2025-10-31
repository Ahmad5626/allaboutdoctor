import { Activity, HeartPulse, Shield, PlaneTakeoff, GraduationCap } from "lucide-react";
import React from "react";

const Career = () => {
  const careerOptions = [
    {
      icon: <Activity className="w-8 h-8 text-primary" />,
      title: "Emergency Physician or Trauma Specialist",
    },
    {
      icon: <HeartPulse className="w-8 h-8 text-primary" />,
      title: "Critical Care Expert in hospitals and ICUs",
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Disaster Management Consultant",
    },
    {
      icon: <PlaneTakeoff className="w-8 h-8 text-primary" />,
      title: "Flight Doctor or Paramedic Consultant",
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      title: "Academic Faculty or Researcher in Emergency Medicine",
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
            <span className="text-primary">MD in Emergency Medicine</span>
          </h1>
          <p className="text-muted-foreground text-lg mt-3 max-w-3xl">
            After completing your MD, you can pursue roles such as:
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
