import { Building2, Globe, GraduationCap, Microscope, Stethoscope } from "lucide-react"

// Career Opportunities Section
export  default function CareerAfterMBBSLucknow() {
  const careers = [
    {
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      title: "MD/MS specialization",
    },
    {
      icon: <Building2 className="w-8 h-8 text-primary" />,
      title: "Government or private hospital roles",
    },
    {
      icon: <Microscope className="w-8 h-8 text-primary" />,
      title: "Teaching & academic research",
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "International licensing exams (USMLE, PLAB, AMC, DHA, HAAD)",
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-primary" />,
      title: "Clinical practice & entrepreneurship",
    },
  ]

  return (
    <section className="px-4 md:px-8 border-b border-primary/20">
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <h1
          className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up mb-8"
          style={{ animationDelay: "100ms" }}
        >
          Career Opportunities After <span className="text-primary">MBBS in Lucknow</span>
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {careers.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-primary/20 shadow-sm p-6 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <p className="text-foreground/80 text-lg font-medium leading-snug">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}