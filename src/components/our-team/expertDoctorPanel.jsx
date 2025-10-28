export default function ExpertDoctorPanel() {
  return (
    <section
      id="expert-doctor-panel"
      className="bg-gradient-to-b from-background to-muted/30 border-t border-border py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Expert <span className="text-primary">Doctor Panel</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Leadership in Medical Mentorship
          </p>
        </header>

        {/* Doctor Card */}
        <div className="flex flex-col md:flex-row items-center gap-10 rounded-2xl bg-card border border-border p-8 md:p-12 shadow-sm hover:shadow-md transition-all">
          {/* Doctor Image Placeholder */}
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-muted flex items-center justify-center text-5xl text-primary font-bold">
            <img src="/assets/img/about/doctor-1.webp" className="rounded-full" alt="" />
          </div>

          {/* Doctor Info */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Dr. Anand Sharma</h3>
            <p className="text-muted-foreground font-medium">
              MD Physician – Founder & Managing Director
            </p>

            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Areas of Expertise:</span>{" "}
              Clinical Training | Student Counseling | Academic Excellence | Psychological Guidance
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Dr. Anand Sharma is the guiding force behind{" "}
              <span className="font-semibold text-foreground">All About Doctor</span>, shaping its
              mission to bridge academic knowledge with clinical practice. Under his leadership, the
              organization continues to mentor thousands of students toward global medical careers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
