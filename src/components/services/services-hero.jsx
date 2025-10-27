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
              className="text-pretty text-4xl font-semibold leading-tight sm:text-5xl animate-fade-up my-4"
              style={{ animationDelay: "100ms" }}
            >
           Our Services  <span className="text-primary">About All About Doctor Education Pvt Ltd</span> 

            </h1>
             <p className="text-lg md:text-xl text-primary font-semibold">
            Overview of All Services Provided
          </p>
        <p className="mt-4 max-w-2xl text-sm/6 md:text-base/7 text-muted-foreground">
          At All About Doctor Education Pvt Ltd, we provide a complete range of services designed to guide and support aspiring Indian doctors in pursuing their dream of studying medicine abroad. Our mission is to make global medical education simple, ethical, and accessible through transparent guidance and end-to-end assistance.
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
