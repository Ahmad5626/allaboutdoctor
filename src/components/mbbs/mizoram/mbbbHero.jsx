export default function MizoramHero() {
  return (
    <section className="w-full">
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
              MBBS in Mizoram –{" "}
              <span className="text-primary">Complete Admission Guidance</span>
            </h1>

            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          <div className="pt-0 space-y-4">
            <p className="mt-4 text-muted-foreground text-lg md:text-xl">
              Pursuing MBBS in Mizoram is an excellent choice for medical aspirants
              seeking focused academics, modern medical infrastructure, and a 
              peaceful learning environment. The state offers NMC-recognized 
              institutions equipped with advanced laboratories, digital teaching 
              systems, experienced faculty, and practical-oriented medical training.
              <br /><br />
              Students benefit from strong community healthcare exposure and 
              structured clinical postings across various medical departments. 
              With transparent NEET counseling support and expert guidance, 
              All About Doctor Education Pvt Ltd helps students secure MBBS seats 
              in Mizoram through a reliable and student-first approach.
            </p>

          
          </div>
        </div>
      </div>
    </section>
  );
}
