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
              Why NEET UG Counselling Is Important
            </span>
          </h2>

          {/* Content */}
          <div className="space-y-5 text-base md:text-lg text-muted-foreground">
            <h3>
              NEET UG counselling determines which medical or dental college you
              will get, based on your rank, category, preferences, and seat
              availability. It acts as the crucial link between your NEET UG
              performance and your medical career. One wrong decision during
              counselling can cost a deserving seat, which is why expert guidance
              is essential.
            </h3>

            <h3>
              At All About Doctor Education Pvt Ltd, we support students at every
              stage of the NEET UG journey, ensuring informed decisions and smooth
              admissions into top medical colleges.
            </h3>
          </div>

        </div>
      </div>
    </section>
  )
}
