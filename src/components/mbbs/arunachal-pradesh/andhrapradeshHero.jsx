import EnrollmentForm from "@/components/home/EnrollmentForm";

export default function ArunachalPradeshHero() {
  return (
    <section className="w-full ">
      <div className="md:flex justify-between items-center mx-auto max-w-7xl px-6 py-10 md:py-10">
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
              style={{ animationDelay: "100ms" }}
            >
              MBBS in Arunachal Pradesh
<span > Complete Admission Guidance</span>
            </h1>

            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          <h2 className="text-lg md:text-xl text-primary font-semibold fade-item">
            Your Trusted Partner for MBBS Admission in Arunachal Pradesh
          </h2>

          <div className="pt-0 space-y-4 ">
            <h3 className="mt-4 text-muted-foreground fade-item">
              Pursuing MBBS in Arunachal Pradesh is a strong academic choice for
              medical aspirants who prefer a peaceful learning environment,
              modern medical facilities, and focused clinical exposure. The
              state offers NMC-approved medical education with updated teaching
              methods, structured internships, and student-friendly surroundings
              ideal for dedicated study.
              <br />
              <br />
              With complete admission support and expert guidance, All About
              Doctor Education Pvt Ltd helps students secure MBBS seats in
              Arunachal Pradesh’s primary medical hub, Naharlagun.
            </h3>
          </div>
        </div>

        {/* Optional Image Section */}

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
                   
                   </div>
                 </div>
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
