export default function SpecializationsEvaluate() {
  const specializations = [
    "MD Medicine",
    "MD Pediatrics",
    "MD Radiology",
    "MS General Surgery",
    "MS Orthopedics",
    "MD Anesthesia",
    "MD Dermatology",
    "MD Psychiatry",
    "And All Other PG Medical Courses",
  ];

  return (
    <section className="w-full bg-primary/5">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        {/* Header */}
        <div className=" mb-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            Specializations You Can <span className="text-primary">Evaluate</span>
          </h1>
          <p className="max-w-3xl  mt-3 text-muted-foreground text-base md:text-lg">
            The NEET PG Rank Predictor helps assess your chances across a wide range of MD
            and MS specializations offered in India.
          </p>
        
        </div>

        {/* Specialization Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {specializations.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-5 border border-border rounded-xl bg-card/40 hover:border-primary hover:shadow-md transition-all"
            >
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white font-semibold">
                ✓
              </div>
              <p className="text-foreground/80 text-base font-medium">{item}</p>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}
