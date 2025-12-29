"use client"

export default function MbbsFeesStructure() {
  const fees = [
    {
      title: "Government Medical Colleges",
      desc: "Affordable",
      accent: "from-emerald-400 to-emerald-600",
    },
    {
      title: "Private Medical Colleges",
      desc: "Mid to high range",
      accent: "from-orange-400 to-orange-600",
    },
    {
      title: "Deemed Universities",
      desc: "Premium fee structure",
      accent: "from-purple-400 to-purple-600",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-primary py-10">

      {/* Background design layers */}
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-white/10 blur-[160px]" />
      <div className="absolute bottom-0 -right-40 h-[520px] w-[520px] rounded-full bg-secondary/20 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-4xl mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer fade-item">
            MBBS Fees Structure in India
          </h2>

         
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {fees.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-3xl bg-white/10 backdrop-blur-xl 
              border border-white/15 p-10 transition hover:-translate-y-2 hover:bg-white/15 fade-item"
            >
              {/* Accent bar */}
              <span
                className={`absolute top-0 left-0 h-1 w-full rounded-t-3xl bg-gradient-to-r ${item.accent}`}
              />

              <h3 className="text-xl font-semibold text-white mb-4">
                {item.title}
              </h3>

              <p className="text-lg text-white/80">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="max-w-5xl rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 px-8 py-6">
          <p className="text-base md:text-lg text-white/85 leading-relaxed fade-item">
            Fees depend on{" "}
            <span className="font-semibold text-white">
              state, quota, college type, and facilities
            </span>
            . Students receive a{" "}
            <span className="font-semibold text-white">
              personalized fee comparison
            </span>{" "}
            before final choice filling to make informed decisions.
          </p>
        </div>

      </div>
    </section>
  )
}
