export default function Hero() {
  return (
    <header className="flex flex-col items-start gap-5 md:gap-6">
      <span className="inline-flex items-center rounded-full border border-border/60 bg-card px-3 py-1 text-xs font-medium text-muted-foreground animate-fade-up"
              style={{ animationDelay: "40ms" }}>
        Contact Us — All About Doctor Education Pvt. Ltd.
      </span>
    
      <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-5xl animate-fade-up ">
        From NEET to NExT — <span className="text-primary">Unlock Your Global Medical Dreams</span> 
      </h1>
      <p className="mt-4 max-w-2xl text-sm/6 md:text-base/7 text-muted-foreground">
        We’d love to hear from you!
 Whether you’re a student planning to pursue MBBS in India or abroad, a parent seeking trustworthy guidance, or a partner institution interested in collaboration — All About Doctor Education Pvt. Ltd. is here to help.
      </p>
      <p className="mt-4 max-w-2xl text-sm/6 md:text-base/7 text-muted-foreground">
        With a 95% admission success rate, 850+ global partner universities, and 10,000+ successful students, our expert counsellors ensure that your medical education journey is transparent, guided, and stress-free.
      </p>
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <a
          href="#contact-form"
          className="inline-flex items-center gap-2 text-sm md:text-base font-semibold bg-primary border border-primary px-4 py-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary text-white"
        >
          Talk to a counsellor
          <span aria-hidden>→</span>
        </a>
        
      </div>
    </header>
  )
}
