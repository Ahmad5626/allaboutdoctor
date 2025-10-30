import React from 'react'

const WhatIsBums = () => {
  return (
    <div>
      {/* What is BUMS */}
      <section className="w-full">
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}
          >
            What is <span className="text-primary">BUMS?</span>
          </h1>

          <div className="space-y-6 text-foreground/80 text-lg">
            <p className="text-foreground leading-relaxed py-6">
              BUMS (Bachelor of Unani Medicine and Surgery) is a professional undergraduate degree 
              that focuses on the Unani system of medicine — an ancient healing science rooted in 
              Greek and Arabic traditions. The 5.5-year program (4.5 years academic + 1-year internship) 
              trains students to diagnose, prevent, and treat diseases using natural remedies, regimental 
              therapies, diet, and lifestyle modifications. It emphasizes the balance of body, mind, and 
              environment to achieve optimal health.
            </p>

            <p className="text-lg text-foreground/80 font-semibold mt-8">
              Key Subjects in the BUMS Course:
            </p>

            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>Anatomy & Physiology</li>
              <li>Unani Pharmacology (Ilmul Advia)</li>
              <li>Pathology (Ilmul Amraz)</li>
              <li>Preventive & Community Medicine</li>
              <li>Regimental Therapy (Ilaj-bit-Tadbeer)</li>
              <li>Unani Surgery (Ilmul Jarahat)</li>
              <li>Toxicology & Forensic Medicine</li>
              <li>Clinical Practice & Research</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhatIsBums
