const universities = [
  "Kazan Federal University – Russia",
  "Al‑Farabi Kazakh National University – Kazakhstan",
  "Tbilisi State Medical University – Georgia",
  "Samarkand State Medical University – Uzbekistan",
  "Yerevan State Medical University – Armenia",
  "Can Tho University of Medicine and Pharmacy – Vietnam",
  "National University of Timor Leste – Timor Leste",
  "Kathmandu Medical College – Nepal",
  "European University – Georgia (Europe Region)",
]

export default function Partners() {
  return (
    <section id="partners">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
         <div className="max-w-7xl mx-auto px-6 text-center">
         <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Official  <span className="text-primary">University Partners</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Partnered with reputable institutions recognized by NMC and WHO, All about doctor  maintains direct collaborations with top global universities to ensure authenticity and transparency in every admission
          </p>
    </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {universities.map((u) => (
            <article key={u} className="rounded-xl border border-border p-5">
              <h4 className="font-medium">{u}</h4>
              <div className="mt-3 w-10 border-t-2 border-primary" />
            </article>
          ))}
        </div>
         <p className="mt-2 text-sm/6 md:text-base/6 text-muted-foreground py-10">
           Our official partnerships help students receive accurate information, direct university admissions, and complete assurance of quality education abroad.
          </p>
      </div>
    </section>
  )
}
