"use client"

import { useMemo, useRef } from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"

// simple icon
function ArrowIcon({ dir = "left", className = "" }) {
  const d = dir === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  )
}

const destinations = [
  {
    name: "Egypt",
    image: "https://debright.org/wp-content/uploads/2025/02/University-of-Traditional-Medicine.jpg",
    flag: "https://debright.org/wp-content/uploads/2025/02/armenia-1.png",
  },
  {
    name: "Georgia",
    image: "https://debright.org/wp-content/uploads/2025/02/Yerevan-Haybusak-University.jpg",
    flag: "https://debright.org/wp-content/uploads/2025/02/Bosnia-and-Herzegovina.png",
  },
  {
    name: "Kazakhstan",
    image: "https://debright.org/wp-content/uploads/2025/03/vitebsk-state-medical-university.jpeg",
    flag: "https://debright.org/wp-content/uploads/2025/02/Kazakhstan.png",
  },
  {
    name: "Kyrgyzstan",
    image: "https://debright.org/wp-content/uploads/2025/02/The-University-of-East-Sarajevo.jpg",
    flag: "https://debright.org/wp-content/uploads/2025/03/latvia.png",
  },
  {
    name: "Latvia",
    image: "https://debright.org/wp-content/uploads/2025/02/University-of-Traditional-Medicine.jpg",
    flag: "https://debright.org/wp-content/uploads/2025/03/Malaysia_.png",
  },
  {
    name: "Lithuania",
    image: "https://debright.org/wp-content/uploads/2025/02/Yerevan-Haybusak-University.jpg",
    flag: "https://debright.org/wp-content/uploads/2025/02/Russia.png",
  },
  {
    name: "Uzbekistan",
    image: "https://debright.org/wp-content/uploads/2025/03/vitebsk-state-medical-university.jpeg",
    flag: "https://debright.org/wp-content/uploads/2025/03/Tajikistan.webp",
  },
  {
    name: "Poland",
    image: "https://debright.org/wp-content/uploads/2025/03/vitebsk-state-medical-university.jpeg",
    flag: "https://debright.org/wp-content/uploads/2025/02/Kazakhstan.png",
  },
]

export default function Destination() {
  const splideRef = useRef(null)

  const options = useMemo(
    () => ({
      type: "loop",
      autoplay: true,
      interval: 3500,
      pauseOnHover: true,
      speed: 600,
      perPage: 4,
      perMove: 1,
      gap: "1.25rem",
      arrows: false,
      pagination: true,
      drag: "free",
      snap: true,
      focus: 0,
      breakpoints: {
        1280: { perPage: 3, gap: "1rem" },
        1024: { perPage: 3, gap: "1rem" },
        768: { perPage: 2, gap: "0.75rem" },
        480: { perPage: 1, gap: "0.75rem" },
      },
    }),
    [],
  )

  const go = (dir) => splideRef.current?.go(dir)

  return (
    <section className="w-full py-10 md:py-14">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <header className="mb-8 text-center md:mb-10">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight md:text-5xl">
            Where Will You Study <span className="text-primary">MBBS?</span>
          </h2>
          <p className="mt-3 text-lg font-semibold text-muted-foreground md:text-xl">Explore Your Ideal Destination!</p>
        </header>

        <div className="relative">
          <button
            aria-label="Previous"
            onClick={() => go("<")}
            className="absolute left-[-14px] top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-border bg-card/80 p-3 text-foreground shadow-md backdrop-blur transition hover:bg-primary hover:text-primary-foreground md:inline-flex"
          >
            <ArrowIcon dir="left" />
          </button>
          <button
            aria-label="Next"
            onClick={() => go(">")}
            className="absolute right-[-14px] top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-border bg-card/80 p-3 text-foreground shadow-md backdrop-blur transition hover:bg-primary hover:text-primary-foreground md:inline-flex"
          >
            <ArrowIcon dir="right" />
          </button>

          <Splide options={options} ref={splideRef} className="relative" aria-label="MBBS destination slider">
            {destinations.map((d, i) => (
              <SplideSlide key={i} className="px-0.5">
                <article className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:shadow-md">
                  {/* Top image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={d.image || "/placeholder.svg"}
                      alt={d.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Badge overlap */}
                  <div className="relative">
                    <div className="absolute left-1/2 top-0 z-10 -translate-y-1/2 -translate-x-1/2">
                      <div className="h-16 w-16 overflow-hidden rounded-full ring-4 ring-card">
                        <img
                          src={d.flag || "/placeholder.svg"}
                          alt={`${d.name} flag`}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-6 pb-6 pt-10 text-center">
                      <h3 className="text-sm font-semibold tracking-[0.2em] md:text-base">{d.name.toUpperCase()}</h3>

                      <a
                        href="#"
                        className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition hover:bg-primary hover:text-primary-foreground"
                      >
                        Explore Now
                        <ArrowIcon dir="right" />
                      </a>
                    </div>
                  </div>
                </article>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </section>
  )
}
