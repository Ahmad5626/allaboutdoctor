export default function StartRankPrediction() {
  const details = [
    "NEET PG Score / Rank",
    "Category",
    "Preferred Specialization(s)",
    "Preferred States / College Type",
  ];

  return (
    <section className="w-full ">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 text-center">
        {/* Header */}
        <h1
          className="text-4xl font-semibold leading-tight sm:text-4xl text-pretty animate-fade-up"
          style={{ animationDelay: "100ms" }}
        >
          Start Your <span className="text-primary">NEET PG Rank Prediction</span>
        </h1>

        <p className="max-w-3xl mx-auto mt-4 text-muted-foreground text-base md:text-lg">
          Get personalized insights into your college and specialization possibilities —
          based on real data and your preferences.
        </p>

    

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {details.map((item, index) => (
            <div
              key={index}
              className="p-6 border border-border rounded-xl bg-card/60 hover:border-primary hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-center w-10 h-10 mx-auto rounded-full bg-primary text-white font-bold mb-3">
                {index + 1}
              </div>
              <p className="text-foreground/80 text-base font-medium">{item}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10">
          <p className="text-muted-foreground text-base mb-4">
            Our team will provide a customized prediction and college list tailored to
            your profile.
          </p>
          <button className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-md">
            Get My Prediction
          </button>
        </div>
      </div>
    </section>
  );
}
