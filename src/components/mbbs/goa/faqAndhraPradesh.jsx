"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FaqGoa = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqs = [
    {
      q: "How many MBBS seats are available in Goa?",
      a: "Goa offers MBBS seats in NMC-recognized medical colleges through the state counseling process.",
    },
    {
      q: "Is NEET mandatory for MBBS in Goa?",
      a: "Yes, NEET-UG qualification is compulsory.",
    },
    {
      q: "Which city is best for MBBS in Goa?",
      a: "Panaji is the primary medical education hub.",
    },
    {
      q: "Is clinical exposure good in Goa?",
      a: "Yes, students get hands-on training through rotations in multispecialty hospitals.",
    },
    {
      q: "Does All About Doctor Education Pvt Ltd help with counseling?",
      a: "Yes, complete assistance is provided from NEET guidance to final admission.",
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

export default FaqGoa;
