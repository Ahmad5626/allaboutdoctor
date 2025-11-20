"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FaqTelangana = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqs = [
    {
      q: "Is NEET mandatory for MBBS in Telangana?",
      a: "Yes, NEET-UG is compulsory for admission.",
    },
    {
      q: "Which are the best cities for MBBS in Telangana?",
      a: "Hyderabad, Warangal–Hanamkonda, Karimnagar, Khammam, Nizamabad, and Mahabubnagar.",
    },
    {
      q: "Do private colleges in Telangana offer good clinical exposure?",
      a: "Yes, private medical colleges provide strong patient flow and hands-on internship training.",
    },
    {
      q: "How many MBBS seats are available in Telangana?",
      a: "Seats are available across government, private, and deemed universities through state NEET counseling.",
    },
    {
      q: "Does All About Doctor provide admission support?",
      a: "Yes, complete counseling assistance is provided until final reporting.",
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

export default FaqTelangana;
