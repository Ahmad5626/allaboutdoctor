import React from 'react'

const WhatIsBnys = () => {
  return (
    <div>
      {/* What is BNYS */}
      <section className="w-full">
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}
          >
            What is <span className="text-primary">BNYS?</span>
          </h1>

          <div className="space-y-6 text-foreground/80 text-lg">
            <p className="text-foreground leading-relaxed py-6">
              BNYS (Bachelor of Naturopathy and Yogic Sciences) is a professional undergraduate degree program that
              integrates the principles of naturopathy, yoga, and modern medical sciences to promote health through
              natural methods and lifestyle management. This 5.5-year course (including 4.5 years of academics and
              1-year internship) trains students to diagnose, prevent, and treat diseases using non-invasive,
              natural therapies.
            </p>

            <p className="text-lg text-foreground/80 font-semibold mt-8">
              Key Subjects in the BNYS Course:
            </p>

            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>Anatomy & Physiology</li>
              <li>Biochemistry & Pathology</li>
              <li>Naturopathy & Modern Diagnostic Methods</li>
              <li>Yoga Therapy & Asanas</li>
              <li>Nutrition & Dietetics</li>
              <li>Hydrotherapy & Mud Therapy</li>
              <li>Acupuncture & Acupressure</li>
              <li>Massage Therapy & Physiotherapy</li>
              <li>Psychology & Stress Management</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhatIsBnys
