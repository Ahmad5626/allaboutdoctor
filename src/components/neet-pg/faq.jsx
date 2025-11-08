"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: "How do I register for NEET PG Counselling?",
      a: "Visit the MCC website for AIQ seats or your respective State DME portal for State Quota.",
    },
    {
      q: "Can I apply for both AIQ and State Quota counselling?",
      a: "Yes, candidates are allowed to participate in both simultaneously.",
    },
    {
      q: "What if I miss the first round of counselling?",
      a: "You may still participate in Round 2, Mop-Up Round, or Stray Vacancy Round depending on availability.",
    },
    {
      q: "Are Deemed University admissions handled differently?",
      a: "Yes. Deemed Universities are allotted seats under MCC counselling with separate fee norms.",
    },
    {
      q: "Can I change my reservation/category after registration?",
      a: "No. Category once registered cannot be modified later, so ensure accuracy at the time of submission.",
    },
  ];

  return (
    <section className="w-full">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-14">
        <div className="mb-8">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            Frequently Asked <span className="text-primary">Questions (FAQs)</span>
          </h1>
          
        </div>

        <div className="space-y-4 py-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-border rounded-lg overflow-hidden hover:border-primary transition-colors"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-foreground/5 transition-colors text-left"
              >
                <span className="font-semibold text-foreground">
                  Q{idx + 1}. {faq.q}
                </span>
                <span
                  className={`text-primary text-xl flex-shrink-0 transition-transform ${
                    openIdx === idx ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {openIdx === idx && (
                <div className="px-6 py-4 border-t border-border bg-foreground/2">
                  <p className="text-foreground/80 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
