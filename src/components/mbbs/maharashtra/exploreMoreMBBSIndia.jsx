import React from "react";
import { ArrowRight } from "lucide-react";

const ExploreMoreIndia = () => {
  return (
    <section className="px-4 md:px-8 py-16 border-b border-primary/20">
      <div className="relative mx-auto max-w-7xl px-6 text-center">

        <h2 className="text-4xl font-semibold text-foreground mb-4">
          Explore More – <span className="text-primary">MBBS in India</span>
        </h2>

        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
          Looking for admissions in other states? <br />
          Check our complete MBBS in India guide for colleges, fees, cutoffs, and admission procedures.
        </p>

        <a
          href="/mbbs-in-india"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
        >
          Visit: MBBS in India
          <ArrowRight className="w-5 h-5" />
        </a>

      </div>
    </section>
  );
};

export default ExploreMoreIndia;
