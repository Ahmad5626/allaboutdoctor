"use client"
import Link from "next/link"

export default function NeetRankPredictorModern() {
  return (
    <section className="relative bg-[#f8fafc] py-32 overflow-hidden">
      
      {/* Decorative background shapes */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute top-40 -right-32 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-24 max-w-4xl">
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer fade-item">
            NEET UG Rank Predictor & Previous Year Rank Analysis

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
              NEET UG Rank Predictor
            </h3>

            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              This tool helps students estimate their expected rank and shortlist
              colleges using historical admission trends and score ranges.
            </p>

            <Link
              href="/neet-rank-predictor"
              className="inline-flex items-center gap-3 mt-10 text-primary font-medium text-lg"
            >
              Try Rank Predictor
              <span className="transition-transform hover:translate-x-1">→</span>
            </Link>

            {/* Accent bar */}
            <span className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-transparent" />
          </div>

          {/* Analysis Panel */}
          <div className="relative rounded-[32px] bg-white p-12 shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-secondary">
              ● Historical Insights
            </span>

            <h3 className="mt-6 text-3xl font-semibold">
              Previous Year Closing Rank Analysis
            </h3>

            <ul className="mt-6 space-y-4 text-base md:text-lg text-muted-foreground">
              <li>• Category-wise closing ranks</li>
              <li>• Government vs Private college trends</li>
              <li>• Round-wise seat movement insights</li>
            </ul>

            <Link
              href="/neet-previous-year-ranks"
              className="inline-flex items-center gap-3 mt-10 text-secondary font-medium text-lg"
            >
              View Rank Analysis
              <span className="transition-transform hover:translate-x-1">→</span>
            </Link>

            {/* Accent bar */}
            <span className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-secondary to-transparent" />
          </div>

        </div>

        {/* Bottom Message */}
        <div className="mt-28 max-w-4xl">
          <p className="text-xl text-muted-foreground leading-relaxed">
            This analysis helps students make{" "}
            <span className="font-semibold text-foreground">
              smarter and safer choice-filling decisions
            </span>{" "}
            by understanding real admission patterns rather than assumptions.
          </p>
        </div>

      </div>
    </section>
  )
}
