const items = [
  { value: "95%", label: "Admission success rate" },
  { value: "850+", label: "Global partner universities" },
  { value: "10,000+", label: "Successful students" },
]

export default function Stats() {
  return (
    <section aria-label="Key outcomes">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-5">
        {items.map((it) => (
          <li
            key={it.label}
            className="flex flex-col items-start gap-1 rounded-md p-4 md:p-5 border border-border border-l-2 border-l-primary"
          >
            <span className="text-2xl md:text-3xl font-bold tracking-tight text-primary">{it.value}</span>
            <span className="text-secondary text-sm md:text-base">{it.label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
