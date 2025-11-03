import { CheckCircle } from "lucide-react";
import React from "react";

const RightChoice = () => {
  const whyChoose = [
    "Comprehensive Training in Women’s Health: Gain in-depth knowledge and hands-on experience in obstetrics, gynaecological surgery, infertility management, and prenatal & postnatal care.",
    "Wide Range of Surgical Skills: Master advanced surgical techniques such as laparoscopy, hysterectomy, caesarean sections, and reproductive surgeries.",
    "High Global Demand: Qualified MS Gynaecologists are in demand across hospitals, fertility clinics, and women’s health institutions worldwide.",
    "Expanding Career Opportunities: Pursue careers in obstetrics, reproductive medicine, research, teaching, and healthcare leadership.",
  ];

  return (
    <div>
      {/* Why Choose MS in Gynaecology */}
      <section className="px-4 md:px-8 border-b border-primary/20 bg-primary/5">
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}
          >
            Why Choose <span className="text-primary">MS in Gynaecology?</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-6 py-6">
            {whyChoose.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground/80 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RightChoice;
