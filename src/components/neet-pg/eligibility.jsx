export default function EligibilityPg() {
 const criteria = [
  {
    title: "NEET PG Qualification",
    desc: "Must qualify NEET PG with the prescribed cutoff",
    icon: "✅",
    accent: "from-primary to-secondary",
  },
  {
    title: "MBBS Degree",
    desc: "Possess a valid MBBS degree from an NMC-recognized institute",
    icon: "✅",
    accent: "from-secondary to-primary",
  },
  {
    title: "Compulsory Internship",
    desc: "Completion of one-year compulsory internship",
    icon: "✅",
    accent: "from-primary to-secondary",
  },
  {
    title: "Medical Registration",
    desc: "Valid Medical Registration (NMC / State Medical Council)",
    icon: "✅",
    accent: "from-secondary to-primary",
  },
  {
    title: "Category & Domicile Rules",
    desc: "Fulfill category and domicile criteria for State Quota counselling",
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
              NEET PG Counselling
            </span>
          </h2>
          <p className="mt-4 text-slate-700">
           Candidates must fulfill the following requirements to participate in NEET PG counselling:
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
         <p className="mt-4 text-slate-700 font-bold">
           Only NEET PG-qualified candidates are permitted to register and participate.
          </p>
      </div>
    </section>
  );
}
