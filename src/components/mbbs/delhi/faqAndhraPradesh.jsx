"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FaqChhattisgarh = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqs = [
    {
      q: "Is Delhi good for MBBS?",
      a: "Yes, Delhi offers India’s top-ranked medical colleges with superior academic and clinical exposure.",
    },
    {
      q: "Is NEET mandatory for MBBS in Delhi?",
      a: "Yes, NEET-UG is compulsory for all MBBS seats.",
    },
    {
      q: "Which city offers MBBS in Delhi?",
      a: "New Delhi is the primary hub for MBBS education.",
    },
    {
      q: "Do private colleges in Delhi offer good clinical exposure?",
      a: "Yes, many private and deemed universities have strong hospital tie-ups.",
    },
    {
      q: "Does All About Doctor help with Delhi admissions?",
      a: "Yes, complete assistance is provided for counseling, choice filling, documentation, and final admission.",
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

export default FaqChhattisgarh;
