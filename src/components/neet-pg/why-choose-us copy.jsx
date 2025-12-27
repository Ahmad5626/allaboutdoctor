export default function WhyChooseUs() {
  

  return (
   <section className="bg-white ">
      <div className="max-w-6xl mx-auto px-6">

        {/* Accent wrapper */}
        <div className="relative rounded-[36px] overflow-hidden">

          {/* Top accent strip */}
          <div className="absolute top-0 left-0 h-2 w-full bg-gradient-to-r from-primary via-blue-400 to-secondary" />

          {/* Content */}
          <div className="relative bg-gradient-to-br from-white to-slate-50 px-14 py-20 text-center shadow-[0_40px_90px_rgba(0,0,0,0.08)] rounded-[36px]">

            {/* Small tag */}
            <span className="inline-block mb-6 rounded-full bg-primary/10 px-5 py-2 text-xs font-semibold tracking-widest text-primary uppercase">
              Trusted NEET UG Counselling Partner
            </span>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-blue-300 to-secondary bg-clip-text text-transparent">
              Why Choose All About Doctor
              <span className="block mt-3">
                for NEET UG Counselling Support
              </span>
            </h2>

            {/* Description */}
            <p className="mt-10 max-w-4xl mx-auto text-lg md:text-xl leading-relaxed text-muted-foreground">
              We provide end-to-end counselling assistance, from document
              preparation to final college reporting, ensuring students make
              confident and informed decisions for their medical careers.
            </p>

          </div>
        </div>

      </div>
    </section>
  )
}
