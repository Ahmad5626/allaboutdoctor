export default function RankPredictorHero() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-10">
        <div className="md:flex justify-between items-center gap-4">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <span
                className="inline-flex items-center rounded-full border border-border/60 bg-card px-3 py-1 text-xs font-medium text-muted-foreground animate-fade-up"
                style={{ animationDelay: "40ms" }}
              >
                 All About Doctor Education Pvt. Ltd.
              </span>

              <h1
                className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer fade-item"
                style={{ animationDelay: "100ms" }}
              >
                NEET PG <span className="text-primary">Rank Predictor</span>
              </h1>

              <h2
                className="text-lg font-medium text-muted-foreground animate-fade-up"
                style={{ animationDelay: "140ms" }}
              > 
                Predict Your MD/MS College & Specialization Possibilities Presented by All About Doctor Education Pvt. Ltd.
              </h2>

              <div className="h-1 w-24 bg-primary rounded-full"></div>
            </div>

            {/* Description */}
            <p className="mt-4 max-w-2xl text-sm/6 md:text-base/7 text-muted-foreground">
              Choosing the right medical college and specialization after NEET PG depends
              on understanding where your rank stands in the national seat matrix. The
              <strong> NEET PG Rank Predictor </strong> helps you estimate your chances of
              admission in Government, Private, and Deemed Medical Colleges based on your
              NEET PG score, category, and state preferences.
            </p>

            <p className="mt-4 max-w-2xl text-sm/6 md:text-base/7 text-muted-foreground">
              This tool provides a data-backed prediction using previous year cutoffs,
              seat allotment trends, and specialization demand patterns — helping you plan
              your counselling choices with clarity and confidence.
            </p>
          </div>

          {/* Right Image */}
          <div className="pt-10 md:pt-0">
            <img
              src="../assets/img/abroad.jpg"
              alt="NEET PG Rank Predictor"
              className="w-full rounded-lg shadow-md md:h-[350px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
