import React from 'react'

const WhatIsBds = () => {
  return (
    <div>
      {/* What is BDS */}
      <section className="w-full">
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}
          >
            What is <span className="text-primary">BDS?</span>
          </h1>

          <div className="space-y-6 text-foreground/80 text-lg">
            <p className="text-foreground leading-relaxed py-6">
              BDS (Bachelor of Dental Surgery) is a professional undergraduate program that trains students in the
              science and art of dental care, oral surgery, and oral health management. This five-year program —
              including four years of academic study and one year of compulsory internship — equips students with
              clinical expertise and hands-on experience to become skilled dental professionals.
            </p>

            <p className="text-lg text-foreground/80 font-semibold mt-8">
              Core subjects studied during BDS include:
            </p>

            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>Dental Anatomy & Histology</li>
              <li>Oral Pathology & Microbiology</li>
              <li>Prosthodontics & Crown Bridge</li>
              <li>Orthodontics & Endodontics</li>
              <li>Oral & Maxillofacial Surgery</li>
              <li>Periodontics & Preventive Dentistry</li>
            </ul>

            
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhatIsBds
