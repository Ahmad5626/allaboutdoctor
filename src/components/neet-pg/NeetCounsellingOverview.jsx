export default function NeetCounsellingOverviewPg() {
  return (
    <section className="bg-primary py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer fade-item">
            Types of NEET PG Counselling
          </h2>
          <h3 className="mt-4 text-base md:text-lg text-white/80 fade-item">
            NEET PG counselling is conducted through centralized and state-level
            authorities to ensure transparent and merit-based seat allocation.
          </h3>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* AIQ */}
          <div className="rounded-2xl bg-white/10 backdrop-blur p-8 hover:bg-white/15 transition fade-item">
            <h3 className="text-lg font-semibold text-white mb-3">
              All India Quota (AIQ) Counselling
            </h3>
            <p className="text-sm md:text-base text-white/80 leading-relaxed">
              Conducted by the Medical Counselling Committee (MCC), AIQ counselling
              covers 50% Government PG seats, deemed universities, central
              institutions, and ESIC colleges. It is open to candidates from all
              states, with seat allotment strictly based on All India Rank (AIR).
            </p>
          </div>

          {/* State Quota */}
          <div className="rounded-2xl bg-white/10 backdrop-blur p-8 hover:bg-white/15 transition fade-item">
            <h4 className="text-lg font-semibold text-white mb-3">
              State Quota Counselling
            </h4>
            <p className="text-sm md:text-base text-white/80 leading-relaxed">
              State quota counselling is conducted by respective state counselling
              authorities and includes 50% Government PG seats along with private
              medical colleges. State-specific domicile and reservation policies
              apply to determine eligibility.
            </p>
          </div>

          {/* Rules & Schedule */}
          <div className="rounded-2xl bg-white/10 backdrop-blur p-8 hover:bg-white/15 transition fade-item">
            <h4 className="text-lg font-semibold text-white mb-3">
              Counselling Rules & Schedules
            </h4>
            <p className="text-sm md:text-base text-white/80 leading-relaxed">
              Counselling rules, eligibility criteria, and schedules may vary
              across states. Candidates must carefully follow official state and
              MCC notifications to avoid missing deadlines or seat allotment
              opportunities.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
