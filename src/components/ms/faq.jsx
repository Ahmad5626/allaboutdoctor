"use client";
import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "Doctor degree name list",
      answer:
        "Common degrees include MBBS, BDS, BAMS, BHMS, BUMS, MD, MS, and DM.",
    },
    {
      question: "Doctor of Medicine vs Master of Surgery",
      answer:
        "MD focuses on medical and clinical practice, while MS specializes in surgical techniques and procedures.",
    },
    {
      question: "Master of Surgery course duration",
      answer: "The MS program duration is 3 years after MBBS.",
    },
    {
      question: "Master of Surgery eligibility",
      answer:
        "Candidates must hold an MBBS degree from an NMC-recognized institution and qualify NEET-PG.",
    },
    {
      question: "Master of Surgery salary",
      answer:
        "MS graduates earn between ₹12–30 LPA, depending on specialization and hospital experience.",
    },
    {
      question: "What is a Master of Surgery degree?",
      answer:
        "It’s a postgraduate degree focused on surgical sciences, operative training, and patient management.",
    },
    {
      question: "Doctor courses after 12th",
      answer:
        "Students can pursue MBBS, BDS, BAMS, BHMS, BUMS, or BNYS before opting for MD/MS.",
    },
    {
      question: "MS courses list",
      answer:
        "Top MS courses include General Surgery, ENT, Orthopedics, Ophthalmology, Obstetrics & Gynaecology, and Anesthesiology.",
    },
  ];

  return (
    <section className="px-4 md:px-8 border-b border-primary/20 bg-primary/5">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <h1
          className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
          style={{ animationDelay: "100ms" }}
        >
          FAQs About <span className="text-primary">MS (Master of Surgery)</span>
        </h1>

        <div className="space-y-6 mt-8">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-lg border border-primary/20 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {idx + 1}. {faq.question}
              </h3>
              <p className="text-foreground/80">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
