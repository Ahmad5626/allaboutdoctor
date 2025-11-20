export default function ChhattisgarhHero() {
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
              MBBS in Chhattisgarh –{" "}
              <span className="text-primary">Complete Admission Guidance</span>
            </h1>

            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          <div className="pt-0 space-y-4 ">
            <p className="mt-4 text-muted-foreground text-lg md:text-xl">
              Pursuing MBBS in Chhattisgarh is an excellent opportunity for
              medical aspirants seeking strong academic foundations, modern
              medical infrastructure, and wide clinical exposure. The state is
              home to several NMC-recognized medical colleges offering updated
              teaching standards, advanced laboratories, and high patient
              footfall for hands-on learning.
              <br /><br />
              With complete admission guidance and expert mentorship, All About
              Doctor Education Pvt Ltd helps students secure MBBS seats across
              Chhattisgarh’s leading medical education cities.
            </p>
          </div>
        </div>

        {/* Optional Image Section */}
        {/* <div className="pt-10 md:pt-0">
          <img
            src="https://allaboutdoctor.in/include/img/mbbs%20in%20india%20new.jpg"
            className="md:w-[700px]"
            alt=""
          />
        </div> */}
      </div>
    </section>
  );
}
