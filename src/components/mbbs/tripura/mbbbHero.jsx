export default function TripuraHero() {
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
              MBBS in Tripura –{" "}
              <span className="text-primary">Complete Admission Guidance</span>
            </h1>

            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          <div className="pt-0 space-y-4">
            <p className="mt-4 text-muted-foreground text-lg md:text-xl">
              Pursuing MBBS in Tripura is a promising opportunity for medical 
              aspirants who prefer structured academics, peaceful learning 
              environments, and quality clinical exposure. Tripura offers 
              NMC-recognized government and private medical colleges equipped 
              with modern laboratories, experienced faculty, and multi-specialty 
              hospital facilities ideal for hands-on training.
              <br /><br />
              With expert NEET counseling and complete admission assistance, 
              All About Doctor Education Pvt Ltd supports students in securing 
              MBBS seats across Tripura’s key medical hubs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
