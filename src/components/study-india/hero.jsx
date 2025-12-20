"use client"

export default function Hero() {
  return (
    <section className="w-full ">
      <div className=" md:flex  justify-between items-center mx-auto max-w-7xl px-6 py-10 md:py-10">
        <div className="space-y-6">
          <div className="space-y-3">
            <span
              className="inline-flex items-center rounded-full border border-border/60 bg-card px-3 py-1 text-xs font-medium text-muted-foreground animate-fade-up"
              style={{ animationDelay: "40ms" }}
            >
            All About Doctor Education Pvt Ltd
            </span>
             <h1  className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer fade-item"
            style={{ animationDelay: "100ms" }}>
            Study <span className="text-primary"> in India</span>
          </h1>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

       
         <div className="pt-0 space-y-4 max-w-3xl">
            <p className="mt-4 max-w-2xl text-sm/6 md:text-base/7 text-muted-foreground">
              
            Explore world-class medical education across India's top universities. From government institutions to
            private colleges, find your perfect medical school with All About Doctor Education.
         
           
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
          <div className="flex items-center gap-2 border border-border rounded-lg px-4 py-2">
            <span className="text-2xl font-bold text-primary">700+</span>
            <span className="text-sm text-muted-foreground">NMC-Approved Colleges</span>
          </div>
          <div className="flex items-center gap-2 border border-border rounded-lg px-4 py-2">
            <span className="text-2xl font-bold text-primary">10,000+</span>
            <span className="text-sm text-muted-foreground">Successful Students</span>
          </div>
          <div className="flex items-center gap-2 border border-border rounded-lg px-4 py-2">
            <span className="text-2xl font-bold text-primary">95%</span>
            <span className="text-sm text-muted-foreground">Admission Success Rate</span>
          </div>
        </div>
        </div>
        <div className="pt-10 md:pt-0">
    <img src="https://allaboutdoctor.in/include/img/mbbs%20in%20india%20new.jpg" className="md:w-[500px]" alt="" />
        </div>
      </div>
    </section>
  )
}
