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
            <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-5xl animate-fade-up my-4"
              style={{ animationDelay: "100ms" }}>
              Study MBBS in India for Indian Students <span className="text-primary">Admission, Fees, Eligibility & Top Medical
Universities</span>

            </h1>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          <p className="text-lg md:text-xl text-primary font-semibold">
            From NEET to NExT — Your Global Medical Future Begins Here
          </p>
         <div className="pt-0 space-y-4 max-w-3xl">
            <p className="mt-4 max-w-2xl text-sm/6 md:text-base/7 text-muted-foreground">
              At All About Doctor Education Pvt. Ltd., we redefine the medical education journey for aspiring doctors in
              India. Through doctor-led mentorship, AI-powered learning, and personalized counseling, we help students
              navigate every milestone — from NEET preparation to NExT success — with clarity, confidence, and guidance.
            </p>
          </div>
        </div>
        <div className="pt-10 md:pt-0">
    <img src="https://allaboutdoctor.in/include/img/mbbs%20in%20india%20new.jpg" alt="" />
        </div>
      </div>
    </section>
  )
}
