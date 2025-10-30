"use client";
import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "Doctor degree name list",
      answer:
        "Some popular medical degrees include MBBS, BDS, BAMS, BHMS, BUMS, MD, MS, and DM.",
    },
    {
      question: "Doctor of Medicine course duration",
      answer: "The MD program typically lasts 3 years after completion of MBBS.",
    },
    {
      question: "Doctor of Medicine salary",
      answer:
        "MD doctors in India earn between ₹10–25 LPA, depending on specialization and experience.",
    },
    {
      question: "What is a Doctor of Medicine called?",
      answer:
        "An MD graduate is called a Physician or Specialist Doctor in their chosen field.",
    },
    {
      question: "Doctor of Medicine degree",
      answer:
        "It’s a postgraduate degree focusing on in-depth medical specialization, research, and patient management.",
    },
    {
      question: "Doctor courses after 12th",
      answer:
        "Students can pursue MBBS, BDS, BAMS, BHMS, BUMS, and BNYS after completing 12th with PCB subjects.",
    },
    {
      question: "Doctor of Medicine course details",
      answer:
        "The MD program includes clinical training, research projects, thesis submission, and specialization-based study.",
    },
    {
      question: "MD courses list",
      answer:
        "Major MD courses include General Medicine, Paediatrics, Radiology, Dermatology, Pathology, and Anesthesiology, among others.",
    },
  ];

  return (
    <section className="px-4 md:px-8 border-b border-primary/20 bg-primary/5">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <h1
          className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
          style={{ animationDelay: "100ms" }}
        >
          FAQs About <span className="text-primary">MD (Doctor of Medicine)</span>
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
