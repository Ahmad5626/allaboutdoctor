const items = [
  {
    title: "Trust & Transparency",
    desc: "All vendors are verified with reviews you can rely on. Clear pricing and no surprises.",
    icon: "✅",
  },
  {
    title: "Delightful Experience",
    desc: "Thoughtful tools that reduce planning stress—from shortlists to messages and secure bookings.",
    icon: "✨",
  },
  {
    title: "Local to You",
    desc: "Discover amazing talent in your city, from photographers to decorators and everything between.",
    icon: "📍",
  },
]

export default function Values() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">What We Stand For</h2>
          <p className="mt-3 text-slate-600">
            Our values guide every decision so couples and vendors can plan with confidence.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-xl border border-slate-200 p-6">
              <div className="text-2xl">{it.icon}</div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{it.title}</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
