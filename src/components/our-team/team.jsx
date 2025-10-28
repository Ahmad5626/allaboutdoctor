export default function MedicalAdvisors() {
  const advisors = [
    {
      name: "Dr. Naushad Ali",
      role: "ENT Surgeon; Medical Advisor – Programs & Clinical Placements",
      img: "/assets/img/doctor/doctor-1.jpg",
    },
    {
      name: "Dr. Vishal Sharma",
      role: "MBBS, MD Physician & Co-Director; Franchise Growth & Partner Relations",
      img: "/assets/img/doctor/doctor-5.jpg",
    },
    {
      name: "Dr. Meenakshi Shrivastava",
      role: "Digital Strategy & Student Relations Manager",
      img: "/assets/img/doctor/doctor-4.jpg",
    },
    {
      name: "Dr. Diksha Tiwari",
      role: "Student Counselling & Psychological Insights Advisor",
      img: "/assets/img/doctor/doctor-3.jpg",
    },
    {
      name: "Dr. Ujjwal Pratap Rana",
      role: "MBBS; Clinical Training & Final Year Mentorship",
      img: "/assets/img/doctor/doctor-2.jpg",
    },
    {
      name: "Dr. Akansha Prasad",
      role: "Psychology Counsellor & Psychotherapist",
      img: "/assets/img/doctor/doctor-5.jpg",
    },
    {
      name: "Dr. Aadil",
      role: "MBBS; Medical Education Consultant",
      img: "/assets/img/doctor/doctor-4.jpg",
    },
    {
      name: "Dr. Akshima Tinker",
      role: "MD Physician; Academic Excellence & Clinical Career Roadmaps",
      img: "/assets/img/doctor/doctor-2.jpg",
    },
  ];

  return (
    <section className="border-y border-border bg-gradient-to-b from-background to-muted/20">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight animate-fade-up">
            Key Medical <span className="text-primary">Advisors & Mentors</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Experienced medical professionals guiding students with academic insight, ethical mentorship,
            and clinical expertise.
          </p>
        </header>

        {/* Advisors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {advisors.map((advisor) => (
            <AdvisorCard
              key={advisor.name}
              name={advisor.name}
              role={advisor.role}
              img={advisor.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AdvisorCard({ name, role, img }) {
  return (
    <article className="rounded-2xl bg-card border border-border p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all text-center">
      <img
        src={img || "/team/default.jpg"}
        alt={name}
        className="w-24 h-24 mx-auto rounded-full object-cover ring-2 ring-primary/10 mb-4"
      />
      <h4 className="font-semibold text-lg">{name}</h4>
      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
        {role || "Medical Advisor"}
      </p>
      <span className="inline-block mt-3 text-[11px] px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
        Mentor
      </span>
    </article>
  );
}
