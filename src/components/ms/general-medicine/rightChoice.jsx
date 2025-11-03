import { CheckCircle } from 'lucide-react'
import React from 'react'

const RightChoice = () => {
  const whyChoose = [
    "Comprehensive Surgical Expertise: Gain in-depth knowledge and hands-on experience in general and specialized surgical techniques across multiple organ systems.",
    "Career Advancement: The MS qualification opens the path to super-specializations and advanced fellowships in surgical disciplines like cardiothoracic surgery, neurosurgery, urology, and more.",
    "High Global Demand: MS General Medicine specialists are in demand across leading hospitals, surgical centers, and healthcare institutions worldwide.",
    "Diverse Career Paths: Graduates can pursue careers in surgery, teaching, research, hospital administration, or private clinical practice.",
  ];

  return (
    <div>
      {/* Why Choose MS in General Medicine */}
      <section className="px-4 md:px-8 border-b border-primary/20 bg-primary/5">
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}
          >
            Why Choose <span className="text-primary">MS in General Medicine?</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-6 py-6">
            {whyChoose.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground/80 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RightChoice;
