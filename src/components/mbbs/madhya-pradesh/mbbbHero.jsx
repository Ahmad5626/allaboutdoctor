export default function MadhyaPradeshHero() {
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
              MBBS in Madhya Pradesh –{" "}
              <span className="text-primary">Complete Admission Guidance</span>
            </h1>

            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          <div className="pt-0 space-y-4">
            <p className="mt-4 text-muted-foreground text-lg md:text-xl">
              Pursuing MBBS in Madhya Pradesh is an excellent choice for medical aspirants 
              who want quality education, strong academic discipline, and excellent 
              clinical exposure. The state hosts several NMC-approved medical colleges 
              equipped with modern infrastructure, experienced faculty, and consistent 
              patient inflow for practical learning.
              <br /><br />
              With expert support and transparent counseling guidance, 
              All About Doctor Education Pvt Ltd helps students secure MBBS admissions 
              across all major medical cities in Madhya Pradesh.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
