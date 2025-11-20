"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FaqAndhraPradesh = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqs = [
    {
      q: "Is NEET compulsory for MBBS in Arunachal Pradesh?",
      a: "Yes, NEET-UG qualification is mandatory for all MBBS seats.",
    },
    {
      q: "Which city is best for MBBS in Arunachal Pradesh?",
      a: "Naharlagun is the primary medical education hub.",
    },
    {
      q: "Are MBBS colleges in Arunachal Pradesh NMC-approved?",
      a: "Yes, institutions follow NMC norms and academic standards.",
    },
    {
      q: "Is clinical exposure good in Arunachal Pradesh?",
      a: "Yes, students get hands-on training in key departments with growing patient flow.",
    },
    {
      q: "Does All About Doctor help with admissions?",
      a: "Yes, from NEET guidance to counseling, documentation, and seat allotment—complete support is provided.",
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
              {/* Button */}
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

export default FaqAndhraPradesh;
