export default function WhyUseRankPredictor() {
  const reasons = [
    "Avoids trial-and-error choice filling",
    "Helps create a focused, achievable preference list",
    "Improves chances of seat allotment in earlier rounds",
    "Prevents seat loss due to unrealistic selections",
  ];

  return (
    <section className="w-full bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        {/* Header */}
        <div className=" mb-10">
          <h1
            className="text-4xl font-semibold leading-tight sm:text-4xl text-pretty animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            Why Use a <span className="text-primary">Rank Predictor</span> Before
            Counselling?
          </h1>
          <p className="max-w-3xl  mt-3 text-muted-foreground text-base md:text-lg">
            The NEET PG Rank Predictor empowers candidates to plan strategically and
            approach counselling with confidence and clarity.
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
              <p className="text-foreground/80 text-base leading-relaxed">
                {reason}
              </p>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
