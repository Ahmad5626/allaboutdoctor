export default function Overview() {
  const countries = [
    "Russia",
    "Kazakhstan",
    "Georgia",
    "Uzbekistan",
    "Armenia",
    "Vietnam",
    "Timor Leste",
    "Nepal",
    "Europe",
  ];

  return (
    <section id="overview" className="border-b border-border bg-gradient-to-b from-background to-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight animate-fade-up">
            Overview
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            A snapshot of our foundation, leadership, and global reach in medical education.
          </p>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Foundation & Leadership */}
          <div className="rounded-2xl bg-card p-8 shadow-sm hover:shadow-md transition-all ring-1 ring-border">
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
              <span className="text-primary">🏛️</span> Foundation & Leadership
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <strong>Founded:</strong> 2015
              </li>
              <li>
                <strong>Founders:</strong> Dr. Anand Sharma (Managing Director & Founder) and Ms. Deeksha Bhargava
                (Co-founder & CEO)
              </li>
              <li>
                <strong>Nature:</strong> Professional medical education consultancy helping students secure MBBS
                admissions abroad
              </li>
              <li>
                <strong>USP:</strong> Transparent process, no hidden costs, and verified universities
              </li>
              <li>
                <strong>Presence:</strong> Multiple offices across India providing counseling, visa, and post-arrival
                services
              </li>
            </ul>
          </div>

          {/* International Reach */}
          <div className="rounded-2xl bg-card p-8 shadow-sm hover:shadow-md transition-all ring-1 ring-border">
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
              <span className="text-primary">🌍</span> International Reach
            </h3>
            <p className="text-muted-foreground mb-5">
              We guide students to globally recognized universities across:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {countries.map((c) => (
                <span
                  key={c}
                  className="rounded-lg bg-muted px-3 py-2 text-sm text-muted-foreground text-center ring-1 ring-border hover:bg-primary/10 transition-colors"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
