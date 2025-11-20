export default function GujaratHero() {
  return (
    <section className="w-full ">
      <div className="md:flex justify-between items-center mx-auto max-w-7xl px-6 py-10 md:py-10">
        <div className="space-y-6">
          <div className="space-y-3">
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
              MBBS in Gujarat –{" "}
              <span className="text-primary">Complete Admission Guidance</span>
            </h1>

            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          <div className="pt-0 space-y-4 ">
            <p className="mt-4 text-muted-foreground text-lg md:text-xl">
              MBBS in Gujarat is an excellent opportunity for medical aspirants
              looking for high-quality education, world-class medical facilities,
              and strong clinical exposure. The state is home to several
              NMC-approved government and private medical colleges offering
              advanced academic training, well-equipped laboratories, and
              structured internship programs.
              <br /><br />
              With expert counseling and complete admission support, All About
              Doctor Education Pvt Ltd assists students in securing MBBS seats
              across Gujarat’s leading medical cities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
