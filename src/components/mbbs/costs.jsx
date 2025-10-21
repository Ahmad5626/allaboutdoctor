export default function Costs() {
  const costFactors = [
    "Type and location of the college",
    "Hostel, food, and living arrangements",
    "Examination and material charges",
  ]

  const fees = [
    { type: "Government Universities", range: "₹2 – ₹5 lakh" },
    { type: "Private Universities", range: "₹30 – ₹80 lakh" },
    { type: "Deemed Universities", range: "₹75 lakh – ₹1 crore" },
  ]

  return (
    <section className="w-full ">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <div>
          <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-5xl animate-fade-up my-4"
              style={{ animationDelay: "100ms" }}>
            MBBS in India: <span className="text-primary">Cost Factors and Smart Savings Tips</span>
          </h1>
        </div>

        <p className="text-foreground leading-relaxed">
          The cost of studying MBBS in India depends on the type of institution — government, private, or deemed
          universities.
        </p>

        <div className="grid md:grid-cols-2 gap-8 py-6">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Factors Influencing Total Cost:</h3>
            <ul className="space-y-3">
              {costFactors.map((factor, idx) => (
                <li key={idx} className="text-foreground text-sm flex items-start">
                  <span className="text-secondary mr-3">•</span>
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Fee Structure by Institution Type:</h3>
            <div className="space-y-3">
              {fees.map((fee, idx) => (
                <div key={idx} className="border border-border rounded-lg p-4 space-y-1">
                  <p className="font-semibold text-foreground">{fee.type}</p>
                  <p className="text-primary font-bold">{fee.range}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-l-4 border-primary pl-6 py-4 space-y-2">
          <p className="font-semibold text-primary">Scholarship & Financial Support:</p>
          <p className="text-foreground text-sm leading-relaxed">
            All About Doctor Education Pvt. Ltd. provides scholarship guidance and fee management assistance to help
            students minimize their expenses and plan efficiently.
          </p>
        </div>
      </div>
    </section>
  )
}
