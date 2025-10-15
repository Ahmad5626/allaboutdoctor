export default function Services() {
  const items = [
    {
      title: "Career Counseling",
      desc: "Free one-on-one career counseling and university selection.",
      icon: "🎓",
    },
    {
      title: "Direct Admission",
      desc: "Direct admission in NMC and WHO-recognized universities abroad.",
      icon: "🌍",
    },
    {
      title: "Visa & Documentation",
      desc: "Assistance with visa application, embassy interview, and travel documentation.",
      icon: "🛂",
    },
    {
      title: "Financial Assistance",
      desc: "Support for education loans, currency exchange, and health insurance.",
      icon: "💰",
    },
    {
      title: "Post-Arrival Support",
      desc: "Post-arrival support – airport pickup, hostel arrangement, and local guardianship.",
      icon: "✈️",
    },
    {
      title: "FMGE/NExT Mentorship",
      desc: "Continuous FMGE/NExT preparation and mentorship by medical experts.",
      icon: "📘",
    },
  ];

  return (
    <section id="services" className="bg-gradient-to-b from-background to-muted/30 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight animate-fade-up">
            Exclusive <span className="text-primary">Services</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            End-to-end support designed to simplify your MBBS journey abroad.
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <ServiceCard key={i} item={item} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ item }) {
  return (
    <div className="relative group rounded-2xl bg-card border border-border p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all overflow-hidden">
      {/* Icon */}
      <div className="text-4xl mb-4">{item.icon}</div>

      {/* Title */}
      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
        {item.title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>

      {/* Hover Accent Line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all"></div>
    </div>
  );
}
