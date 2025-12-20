export default function Hero() {
  return (
    <header className="relative overflow-hidden border-b border-border">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
         <span
              className="inline-flex items-center rounded-full border border-border/60 bg-card px-3 py-1 text-xs font-medium text-muted-foreground animate-fade-up"
              style={{ animationDelay: "40ms" }}
            >
            All About Doctor Education Pvt Ltd
            </span>
        <h1
              className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer fade-item"
              style={{ animationDelay: "100ms" }}
            >
         Preparations & Coaching <span className="text-primary">About All About Doctor Education Pvt Ltd</span> 

            </h1>
             <p className="text-lg md:text-xl text-primary font-semibold">
            Overview of All Services Provided
          </p>

            <p className="text-lg md:text-xl text-primary font-semibold">
         Test preparation programs for FMGE, NExT, and other medical licensing exams.

          </p>
        <p className="mt-4 max-w-2xl text-sm/6 md:text-base/7 text-muted-foreground">
         At All About Doctor Education Pvt Ltd, we provide comprehensive coaching and preparation programs designed to help aspiring doctors succeed in their licensing exams. Our expert-led training ensures students are confident, knowledgeable, and ready to meet global medical standards.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href="#overview"
            className="inline-flex items-center justify-center rounded-lg border bg-secondary px-5 py-3 text-sm font-medium text-white hover:opacity-85 transition"
          >
            View Overview
          </a>
          <a
            href="#partners"
            className="inline-flex items-center justify-center rounded-lg border bg-primary px-5 py-3 text-sm font-medium text-white hover:opacity-85 transition"
          >
            Our University Partners
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Stat label="Founded" value="2015" />
          <Stat label="Countries" value="9+ Regions" />
          <Stat label="Experts" value="20+ Doctors" />
          <Stat label="USP" value="Transparent & Verified" />
        </div>
      </div>
    </header>
  )
}

function Stat({ label, value }) {
  return (
    <div className="rounded-lg p-4 ring-1 ring-border">
      <div className="text-xs uppercase tracking-wide text-muted-foreground">{label}</div>
      <div className="mt-1 text-lg md:text-xl font-semibold">{value}</div>
    </div>
  )
}
