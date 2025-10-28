export default function Services() {
  const values = [
    {
      title: "Transparency",
      desc: "Honest information with no hidden charges or false claims.",
      icon: "🔍",
    },
    {
      title: "Integrity",
      desc: "Every recommendation is based on verified data and accreditation.",
      icon: "🤝",
    },
    {
      title: "Expertise",
      desc: "Guidance led by qualified doctors and experienced counsellors.",
      icon: "🎓",
    },
    {
      title: "Student Care",
      desc: "Personalized support through every stage — from admission to graduation.",
      icon: "💬",
    },
  ];

  return (
    <section
      id="core-values"
      className="bg-gradient-to-b from-background to-muted/30 border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight animate-fade-up">
            Our <span className="text-primary">Core Values</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            The guiding principles that define our commitment to every student’s success.
          </p>
        </header>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, i) => (
            <ValueCard key={i} value={value} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueCard({ value }) {
  return (
    <div className="relative group rounded-2xl bg-card border border-border p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all overflow-hidden text-center">
      {/* Icon */}
      <div className="text-4xl mb-4">{value.icon}</div>

      {/* Title */}
      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
        {value.title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{value.desc}</p>

      {/* Hover Accent Line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all"></div>
    </div>
  );
}
