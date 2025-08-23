"use client"

import { useEffect, useRef } from "react"

export default function TestimonialsSection() {
  const splideRef = useRef(null)

  useEffect(() => {
    const loadSplide = async () => {
      const { Splide } = await import("@splidejs/splide")
      await import("@splidejs/splide/css")

      if (splideRef.current) {
        new Splide(splideRef.current, {
          type: "loop",
          perPage: 2,
          perMove: 1,
          gap: "2rem",
          arrows: false,
          pagination: false,
          breakpoints: {
            768: {
              perPage: 1,
            },
          },
        }).mount()
      }
    }

    loadSplide()
  }, [])

  const testimonials = [
    {
      id: 1,
      text: "User-friendly interface makes finding local businesses a breeze. Highly recommend for services or products nearby.",
      name: "Jennifer Lee",
      role: "Freelance Photographer",
      avatar: "https://i.pravatar.cc/300",
    },
    {
      id: 2,
      text: "Comprehensive listings with detailed information and reviews help in making informed decisions. A must-use for discovering trusted local businesses.",
      name: "Michael Collins",
      role: "Marketing Manager",
      avatar: "https://i.pravatar.cc/300",
    },
    {
      id: 3,
      text: "Amazing platform that connects you with quality service providers. The review system is incredibly helpful for making the right choice.",
      name: "Sarah Johnson",
      role: "Small Business Owner",
      avatar: "https://i.pravatar.cc/300",
    },
    {
      id: 4,
      text: "Outstanding service and easy navigation. Found exactly what I was looking for within minutes. Definitely my go-to platform now.",
      name: "David Wilson",
      role: "Event Coordinator",
      avatar: "https://i.pravatar.cc/300",
    },
  ]

  const nextSlide = () => {
    if (splideRef.current && splideRef.current.splide) {
      splideRef.current.splide.go("+1")
    }
  }

  const prevSlide = () => {
    if (splideRef.current && splideRef.current.splide) {
      splideRef.current.splide.go("-1")
    }
  }

  return (
    <section className="py-16 px-4 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-pink-200 rounded-full opacity-50 -translate-x-8 -translate-y-8"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 border-2 border-gray-300 rounded-full opacity-30 translate-x-4 translate-y-4"></div>
      <div className="absolute top-1/2 right-0 w-16 h-16 border-2 border-gray-300 rounded-full opacity-30 translate-x-8"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-green-200 rounded-full opacity-50 translate-x-4 translate-y-4"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Title and Testimonials */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                What Clients Say About
                <br />
                Bulistio Packages
              </h2>

             
            </div>

            {/* Testimonials Slider */}
            <div ref={splideRef} className="splide">
              <div className="splide__track">
                <ul className="splide__list">
                  {testimonials.map((testimonial) => (
                    <li key={testimonial.id} className="splide__slide">
                      <div className="bg-white p-6 rounded-lg">
                        <div className="text-coral-500 text-6xl mb-4 font-serif">"</div>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">{testimonial.text}</p>
                        <div className="flex items-center gap-4">
                          <img
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                            <p className="text-gray-500 text-sm">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right side - Hero Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-coral-500 rounded-2xl p-8 lg:p-12">
              <img
                src="https://i.pravatar.cc/300"
                alt="Happy client making OK gesture"
                className="w-full h-auto max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
