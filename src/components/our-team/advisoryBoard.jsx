export default function AdvisoryBoard() {
  const advisors = [
    { name: "Dr. Jyoti Sharma", img: "/assets/img/doctor/doctor-1.jpg" },
    { name: "Dr. Saumya Jain", img: "/assets/img/doctor/doctor-2.jpg" },
    { name: "Dr. Pulkit Jain", img: "/assets/img/doctor/doctor-3.jpg" },
    { name: "Dr. Saurabh Sapra", img: "/assets/img/doctor/doctor-4.jpg" },
    { name: "Dr. Sanskriti Sharma", img: "/assets/img/doctor/doctor-5.jpg" },
    { name: "Dr. Aanchal Sharma", img: "/assets/img/doctor/doctor-1.jpg" },
    { name: "Dr. Riddhika Agarwal", img: "/assets/img/doctor/doctor-2.jpg" },
    { name: "Dr. Avantika Agarwal", img: "/assets/img/doctor/doctor-3.jpg" },
    { name: "Dr. Saurabh Sharma", img: "/assets/img/doctor/doctor-4.jpg" },
    { name: "Dr. Shubham Sharma", img: "/assets/img/doctor/doctor-5.jpg" },
    { name: "Dr. Rittik Sharma", img: "/assets/img/doctor/doctor-2.jpg" },
    { name: "Dr. Ritik Soni", img: "/assets/img/doctor/doctor-3.jpg" },
  ];

  return (
    <section className="border-t border-border bg-gradient-to-b from-background to-muted/20 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <header className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Academic & Clinical <span className="text-primary">Advisory Board</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Our extended advisory board includes seasoned medical professionals who contribute to 
            training design, student development, and global academic collaborations.
          </p>
        </header>

        {/* Advisors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {advisors.map((a) => (
            <div
              key={a.name}
              className="rounded-xl bg-card border border-border shadow-sm hover:shadow-md p-6 text-center transition-all hover:border-primary/30"
            >
              <img
                src={a.img || "/assets/img/doctor/default.jpg"}
                alt={a.name}
                className="w-20 h-20 mx-auto rounded-full object-cover ring-2 ring-primary/10 mb-4"
              />
              <h4 className="font-semibold text-lg">{a.name}</h4>
              <p className="text-xs text-muted-foreground mt-1">
                Academic & Clinical Advisor
              </p>
            </div>
          ))}

          {/* Placeholder for future experts */}
          <div className="rounded-xl border border-dashed border-border p-6 flex items-center justify-center text-sm text-muted-foreground">
            (More experts joining soon…)
          </div>
        </div>
      </div>
    </section>
  );
}
