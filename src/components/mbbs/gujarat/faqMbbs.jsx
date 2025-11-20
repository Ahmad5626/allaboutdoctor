"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FaqGujarat = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqs = [
    {
      q: "How many MBBS seats are available in Gujarat?",
      a: "Seats are distributed across government, private, and deemed universities under ACPUGMEC.",
    },
    {
      q: "Is NEET-UG required for MBBS in Gujarat?",
      a: "Yes, NEET-UG qualification is mandatory.",
    },
    {
      q: "Which cities are best for MBBS in Gujarat?",
      a: "Ahmedabad, Vadodara, Surat, Rajkot, Jamnagar, and Bhavnagar are major medical education hubs.",
    },
    {
      q: "Are Gujarat private medical colleges good for clinical exposure?",
      a: "Yes, many private institutions have strong hospital networks and high patient inflow.",
    },
    {
      q: "Does All About Doctor help in the entire counseling process?",
      a: "Yes, complete support is provided from NEET guidance to reporting at the allotted college.",
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

export default FaqGujarat;
