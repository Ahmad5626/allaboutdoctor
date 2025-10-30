export default function CoursesUndergraduate() {
  const courses = [
    { name: "MBBS", full: "Bachelor of Medicine and Bachelor of Surgery" },
    { name: "BDS", full: "Bachelor of Dental Surgery" },
    { name: "BVSc", full: "Bachelor of Veterinary Science" },
    { name: "BAMS", full: "Bachelor of Ayurvedic Medicine and Surgery" },
    { name: "BNYS", full: "Bachelor of Naturopathy and Yogic Sciences" },
    { name: "BUMS", full: "Bachelor of Unani Medicine and Surgery" },
    { name: "BHMS", full: "Bachelor of Homeopathic Medicine and Surgery" },
  ]

  return (
    <section className="w-full ">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <div>
          <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
              style={{ animationDelay: "100ms" }}>Undergraduate  <span className="text-primary">Courses</span> </h1>
         
          <p className="text-foreground leading-relaxed ">
            Explore our comprehensive undergraduate medical programs
          </p>
        </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
            {courses.map((course, index) => (
              <div
                key={index}
                className="p-6 border-2 border-primary/20 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition">
                    <span className="text-lg font-bold text-primary">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{course.name}</h3>
                    <p className="text-sm text-muted-foreground">{course.full}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  )
}
