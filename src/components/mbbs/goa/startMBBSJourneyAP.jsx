import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

const StartMBBSJourneyGoa = () => {
  const points = [
    "Free Counseling",
    "NEET Rank-Based College Guidance",
    "Seat & Document Support",
    "Complete Admission Assistance",
  ];

  return (
    <section className="px-4 md:px-8 py-16 bg-primary/5 border-b border-primary/20">
      <div className="relative mx-auto max-w-7xl px-6 text-center">

        <h1
          className="text-4xl sm:text-4xl font-semibold animate-fade-up mb-6"
          style={{ animationDelay: "100ms" }}
        >
          Start Your MBBS Journey in <span className="text-primary">Goa</span>
        </h1>

        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
          Begin your medical career with All About Doctor Education Pvt Ltd.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
          {points.map((point, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-white p-4 rounded-xl border border-primary/20 shadow-sm hover:shadow-md transition"
            >
              <CheckCircle className="w-6 h-6 text-primary" />
              <p className="text-lg text-foreground/80 font-medium">{point}</p>
            </div>
          ))}
        </div>

        <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition shadow-md">
          Get Your Free MBBS Plan Today!
          <ArrowRight className="w-5 h-5" />
        </button>

      </div>
    </section>
  );
};

export default StartMBBSJourneyGoa;
