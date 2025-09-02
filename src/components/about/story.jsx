export default function Story() {
  const steps = [
    {
      year: "2018",
      title: "Where it began",
      text: "We started as a small directory to help friends find reliable wedding photographers.",
    },
    {
      year: "2020",
      title: "Nationwide growth",
      text: "Expanded to all major cities with verified vendor onboarding and reviews.",
    },
    {
      year: "2023",
      title: "End‑to‑end planning",
      text: "Introduced shortlists, messages, and secure booking tools to simplify planning.",
    },
  ]
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Our Story</h2>
          <p className="mt-3 text-slate-600">From a simple idea to a beloved platform for couples and creators.</p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <article key={s.year} className="rounded-xl border border-slate-200 p-6">
              <span className="text-sm font-medium text-teal-600">{s.year}</span>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
