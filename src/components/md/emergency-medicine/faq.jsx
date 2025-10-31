"use client";
import React, { useState } from "react";

const Faq = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqs = [
    {
      q: "What is the duration of MD in Emergency Medicine?",
      a: "It is a 2–3 year full-time postgraduate program.",
    },
    {
      q: "Is NEET-PG mandatory for Emergency Medicine admission?",
      a: "Yes, NEET-PG qualification is mandatory for admission.",
    },
    {
      q: "Can I pursue MD Emergency Medicine abroad?",
      a: "Yes, All About Doctor Education Pvt. Ltd. assists students in securing admissions in globally accredited universities.",
    },
    {
      q: "What are the job prospects after MD in Emergency Medicine?",
      a: "Graduates can work as emergency physicians, critical care specialists, or trauma consultants in hospitals and international healthcare systems.",
    },
  ];

  return (
    <section className="px-4 md:px-8 border-b border-primary/20">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <h1
          className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
          style={{ animationDelay: "100ms" }}
        >
          Frequently Asked <span className="text-primary">Questions</span>
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-primary/20 rounded-lg overflow-hidden"
            >
              <button
                onClick={() =>
                  setExpandedFAQ(expandedFAQ === idx ? null : idx)
                }
                className="w-full p-6 flex items-center justify-between bg-white hover:bg-primary/5 transition text-left"
              >
                <p className="font-semibold text-foreground">
                  Q{idx + 1}. {faq.q}
                </p>
                <span
                  className={`text-primary text-xl flex-shrink-0 transition-transform ${
                    expandedFAQ === idx ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {expandedFAQ === idx && (
                <div className="px-6 py-4 bg-primary/5 border-t border-primary/20">
                  <p className="text-foreground/80">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
