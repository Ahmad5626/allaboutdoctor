export default function ProcessHero() {
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
                className="text-pretty text-4xl font-semibold leading-tight sm:text-5xl animate-fade-up my-4"
                style={{ animationDelay: "100ms" }}
              >
                NEET PG Counselling{" "}
                <span className="text-primary">Process</span>
              </h1>

              <h2
                className="text-lg font-medium text-muted-foreground animate-fade-up"
                style={{ animationDelay: "140ms" }}
              >
                Step-by-Step Procedure for MD/MS Admissions  Presented by All About Doctor Education Pvt. Ltd.
              </h2>

              <div className="h-1 w-24 bg-primary rounded-full"></div>
            </div>

            {/* Paragraphs */}
            <p className="mt-4 max-w-2xl text-sm/6 md:text-base/7 text-muted-foreground">
              The NEET PG Counselling Process is the official method through which
              qualified medical graduates secure seats in MD, MS, and PG Diploma programs
              across Government, Private, and Deemed Medical Colleges in India. The
              counselling is conducted in multiple rounds and requires careful planning,
              documentation, and preference selection to achieve the best possible
              specialization and college.
            </p>

            <p className="mt-4 max-w-2xl text-sm/6 md:text-base/7 text-muted-foreground">
              This guide provides a clear, step-by-step walkthrough of the complete
              counselling procedure to help candidates navigate the process confidently
              and maximize their admission opportunities.
            </p>
          </div>

          {/* Right Image */}
          <div className="pt-10 md:pt-0">
            <img
              src="../assets/img/abroad.jpg"
              alt="NEET PG Counselling Process"
              className="w-full rounded-lg shadow-md md:h-[350px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
