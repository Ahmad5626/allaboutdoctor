export default function Highlights() {
  const highlights = [
    {
      title: "Fair & Transparent Allocation",
      description:
        "Ensures fair and transparent allocation of medical postgraduate seats.",
      icon: "✓",
    },
    {
      title: "Merit-Based Admissions",
      description:
        "Supports merit-based admissions across all recognized medical institutions.",
      icon: "✓",
    },
    {
      title: "Strategic Decision Making",
      description:
        "Helps aspirants choose the right specialization and college strategically.",
      icon: "✓",
    },
    {
      title: "No Donation-Based Admissions",
      description:
        "Eliminates the need for unofficial or donation-based admission attempts.",
      icon: "✓",
    },
    {
      title: "Real-Time Insights",
      description:
        "Provides real-time seat matrix and cutoff insights for informed decision-making.",
      icon: "✓",
    },
    {
      title: "Mandatory Process",
      description:
        "Mandatory for all qualified candidates seeking MD/MS/PG Diploma admissions.",
      icon: "✓",
    },
  ];

  return (
    <section className="w-full">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <div>
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}
          >
            Importance of <span className="text-primary">NEET PG Counselling</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-6 border-2 border-border rounded-lg hover:border-primary transition-colors group bg-card/30"
            >
              <div className="text-3xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-foreground/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
