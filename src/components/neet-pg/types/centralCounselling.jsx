export default function CentralCounselling() {
  const includes = [
    "50% seats in Government Medical Colleges (except some states like J&K depending on policy)",
    "Entire counselling for Deemed Universities",
    "Seats in Central Universities & AIIMS/INIs (where applicable)",
  ];

  const bestFor = [
    "Candidates seeking national-level seat opportunities",
    "Students with strong NEET PG ranks",
    "Those aiming to explore colleges outside their home state",
  ];

  return (
    <section className="w-full bg-primary/5">
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-16">
        {/* Header */}
        <div className=" mb-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            Central (All India Quota) NEET PG Counselling –{" "}
            <span className="text-primary">MCC</span>
          </h1>
         
        </div>

        {/* Description */}
        <div className="max-w-4xl  text-muted-foreground text-base md:text-lg leading-relaxed t mb-10">
          Conducted by the{" "}
          <strong>Medical Counselling Committee (MCC)</strong> for{" "}
          <strong>50% AIQ seats</strong> in Government Medical Colleges across India.
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Includes Section */}
          <div className="p-6 border border-border rounded-xl bg-card/40 hover:border-primary transition-all shadow-sm">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Includes:
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              {includes.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Best For Section */}
          <div className="p-6 border border-border rounded-xl bg-card/40 hover:border-primary transition-all shadow-sm">
            <h2 className="text-xl font-semibold text-foreground mb-4">Best For:</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              {bestFor.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-foreground/70 mt-10 italic">
          MCC Counselling is ideal for candidates targeting national-level institutions
          and merit-based seat distribution across India.
        </p>
      </div>
    </section>
  );
}
