export default function HaryanaHero() {
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
              MBBS in Haryana –{" "}
              <span className="text-primary">Complete Admission Guidance</span>
            </h1>

            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          <div className="pt-0 space-y-4 ">
            <p className="mt-4 text-muted-foreground text-lg md:text-xl">
              Pursuing MBBS in Haryana is a strong choice for students seeking 
              modern medical facilities, excellent academic standards, and 
              consistent clinical exposure. The state offers multiple 
              NMC-recognized medical colleges equipped with advanced 
              infrastructure, skilled faculty, and structured internship programs.
              <br /><br />
              With trusted mentorship and end-to-end support, All About Doctor 
              Education Pvt Ltd assists students throughout every step of the 
              MBBS admission journey across Haryana’s top medical education 
              cities.
         
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
