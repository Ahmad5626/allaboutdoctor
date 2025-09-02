export default function Stats() {
  const stats = [
    { label: "Verified Vendors", value: "12k+" },
    { label: "Happy Couples", value: "85k+" },
    { label: "Cities Served", value: "120+" },
    { label: "Avg. Rating", value: "4.8/5" },
  ]
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <ul className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <li key={s.label} className="rounded-xl border border-slate-200 bg-white p-5 text-center">
              <div className="text-2xl font-semibold text-rose-600">{s.value}</div>
              <div className="mt-1 text-sm text-slate-600">{s.label}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
