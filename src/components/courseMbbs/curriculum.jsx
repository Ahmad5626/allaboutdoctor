import React from 'react'

const Curriculum = () => {
  return (
    <div>
      {/* Curriculum Breakdown */}
      <section className=" px-4 md:px-8 border-b border-primary/20">
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
          <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
              style={{ animationDelay: "100ms" }}>MBBS Curriculum <span className='text-primary'>Breakdown</span> </h1>
          <p className="text-lg text-foreground/80 mb-8">
            The MBBS course is structured into three key phases to help you gain both theoretical knowledge and clinical
            exposure:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { phase: "Pre-Clinical Phase", subjects: "Anatomy, Biochemistry, Physiology" },
              { phase: "Para-Clinical Phase", subjects: "Microbiology, Pharmacology, Pathology, Forensic Medicine" },
              {
                phase: "Clinical Phase",
                subjects:
                  "Internal Medicine, General Surgery, Paediatrics, Obstetrics & Gynaecology, Community Medicine",
              },
              { phase: "Internship", subjects: "12-month hospital rotation for hands-on patient care" },
            ].map((item, idx) => (
              <div key={idx} className="p-6 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                <h3 className="font-bold text-foreground text-lg mb-2">{item.phase}</h3>
                <p className="text-foreground/80">{item.subjects}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Curriculum
