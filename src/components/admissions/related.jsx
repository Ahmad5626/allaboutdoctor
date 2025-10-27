import React from 'react'
import { ChevronDown, CheckCircle2, MessageSquare, BookOpen, Plane, Users } from "lucide-react"
const Related = () => {
     const relate = [
    {
      title: "Counselling Services – Personalized career guidance and destination planning",
    
    },
    {
      title: "Clinical Trainings – Hands-on practical exposure abroad",
      
    },
    {
      title: "Learning Hub – Online learning resources and lectures",
     
    },
    {
      title: "Internships – Gain real-world experience in hospitals",
    
    },
    {
      title: "Preparations & Coaching – FMGE/NExT and international exam support",
    
    },
  ]
  return (
   <div>
        {/* Benefits Section */}
      <section className="py-16 md:py-16 px-4 md:px-8 ">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}>
            Related Services You Might Be <span className="text-primary">Interested In</span> 
          </h1>
          <p className="text-foreground/60 mb-12 text-lg">Why students trust us for their medical education journey</p>

          <div className="grid md:grid-cols-2 gap-6">
            {relate.map((benefit, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 border border-secondary/20 rounded-lg hover:border-primary/50 transition"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-foreground/70">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Related
