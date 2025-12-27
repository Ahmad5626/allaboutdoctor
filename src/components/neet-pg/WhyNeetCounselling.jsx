export default function WhyNeetCounselling() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* soft background accents */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary/15 blur-3xl rounded-full" />
      <div className="absolute bottom-0 -right-24 w-72 h-72 bg-secondary/15 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="rounded-3xl border border-border/50 bg-background/70 backdrop-blur-xl p-10 md:p-14 shadow-xl">

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Why NEET PG Counselling Is Crucial
            </span>
          </h2>

          {/* Content */}
          <div className="space-y-5 text-base md:text-lg text-muted-foreground">
            <h3>
              NEET PG counselling determines your postgraduate specialization, institute, and future medical career path. Seat allotment depends on rank, category, preferences, reservation norms, and availability of seats. Even a small error during counselling can result in losing a high-value PG seat.
            </h3>

            <h3>
             At All About Doctor Education Pvt Ltd, we provide structured and transparent counselling support to help doctors make informed decisions and secure admissions in top medical colleges across India
            </h3>
          </div>

        </div>
      </div>
    </section>
  )
}
