export default function KarnatakaHero() {
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
              MBBS in Karnataka –{" "}
              <span className="text-primary">Complete Admission Guidance</span>
            </h1>

            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          <div className="pt-0 space-y-4">
            <p className="mt-4 text-muted-foreground text-lg md:text-xl">
              Pursuing MBBS in Karnataka is an excellent decision for medical aspirants seeking high-quality education, strong clinical exposure, and access to some of India’s top medical institutions. The state is home to numerous NMC-approved medical colleges offering advanced infrastructure, experienced faculty, and exceptional patient flow, creating a powerful learning environment.
              <br /><br />
              With expert guidance and transparent counseling support, All About Doctor Education Pvt Ltd helps students secure MBBS admissions across all major medical cities in Karnataka.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
