export default function TopUniversities() {
  const universities = [
    { name: "Kazan Federal University", country: "Russia" },
    { name: "Tbilisi State Medical University", country: "Georgia" },
    { name: "Al-Farabi Kazakh National University", country: "Kazakhstan" },
    { name: "Samarkand State Medical University", country: "Uzbekistan" },
    { name: "Can Tho University of Medicine and Pharmacy", country: "Vietnam" },
    { name: "Yerevan State Medical University", country: "Armenia" },
  ]

  return (
    <section className="w-full py-10">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="space-y-4  mb-8">
          <h1 className="text-pretty text-4xl font-semibold sm:text-4xl animate-fade-up" style={{ animationDelay: "100ms" }}>
            Best Universities for <span className="text-primary">MBBS Study Abroad</span>
          </h1>
          <p className="text-foreground text-lg ">
            All listed universities are NMC and WHO recognized, ensuring global career pathways for Indian students.
          </p>
        </div>

        {/* Universities List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {universities.map((uni, idx) => (
            <div
              key={idx}
              className="border border-border rounded-lg p-6 hover:border-primary hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-lg md:text-xl font-bold text-primary">{uni.name}</h3>
              <p className="text-foreground text-sm mt-1">{uni.country}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
