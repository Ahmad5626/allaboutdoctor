import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the Bachelor of Homeopathic Medicine and Surgery salary?",
      answer:
        "Fresh BHMS graduates in India typically earn ₹3–6 LPA, while experienced doctors and clinic owners can earn ₹10–15 LPA or more depending on specialization and practice.",
    },
    {
      question: "Is the Bachelor of Homeopathic Medicine and Surgery available in India?",
      answer:
        "Yes, the BHMS program is available at numerous AYUSH-recognized universities and colleges across India such as NIH Kolkata, Nehru Homeopathic Medical College Delhi, and Dr. M.L. Dhawale Memorial Homeopathic Institute Mumbai.",
    },
    {
      question: "What is the Bachelor of Homeopathic Medicine and Surgery course duration?",
      answer:
        "The total duration of the BHMS course is 5.5 years, including 4.5 years of academic study and 1 year of compulsory internship.",
    },
    {
      question: "What is the short form of Bachelor of Homeopathic Medicine and Surgery?",
      answer:
        "The short form of this degree is BHMS — an undergraduate course in the field of Homeopathic Medicine and Surgery.",
    },
    {
      question: "What is the Bachelor of Homeopathic Medicine and Surgery salary per month?",
      answer:
        "On average, BHMS doctors earn between ₹30,000–₹60,000 per month, which can grow significantly with experience or private practice.",
    },
    {
      question: "What is the Bachelor of Homeopathic Medicine and Surgery syllabus?",
      answer:
        "The BHMS syllabus covers Anatomy, Physiology, Pathology, Microbiology, Homeopathic Materia Medica, Organon of Medicine, Repertory, Surgery, and Obstetrics & Gynaecology.",
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
