export default function WhyChooseUsIndia() {
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
    { name: "Dr. Anand Sharma", title: "Founder & Managing Director" },
    { name: "Ms. Deeksha Bhargava", title: "Co-Founder & CEO" },
  ]

  return (
    <section className="relative overflow-hidden py-10 bg-primary text-white">

      {/* 🔮 Background layers */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] bg-primary/25 blur-[200px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 h-[420px] w-[420px] bg-secondary/25 blur-[200px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ===== HEADER ===== */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-28">

          {/* Left */}
          <div>
              <h2
            className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer fade-item"
            
          >
            Why Choose
          
              All About Doctor Education Pvt. Ltd.?
            
          </h2>
            <p className="mt-8 text-lg text-white/75 leading-relaxed max-w-xl fade-item">
              Founded in 2015, All About Doctor Education Pvt. Ltd. is India's most
              trusted medical education consultancy, guiding over 10,000+ students
              toward successful MBBS admissions across the country.
            </p>
          </div>

          {/* Right – Floating stats */}
          <div className="grid grid-cols-2 gap-6">
            {strengths.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl border border-white/10 
                           bg-white/5 backdrop-blur-xl p-8
                           hover:bg-white/10 transition hover:-translate-y-2 fade-item"
              >
                <p className="text-4xl font-bold bg-secondary bg-clip-text text-transparent">
                  {item.value}
                </p>
                <p className="mt-2 text-sm text-white/70">
                  {item.label}
                </p>

                {/* glow */}
                <span className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 blur transition" />
              </div>
            ))}
          </div>
        </div>

        {/* ===== CONTENT STRIP ===== */}
        <div className="relative rounded-[40px] bg-white/5 backdrop-blur-xl border border-white/10 p-16">

          <div className="grid lg:grid-cols-2 gap-16">

            {/* Strengths */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-white">
                Our Key Strengths
              </h3>

              <ul className="space-y-6">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-5 fade-item">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full 
                                     bg-gradient-to-br from-primary to-secondary text-slate-950 font-bold">
                      ✓
                    </span>
                    <span className="text-white/85 text-base leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Leadership */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-secondary">
                Leadership Team
              </h3>

              <div className="space-y-6">
                {leaders.map((leader, idx) => (
                  <div
                    key={idx}
                    className="group flex items-center gap-6 rounded-2xl 
                               border border-white/10 bg-white/5 backdrop-blur 
                               px-6 py-5 transition hover:bg-white/10 fade-item"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full 
                                    bg-gradient-to-br from-primary to-secondary 
                                    text-slate-950 font-bold text-lg">
                      {leader.name.charAt(0)}
                    </div>

                    <div>
                      <p className="font-semibold text-white">
                        {leader.name}
                      </p>
                      <p className="text-sm text-white/60">
                        {leader.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
