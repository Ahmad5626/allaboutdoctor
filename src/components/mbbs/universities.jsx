export default function Universities() {
  const government = [
    "AIIMS, New Delhi",
    "King George's Medical University (KGMU), Lucknow",
    "JIPMER, Puducherry",
    "Maulana Azad Medical College, New Delhi",
    "Grant Medical College, Mumbai",
  ]

  const privateUniversities = [
    "Christian Medical College, Vellore",
    "Kasturba Medical College, Manipal",
    "DY Patil Medical College, Pune",
    "SRM Medical College, Chennai",
  ]

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 border-b border-border">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Top Medical Universities in India</h2>
          <div className="h-1 w-16 bg-secondary rounded-full mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Government Medical Universities</h3>
            <ul className="space-y-3">
              {government.map((uni, idx) => (
                <li key={idx} className="text-foreground text-sm flex items-start border-l-2 border-primary pl-4">
                  <span>{uni}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Private Medical Universities</h3>
            <ul className="space-y-3">
              {privateUniversities.map((uni, idx) => (
                <li key={idx} className="text-foreground text-sm flex items-start border-l-2 border-secondary pl-4">
                  <span>{uni}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-l-4 border-primary pl-6 py-4 space-y-2">
          <p className="text-foreground leading-relaxed">
            All About Doctor Education Pvt. Ltd. assists students in shortlisting the best-fit universities based on
            NEET rank, location, and budget, ensuring access to NMC-approved and recognized institutions.
          </p>
        </div>
      </div>
    </section>
  )
}
