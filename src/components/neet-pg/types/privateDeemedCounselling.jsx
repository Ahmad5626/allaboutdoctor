export default function PrivateDeemedCounselling() {
  const keyPoints = [
    "Fee structure varies significantly by institution",
    "Choice is flexible (No domicile restriction in Deemed Universities)",
    "Seats often available even in later rounds (Mop-Up / Stray Vacancy)",
  ];

  const bestFor = [
    "Candidates seeking specific specialization irrespective of location",
    "Aspirants who prefer top private teaching hospitals",
    "Students without strong domicile benefit or high rank",
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
            Private & Deemed University{" "}
            <span className="text-primary">NEET PG Counselling</span>
          </h1>
         
        </div>

        {/* Description */}
        <div className="max-w-4xl  text-muted-foreground text-base md:text-lg leading-relaxed  mb-10">
          Managed through <strong>MCC</strong> for Deemed Universities and through{" "}
          <strong>State Authorities</strong> for Private Medical Colleges depending on the
          state.
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Key Points Section */}
          <div className="p-6 border border-border rounded-xl bg-card/40 hover:border-primary transition-all shadow-sm">
            <h2 className="text-xl font-semibold text-foreground mb-4">Key Points:</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              {keyPoints.map((item, index) => (
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
          Deemed & Private University Counselling offers flexibility and a wide range of
          specializations, making it ideal for candidates aiming for top-tier private
          institutions across India.
        </p>
      </div>
    </section>
  );
}
