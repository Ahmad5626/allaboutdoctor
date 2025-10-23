export default function WhyChooseUs() {
  const strengths = [
    { label: "Partner Colleges", value: "850+" },
    { label: "Successful Students", value: "10,000+" },
    { label: "Success Rate", value: "95%" },
    { label: "Founded", value: "2015" },
  ]

  const features = [
    "NMC-approved Partner Medical Colleges",
    "Doctor-Led Counseling and Mentorship",
    "NEET Guidance & Admission Support",
    "Transparent and Ethical Process",
  ]

  const leaders = [
    { name: "Dr. Anand Sharma", title: "Managing Director & Founder" },
    { name: "Ms. Deeksha Bhargava", title: "Co-Founder & CEO" },
  ]

  return (
    <section className="w-full ">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <div>
          <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
              style={{ animationDelay: "100ms" }}>
            Why Choose <span className="text-primary">All About Doctor Education Pvt. Ltd.?</span> 
          </h1>
          
          <p className="text-foreground leading-relaxed">
            Founded in 2015, All About Doctor Education Pvt. Ltd. is India's most trusted medical education consultancy,
            guiding over 10,000+ students toward successful MBBS admissions across the country.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
          {strengths.map((item, idx) => (
            <div key={idx} className="border border-border rounded-lg p-4 text-center space-y-2">
              <p className="text-2xl md:text-3xl font-bold text-primary">{item.value}</p>
              <p className="text-sm text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Our Key Strengths:</h3>
            <ul className="space-y-3">
              {features.map((feature, idx) => (
                <li key={idx} className="text-foreground text-sm flex items-start">
                  <span className="text-primary mr-3 font-bold">★</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Leadership Team:</h3>
            <div className="space-y-3">
              {leaders.map((leader, idx) => (
                <div key={idx} className="border border-border rounded-lg p-4 space-y-1">
                  <p className="font-semibold text-foreground">{leader.name}</p>
                  <p className="text-sm text-muted-foreground">{leader.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

    
      </div>
    </section>
  )
}
