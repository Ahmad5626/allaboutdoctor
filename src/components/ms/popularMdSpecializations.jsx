import React from 'react'

const PopularMsSpecializations = () => {
  const specializations = [
    {
      title: "MS in General Medicine",
      desc: "Advance your expertise in internal surgical procedures, diagnosis, and critical patient management.",
    },
    {
      title: "MS in Gynaecology",
      desc: "Specialize in women’s reproductive surgery, obstetrics, and advanced gynecological treatments.",
    },
    {
      title: "MS in Paediatrics",
      desc: "Focus on child health, neonatal surgeries, and pediatric disease management.",
    },
    {
      title: "MS in Dermatology",
      desc: "Learn surgical dermatology, cosmetic procedures, and skin repair treatments.",
    },
    {
      title: "MS in Radiology",
      desc: "Master interventional radiology and imaging-guided surgical techniques.",
    },
    {
      title: "MS in Anesthesiology",
      desc: "Develop surgical anesthesia expertise and perioperative patient care management.",
    },
    {
      title: "MS in Pathology",
      desc: "Specialize in surgical pathology, histopathology, and clinical diagnostics.",
    },
    {
      title: "MS in General Surgery",
      desc: "Train in complex surgical operations, trauma care, and post-operative management.",
    },
    {
      title: "MS in ENT (Otorhinolaryngology)",
      desc: "Focus on surgical treatments of the ear, nose, throat, and related structures.",
    },
  ]

  return (
    <section className="px-4 md:px-8 border-b border-primary/20">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-12">
        <h1
          className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
          style={{ animationDelay: "100ms" }}
        >
          Popular <span className="text-primary">MS Specializations</span>
        </h1>

        <p className="text-foreground/80 text-lg mb-8">
          Explore top MS programs available through our expert counselling support:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specializations.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-primary/10 shadow-sm hover:shadow-md transition-shadow bg-background"
            >
              <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-foreground/80 mb-3">{item.desc}</p>
              <button className="flex items-center text-primary font-medium hover:underline">
                ➡️ Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularMsSpecializations
