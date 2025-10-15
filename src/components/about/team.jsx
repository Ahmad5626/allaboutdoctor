const doctors = [
  { name: "Dr. Anand Sharma", role: "MD Physician, Founder & Managing Director", img: "/assets/img/about/doctor-1.webp" },
  { name: "Dr. Naushad Ali", role: "ENT Surgeon; Medical Advisor – Programs & Clinical Placements", img: "assets/img/doctor/doctor-1.jpg" },
  { name: "Dr. Vishal Sharma", role: "MBBS, MD Physician & Co-Director; Franchise Growth & Partner Relations", img: "assets/img/doctor/doctor-5.jpg" },
  { name: "Dr. Meenakshi Shrivastava", role: "Digital Strategy & Student Relation Manager", img: "assets/img/doctor/doctor-4.jpg" },
  { name: "Dr. Diksha Tiwari", role: "Student Counselling & Psychological Insights Advisor", img: "assets/img/doctor/doctor-3.jpg" },
  { name: "Dr. Ujjwal Pratap Rana", role: "MBBS; Clinical Training & Final Year Mentorship", img: "assets/img/doctor/doctor-2.jpg" },
  { name: "Dr. Akansha Prasad", role: "Psychology Counsellor & Psychotherapist", img: "assets/img/doctor/doctor-5.jpg" },
  { name: "Dr. Aadil", role: "MBBS; Medical Education Consultant", img: "assets/img/doctor/doctor-4.jpg" },
  { name: "Dr. Akshima Tinker", role: "MD Physician; Academic Excellence & Clinical Career Roadmaps", img: "assets/img/doctor/doctor-2.jpg" },
  { name: "Dr. Jyoti Sharma", role: "Clinical Advisory & Academic Affairs", img: "assets/img/doctor/doctor-1.jpg" },
  { name: "Dr. Saumya Jain", role: "", img: "assets/img/doctor/doctor-5.jpg" },
  { name: "Dr. Pulkit Jain", role: "", img: "assets/img/doctor/doctor-4.jpg" },
  { name: "Dr. Saurabh Sapra", role: "", img: "assets/img/doctor/doctor-3.jpg" },
  { name: "Dr. Sanskriti Sharma", role: "", img: "assets/img/doctor/doctor-1.jpg" },
  { name: "Dr. Aanchal Sharma", role: "", img: "assets/img/doctor/doctor-5.jpg" },
  { name: "Dr. Riddhika Agarwal", role: "", img: "assets/img/doctor/doctor-4.jpg" },
  { name: "Dr. Avantika Agarwal", role: "", img: "assets/img/doctor/doctor-3.jpg" },
  { name: "Dr. Saurabh Sharma", role: "", img: "assets/img/doctor/doctor-2.jpg" },
  { name: "Dr. Shubham Sharma", role: "", img: "assets/img/doctor/doctor-1.jpg" },
  { name: "Dr. Rittik Sharma", role: "", img: "assets/img/doctor/doctor-12.jpg" },
  { name: "Dr. Ritik Soni", role: "", img: "assets/img/doctor/doctor-10.jpg" },
];

export default function Team() {
  return (
    <section className="border-y border-border bg-gradient-to-b from-background to-muted/20">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight animate-fade-up">
            Expert Team of <span className="text-primary">Doctors</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            20+ professionals led by <strong>Dr. Anand Sharma</strong> — spanning clinical training, student counseling, academic excellence, and psychological guidance.
          </p>
        </header>

        {/* Leadership Highlight */}
        <div className="relative bg-card border border-border rounded-2xl p-8 md:p-10 mb-12 shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src="/assets/img/about/doctor-1.webp"
              alt="Dr. Anand Sharma"
              className="w-32 h-32 rounded-full object-cover ring-4 ring-primary/20"
            />
            <div className="flex-1">
              <h3 className="text-2xl font-semibold">Dr. Anand Sharma</h3>
              <p className="text-muted-foreground text-sm mt-1">
                MD Physician, Founder & Managing Director
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Clinical Training", "Student Counseling", "Academic Excellence", "Psychological Guidance"].map((b) => (
                  <span
                    key={b}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary ring-1 ring-primary/20"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {doctors.map((d) => (
            <Member key={d.name} name={d.name} role={d.role} img={d.img} />
          ))}

          <div className="rounded-xl border border-dashed border-border p-5 flex items-center justify-center text-sm text-muted-foreground">
            (More updates coming soon…)
          </div>
        </div>
      </div>
    </section>
  );
}

function Member({ name, role, img }) {
  return (
    <article className="rounded-2xl bg-card border border-border p-5 shadow-sm hover:shadow-md hover:border-primary/40 transition-all text-center">
      <img
        src={img || "/team/default.jpg"}
        alt={name}
        className="w-20 h-20 mx-auto rounded-full object-cover ring-2 ring-primary/10 mb-4"
      />
      <h4 className="font-semibold text-lg">{name}</h4>
      <p className="text-sm text-muted-foreground mt-1">
        {role || "Clinical & Academic Advisory"}
      </p>
      <span className="inline-block mt-3 text-[11px] px-2 py-1 rounded-md bg-muted text-secondary border border-secondary/30">
        Doctor
      </span>
    </article>
  );
}
