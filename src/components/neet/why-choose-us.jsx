export default function WhyChooseUs() {
  const strengths = [
    { title: "850+ Partner Colleges", desc: "NMC-approved medical institutions" },
    { title: "Doctor-Led Counseling", desc: "Expert mentorship from experienced physicians" },
    { title: "NEET Guidance", desc: "Comprehensive admission support" },
    { title: "Transparent Process", desc: "Ethical and honest guidance" },
    { title: "95% Success Rate", desc: "Proven track record of admissions" },
    { title: "10,000+ Students", desc: "Successfully guided globally" },
  ]

  return (
    <section className="w-full ">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}>
          Why Choose <span className="text-primary">All About Doctor Education Pvt. Ltd.?</span> 
        </h1>
        <p className="text-foreground/70 mb-12 max-w-2xl">
          Founded in 2015, we are India's most trusted medical education consultancy, guiding over 10,000+ students
          toward successful MBBS admissions across the world.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((strength, idx) => (
            <div key={idx} className="p-6 border border-border rounded-lg hover:border-primary transition-colors group">
              <h3 className="text-lg font-semibold text-primary group-hover:text-secondary transition-colors mb-2">
                {strength.title}
              </h3>
              <p className="text-foreground/70">{strength.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
