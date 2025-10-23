export default function WhyChooseAAD() {
  const reasons = [
    "10+ years of experience in medical education counseling",
    "95% admission success rate",
    "Partnerships with 850+ medical universities",
    "Personalized counseling & end-to-end support",
    "Visa, travel, and documentation handled seamlessly",
  ];

  return (
    <section className="w-full py-10 bg-card">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="space-y-4  mb-8">
          <h1 className="text-pretty text-4xl font-semibold sm:text-4xl animate-fade-up" style={{ animationDelay: "100ms" }}>
            Why Choose <span className="text-primary">All About Doctor Education Pvt Ltd?</span>
          </h1>
          <p className="text-foreground text-lg">
            Discover why thousands of Indian students trust All About Doctor for pursuing MBBS abroad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="border border-border rounded-lg p-6 hover:border-primary transition-colors duration-300 hover:shadow-lg space-y-2"
            >
              <div className="text-3xl text-primary font-bold">✓</div>
              <p className="text-foreground text-sm md:text-base">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
