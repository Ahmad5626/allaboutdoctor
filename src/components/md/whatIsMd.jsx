import React from 'react'

const WhatIsMd = () => {
  return (
    <div>
      {/* What is MD Program */}
      <section className="w-full">
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}
          >
            What is an <span className="text-primary">MD Program?</span>
          </h1>

          <div className="space-y-6 text-foreground/80 text-lg">
            <p className="text-foreground leading-relaxed py-6">
              The Doctor of Medicine (MD) is a postgraduate degree that focuses on advanced medical knowledge, 
              clinical skills, and research in a specific area of medicine. An MD program enables doctors to 
              deepen their understanding of diagnosis, treatment, and patient care through evidence-based 
              medical practice and specialized training.
            </p>

            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li><strong>Duration:</strong> 3 Years (after completion of MBBS)</li>
              <li><strong>Eligibility:</strong> MBBS from an NMC-recognized university + NEET-PG qualification</li>
              <li><strong>Course Type:</strong> Postgraduate – Professional</li>
              <li><strong>Degree Awarded By:</strong> Recognized Medical University / Government Institution</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhatIsMd
