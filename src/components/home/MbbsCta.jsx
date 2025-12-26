"use client"

import { useEffect, useRef, useState } from "react"
import { Eye, Handshake, Award, MessageCircle, GraduationCap, Globe, Users } from "lucide-react"
import Link from "next/link"

const stats = [
  { value: 850, label: "Partner Universities", icon: GraduationCap, color: "blue" },
  { value: 12, label: "Countries", icon: Globe, color: "yellow" },
  { value: 10000, label: "Students Guided", icon: Users, color: "red" },
  { value: 12, label: "Our Branches", icon: Users, color: "blue" },
]

function CounterCard({ value, label, icon: Icon }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.4 },
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return

    let start = 0
    const duration = 2000
    const increment = value / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [started, value])

  return (
  <div
  ref={ref}
  className="
    relative flex flex-col items-center justify-center
    rounded-2xl
    bg-gradient-to-br from-[#f5fbff] to-[#eaf6ff]
    border border-blue-200/50
    px-8 py-8
    text-center
    shadow-[0_10px_30px_rgba(0,120,255,0.08)]
    transition-all duration-300
    hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,120,255,0.15)]
  "
>
  {/* Up to */}
  <p className="text-sm text-gray-400 mb-2">
    Up to
  </p>

  {/* Value */}
  <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0b3ea8]">
    {count}+
  </h3>

  {/* Label */}
  <p className="mt-3 text-sm font-medium text-gray-600">
    {label}
  </p>

  {/* Decorative Icon */}
  <div className="absolute bottom-5 right-5 opacity-20">
    <Icon className="h-12 w-12 text-[#0b3ea8]" />
  </div>
</div>
  )
}

export default function MbbsCta() {
  const ref = useRef(null)
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 30 - 15,
        y: (e.clientY / window.innerHeight) * 30 - 15,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const revealElements = ref.current?.querySelectorAll(".reveal")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("show")
            }, index * 100)
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    )

    revealElements?.forEach((el) => observer.observe(el))

    return () => {
      revealElements?.forEach((el) => observer.unobserve(el))
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show")
          } else {
            entry.target.classList.remove("show")
          }
        })
      },
      { threshold: 0.2 },
    )

    document.querySelectorAll(".fade-item").forEach((item) => {
      observer.observe(item)
    })
  }, [])

  const parallaxOffset = scrollY * 0.5
  const rotateOffset = scrollY * 0.1

  return (
    <section
      ref={ref}
      className="relative py-10 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 text-gray-900 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-96 h-96 bg-blue-300/15 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            animation: "float 8s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute -bottom-32 right-10 w-full h-96 bg-cyan-300/10 rounded-full blur-3xl"
          style={{
            transform: `translateY(${parallaxOffset * 0.3}px)`,
            animation: "float 10s ease-in-out infinite reverse",
          }}
        ></div>
        <div
          className="absolute top-1/2 -left-40 w-80 h-80 bg-blue-400/8 rounded-full blur-3xl"
          style={{
            transform: `translateY(${parallaxOffset * 0.6}px) rotate(${rotateOffset}deg)`,
            animation: "pulse-slow 6s ease-in-out infinite",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* LEFT CONTENT */}

          <div className="reveal opacity-0 translate-y-16 transition-all duration-900 ease-out hidden lg:flex items-center justify-center">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100 backdrop-blur-sm border border-blue-200 flex items-center justify-center">
             <img
                src="/assets/img/leader.jpeg"
                alt="Dr. Anand Sharma — Founder & Managing Director"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-8 flex flex-col justify-center">
            <div
              className="reveal opacity-0 translate-y-16 transition-all duration-900 ease-out"
              style={{ transform: `translateY(${Math.max(0, 80 - scrollY / 4)}px)` }}
            >
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Introducing India's leading medical education Platform
              </h2>

              <p className="text-base text-gray-700 leading-relaxed mt-6 font-light">
                Founded in <span className="font-semibold text-gray-900">2015</span>, India's most trusted medical
                education consultancy.
              </p>

              <p className="text-base text-gray-700 leading-relaxed font-light">
                We help students pursue <span className="font-semibold text-gray-900">MBBS, MD, MS</span> degrees from
                top universities globally and 50+ expirenced doctors
              </p>
            </div>

            <div
              className="reveal opacity-0 translate-y-16 transition-all duration-900 ease-out"
              style={{ transitionDelay: "100ms" }}
            >
              <div className="flex flex-wrap gap-6 text-gray-700">
                <span className="flex items-center gap-2 group cursor-pointer fade-item">
                  <Eye className="h-5 text-blue-600 group-hover:text-blue-700 transition-colors" />
                  <span className="group-hover:text-gray-900 transition-colors">Transparency</span>
                </span>
                <span className="flex items-center gap-2 group cursor-pointer fade-item">
                  <Handshake className="h-5 text-blue-600 group-hover:text-blue-700 transition-colors" />
                  <span className="group-hover:text-gray-900 transition-colors">Integrity</span>
                </span>
                <span className="flex items-center gap-2 group cursor-pointer fade-item">
                  <Award className="h-5 text-blue-600 group-hover:text-blue-700 transition-colors" />
                  <span className="group-hover:text-gray-900 transition-colors">Excellence</span>
                </span>
                <span className="flex items-center gap-2 group cursor-pointer fade-item">
                  <MessageCircle className="h-5 text-blue-600 group-hover:text-blue-700 transition-colors" />
                  <span className="group-hover:text-gray-900 transition-colors">24/7 Support</span>
                </span>
              </div>
            </div>

            <div
              className="reveal opacity-0 translate-y-16 transition-all duration-900 ease-out"
              style={{ transitionDelay: "200ms" }}
            >
              <h3 className="text-lg font-bold text-blue-600 mb-3">Leadership</h3>
              <p className="text-gray-700 font-light">
                <span className="font-semibold text-gray-900 text-base">Dr. Anand Sharma</span> — Founder & Managing
                Director
              </p>

               <p className="text-gray-700 font-light py-2">
                <span className="font-semibold text-gray-900 text-base">Ms. Deeksha Bhargava</span> —Co-Founder & CEO
              </p>
            </div>

            <div
              className="reveal opacity-0 translate-y-16 transition-all duration-900 ease-out"
              style={{ transitionDelay: "300ms" }}
            >
              <Link
                href="/about-allaboutdoctor"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:shadow-blue-400/40 transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Read More
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>

          
        </div>

        <div className="mt-16 pt-16 border-t border-blue-200/50">
         
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((item, index) => (
              <CounterCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .reveal {
          opacity: 0;
          transform: translateY(64px);
        }

        .show {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.1;
          }
        }

        .fade-item {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease-out;
        }

        .fade-item.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  )
}
