import React from 'react'

const WhatIsBams = () => {
  return (
    <div>
      {/* What is BAMS */}
      <section className="w-full">
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}
          >
            What is <span className="text-primary">BAMS?</span>
          </h1>

          <div className="space-y-6 text-foreground/80 text-lg">
            <p className="text-foreground leading-relaxed py-6">
              BAMS (Bachelor of Ayurvedic Medicine and Surgery) is a professional undergraduate degree that blends
              traditional Ayurvedic healing systems with modern medical sciences. This 5.5-year course — including
              4.5 years of academic study and 1 year of compulsory internship — equips students with deep knowledge
              of herbal medicine, natural therapies, yoga, and holistic healing practices.
            </p>

            <p className="text-lg text-foreground/80 font-semibold mt-8">
              Key Subjects in the BAMS Course:
            </p>

            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>Sanskrit & Ayurvedic Philosophy</li>
              <li>Anatomy (Rachana Sharir) & Physiology (Kriya Sharir)</li>
              <li>Dravyaguna Vigyan (Pharmacology of Herbs)</li>
              <li>Rasashastra & Bhaishajya Kalpana (Medicinal Chemistry & Formulation)</li>
              <li>Agadtantra (Toxicology)</li>
              <li>Charak Samhita & Sushruta Samhita</li>
              <li>Kayachikitsa (General Medicine)</li>
              <li>Panchakarma Therapy</li>
              <li>Shalya Tantra (Surgery) & Shalakya Tantra (ENT & Eye Care)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhatIsBams
