"use client"
import Link from "next/link"

const STATES = [
  "Karnataka",
  "Maharashtra",
  "Tamil Nadu",
  "Rajasthan",
  "Uttar Pradesh",
  "Gujarat",
  "Haryana",
  "Telangana",
  "Andhra Pradesh",
]

export default function NeetStateCoveragePg() {
  return (
    <section className="bg-primary py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-20 max-w-3xl">
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer fade-item">
            All India & State-Wise NEET PG Counselling Coverage
          </h2>

          <p className="mt-6 text-lg text-white/80">
            We provide NEET PG counselling assistance across all major states in India, including but not limited to:
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {STATES.map((state) => (
            <StateCard key={state} state={state} />
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-20 text-base md:text-lg text-white/80 max-w-4xl">
          Each state follows distinct counselling rules, fee structures, seat matrices,
          and reservation policies for NEET PG admissions.
        </p>

      </div>
    </section>
  )
}

/* ===== Premium Card ===== */

function StateCard({ state }) {
  const slug = state.toLowerCase().replace(/\s+/g, "-")

  return (
    <Link
      href={`/india/${slug}/pg`}
      className="group relative overflow-hidden rounded-3xl bg-white px-8 py-10 transition hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.2)] fade-item"
    >
      {/* Gradient corner */}
      <span className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 group-hover:opacity-40 transition" />

      {/* Content */}
      <h3 className="relative text-xl md:text-2xl font-semibold text-foreground">
        {state}
      </h3>

      <p className="relative mt-3 text-sm text-muted-foreground">
        View NEET PG counselling details
      </p>

      {/* CTA */}
      <div className="relative mt-8 flex items-center gap-2 text-primary font-medium">
        <span>Explore</span>
        <span className="transform transition group-hover:translate-x-1">→</span>
      </div>

      {/* Bottom accent line */}
      <span className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
    </Link>
  )
}
