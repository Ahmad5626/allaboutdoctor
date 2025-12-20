export default function Hero() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-10">
        <div className="md:flex justify-between items-center gap-4">
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
                NEET PG Counselling – Complete Guidance for{" "}
  <span >MD/MS Admissions</span>
              </h1>

              <div className="h-1 w-24 bg-primary rounded-full"></div>
            </div>

            <h2 className="mt-4 max-w-2xl text-sm/6 md:text-base/7 text-muted-foreground fade-item">
              The NEET PG Counselling process is a decisive step for medical graduates
              aspiring to pursue MD, MS, and PG Diploma programs in India. After qualifying
              the NEET-PG entrance exam, candidates must undergo the official counselling
              procedure to secure seats across Government Colleges, Private Medical
              Universities, and Deemed Institutions.
            </h2>

            <h3 className="mt-4 max-w-2xl text-sm/6 md:text-base/7 text-muted-foreground fade-item">
              The Medical Counselling Committee (MCC) conducts the All India Quota (AIQ)
              counselling, while individual State Authorities manage the State Quota
              admissions. This structured process ensures transparent, merit-based
              allocation of seats based on rank, category, and preferences.
            </h3>
          </div>

          {/* Right Image */}
          <div className="pt-10 md:pt-0">
            <img
              src="../assets/img/abroad.jpg"
              alt="NEET PG Counselling"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="p-4 border border-primary/30 rounded-lg hover:border-primary transition-colors">
            <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
            <p className="text-sm text-foreground/70">Students Successfully Guided</p>
          </div>

          <div className="p-4 border border-secondary/30 rounded-lg hover:border-secondary transition-colors">
            <div className="text-3xl font-bold text-secondary mb-2">95%</div>
            <p className="text-sm text-foreground/70">Admission Success Rate</p>
          </div>

          <div className="p-4 border border-primary/30 rounded-lg hover:border-primary transition-colors">
            <div className="text-3xl font-bold text-primary mb-2">850+</div>
            <p className="text-sm text-foreground/70">Partner Medical Colleges</p>
          </div>
        </div>
      </div>
    </section>
  );
}
