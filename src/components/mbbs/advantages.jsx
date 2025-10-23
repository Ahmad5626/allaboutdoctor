export default function Advantages() {
  const advantages = [
    "Globally accepted MBBS degree",
    "Affordable tuition structure",
    "English-medium instruction",
    "Strong practical exposure",
    "High employment potential in India",
  ]

  const challenges = [
    "Competitive entrance exam (NEET-UG)",
    "Limited government seats",
    "Intensive study and clinical schedule",
  ]

  return (
    <section className="w-full ">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <div>
          <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
              style={{ animationDelay: "100ms" }}>Advantages and <span className="text-primary">Challenges</span></h1>
          
        </div>

        <div className="grid md:grid-cols-2 gap-8 py-6">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Advantages:</h3>
            <ul className="space-y-3">
              {advantages.map((item, idx) => (
                <li key={idx} className="text-foreground text-sm flex items-start">
                  <span className="text-primary mr-3 font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Challenges:</h3>
            <ul className="space-y-3">
              {challenges.map((item, idx) => (
                <li key={idx} className="text-foreground text-sm flex items-start">
                  <span className="text-secondary mr-3 font-bold">⚠</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
