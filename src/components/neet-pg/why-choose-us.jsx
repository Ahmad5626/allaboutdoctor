export default function WhyChooseUs() {
  const strengths = [
    { title: "850+", desc: "Partner Medical Colleges (NMC-approved)" },
    { title: "Doctor-Led", desc: "Counseling and Mentorship" },
    { title: "95%", desc: "Admission Success Rate" },
    { title: "10,000+", desc: "Successful Students Guided" },
  ]

  return (
    <section className="w-full">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <div>
          <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}>Why Choose <span className="text-primary">All About Doctor Education Pvt. Ltd.</span></h1>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6">
          {strengths.map((strength, idx) => (
            <div
              key={idx}
              className="p-6 border-2 border-border rounded-lg hover:border-secondary transition-colors text-center space-y-3"
            >
              <div className="text-4xl font-bold text-secondary">{strength.title}</div>
              <p className="text-foreground/80">{strength.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-border">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Founded in 2015</h3>
            <p className="text-foreground/80 leading-relaxed">
              India's most trusted medical education consultancy, guiding over 10,000+ students toward successful
              postgraduate medical admissions.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-foreground/80">
                <span className="text-primary font-bold">✓</span> Transparent and Ethical Process
              </li>
              <li className="flex items-center gap-2 text-foreground/80">
                <span className="text-primary font-bold">✓</span> NEET Guidance & Admission Support
              </li>
              <li className="flex items-center gap-2 text-foreground/80">
                <span className="text-primary font-bold">✓</span> Lifelong Academic Support
              </li>
            </ul>
          </div>

          <div className="space-y-4 p-6 border-2 border-primary/20 rounded-lg">
            <h3 className="text-xl font-bold text-foreground">Leadership Team</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-foreground">Dr. Anand Sharma</p>
                <p className="text-sm text-foreground/70">Managing Director & Founder</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Ms. Deeksha Bhargava</p>
                <p className="text-sm text-foreground/70">Co-Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
