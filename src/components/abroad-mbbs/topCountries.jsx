export default function TopCountries() {
  const countries = [
    "Russia",
    "Georgia",
    "Kazakhstan",
    "Uzbekistan",
    "Vietnam",
    "Philippines",
    "Nepal",
    "Bangladesh",
    "Armenia",
    "Kyrgyzstan",
  ]

  return (
    <section className="w-full bg-card py-10">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="space-y-4  mb-8">
          <h1 className="text-pretty text-4xl font-semibold sm:text-4xl animate-fade-up" style={{ animationDelay: "100ms" }}>
            Top MBBS <span className="text-primary">Abroad Countries</span> 
          </h1>
          <p className="text-foreground text-lg md:text-lg ">
            All About Doctor Education Pvt Ltd offers admission in globally reputed universities across the following countries. Each destination offers quality education, affordable cost, and globally accepted medical degrees.
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {countries.map((country, idx) => (
            <div
              key={idx}
              className="border border-border rounded-lg p-4 flex items-center justify-center text-center font-medium text-foreground hover:border-primary hover:bg-primary/10 transition-colors duration-300"
            >
              {country}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
