import { CheckCircle } from "lucide-react";
import React from "react";

const ClinicalExposureManipur = () => {
  const cities = [
    "Imphal",
    "Churachandpur",
  ];

  const departments = [
    "General Medicine",
    "General Surgery",
    "Pediatrics",
    "Orthopedics",
    "OBG",
    "Emergency Medicine",
    "Community Health",
    "Diagnostic Medicine",
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
          Medical hubs like Imphal and Churachandpur offer strong clinical exposure in:
        </p>

        <div className="space-y-3 mb-6">
          {cities.map((city, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <p className="text-foreground/80 text-lg">{city}</p>
            </div>
          ))}
        </div>

        <div className="space-y-3 mb-6">
          {departments.map((dept, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <p className="text-foreground/80 text-lg">{dept}</p>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground text-lg max-w-3xl mb-4">
          Internships include department-wise clinical rotations under the guidance of experienced medical faculty.
        </p>

      </div>
    </section>
  );
};

export default ClinicalExposureManipur;
