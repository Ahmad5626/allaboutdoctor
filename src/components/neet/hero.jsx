export default function Hero() {
  return (
    <section className="w-full ">
      <div className=" mx-auto max-w-7xl px-6 py-10 md:py-10">
       <div className="md:flex justify-between items-center gap-4">
         <div className="space-y-6">
          <div className="space-y-4">
           <span
              className="inline-flex items-center rounded-full border border-border/60 bg-card px-3 py-1 text-xs font-medium text-muted-foreground animate-fade-up"
              style={{ animationDelay: "40ms" }}
            >
              All About Doctor Education Pvt Ltd
            </span>
            <h1  className="text-pretty text-4xl font-semibold leading-tight sm:text-5xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}>
              NEET UG – Your Gateway to Medical
Education with <span className="text-primary">All About Doctor
Education Pvt Ltd
</span> 
            </h1>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          <p className="mt-4 max-w-2xl text-sm/6 md:text-base/7 text-muted-foreground">
            NEET UG (National Eligibility cum Entrance Test – Undergraduate) is the mandatory entrance exam for aspiring
            doctors in India. At All About Doctor Education Pvt Ltd, we guide students through every step of the NEET UG
            journey, helping you secure admissions in top medical colleges in India and abroad.
          </p>

        
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="p-4 border border-primary/30 rounded-lg hover:border-primary transition-colors">
              <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
              <p className="text-sm text-foreground/70">Successful Students Guided</p>
            </div>
            <div className="p-4 border border-secondary/30 rounded-lg hover:border-secondary transition-colors">
              <div className="text-3xl font-bold text-secondary mb-2">95%</div>
              <p className="text-sm text-foreground/70">Admission Success Rate</p>
            </div>
            <div className="p-4 border border-primary/30 rounded-lg hover:border-primary transition-colors">
              <div className="text-3xl font-bold text-primary mb-2">850+</div>
              <p className="text-sm text-foreground/70">Partner Medical Colleges</p>
            </div>
          </div>
      </div>
      
    </section>
  )
}
