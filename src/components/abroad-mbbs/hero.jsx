export default function Hero() {
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
              All About Doctor Education Pvt Ltd
            </span>

            <h1
              className="text-pretty text-4xl font-semibold leading-tight sm:text-5xl animate-fade-up my-4"
              style={{ animationDelay: "100ms" }}
            >
              Study MBBS Abroad for Indian Students –{" "}
              <span className="text-primary">
                Admission, Fees, Eligibility & Top Universities
              </span>
            </h1>

            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          <p className="text-lg md:text-xl text-primary font-semibold">
            Empowering Future Doctors — With All About Doctor Education Pvt Ltd
          </p>

          <div className="pt-0 space-y-4 max-w-3xl">
            <p className="mt-4 max-w-2xl text-sm/6 md:text-base/7 text-muted-foreground">
              Studying MBBS abroad has become one of the most preferred choices
              for Indian medical aspirants who wish to pursue a globally
              recognized medical degree at an affordable cost. At All About
              Doctor Education Pvt Ltd, we make your dream of becoming a doctor
              come true by helping you secure admission in top NMC-approved
              international medical universities with transparent guidance,
              complete documentation, and personalized counseling.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="pt-10 md:pt-0 ">
          <img
            src="../assets/img/abroad.jpg"
            alt="Study MBBS Abroad"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
