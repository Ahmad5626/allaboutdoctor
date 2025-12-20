import EnrollmentForm from "../home/EnrollmentForm";

export default function Hero() {
  return (
    <section className="w-full">
      <div className="md:flex justify-between items-center mx-auto max-w-7xl px-6 py-10 md:py-10">
        {/* Left Content */}
        <div className="space-y-6 md:w-1/2">
          <div className="space-y-3">
            <span
              className="inline-flex items-center rounded-full border border-border/60 bg-card px-3 py-1 text-xs font-medium text-muted-foreground animate-fade-up"
              style={{ animationDelay: "40ms" }}
            >
              All About Doctor Education Pvt Ltd
            </span>

            <h1
              className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer fade-item"
            
            >
              Study MBBS Abroad for Indian Students –{" "}
              <span >
                Admission, Fees, Eligibility & Top Universities
              </span>
            </h1>

            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          <p className="text-lg md:text-xl text-primary font-semibold fade-item">
            Empowering Future Doctors — With All About Doctor Education Pvt Ltd
          </p>

          <div className="pt-0 space-y-4 max-w-3xl">
            <p className="mt-4 max-w-2xl text-sm/6 md:text-base/7 text-muted-foreground fade-item">
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

        <div className="relative">
                    <div className="relative overflow-hidden rounded-3xl bg-card p-6 shadow-md ring-1 ring-border md:p-8">
                      {/* rotating ring accent */}
                      <div
                        className="pointer-events-none absolute -right-10 -top-10 h-60 w-60 rounded-full border-2 border-primary/30 animate-spin-slow"
                        aria-hidden="true"
                      />
                      <div
                        className="pointer-events-none absolute -left-6 bottom-10 h-24 w-24 rounded-full border border-primary/20"
                        aria-hidden="true"
                      />
        <EnrollmentForm fade="fade-item"/>
                      {/* Main Illustration */}
                      
                    </div>
                  </div>
        {/* <div className="pt-10 md:pt-0 ">
          <img
            src="../assets/img/abroad.jpg"
            alt="Study MBBS Abroad"
            className="w-full"
          />
        </div> */}
      </div>
    </section>
  );
}
