"use client"
import {
  GraduationCap,
  BookOpen,
  Microscope,
  Stethoscope,
  Hospital,
} from "lucide-react"

export default function MbbsCourseStructureModern() {
  return (
    <section className="relative overflow-hidden py-10 
      bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5">

      {/* decorative layers */}
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-primary/20 blur-[180px]" />
      <div className="absolute bottom-0 -right-40 h-[520px] w-[520px] rounded-full bg-secondary/20 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-4xl mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer fade-item">
            MBBS Course Duration &{" "}
          
              Academic Structure
           
          </h2>
          <p className="mt-5 text-lg text-muted-foreground fade-item">
            The MBBS program in Rajasthan follows the NMC competency-based
            medical education (CBME) curriculum.
          </p>
        </div>

        {/* Duration cards */}
        <div className="grid md:grid-cols-3 gap-10 mb-24">
          {[
            {
              title: "Total Duration",
              value: "5.5 Years",
              icon: GraduationCap,
              accent: "from-primary/15 to-primary/5",
            },
            {
              title: "Academic Training",
              value: "4.5 Years",
              icon: BookOpen,
              accent: "from-secondary/15 to-secondary/5",
            },
            {
              title: "Rotatory Internship",
              value: "1 Year",
              icon: Hospital,
              accent: "from-primary/15 to-secondary/5",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`relative rounded-2xl border border-border 
                bg-gradient-to-br ${item.accent}
                p-8 shadow-sm hover:shadow-xl transition fade-item`}
            >
              <item.icon className="h-7 w-7 text-primary mb-4" />
              <p className="text-sm uppercase tracking-wide text-muted-foreground">
                {item.title}
              </p>
              <p className="mt-2 text-3xl font-semibold text-foreground">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Core + Teaching */}
        <div className="grid lg:grid-cols-2 gap-20">

          {/* Subjects */}
          <div className="relative">
            <div className="absolute -left-6 top-0 h-full w-[4px] 
              bg-gradient-to-b from-primary to-secondary rounded-full" />
            <h3 className="text-2xl font-semibold text-foreground mb-6 fade-item">
              Core Subjects Covered
            </h3>
            <p className="text-foreground/80 leading-relaxed text-base fade-item">
              Anatomy, Physiology, Biochemistry, Pathology, Microbiology,
              Pharmacology, Forensic Medicine, Community Medicine, Pediatrics,
              General Medicine, General Surgery, Orthopedics, Ophthalmology, ENT,
              Obstetrics & Gynecology, Psychiatry, Dermatology, Radiology,
              Emergency Medicine, and more.
            </p>
          </div>

          {/* Teaching methodology */}
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { text: "Classroom lectures", icon: BookOpen },
              { text: "Clinical postings & ward rounds", icon: Stethoscope },
              { text: "Practical laboratory sessions", icon: Microscope },
              { text: "Case-based & problem-based learning", icon: GraduationCap },
              { text: "Community health programs", icon: Hospital },
              { text: "Simulation-based skill training", icon: Stethoscope },
            ].map((item, i) => (
              <div
                key={i}
                className="group rounded-xl border border-border bg-white/70 
                  backdrop-blur p-6 transition hover:-translate-y-1
                  hover:border-primary/40 hover:shadow-lg fade-item"
              >
                <item.icon className="h-5 w-5 text-secondary mb-3 group-hover:text-primary transition" />
                <p className="text-sm font-medium text-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Internship block */}
        <div className="mt-24 relative overflow-hidden rounded-3xl 
          bg-gradient-to-r from-primary/10 via-secondary/15 to-primary/10 
          p-10 border border-primary/20">

          <div className="absolute -top-20 -right-20 h-64 w-64 
            bg-secondary/20 rounded-full blur-[120px]" />

          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Internship Training
          </h3>
          <p className="text-foreground/80 leading-relaxed text-base max-w-5xl">
            Internship rotations are conducted in major medical hubs such as
            Jaipur, Jodhpur, Kota, Udaipur, Ajmer, Bikaner, Sikar, and other key
            cities, ensuring strong exposure to routine and emergency care.
          </p>
        </div>
      </div>
    </section>
  )
}
