export default function Eligibility() {
  const criteria = [
    {
      title: "NEET UG Qualification",
      desc: "Must have qualified NEET UG with the required cutoff percentile",
      icon: "✅",
      accent: "from-primary to-secondary",
    },
    {
      title: "Academic Background",
      desc: "Must have passed 10+2 with Physics, Chemistry, and Biology",
     icon: "✅",
      accent: "from-secondary to-primary",
    },
    {
      title: "Age Requirement",
      desc: "Minimum age of 17 years at the time of admission",
      icon: "✅",
      accent: "from-primary to-secondary",
    },
    {
      title: "Category & Domicile Rules",
      desc: "Must fulfill category and domicile requirements (for State Quota counselling)",
      icon: "✅",
      accent: "from-secondary to-primary",
    },
    {
      title: "Counselling Eligibility",
      desc: "Eligible candidates can participate in AIQ, State, or both counselling processes",
     icon: "✅",
      accent: "from-primary to-secondary",
    },
   
  ];

  return (
    <section
      className="
        relative overflow-hidden py-20
        bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5
      "
    >
      {/* Soft background glows */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
            Eligibility for{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              NEET UG Counselling
            </span>
          </h2>
          <p className="mt-4 text-slate-700">
           Candidates must meet the following eligibility criteria to participate in NEET UG counselling for MBBS and BDS admissions:
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {criteria.map((item, index) => (
            <div
              key={index}
              className="
                group relative rounded-2xl
                bg-white/80 backdrop-blur-md
                border border-primary/10
                p-6 transition-all duration-500
                hover:-translate-y-2 hover:shadow-xl
              "
            >
              {/* Left gradient strip */}
              <div
                className={`absolute left-0 top-0 h-full w-1.5 rounded-l-2xl bg-gradient-to-b ${item.accent}`}
              />

              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="mb-2 text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {item.desc}
              </p>

              {/* Hover glow */}
              {/* <div
                className={`pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr ${item.accent}/10`}
              /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
