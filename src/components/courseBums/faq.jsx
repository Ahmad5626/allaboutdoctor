import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the Bachelor of Unani Medicine and Surgery salary?",
      answer:
        "A BUMS graduate typically earns between ₹3–6 LPA initially. With experience or private practice, monthly earnings can reach ₹80,000–₹1.5 lakh or more.",
    },
    {
      question: "What is the Bachelor of Unani Medicine and Surgery syllabus?",
      answer:
        "The syllabus includes Anatomy, Physiology, Unani Pharmacology, Pathology, Regimental Therapy, Surgery, and Community Medicine, blending Unani philosophy with clinical practice.",
    },
    {
      question: "What is the Bachelor of Unani Medicine and Surgery fee structure?",
      answer:
        "Government colleges charge ₹1.5–3 lakhs for the full course, while private colleges range between ₹6–12 lakhs depending on facilities and location.",
    },
    {
      question: "What is the Bachelor of Unani Medicine and Surgery eligibility?",
      answer:
        "Candidates must have passed 10+2 with Physics, Chemistry, Biology (minimum 50%) and qualified NEET-UG as per AYUSH admission norms.",
    },
    {
      question: "Which are the top Bachelor of Unani Medicine and Surgery colleges?",
      answer:
        "Leading BUMS colleges include Jamia Hamdard (New Delhi), Aligarh Muslim University, and Government Unani Medical Colleges in Bengaluru, Chennai, and Lucknow.",
    },
    {
      question: "What is the Bachelor of Unani Medicine and Surgery meaning?",
      answer:
        "The BUMS course refers to a professional degree in the Unani System of Medicine, focusing on natural and holistic treatments rooted in ancient Greek-Arabic medical science.",
    },
    {
      question: "What is the BUMS salary per month?",
      answer:
        "Entry-level doctors earn ₹25,000–₹50,000 per month, while senior Unani practitioners, consultants, or lecturers can earn ₹80,000–₹1,50,000 monthly.",
    },
    {
      question: "What are the available BUMS MS Surgery list options?",
      answer:
        "Postgraduate specializations include Moalijat (Medicine), Ilmul Qabalat wa Amraze Niswan (Obstetrics & Gynaecology), Jarahat (Surgery), Tahaffuzi wa Samaji Tibb (Preventive Medicine), and Ilmul Advia (Pharmacology).",
    },
  ];

  return (
    <section className="px-4 md:px-8 border-b border-primary/20 bg-primary/5">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <h1
          className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
          style={{ animationDelay: "100ms" }}
        >
          Frequently Asked <span className="text-primary">Questions (FAQs)</span>
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
