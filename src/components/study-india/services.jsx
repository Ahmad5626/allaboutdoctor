"use client"

import { useState } from "react"
import { Headphones, FileCheck, Stethoscope, BookOpen, Briefcase, GraduationCap, Plane } from "lucide-react"
import Link from "next/link"

const SERVICES = [
  {
    id: 1,
    title: "Counselling",
    description:
      "Expert one-on-one counselling sessions with our experienced doctors to guide you through your medical education journey and help you make informed decisions.",
    icon: Headphones,
    slug: "counselling",
  },
  {
    id: 2,
    title: "Admissions",
    description:
      "Complete assistance with NEET registration, college selection, document verification, and admission formalities across all medical colleges.",
    icon: FileCheck,
    slug: "admissions",
  },
  {
    id: 3,
    title: "Clinical Trainings",
    description:
      "Comprehensive guidance on clinical rotations, hands-on training, and practical exposure throughout your MBBS course.",
    icon: Stethoscope,
    slug: "clinical-trainings",
  },
  {
    id: 4,
    title: "Learning Hub",
    description:
      "Access to our comprehensive learning resources, study materials, video lectures, and interactive learning modules for medical education.",
    icon: BookOpen,
    slug: "learning-hub",
  },
  {
    id: 5,
    title: "Internships",
    description:
      "Support in securing internship opportunities and guidance for your mandatory internship year with mentorship from experienced doctors.",
    icon: Briefcase,
    slug: "internships",
  },
  {
    id: 6,
    title: "Preparations Coaching",
    description:
      "Expert coaching for NEET-UG, NEET-PG, and other medical entrance exams with personalized study plans and mock tests.",
    icon: GraduationCap,
    slug: "preparations-coaching",
  },
  {
    id: 7,
    title: "Medical Tourism",
    description:
      "Assistance for international students seeking MBBS education in India with visa support, accommodation, and cultural orientation.",
    icon: Plane,
    slug: "medical-tourism",
  },
]

export default function Services() {
  const [hoveredService, setHoveredService] = useState(null)

  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-16">
        <div className="space-y-4">
          <h1  className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}>
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Comprehensive support for your medical education journey from counselling to career guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
          {SERVICES.map((service , index) => {
            const IconComponent = service.icon
            return (
              <Link href={`/services/${service.slug}`}
                key={index}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className={`p-6 border rounded-lg transition-all duration-300 cursor-pointer ${
                  hoveredService === service.id ? "border-primary shadow-lg" : "border-border hover:border-primary/50"
                }`}
              >
                <div className="space-y-4">
                  <div
                    className={`w-12 h-12 rounded-lg border border-border flex items-center justify-center ${
                      hoveredService === service.id ? "border-primary bg-primary/5" : ""
                    }`}
                  >
                    <IconComponent
                      className={`w-6 h-6 ${hoveredService === service.id ? "text-primary" : "text-muted-foreground"}`}
                    />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg text-foreground">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>

                  {hoveredService === service.id && (
                    <button className="text-sm text-primary font-medium hover:underline pt-2">Learn more →</button>
                  )}
                </div>
              </Link>
            )
          })}
        </div>

        <div className="border border-border rounded-lg p-8 text-center space-y-4 my-6">
          <h3 className="text-2xl font-bold text-foreground">Ready to Start Your Medical Journey?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connect with our expert counselors today and get personalized guidance for your MBBS admission in India.
          </p>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
