export default function Overview() {
  return (
    <section
      id="overview"
      className="border-b border-border bg-gradient-to-b from-background to-muted/30"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight animate-fade-up">
            Overview
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Empowering future doctors through global medical education and ethical guidance.
          </p>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="rounded-2xl bg-card p-8 shadow-sm hover:shadow-md transition-all ring-1 ring-border">
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
              <span className="text-primary">🎯</span> Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Empowering Indian students to become world-class doctors by providing global medical
              education opportunities — breaking barriers, shaping futures, and inspiring excellence
              in healthcare worldwide.
            </p>
          </div>

          {/* Vision */}
          <div className="rounded-2xl bg-card p-8 shadow-sm hover:shadow-md transition-all ring-1 ring-border">
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
              <span className="text-primary">🌟</span> Our Vision
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to empower aspiring Indian doctors with ethical guidance, expert
              counseling, and seamless access to global medical education — helping them achieve
              academic excellence and contribute meaningfully to the nation’s healthcare system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
