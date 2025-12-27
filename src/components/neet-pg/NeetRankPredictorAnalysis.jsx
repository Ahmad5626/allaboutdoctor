"use client"
import Link from "next/link"

export default function NeetRankPredictorPg() {
  return (
    <section className="relative bg-[#f8fafc] py-32 overflow-hidden">
      
      {/* Decorative background shapes */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute top-40 -right-32 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-24 max-w-4xl">
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer fade-item">
            NEET PG Rank Predictor & Specialty Analysis
          </h2>
        </div>

        {/* Feature Panels */}
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Predictor Panel */}
          <div className="relative rounded-[32px] bg-white p-12 shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              ● Rank Estimation Tool
            </span>

            <h3 className="mt-6 text-3xl font-semibold">
              NEET PG Rank Predictor
            </h3>

            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              The NEET PG Rank Predictor helps candidates estimate their expected
              rank and admission chances before counselling begins. It assists
              doctors in planning their postgraduate journey with clarity.
            </p>

            <ul className="mt-6 space-y-3 text-base md:text-lg text-muted-foreground">
              <li>• Predicting probable NEET PG rank</li>
              <li>• Understanding specialty-wise admission scope</li>
              <li>• Shortlisting colleges and courses</li>
              <li>• Building a strong counselling strategy</li>
            </ul>

            <Link
              href="#"
              className="inline-flex items-center gap-3 mt-10 text-primary font-medium text-lg"
            >
              Try NEET PG Rank Predictor
              <span className="transition-transform hover:translate-x-1">→</span>
            </Link>

            {/* Accent bar */}
            <span className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-transparent" />
          </div>

          {/* Analysis Panel */}
          <div className="relative rounded-[32px] bg-white p-12 shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-secondary">
              ● Admission Insights
            </span>

            <h3 className="mt-6 text-3xl font-semibold">
              Previous Year NEET PG Rank & Specialty Analysis
            </h3>

            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              Analyzing previous admission data helps doctors choose the right
              specialization and institute by understanding real counselling
              trends.
            </p>

            <ul className="mt-6 space-y-3 text-base md:text-lg text-muted-foreground">
              <li>• Specialty-wise closing ranks</li>
              <li>• Government vs private PG seat trends</li>
              <li>• Round-wise seat movement</li>
              <li>• High-demand vs low-risk specialty options</li>
            </ul>

            <Link
              href="#"
              className="inline-flex items-center gap-3 mt-10 text-secondary font-medium text-lg"
            >
              View NEET PG Rank Analysis
              <span className="transition-transform hover:translate-x-1">→</span>
            </Link>

            {/* Accent bar */}
            <span className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-secondary to-transparent" />
          </div>

        </div>

        {/* Bottom Message */}
        <div className="mt-18 max-w-4xl">
          <p className="text-xl text-muted-foreground leading-relaxed">
            This analytical approach improves chances of securing a preferred PG seat.

          </p>
        </div>

      </div>
    </section>
  )
}
