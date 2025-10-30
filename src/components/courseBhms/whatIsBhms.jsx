import React from 'react'

const WhatIsBhms = () => {
  return (
    <div>
      {/* What is BHMS */}
      <section className="w-full">
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}
          >
            What is <span className="text-primary">BHMS?</span>
          </h1>

          <div className="space-y-6 text-foreground/80 text-lg">
            <p className="text-foreground leading-relaxed py-6">
              BHMS (Bachelor of Homeopathic Medicine and Surgery) is an undergraduate professional degree
              focused on homeopathy — a natural system of medicine that stimulates the body’s healing power.
              This 5.5-year course (4.5 years of academic study + 1 year of internship) trains students in both
              modern medical sciences and classical homeopathic principles, preparing them to diagnose and treat
              patients holistically.
            </p>

            <p className="text-lg text-foreground/80 font-semibold mt-8">
              Key Subjects in the BHMS Course:
            </p>

            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>Anatomy, Physiology & Biochemistry</li>
              <li>Homeopathic Pharmacy & Materia Medica</li>
              <li>Pathology & Microbiology</li>
              <li>Organon of Medicine & Homeopathic Philosophy</li>
              <li>Surgery, Obstetrics & Gynaecology</li>
              <li>Repertory & Community Medicine</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhatIsBhms
