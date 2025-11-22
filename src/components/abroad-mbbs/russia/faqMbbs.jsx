"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FaqRussia = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqs = [
    {
      q: "Is Russia good for MBBS for Indian students?",
      a: "Yes, Russia offers affordable, high-quality, and internationally recognized medical education.",
    },
    {
      q: "Is NEET required for MBBS in Russia?",
      a: "Yes, NEET qualification is mandatory for Indian students.",
    },
    {
      q: "What are the best regions for MBBS in Russia?",
      a: "Moscow, Kazan, St. Petersburg, Rostov, Tomsk, Novosibirsk, and Kursk are top choices.",
    },
    {
      q: "Is the degree valid in India?",
      a: "Yes, after clearing NExT as per NMC guidelines.",
    },
    {
      q: "Does All About Doctor help with complete Russia MBBS admission?",
      a: "Yes, including application, documentation, visa, travel, and on-arrival support.",
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

export default FaqRussia;
