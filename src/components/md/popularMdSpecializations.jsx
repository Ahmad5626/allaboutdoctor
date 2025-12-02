import React from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link';

const PopularMdSpecializations = () => {
const specializations = [
  {
    title: "MD in General Medicine",
    slug: "general-medicine",
    url: "/courses/md/general-medicine",
    desc: "Develop deep clinical expertise in internal medicine — focusing on diagnosis, treatment, and prevention of adult diseases.",
  },
  {
    title: "MD in Gynaecology",
    slug: "gynaecology",
    url: "/courses/md/gynaecology",
    desc: "Specialize in women’s reproductive health, pregnancy care, and advanced gynaecological surgery.",
  },
  {
    title: "MD in Paediatrics",
    slug: "paediatrics",
    url: "/courses/md/paediatrics",
    desc: "Gain expertise in child health, neonatology, and paediatric disease management.",
  },
  {
    title: "MD in Dermatology",
    slug: "dermatology",
    url: "/courses/md/dermatology",
    desc: "Study skin, hair, and nail diseases with exposure to cosmetic dermatology and clinical procedures.",
  },
  {
    title: "MD in Radiology",
    slug: "radiology",
    url: "/courses/md/radiology",
    desc: "Master diagnostic imaging techniques including MRI, CT, and Ultrasound to aid in precise medical evaluation.",
  },
  {
    title: "MD in Respiratory Medicine",
    slug: "respiratory-medicine",
    url: "/courses/md/respiratory-medicine",
    desc: "Specialize in pulmonary diseases, asthma, tuberculosis, and critical respiratory care.",
  },
  {
    title: "MD in Anesthesiology",
    slug: "anesthesiology",
    url: "/courses/md/anesthesiology",
    desc: "Learn perioperative patient management, anesthesia techniques, and pain medicine.",
  },
  {
    title: "MD in Pathology",
    slug: "pathology",
    url: "/courses/md/pathology",
    desc: "Focus on disease mechanisms, laboratory diagnostics, and medical research methodologies.",
  },
  {
    title: "MD in Emergency Medicine",
    slug: "emergency-medicine",
    url: "/courses/md/emergency-medicine",
    desc: "Train for fast-paced, critical care environments — managing trauma, cardiac, and life-threatening emergencies.",
  },
  {
    title: "MD in General Surgery",
    slug: "general-surgery",
    url: "/courses/md/general-surgery",
    desc: "Gain surgical expertise through advanced operative techniques and patient management practices.",
  },
  {
    title: "MD in ENT (Otorhinolaryngology)",
    slug: "ent-otorhinolaryngology",
    url: "/courses/md/ent-otorhinolaryngology",
    desc: "Specialize in the treatment and surgery of ear, nose, throat, and related head-neck conditions.",
  },
];



  return (
    <section className="px-4 md:px-8 border-b border-primary/20">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-12">
        <h1
          className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
          style={{ animationDelay: "100ms" }}
        >
          Popular <span className="text-primary">MD Specializations</span>
        </h1>

        <p className="text-foreground/80 text-lg mb-8">
          Explore top MD programs available through our counselling support:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specializations.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-primary/10 shadow-sm hover:shadow-md transition-shadow bg-background"
            >
              <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-foreground/80 mb-3">{item.desc}</p>
              <Link href={item.url} className="flex items-center text-primary font-medium hover:underline">
                ➡️ Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularMdSpecializations
