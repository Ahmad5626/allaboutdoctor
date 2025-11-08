export default function Packages() {
  const packages = [
    {
      name: "Basic Package",
      tagline: "For starting the counselling process with the correct approach.",
      features: [
        "Orientation & Process Overview",
        "Portal Registration Guidance",
        "Document Checklist",
        "Counselling Alerts & Updates",
      ],
      highlight: false,
    },
    {
      name: "Standard Package",
      tagline: "For better course and college decision planning.",
      features: [
        "Includes Basic Package",
        "Preference List Planning Support",
        "Round 1 & Round 2 Assistance",
        "Upgradation / Retention Guidance",
      ],
      highlight: true,
    },
    {
      name: "Premium Package",
      tagline: "Complete assistance till final admission confirmation.",
      features: [
        "Includes Standard Package",
        "Support for AIQ / State / Deemed Counselling",
        "Personalized Preference List Based on Rank",
        "Continuous Guidance Until Joining",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="w-full bg-background">
      <div className="relative mx-auto max-w-7xl px-6 py-14">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            Explore Our <span className="text-primary">NEET PG Counselling Packages</span>
          </h1>
          <p className="max-w-3xl mx-auto mt-4 text-muted-foreground text-base">
            Choose the right support plan for your MD/MS admission journey with{" "}
            <span className="font-semibold">All About Doctor Education Pvt. Ltd.</span>
            <br />
            Our packages support you from registration to final admission, ensuring
            clarity and confidence at every step.
          </p>
          <button className="mt-6 px-6 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">
            View All Packages
          </button>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`p-8 border rounded-2xl shadow-sm hover:shadow-lg transition-all ${
                pkg.highlight
                  ? "border-primary bg-primary/5"
                  : "border-border bg-card/40"
              }`}
            >
              <h2 className="text-2xl font-semibold text-foreground mb-2">
                {pkg.name}
              </h2>
              <p className="text-sm text-foreground/70 mb-4">{pkg.tagline}</p>

              <ul className="space-y-2 text-sm text-foreground/80">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-0.5">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
