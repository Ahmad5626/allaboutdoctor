"use client"

import { useEffect, useRef } from "react"

export default function TestimonialsSection() {
  const splideRef = useRef(null)

  useEffect(() => {
    const init = async () => {
      const { Splide } = await import("@splidejs/splide")
      await import("@splidejs/splide/css")

      if (splideRef.current) {
        new Splide(splideRef.current, {
          type: "loop",
          perPage: 2,
          gap: "1.5rem",
          arrows: true,
          pagination: false,
          autoplay: true,
          interval: 5000, // ⏳ slower
          pauseOnHover: true,
          breakpoints: {
            1024: { perPage: 1 },
            640: {
              perPage: 1,
              arrows: false, // 📱 hide arrows
            },
          },
        }).mount()
      }
    }

    init()
  }, [])

  const testimonials = [
    {
      id: 1,
      text: "All About Doctor helped me secure a top MBBS college in India. Truly supportive and professional!",
      name: " Rohan Sharma",
      role: "MBBS Student, ",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      text: "Their guidance made my MBBS abroad admission completely smooth. Highly recommended!",
      name: " Priya Verma",
      role: "Medical Aspirant",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      text: "All procedures for MBBS abroad became easy with their expert guidance.",
      name: "Rahul Mehta",
      role: "Parent",
      avatar: "https://randomuser.me/api/portraits/men/51.jpg",
    },
    {
      id: 4,
      text: "From eligibility to fees, they clarified everything. Amazing support for MBBS admissions!",
      name: " Ankit Gupta",
      role: "MBBS Student, Kazakhstan",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },

     {
      id: 5,
      text: "Best MBBS counselling for India and abroad. Thanks to their team, I got my dream course!",
      name: " Sneha Kapoor",
      role: "MBBS Student, ",
      avatar: "https://randomuser.me/api/portraits/women/67.jpg",
    },

       {
      id: 6,
      text: "Proper guidance for MBBS in India and excellent follow-up. Very satisfied!",
      name: "  Neha Singh",
      role: "MBBS Student, ",
      avatar: "https://randomuser.me/api/portraits/women/69.jpg",
    },

      {
      id: 7,
      text: "They provided a complete roadmap for MBBS abroad. Confidently pursuing my dream now!",
      name: "   Vikram Joshi ",
      role: "MBBS Student, ",
      avatar: "https://randomuser.me/api/portraits/man/69.jpg",
    },
  ]

  return (
    <section className="bg-primary py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-white text-center lg:text-left">
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer">
              Trusted by Students <br className="hidden sm:block" />
              & Parents Across India
            </h2>

            <p className="text-sm md:text-base text-blue-100 leading-relaxed mt-4 md:mt-6 max-w-xl mx-auto lg:mx-0">
              Real experiences from students who achieved their dream
              of studying MBBS abroad with All About Doctor.
            </p>
          </div>

          {/* RIGHT SLIDER */}
          <div ref={splideRef} className="splide w-full max-w-full mx-auto">
            <div className="splide__track">
              <ul className="splide__list">
                {testimonials.map((item) => (
                  <li key={item.id} className="splide__slide">
                    <div className="bg-white rounded-xl p-5 md:p-6 shadow-lg h-auto">
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-5">
                        “{item.text}”
                      </p>

                      <div className="flex items-center gap-4">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="w-11 h-11 md:w-12 md:h-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm md:text-base">
                            {item.name}
                          </h4>
                          <p className="text-xs md:text-sm text-gray-500">
                            {item.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
