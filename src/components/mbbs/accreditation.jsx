export default function Accreditation() {
  const bodies = ["National Medical Commission (NMC)", "World Health Organization (WHO)", "FAIMER & UNESCO Recognition"]

  return (
    <section className="w-full ">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <div>
          <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
              style={{ animationDelay: "100ms" }}>Recognition and <span className="text-primary">Accreditation</span> </h1>
         
          <p className="text-foreground leading-relaxed py-6">
            All MBBS programs in India are regulated by top national and international medical bodies to ensure global
            recognition and academic excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {bodies.map((body, idx) => (
            <div key={idx} className="border-2 border-primary rounded-lg p-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-full border-2 border-primary mx-auto flex items-center justify-center">
                <span className="text-primary font-bold">✓</span>
              </div>
              <p className="font-semibold text-foreground">{body}</p>
            </div>
          ))}
        </div>

        <div className="border-l-4 border-primary pl-6 py-4 space-y-2 my-10">
          <p className="text-foreground leading-relaxed">
            At All About Doctor, we connect students only with NMC-approved medical institutions that maintain the
            highest standards of education and training.
          </p>
        </div>
      </div>
    </section>
  )
}
