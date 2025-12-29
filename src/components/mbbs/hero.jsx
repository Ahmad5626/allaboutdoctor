import EnrollmentForm from "../home/EnrollmentForm";

export default function Hero() {
  return (
    <section className="w-full ">
      <div className=" md:flex  justify-between items-center mx-auto max-w-7xl px-6 py-10 md:py-10 ">
        <div className="space-y-6 md:w-1/2">
          <div className="space-y-3">
            <span
              className="inline-flex items-center rounded-full border border-border/60 bg-card px-3 py-1 text-xs font-medium text-muted-foreground animate-fade-up"
              style={{ animationDelay: "40ms" }}
            >
              All About Doctor Education Pvt Ltd
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer fade-item"
              style={{ animationDelay: "100ms" }}>
              MBBS in India  Complete Admission Guidance

            </h1>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          
          <div className="pt-0 space-y-4 max-w-3xl">
            <h3 className="mt-4 max-w-2xl text-sm/6 md:text-base/7 text-muted-foreground fade-item">
          MBBS in India is the most sought-after medical career path for students aspiring to become qualified doctors. With a vast network of NMC-recognized government, private, and deemed medical colleges, India offers high-quality medical education, extensive clinical exposure, and globally recognized degre
            </h3>

              <h3 className="mt-4 max-w-2xl text-sm/6 md:text-base/7 text-muted-foreground fade-item">
         MBBS admissions in India are strictly based on NEET-UG and conducted through a structured counselling system involving All India Quota (AIQ) and State Quota counselling authorities. All About Doctor Education Pvt. Ltd. provides end-to-end, transparent, and expert-driven guidance to help students secure the right MBBS seat based on their NEET rank, budget, and preferences.
            </h3>
          </div>
        </div>
        <div className="relative " >
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
            <EnrollmentForm fade="fade-item" />

          </div>
        </div>
        {/* <div className="pt-10 md:pt-0">
    <img src="https://allaboutdoctor.in/include/img/mbbs%20in%20india%20new.jpg" alt="" />
        </div> */}
      </div>
    </section>
  )
}
