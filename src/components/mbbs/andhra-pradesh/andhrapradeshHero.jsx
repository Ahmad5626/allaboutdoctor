export default function AndhraPradeshHero() {
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
              MBBS in Andhra Pradesh –{" "}
              <span className="text-primary">Complete Admission Guidance</span>
            </h1>

            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          <p className="text-lg md:text-xl text-primary font-semibold">
            Your Trusted Partner for MBBS Admission in Andhra Pradesh
          </p>

          <div className="pt-0 space-y-4 ">
            <p className="mt-4   text-muted-foreground">
              Studying MBBS in Andhra Pradesh is an excellent opportunity for
              medical aspirants who want strong academic foundations, modern
              medical facilities, and high clinical exposure. The state is home
              to multiple NMC-approved medical colleges offering an updated
              curriculum, structured internships, and excellent patient flow.
              <br />
              <br />
              With personalized guidance and complete admission support, All
              About Doctor Education Pvt Ltd helps students secure MBBS
              admissions across Andhra Pradesh’s major medical education cities.
            </p>
          </div>
        </div>

        {/* <div className="pt-10 md:pt-0">
              <img src="https://allaboutdoctor.in/include/img/mbbs%20in%20india%20new.jpg" className="md:w-[700px]" alt="" />
        </div> */}
      </div>
    </section>
  );
}
