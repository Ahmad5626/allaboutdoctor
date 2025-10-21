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
    <section className="w-full py-16 md:py-24 px-4 md:px-8 border-b border-border">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Advantages and Challenges</h2>
          <div className="h-1 w-16 bg-secondary rounded-full mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
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
