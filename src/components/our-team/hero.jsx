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
          Meet Our Expert Team of   <span className="text-primary">  Doctors & Leaders</span> 

            </h1>
       
      
        <p className="mt-4 max-w-2xl text-sm/6 md:text-base/7 text-muted-foreground"> At  <span className=" text-primary font-semibold py-6">
           All About Doctor Education Pvt. Ltd.
          </span>  our success is powered by a distinguished team of 
            <span className="text-primary font-semibold py-6">  20+ professionals</span>
            led by
            <span className="text-primary font-semibold py-6">  Dr. Anand Sharma (MD Physician)</span>
            — uniting expertise in
            <span className="text-primary font-semibold py-6">  clinical training, student counseling, academic excellence, and psychological guidance.</span>
          </p>
           <p className="mt-4 max-w-2xl text-sm/6 md:text-base/7 text-muted-foreground">
       Our experts work with a single vision — to provide every medical aspirant with transparent guidance, world-class mentorship, and the confidence to pursue their dream of becoming a global doctor.
        </p>
   
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
         
          <a
            href="/about-us/our-branches"
            className="inline-flex items-center justify-center rounded-lg border bg-primary px-5 py-3 text-sm font-medium text-white hover:opacity-85 transition"
          >
            Our Branches
          </a>
        </div>

      
         </div>
           <div className="pt-10 md:pt-0">
      <img src="https://all-about-doctor.localo.site/cdn-cgi/image/compression=fast,dpr=1,height=600,width=1300,quality=100/https://lh3.googleusercontent.com/rptw2RXNfUn7uC38BkNbJiuoX_gyJObTTLTbVgQgRN0-TO-eDaBQDVjJVrJPGcLlzqoBqKCcAC8-vlZr=s0" className="w-[700px]" alt="" />
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
