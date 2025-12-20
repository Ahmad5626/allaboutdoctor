"use client"

import { useEffect, useRef, useState } from "react"
import { Eye, Handshake, Award, HandHelping, MessageCircle,GraduationCap, Globe, Users } from "lucide-react"
import Link from "next/link"

const stats = [
  {
    value: 850,
    label: "Partner Universities",
    icon: GraduationCap,
  },
  {
    value: 12,
    label: "Countries",
    icon: Globe,
  },
  {
    value: 10000,
    label: "Students Guided",
    icon: Users,
  },
  
];



function CounterCard({ value, label, icon: Icon }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  /* 👀 Detect when card enters viewport */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [started]);

  /* ▶️ Start counter only when visible */
  useEffect(() => {
    if (!started) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [started, value]);

  return (
    <div
      ref={ref}
      className="flex min-w-[260px] items-center justify-between rounded-2xl bg-white/10 px-6 py-5 backdrop-blur-md shadow-lg"
    >
      {/* Left */}
      <div>
        <h3 className="text-4xl font-bold text-white">
          {count}+
        </h3>
        <p className="mt-1 text-sm text-white/80">{label}</p>
      </div>

      {/* Right Icon */}
      <div className="flex h-12 w-12 items-center justify-center rounded-full ">
        <Icon className="h-8 w-8 text-secondary" />
      </div>
    </div>
  );
}
export default function MbbsCta() {
  const ref = useRef(null)
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
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
        entry.target.classList.add("show");
      } else {
        // REMOVE on scroll out → animation repeats every time
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.2, // 20% visible → animate
  }
);

document.querySelectorAll(".fade-item").forEach((item) => {
  observer.observe(item);
});
}, []);
  const parallaxOffset = scrollY * 0.5
  const rotateOffset = scrollY * 0.1



  

  return (
    <section
      ref={ref}
      className="relative pt-6 pb-24  bg-gradient-to-br from-primary via-primary to-[#0d1929] text-white overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-10 left-10 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            animation: "float 6s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute -bottom-40 right-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"
          style={{
            transform: `translateY(${parallaxOffset * 0.3}px) translate(${-mousePosition.x * 0.5}px, ${-mousePosition.y * 0.5}px)`,
            animation: "float 8s ease-in-out infinite reverse",
          }}
        ></div>
        <div
          className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-600/8 rounded-full blur-3xl"
          style={{
            transform: `translateY(${parallaxOffset * 0.6}px) rotate(${rotateOffset}deg)`,
            animation: "pulse-slow 5s ease-in-out infinite",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 ">
        {/* LEFT CONTENT */}
        <div className="space-y-8">
          <div
            className="reveal opacity-0 translate-y-16 transition-all duration-900 ease-out"
            style={{ transform: `translateY(${Math.max(0, 80 - scrollY / 4)}px)` }}
          >
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer">
             Introducing India's leading medical education Platform
            </h2>

            <h3 className="text-base text-blue-100 leading-relaxed mt-6 font-light">
              Founded in <span className="font-semibold text-white">2015</span>, India's most trusted medical
              education consultancy.
            </h3>

            <h3 className="text-base text-blue-100 leading-relaxed font-light">
              We help students pursue <span className="font-semibold text-white">MBBS, MD, MS</span> degrees from
              top universities globally.
            </h3>
          </div>

          <div
            className="reveal opacity-0 translate-y-16 transition-all duration-900 ease-out"
            style={{ transitionDelay: "100ms" }}
          >
            <div className="flex flex-wrap gap-8 text-blue-100 fade-section" >
              <span className="flex items-center gap-2 group cursor-pointer fade-item">
                <Eye className="h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <span className="group-hover:text-cyan-300 transition-colors">Transparency</span>
              </span>
              <span className="flex items-center gap-2 group cursor-pointer fade-item">
                <Handshake className="h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <span className="group-hover:text-cyan-300 transition-colors">Integrity</span>
              </span>
              <span className="flex items-center gap-2 group cursor-pointer fade-item">
                <Award className="h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <span className="group-hover:text-cyan-300 transition-colors">Excellence</span>
              </span>
                <span className="flex items-center gap-2 group cursor-pointer fade-item">
                <MessageCircle  className="h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <span className="group-hover:text-cyan-300 transition-colors">24/7 Support</span>
              </span>
            </div>
          </div>

          <div
            className="reveal opacity-0 translate-y-16 transition-all duration-900 ease-out"
            style={{ transitionDelay: "200ms" }}
          >
            <h3 className="text-xl font-bold text-cyan-300 mb-2">Leadership</h3>
            <p className="text-blue-100 font-light">
              <span className="font-semibold text-white">Dr. Anand Sharma</span> — Founder & Managing Director
            </p>

            <img src="" alt="" />
          </div>

          <div
            className="reveal opacity-0 translate-y-16 transition-all duration-900 ease-out"
            style={{ transitionDelay: "300ms" }}
          >
            <Link href="/about-allaboutdoctor" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-110 active:scale-95 animate-button-entrance">
              Read More
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>

        {/* RIGHT CARDS */}
 <div className="mt-10 flex flex-wrap gap-6 animate-fade-up">
      {stats.map((item, index) => (
        <CounterCard key={index} {...item} />
      ))}
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

        /* Added new entrance and scroll animations */
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.2;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        @keyframes button-entrance {
          0% {
            transform: scale(0.95) translateY(20px);
            opacity: 0;
          }
          100% {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
        }

        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }

        .animate-button-entrance {
          animation: button-entrance 0.8s ease-out forwards;
        }

        .show .animate-button-entrance {
          animation: button-entrance 0.8s ease-out;
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
