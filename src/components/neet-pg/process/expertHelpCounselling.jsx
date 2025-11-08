export default function ExpertHelpCounselling() {
  const support = [
    "Registration & Document Verification",
    "Specialization & College Preference Planning",
    "Round-wise Counselling Strategy",
    "Final Admission & Reporting Assistance",
  ];

  return (
    <section className="w-full bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-8">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            Need Expert Help in the{" "}
            <span className="text-primary">Counselling Process?</span>
          </h1>
          <p className="max-w-3xl mx-auto mt-3 text-muted-foreground text-base md:text-lg">
            All About Doctor Education Pvt. Ltd. provides structured support for every
            step of your NEET PG admission journey.
          </p>
          
        </div>

        {/* Support List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {support.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-5 border border-border rounded-xl bg-background hover:border-primary transition-all shadow-sm"
            >
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white font-bold">
                ✓
              </div>
              <p className="text-foreground/80 text-base leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-10">
          <p className="text-muted-foreground mb-4 text-base md:text-lg">
            Our guidance ensures a smooth, confident, and well-planned admission journey.
          </p>
          <button className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-md">
            Get Expert Guidance
          </button>
        </div>
      </div>
    </section>
  );
}
