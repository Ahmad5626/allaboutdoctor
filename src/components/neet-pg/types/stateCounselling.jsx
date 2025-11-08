export default function StateCounselling() {
  const includes = [
    "50% seats in State Government Medical Colleges",
    "All seats in Private & Self-Financed Medical Colleges (State Jurisdiction)",
    "State Reservation & Domicile Policies Apply",
  ];

  const bestFor = [
    "Candidates having state domicile benefits",
    "Aspirants prioritizing colleges within their home state",
    "Those targeting budget-friendly Government seats under state quota",
  ];

  return (
    <section className="w-full">
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-16">
        {/* Header */}
        <div className=" mb-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            State Quota <span className="text-primary">NEET PG Counselling</span>
          </h1>
          
        </div>

        {/* Description */}
        <div className="max-w-4xl text-muted-foreground  md:text-lg leading-relaxed  mb-10">
          Conducted by individual{" "}
          <strong>State Medical Counselling Authorities</strong> for{" "}
          <strong>50% of State Government seats</strong> +{" "}
          <strong>Private Medical College seats</strong> within the respective state.
        </div>

        {/* Grid Layout */}
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
          State Quota Counselling is best suited for candidates leveraging state domicile
          benefits and seeking cost-effective Government or Private medical seats within
          their own state.
        </p>
      </div>
    </section>
  );
}
