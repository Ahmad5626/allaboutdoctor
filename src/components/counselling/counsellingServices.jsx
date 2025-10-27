"use client"

import { useState } from "react"
import { ChevronDown, CheckCircle2, MessageSquare, BookOpen, Plane, Users } from "lucide-react"

const counsellingServices = () => {
     const [expandedFaq, setExpandedFaq] = useState(0)
      const [openIdx, setOpenIdx] = useState(null)
     const features = [
    {
      icon: Users,
      title: "Personalized Career Guidance",
      description:
        "Our experienced counsellors assess your academic profile, interests, and career goals to suggest the best medical destinations and universities for you.",
    },
    {
      icon: BookOpen,
      title: "Country & University Selection",
      description:
        "We provide clear comparisons of global medical universities based on recognition, affordability, curriculum, and future opportunities — helping you choose the right fit.",
    },
    {
      icon: MessageSquare,
      title: "Application Planning & Timeline Management",
      description:
        "From understanding eligibility requirements to tracking application deadlines, we guide you at every stage for a smooth, stress-free admission process.",
    },
    {
      icon: Plane,
      title: "Pre-Departure Counselling",
      description:
        "We prepare students for life abroad, covering academics, culture, finances, and travel arrangements, ensuring a confident start to your medical education journey.",
    },
  ]

  const benefits = [
    {
      title: "Expert Advice from Medical Professionals",
      description: "Receive guidance from doctors and education specialists.",
    },
    {
      title: "Ethical & Transparent Guidance",
      description: "No hidden costs, no false promises.",
    },
    {
      title: "Customized Roadmap for Success",
      description: "Tailored advice based on your profile, budget, and goals.",
    },
    {
      title: "Continuous Support",
      description: "From first consultation to settling in at your chosen university.",
    },
  ]

  const successPoints = [
    "Choose the right university and country confidently.",
    "Avoid common pitfalls in applications and admissions.",
    "Plan finances and scholarships effectively.",
    "Gain clarity on licensing exams like FMGE/NExT and international equivalency exams.",
  ]

  const faqs = [
    {
      question: "Who can benefit from counselling services?",
      answer: "Any student aspiring to study MBBS or medical courses abroad can benefit from our guidance.",
    },
    {
      question: "How personalized is the counselling?",
      answer:
        "Each student receives one-on-one sessions tailored to their academic profile, career goals, and financial situation.",
    },
    {
      question: "Do you provide support after admission?",
      answer:
        "Yes, our counselling extends to pre-departure guidance, accommodation advice, and mentorship while studying abroad.",
    },
  ]
  return (
    <div>
        {/* Features Section */}
      <section className="py-16 md:py-16 md:px-8 ">
        <div className="max-w-7xl mx-auto  px-6 ">
          <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}>Our Counselling <span className="text-primary">Services</span> </h1>
          <p className="text-foreground/60 mb-12 text-lg">
            Comprehensive guidance at every step of your medical education journey
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="p-6 border-l-4 border-primary bg-background hover:shadow-lg transition rounded-lg"
                >
                  <div className="flex items-start gap-4">
                    <Icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-16 px-4 md:px-8 ">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}>
            Benefits of Choosing Our <span className="text-primary">Counselling Services</span> 
          </h1>
          <p className="text-foreground/60 mb-12 text-lg">Why students trust us for their medical education journey</p>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
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

      {/* How It Helps Section */}
      <section className="py-16 md:py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}>
            How Counselling Helps <span className="text-primary">You Succeed</span> 
          </h1>
          <p className="text-foreground/60 mb-12 text-lg">
            Achieve your medical education goals with our expert guidance
          </p>

          <div className="space-y-4">
            {successPoints.map((point, index) => (
              <div key={index} className="flex gap-4 p-4 border-l-4 border-primary bg-primary/5 rounded">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  {index + 1}
                </div>
                <p className="text-foreground/80 pt-1">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 md:py-16 px-4 md:px-8 ">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}>
            Frequently Asked <span className="text-primary">Questions</span> 
          </h1>
          <p className="text-foreground/60 mb-12 text-lg">
            Get answers to common questions about our counselling services
          </p>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-border rounded-lg overflow-hidden  transition-colors"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? -1 : idx)}
                  className="w-full p-6 flex items-center justify-between  transition text-left"
                >
                  <h3 className="font-semibold text-foreground pr-4">{faq.question}</h3>
                  <span
                  className={`text-primary text-xl flex-shrink-0 transition-transform ${openIdx === idx ? "rotate-180" : ""}`}
                >
                  ▼
                </span>
                  
                </button>
                {expandedFaq === idx && (
                  <div className="p-6  border-t ">
                    <p className="text-foreground/70 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Begin Your Counselling Journey</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Take the first step toward your dream of becoming a global doctor. Schedule your free counselling session
            with All About Doctor Education Pvt Ltd today and get a clear roadmap for your medical career.
          </p>
          <button className="px-8 py-4 bg-white text-primary rounded-lg font-bold hover:scale-105 transition text-lg">
            Book Your Free Counselling Session
          </button>
        </div>
      </section>
    </div>
  )
}

export default counsellingServices
