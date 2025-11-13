export default function NMCUpdatesHero() {
  return (
    <section className="w-full">
      <div className="md:flex justify-between items-center mx-auto max-w-7xl px-6 py-10 md:py-10">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="space-y-3">
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
              NMC Updates –{" "}
              <span className="text-primary">All About Doctor Education Pvt. Ltd.</span>
            </h1>

            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary font-semibold">
            Stay Informed. Stay Compliant. Stay Ahead.
          </p>

          {/* Description */}
          <div className="pt-0 space-y-4 max-w-3xl">
            <p className="mt-4 max-w-2xl text-sm/6 md:text-base/7 text-muted-foreground">
              Stay informed with verified and timely updates from the{" "}
              National Medical Commission (NMC). This section provides
              accurate, transparent, and regularly updated information related to{" "}
              medical education policies, eligibility rules, exam formats,
              university approvals, and admission regulations{" "}
              for both Indian and international MBBS aspirants.
            </p>
          </div>
        </div>

        {/* Right Image */}
       <div className="pt-10 md:pt-0">
    <img src="https://allaboutdoctor.in/include/img/mbbs%20in%20india%20new.jpg" className="md:max-w-xl" alt="" />
        </div>
      </div>
    </section>
  );
}
