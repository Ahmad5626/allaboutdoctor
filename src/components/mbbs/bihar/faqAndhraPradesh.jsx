"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FaqBihar = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqs = [
    {
      q: "How many MBBS seats are available in Bihar?",
      a: "Bihar offers MBBS seats across government, private, and deemed institutions under BCECEB counseling.",
    },
    {
      q: "Is NEET mandatory for MBBS in Bihar?",
      a: "Yes, NEET-UG qualification is compulsory for all medical seats.",
    },
    {
      q: "Which cities are best for MBBS in Bihar?",
      a: "Patna, Gaya, Darbhanga, Bhagalpur, Muzaffarpur, and Purnea are considered top choices.",
    },
    {
      q: "Do private colleges in Bihar offer good clinical exposure?",
      a: "Yes, many private colleges have excellent hospital tie-ups and high patient inflow.",
    },
    {
      q: "Does All About Doctor assist with MBBS counseling?",
      a: "Yes, complete support from NEET guidance to final admission is provided.",
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

export default FaqBihar;
