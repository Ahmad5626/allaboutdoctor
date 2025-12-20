export default function CoursesHero() {
  return (
     <section className="w-full ">
      <div className=" md:flex gap-10  justify-between items-center mx-auto max-w-7xl px-6 py-10 md:py-10">
        <div className="space-y-6">
          <div className="space-y-3">
            <span
              className="inline-flex items-center rounded-full border border-border/60 bg-card px-3 py-1 text-xs font-medium text-muted-foreground animate-fade-up"
              style={{ animationDelay: "40ms" }}
            >
            All About Doctor Education Pvt Ltd
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer fade-item"
              style={{ animationDelay: "100ms" }}>
             Medical & Paramedical Courses <span className="text-primary"> All About Doctor Education Pvt Ltd
Universities</span>

            </h1>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          <p className="text-lg md:text-xl text-primary font-semibold">
           Overview of All Courses Provided
          </p>
         <div className="pt-0 space-y-4 max-w-3xl">
            <p className="mt-4 max-w-2xl text-sm/6 md:text-base/7 text-muted-foreground">
             At All About Doctor Education Pvt Ltd, we offer comprehensive guidance on a wide range of medical and paramedical courses for Indian students aspiring to study in India or abroad. Our goal is to help students choose the right course, understand eligibility, and plan their academic journey with confidence.
            </p>
          </div>
            {/* <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href=""
            className="inline-flex items-center justify-center rounded-lg border bg-secondary px-5 py-3 text-sm font-medium text-white hover:opacity-85 transition"
          >
            Explore our course
          </a>
         
        </div> */}
        </div>
        <div className="pt-10 md:pt-0">
    <img src="https://allaboutdoctor.in/include/img/mbbs%20in%20india%20new.jpg" className="" alt="" />
        </div>
      </div>
    </section>
  )
}
