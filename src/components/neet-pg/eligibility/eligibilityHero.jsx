export default function EligibilityHero() {
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
                Presented by All About Doctor Education Pvt. Ltd.
              </span>

              <h1
                className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer fade-item"
                style={{ animationDelay: "100ms" }}
              >
                NEET PG Counselling{" "}
  <span >Eligibility Criteria</span>
              </h1>

              <div className="h-1 w-24 bg-primary rounded-full"></div>
            </div>

            <p className="mt-4 max-w-2xl text-sm/6 md:text-base/7 text-muted-foreground">
              For <strong>MD / MS / PG Diploma Admissions</strong>   Presented by All About Doctor Education Pvt. Ltd.
            </p>

            <p className="mt-4 max-w-2xl text-sm/6 md:text-base/7 text-muted-foreground">
              To participate in NEET PG Counselling, candidates must meet the official
              eligibility requirements set by the{" "}
              <strong>National Medical Commission (NMC)</strong> and the{" "}
              <strong>Medical Counselling Committee (MCC)</strong>. These criteria ensure
              that admissions into postgraduate medical programs are fair, transparent,
              and merit-based.
            </p>
          </div>

          {/* Right Image */}
          <div className="pt-10 md:pt-0">
            <img
              src="../assets/img/abroad.jpg"
              alt="NEET PG Eligibility"
              className="w-full rounded-lg md:h-[350px] shadow-md"
            />
          </div>
        </div>

     
      </div>
    </section>
  );
}
