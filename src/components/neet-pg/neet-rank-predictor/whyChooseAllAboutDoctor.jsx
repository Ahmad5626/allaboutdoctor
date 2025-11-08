export default function WhyChooseAllAboutDoctor() {
  const reasons = [
    "850+ Medical Colleges Counselling Expertise",
    "Doctor-led specialization guidance",
    "Accurate, updated seat matrix & cutoff insights",
    "Strategy planning for Round 1, Round 2, Mop-Up & Stray Rounds",
    "We ensure your rank is utilized to its maximum advantage.",
  ];

  return (
    <section className="w-full bg-primary/5">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <h1
            className="text-4xl font-semibold leading-tight sm:text-4xl text-pretty animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            Why Choose{" "}
            <span className="text-primary">All About Doctor Education Pvt. Ltd.?</span>
          </h1>
          <p className="max-w-3xl mx-auto mt-3 text-muted-foreground text-base md:text-lg">
            Trusted by thousands of medical graduates for transparent and strategic NEET
            PG counselling support across India.
          </p>
         
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-6 border border-border rounded-xl bg-background hover:border-primary hover:shadow-md transition-all"
            >
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white font-bold">
                ✓
              </div>
              <p className="text-foreground/80 text-base leading-relaxed font-medium">
                {reason}
              </p>
            </div>
          ))}
        </div>

      
      </div>
    </section>
  );
}
