"use client";
import { Lock, Unlock } from "lucide-react";

export default function StateStatus() {
  return (
    <section className="relative py-10 bg-white overflow-hidden">
      
      {/* soft background accents */}
      <div className="absolute -top-24 -left-24 h-80 w-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-24 h-80 w-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer fade-item">
            State Status:
            Rajasthan
            (Closed vs. Open)
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* CLOSED – State Quota */}
          <div className="group relative rounded-3xl border border-border bg-white p-8 shadow-sm hover:shadow-xl transition-all fade-item">
            
            {/* status badge */}
            <span className="absolute -top-4 left-8 rounded-full bg-red-100 text-red-700 px-4 py-1 text-sm font-semibold">
              CLOSED
            </span>

            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-700">
                <Lock />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  85% State Quota (Category A)
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  Only candidates with a{" "}
                 CLOSED. Only candidates with a Rajasthan Domicile can apply. We ensure all 19 steps above are met to protect your domicile advantage.

                </p>

                
              </div>
            </div>
          </div>

          {/* OPEN – Management / NRI */}
          <div className="group relative rounded-3xl border border-border bg-white p-8 shadow-sm hover:shadow-xl transition-all fade-item">
            
            {/* status badge */}
            <span className="absolute -top-4 left-8 rounded-full bg-green-100 text-green-700 px-4 py-1 text-sm font-semibold">
              OPEN
            </span>

            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
                <Unlock />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Management & NRI Quota (Category B & C)
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                   Candidates from any state in India can apply for private colleges and management seats. We specialize in managing the "Time Management" aspect for out-of-state students juggling multiple state forms.

                </p>

               
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
