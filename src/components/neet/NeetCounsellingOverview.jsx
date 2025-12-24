export default function NeetCounsellingTypes() {
  return (
    <section className="bg-primary py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer fade-item">
            Types of NEET UG Counselling in India
          </h2>
          <h3 className="mt-4 text-base md:text-lg text-white/80 fade-item">
            NEET UG counselling is conducted under different categories to ensure
            fair and transparent seat allocation.
          </h3>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* AIQ */}
          <div className="rounded-2xl bg-white/10 backdrop-blur p-8 hover:bg-white/15 transition fade-item">
            <h3 className="text-lg font-semibold text-white mb-3">
              All India Quota (AIQ) Counselling
            </h3>
            <h4 className="text-sm md:text-base text-white/80 leading-relaxed">
              AIQ counselling is conducted at the national level and covers 15% of
              Government medical college seats, along with seats in central
              institutions. Seat allotment is based purely on All India Rank
              (AIR), allowing candidates from any state to participate.
            </h4>
          </div>

          {/* State Quota */}
          <div className="rounded-2xl bg-white/10 backdrop-blur p-8 hover:bg-white/15 transition fade-item">
            <h4 className="text-lg font-semibold text-white mb-3">
              State Quota NEET UG Counselling
            </h4>
            <p className="text-sm md:text-base text-white/80 leading-relaxed">
              State counselling is conducted individually by each state authority
              and covers 85% of medical seats in government colleges within that
              state. Eligibility often depends on state domicile rules, which may
              vary from one state to another.
            </p>
          </div>

          {/* Deemed / Private */}
          <div className="rounded-2xl bg-white/10 backdrop-blur p-8 hover:bg-white/15 transition fade-item">
            <h4 className="text-lg font-semibold text-white mb-3">
              Deemed & Private University Counselling
            </h4>
            <h4 className="text-sm md:text-base text-white/80 leading-relaxed">
              Deemed universities and private medical colleges follow separate
              counselling processes, either through centralized authorities or
              their own systems. Choice filling timelines and admission rules may
              differ from government counselling.
            </h4>
          </div>

        </div>
      </div>
    </section>
  )
}
