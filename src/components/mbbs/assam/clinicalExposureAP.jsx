import { CheckCircle } from "lucide-react";
import React from "react";

const ClinicalExposureAssam = () => {
  const cities = [
    "Guwahati",
    "Dibrugarh",
    "Silchar",
    "Jorhat",
    "Tezpur",
    "Barpeta",
    "Tinsukia",
    "North Lakhimpur",
    "Diphu",
    "and others",
  ];

  const departments = [
    "Medicine",
    "Surgery",
    "Pediatrics",
    "OBG",
    "Orthopedics",
    "Emergency Medicine",
    "Community Health",
  ];

  return (
    <section className="px-4 md:px-8 border-b border-primary/20 bg-primary/5">
      <div className="relative mx-auto max-w-7xl px-6 py-12">

        <h1
          className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up mb-6"
          style={{ animationDelay: "100ms" }}
        >
          Clinical Exposure & <span className="text-primary">Internship Experience</span>
        </h1>

        <p className="text-muted-foreground text-lg max-w-3xl mb-4">
          Top clinical exposure cities in Assam include:
        </p>

        <div className="space-y-3 mb-6">
          {cities.map((city, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <p className="text-foreground/80 text-lg">{city}</p>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground text-lg max-w-3xl mb-4">
          Internship rotations include:
        </p>

        <div className="space-y-3">
          {departments.map((dept, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <p className="text-foreground/80 text-lg">{dept}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-foreground/80 text-lg">
          Students gain real-time, hands-on experience under experienced medical faculty.
        </p>
      </div>
    </section>
  );
};

export default ClinicalExposureAssam;
