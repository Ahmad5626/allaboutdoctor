export default function DelhiHero() {
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
              MBBS in Delhi –{" "}
              <span className="text-primary">Complete Admission Guidance</span>
            </h1>

            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          <div className="pt-0 space-y-4 ">
            <p className="mt-4 text-muted-foreground text-lg md:text-xl">
              Pursuing MBBS in Delhi is one of the most sought-after choices for
              medical aspirants who want world-class education, top-tier
              hospitals, and excellent clinical exposure. Delhi is home to India’s
              most prestigious NMC-recognized medical institutions, modern
              laboratories, and highly experienced medical faculties.
              <br /><br />
              With professional guidance and complete admission support, All About
              Doctor Education Pvt Ltd helps students secure MBBS admissions in
              Delhi’s leading medical institutions through transparent NEET-based
              counseling.
              <br /><br />
              <strong>URL:</strong> https://allaboutdoctor.vercel.app/india/delhi/mbbs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
