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
    name: "Russia",
    image: "https://debright.org/wp-content/uploads/2025/02/University-of-Traditional-Medicine.jpg",
    flag: "/flag-of-egypt.jpg",
    title:"Globally recognized, affordable programs"
  },
  {
    name: "Kazakhstan ",
    image: "https://debright.org/wp-content/uploads/2025/02/Yerevan-Haybusak-University.jpg",
    flag: "/flag-of-georgia.jpg",
    title:" Modern infrastructure & clinical exposure"
  },
  {
    name: "Georgia ",
    image: "https://debright.org/wp-content/uploads/2025/03/vitebsk-state-medical-university.jpeg",
    flag: "/flag-of-kazakhstan.jpg",
    title:" European standards & safe student life"
  },
  {
    name: "Uzbekistan ",
    image: "https://debright.org/wp-content/uploads/2025/02/The-University-of-East-Sarajevo.jpg",
    flag: "/flag-of-kyrgyzstan.jpg",
    title:" English-medium teaching & lower fees "
  },
  {
    name: "Armenia ",
    image: "https://debright.org/wp-content/uploads/2025/02/University-of-Traditional-Medicine.jpg",
    flag: "/flag-of-latvia.jpg",
    title:" Historic universities with advanced labs "
  },
  {
    name: "Nepal ",
    image: "https://debright.org/wp-content/uploads/2025/02/Yerevan-Haybusak-University.jpg",
    flag: "/flag-of-lithuania.jpg",
    title:" Cultural proximity & NMC-approved colleges "
  }
  
]

export default function FeaturedSlider() {
  const splideRef = useRef(null)

  const options = useMemo(
    () => ({
      type: "loop",
      autoplay: true,
      interval: 3200,
      pauseOnHover: true,
      speed: 650,
      focus: "center",
      perPage: 3,
      perMove: 1,
      autoWidth: true,
      gap: "1.25rem",
      arrows: false,
      pagination: false,
      drag: "free",
      snap: true,
      breakpoints: {
        1280: { gap: "1rem" },
        1024: { gap: "1rem" },
        768: { perPage: 1, gap: "0.75rem" },
        480: { perPage: 1, gap: "0.5rem" },
      },
    }),
    [],
  )

  const go = (dir) => splideRef.current?.go(dir)

  return (
    <section className="w-full py-12 md:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <header className="mb-8 text-center md:mb-10">
          <h2 className="text-pretty text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Popular Study <span className="text-primary">Destinations?</span>
          </h2>
          <p className="mt-3 text-lg font-semibold text-muted-foreground md:text-xl">Explore your medical career across the globe</p>
        </header>

        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-background to-transparent md:w-16"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-background to-transparent md:w-16"
          />

          <button
            aria-label="Previous"
            onClick={() => go("<")}
            className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-border bg-card/80 p-3 text-foreground shadow-md backdrop-blur transition hover:bg-primary hover:text-primary-foreground md:left-4"
          >
            <ArrowIcon dir="left" />
          </button>
          <button
            aria-label="Next"
            onClick={() => go(">")}
            className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-border bg-card/80 p-3 text-foreground shadow-md backdrop-blur transition hover:bg-primary hover:text-primary-foreground md:right-4"
          >
            <ArrowIcon dir="right" />
          </button>

          <Splide options={options} ref={splideRef} className="coverflow" aria-label="Destinations coverflow slider">
            {destinations.map((d, i) => (
              <SplideSlide key={i} className="px-2">
                <article className="relative w-[240px] sm:w-[280px] md:w-[320px] overflow-hidden rounded-2xl border border-border bg-card/80 shadow-sm backdrop-blur">
                  <div className="flex flex-col items-center px-5 pb-6 pt-14">
                    {/* circular image with subtle radial glow */}
                    <div className="relative -mt-16 mb-4">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(0,0,0,0.06),transparent_60%)] blur-xl"
                      />
                      <div className="relative h-28 w-28 rounded-full bg-background p-1 ring-1 ring-border">
                        <div className="h-full w-full overflow-hidden rounded-full ring-4 ring-primary/20">
                          <img
                            src={d.image || "/placeholder.svg?height=200&width=200&query=destination-image"}
                            alt={d.name}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold">{d.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{d.title}</p>

                    <a
                      href="#"
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition hover:shadow-md"
                    >
                      Explore
                      <ArrowIcon dir="right" className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>

      <style jsx global>{`
        .coverflow .splide__slide {
          transition: transform 0.35s ease, opacity 0.35s ease;
          opacity: 0.65;
        }
        .coverflow .splide__slide.is-prev,
        .coverflow .splide__slide.is-next {
          transform: scale(0.92) translateY(6px);
          opacity: 0.85;
        }
        .coverflow .splide__slide.is-active {
          transform: scale(1.05) translateY(-6px);
          opacity: 1;
          z-index: 10;
        }
      `}</style>
    </section>
  )
}
