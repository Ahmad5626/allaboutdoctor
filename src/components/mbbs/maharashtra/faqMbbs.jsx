"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FaqMadhyaPradesh = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqs = [
    {
      q: "How many MBBS seats are available in Maharashtra?",
      a: "Seats are available across government, private, and deemed universities under MCC and CET Cell counseling.",
    },
    {
      q: "Is NEET mandatory for MBBS admission in Maharashtra?",
      a: "Yes, NEET-UG is compulsory for all MBBS admissions.",
    },
    {
      q: "Which cities are best for MBBS in Maharashtra?",
      a: "Mumbai, Pune, Nagpur, Nashik, Kolhapur, Sangli, and Aurangabad are top choices.",
    },
    {
      q: "Do private colleges in Maharashtra offer good clinical exposure?",
      a: "Yes, most private medical colleges have excellent hospital tie-ups and strong OPD flow.",
    },
    {
      q: "Does All About Doctor provide counseling support?",
      a: "Yes, complete support is provided from registration to admission reporting.",
    },
  ];

  return (
    <section className="px-4 md:px-8 py-14 border-b border-primary/20 bg-primary/5">
      <div className="relative mx-auto max-w-7xl px-6">

        <h2
          className="text-4xl font-semibold text-foreground mb-6 animate-fade-up"
          style={{ animationDelay: "80ms" }}
        >
          Frequently Asked <span className="text-primary">Questions (FAQs)</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-primary/20 rounded-lg overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() =>
                  setExpandedFAQ(expandedFAQ === idx ? null : idx)
                }
                className="w-full p-6 flex items-center justify-between bg-white hover:bg-primary/5 transition text-left"
              >
                <p className="font-medium text-foreground text-lg">
                  {idx + 1}. {faq.q}
                </p>
                <ChevronDown
                  className={`w-6 h-6 text-primary transition-transform ${
                    expandedFAQ === idx ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
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

export default FaqMadhyaPradesh;
