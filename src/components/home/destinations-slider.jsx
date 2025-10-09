"use client"

import { useRef } from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"

const destinations = [
  { name: "United States", img: "https://media.edvoy.com/USA-6fc23f01ca.jpg?w=1200&q=80" },
  { name: "United Kingdom", img: "https://media.edvoy.com/uk-study-destination-648d030605.jpg?w=1200&q=80" },
  { name: "Canada", img: "https://media.edvoy.com/Canada-study-destination2-0be1ef4a7c.jpg?w=1200&q=80" },
  { name: "Germany", img: "https://media.edvoy.com/Germany-study-destination-debb770d22.jpg?w=1200&q=80" },
  { name: "Ireland", img: "https://media.edvoy.com/Germany-study-destination-debb770d22.jpg?w=1200&q=80" },
  { name: "France", img: "https://media.edvoy.com/Dublin-Ireland-study-destination-9b9324269c.jpg?w=1200&q=80" },
  { name: "Australia", img: "https://media.edvoy.com/USA-6fc23f01ca.jpg?w=1200&q=80" },
  { name: "Japan", img: "https://media.edvoy.com/uk-study-destination-648d030605.jpg?w=1200&q=80" },
]

export default function DestinationsSlider() {
  const splideRef = useRef(null)

  const goPrev = () => splideRef.current?.splide?.go("<")
  const goNext = () => splideRef.current?.splide?.go(">")

  return (
    <section aria-labelledby="destinations-heading" className="relative isolate bg-background">
      {/* subtle radial background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_400px_at_50%_-150px,theme(colors.muted/0.25),transparent_60%)]" />

      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 py-12 md:py-16">
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="destinations-heading"
            className="text-pretty text-3xl md:text-4xl font-semibold text-foreground tracking-tight"
          >
            Explore popular study destinations
          </h2>
          <p className="mt-3 text-base md:text-lg text-muted-foreground">
            Find a country to learn and excel in all aspects of life
          </p>
        </header>

        <div className="relative mt-10 md:mt-12">
          <Splide
            ref={splideRef}
            aria-label="Popular study destinations slider"
            options={{
              type: "loop",
              autoplay: true,
              interval: 3500,
              pauseOnHover: true,
              gap: "1rem",
              // Desktop default: show many; then scale down on smaller screens
              perPage: 6,
              pagination: false,
              arrows: false,
              drag: "free",
              breakpoints: {
                1536: { perPage: 5 },
                1280: { perPage: 4 },
                1024: { perPage: 3 },
                768: { perPage: 2 },
                480: { perPage: 1 },
              },
            }}
            className="!pb-4"
          >
            {destinations.map((d) => (
              <SplideSlide key={d.name}>
                <article className="group">
                  <div className="rounded-2xl bg-card ring-1 ring-border shadow-sm overflow-hidden transition-shadow group-hover:shadow-md">
                    <img
                      src={d.img || "/placeholder.svg"}
                      alt={d.name}
                      className="h-[180px] w-full object-cover md:h-[200px] lg:h-[220px]"
                      crossOrigin="anonymous"
                    />
                  </div>
                  <h3 className="mt-3 text-center text-base md:text-lg font-medium text-foreground">{d.name}</h3>
                </article>
              </SplideSlide>
            ))}
          </Splide>

          {/* bottom controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-accent/40 transition"
              onClick={() => splideRef.current?.splide?.go(0)}
              aria-label="Show all destinations"
            >
              Show all
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M7 5l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="ml-auto flex items-center gap-3">
              <button
                type="button"
                aria-label="Previous"
                onClick={goPrev}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground hover:bg-accent/50 transition"
              >
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M12.5 15L7.5 10l5-5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={goNext}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground hover:bg-accent/50 transition"
              >
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M7.5 5l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
