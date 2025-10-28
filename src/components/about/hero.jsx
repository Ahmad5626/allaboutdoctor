export default function Hero() {
  return (
    <header className="relative overflow-hidden border-b border-border">
      <div className="md:flex gap-4 justify-between items-center relative mx-auto max-w-7xl px-6 py-10 md:py-10">
         <div className="">
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
          About   <span className="text-primary"> All About Doctor Education Pvt Ltd</span> 

            </h1>
        <p className="mt-4 max-w-2xl text-sm/6 md:text-base/7 text-muted-foreground">
         All About Doctor Education Pvt. Ltd. is a doctor-led medical education consultancy dedicated to guiding aspiring doctors toward globally recognized MBBS programs.
 Founded in 2015 by Dr. Anand Sharma (MD Physician) and Ms. Deeksha Bhargava, All about doctor  was built on one mission — to make medical education transparent, ethical, and globally accessible.
        </p>
         <p className="mt-4 max-w-2xl text-sm/6 md:text-base/7 text-muted-foreground">
       Over the years, we have helped thousands of students secure admission to NMC and WHO-approved universities across India and abroad. Our expert team of doctors, counsellors, and education strategists ensures every student receives genuine guidance — from the first counselling session to post-arrival support.

        </p>
        <p className="mt-4 max-w-2xl text-sm/6 md:text-base/7 text-muted-foreground"> Explore our <span className=" text-primary font-semibold py-6">
           Leadership & Experts 
          </span> or find your nearest counselling centre at
            <span className="text-primary font-semibold py-6"> Our Indian Branches.</span>
          </p>
   
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href="/our-team"
            className="inline-flex items-center justify-center rounded-lg border bg-secondary px-5 py-3 text-sm font-medium text-white hover:opacity-85 transition"
          >
            Our Team
          </a>
          <a
            href="/our-branches"
            className="inline-flex items-center justify-center rounded-lg border bg-primary px-5 py-3 text-sm font-medium text-white hover:opacity-85 transition"
          >
            Our Branches
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Stat label="Founded" value="2015" />
          <Stat label="Countries" value="9+ Regions" />
          <Stat label="Experts" value="20+ Doctors" />
          <Stat label="USP" value="Transparent & Verified" />
        </div>
         </div>
           <div className="pt-10 md:pt-0">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvtWnu1a8-m7GprreiGLCalQj3ytINQctr2A&s" className="w-[700px]" alt="" />
        </div>
      </div>
    </header>
  )
}

function Stat({ label, value }) {
  return (
    <div className="rounded-lg p-4 ring-1 ring-border">
      <div className="text-xs uppercase tracking-wide text-muted-foreground">{label}</div>
      <div className="mt-1 text-lg md:text-xl font-semibold">{value}</div>
    </div>
  )
}
