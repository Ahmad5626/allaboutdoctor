export default function TypesHero() {
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
                NEET PG Counselling{" "}
  <span >Types</span>
              </h1>

              <h2 className="text-lg font-medium text-muted-foreground animate-fade-up"
                style={{ animationDelay: "140ms" }}>
                Understanding Central, State & Private Quota Admissions Presented by All About Doctor Education Pvt. Ltd.
              </h2>

              <div className="h-1 w-24 bg-primary rounded-full"></div>
            </div>

            <p className="mt-4 max-w-2xl text-sm/6 md:text-base/7 text-muted-foreground">
              NEET PG Counselling is conducted through different authorities and seat
              quotas. Understanding these counselling types is essential for making
              informed decisions regarding MD, MS, and PG Diploma admissions in India.
              Each counselling pathway has its own rules, seat distribution, fee
              structure, and eligibility considerations.
            </p>

            <p className="mt-4 max-w-2xl text-sm/6 md:text-base/7 text-muted-foreground">
              This guide explains the main types of NEET PG counselling so candidates can
              choose the best admission route based on their rank, budget, and
              specialization goals.
            </p>
          </div>

          {/* Right Image */}
          <div className="pt-10 md:pt-0">
            <img
              src="../assets/img/abroad.jpg"
              alt="NEET PG Counselling Types"
              className="w-full rounded-lg shadow-md md:h-[350px]"
            />
          </div>
        </div>

       
      </div>
    </section>
  );
}
