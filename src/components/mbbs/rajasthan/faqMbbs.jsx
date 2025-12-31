"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FaqRajasthan = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqs = [
    {
      q: "How many MBBS seats are available in Rajasthan?",
      a: (
        <p>
          Rajasthan has thousands of MBBS seats across government, private, and
          deemed medical colleges. Seats are divided into{" "}
          <strong>85% State Quota</strong> and{" "}
          <strong>15% All India Quota (AIQ)</strong>, along with private,
          management, and NRI seats.
          <br />
          <br />
          The exact number of seats may change each year based on{" "}
          <strong>NMC approvals</strong> and college intake capacity.
        </p>
      ),
    },
    {
      q: "Is NEET mandatory for MBBS admission in Rajasthan?",
      a: (
        <p>
          Yes. <strong>NEET UG qualification is compulsory</strong> for MBBS
          admission in Rajasthan. Without qualifying NEET UG, a candidate cannot
          apply for government, private, management, or NRI seats in any medical
          college in the state.
        </p>
      ),
    },
    {
      q: "Which cities are best for MBBS in Rajasthan?",
      a: (
        <div>
          <p className="mb-2">
            Some of the top cities for MBBS in Rajasthan include:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Jaipur</li>
            <li>Jodhpur</li>
            <li>Udaipur</li>
            <li>Kota</li>
            <li>Ajmer</li>
            <li>Bikaner</li>
            <li>Bharatpur</li>
            <li>Sikar</li>
          </ul>
          <p className="mt-3">
            These cities offer large teaching hospitals, strong patient flow,
            experienced faculty, and excellent clinical exposure.
          </p>
        </div>
      ),
    },
    {
      q: "Do private medical colleges in Rajasthan provide good clinical exposure?",
      a: (
        <p>
          Yes. Most private medical colleges in Rajasthan are attached to{" "}
          <strong>high-capacity teaching hospitals</strong>, ensuring strong
          exposure in general medicine, surgery, pediatrics, obstetrics &
          gynecology, emergency care, and trauma cases.
          <br />
          <br />
          Many colleges also serve large rural and semi-urban populations, which
          significantly enhances hands-on clinical training.
        </p>
      ),
    },
    {
      q: "Does All About Doctor provide NEET UG counselling support?",
      a: (
        <div>
          <p className="mb-2">
            Yes. <strong>All About Doctor Education Pvt. Ltd.</strong> provides
            complete NEET UG counselling support, including:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>NEET rank analysis</li>
            <li>College and city selection</li>
            <li>Choice filling strategy</li>
            <li>Counselling registration assistance</li>
            <li>Seat allotment tracking</li>
            <li>Admission reporting and documentation support</li>
          </ul>
          <p className="mt-3">
            The guidance is transparent, ethical, and doctor-led, helping
            students secure the best possible MBBS seat based on their NEET
            score.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="px-4 md:px-8 py-14 border-b border-primary/20 bg-primary/5">
      <div className="relative mx-auto max-w-7xl px-6">

        <h2
          className="text-4xl font-semibold text-foreground mb-6 animate-fade-up"
          style={{ animationDelay: "80ms" }}
        >
          Frequently Asked{" "}
          <span className="text-primary">Questions (FAQs)</span>
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
                  <div className="text-foreground/80 text-base leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FaqRajasthan;
