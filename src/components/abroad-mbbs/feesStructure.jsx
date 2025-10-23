export default function FeesStructure() {
  const countries = [
    { name: "Russia", tuition: "$4,000–$6,500", hostel: "$500–$1,000" },
    { name: "Georgia", tuition: "$3,500–$5,500", hostel: "$400–$800" },
    { name: "Kazakhstan", tuition: "$3,000–$5,000", hostel: "$400–$900" },
    { name: "Uzbekistan", tuition: "$3,500–$6,000", hostel: "$400–$1,000" },
    { name: "Vietnam", tuition: "$3,000–$4,500", hostel: "$400–$700" },
  ]

  return (
    <section className="w-full bg-card py-10">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="space-y-4  mb-8">
          <h1 className="text-pretty text-4xl font-semibold sm:text-4xl animate-fade-up" style={{ animationDelay: "100ms" }}>
            Fees Structure by <span className="text-primary">Country (Approx.)</span>
          </h1>
          <p className="text-foreground text-lg md:text-xl ">
            Tuition ranges from $3,000–$7,000 per year and hostel fees from $400–$1,200 per year across top MBBS abroad destinations.
          </p>
        </div>

        {/* Fees Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-border text-left">
            <thead>
              <tr className="bg-primary/10">
                <th className="border border-border px-4 py-2">Country</th>
                <th className="border border-border px-4 py-2">Tuition (Per Year)</th>
                <th className="border border-border px-4 py-2">Hostel (Per Year)</th>
              </tr>
            </thead>
            <tbody>
              {countries.map((country, idx) => (
                <tr key={idx} className="hover:bg-primary/10 transition-colors">
                  <td className="border border-border px-4 py-2">{country.name}</td>
                  <td className="border border-border px-4 py-2">{country.tuition}</td>
                  <td className="border border-border px-4 py-2">{country.hostel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-6">
          <a
            href="#contact" 
            className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
