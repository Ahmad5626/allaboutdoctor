export default function RankPredictorBenefits() {
  const benefits = [
    "Estimates probable colleges and specializations based on your NEET PG rank",
    "Uses previous years’ MCC & State counselling data",
    "Helps compare Government, Private & Deemed University seat chances",
    "Identifies most realistic options to avoid wrong choice filling",
    "Supports budget-wise & location-wise decision planning",
  ];

  return (
    <section className="w-full bg-primary/5">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        {/* Section Header */}
        <div className=" mb-10">
          <h1
            className="text-4xl font-semibold leading-tight sm:text-4xl text-pretty animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            How the <span className="text-primary">Rank Predictor</span> Helps You
          </h1>
          <p className="max-w-3xl  mt-3 text-muted-foreground text-base md:text-lg">
            The NEET PG Rank Predictor is designed to guide candidates with realistic,
            data-driven insights for smarter counselling and admission planning.
          </p>
          
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 border border-border rounded-xl bg-card/40 hover:border-primary hover:shadow-md transition-all"
            >
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-bold">
                ✓
              </div>
              <p className="text-foreground/80 text-base leading-relaxed">
                {point}
              </p>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
