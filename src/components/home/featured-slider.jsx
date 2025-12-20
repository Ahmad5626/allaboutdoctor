"use client"

import { useMemo, useRef, useState } from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css" // Keep core styles; visuals overridden by Tailwind

function ArrowIcon({ dir = "left", className = "" }) {
  const d = dir === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"
  return (
    <svg
      className={className}
      width="20"
      height="20"
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

// Data
const articles = [
  {
    title: "How All about doctor weathered the pandemic storm with 'soul searching' on Saturdays",
    logo: "https://lepublicassets.leverageedu.com/inTheNews/logo1.png",
    href: "#",
  },
  {
    title: "An Indian ed-tech helping students live out their study‑abroad dreams",
    logo: "https://lepublicassets.leverageedu.com/inTheNews/logo9.png",
    href: "#",
  },
  {
    title: "All about doctor ‘1‑1‑1 Guarantee’ for partners",
    logo: "https://lepublicassets.leverageedu.com/inTheNews/logo17.png",
    href: "#",
  },
  {
    title: "All about doctor launches 'Fly Homes': accommodation platform in the UK",
    logo: "https://lepublicassets.leverageedu.com/inTheNews/restOfWorld.png",
    href: "#",
  },
  {
    title: "Airbnb partners with All about doctor to promote short‑term stays for students",
    logo: "https://lepublicassets.leverageedu.com/inTheNews/logo1.png",
    href: "#",
  },
  {
    title: "UnivalleyOS streamlines the international student admission process",
    logo: "https://lepublicassets.leverageedu.com/inTheNews/logo9.png",
    href: "#",
  },
  {
    title: "All about doctor crosses key milestones in FY25",
    logo: "https://lepublicassets.leverageedu.com/inTheNews/logo17.png",
    href: "#",
  },
]

export default function FeaturedSlider() {
  const splideRef = useRef(null)
  const [fraction, setFraction] = useState({ curr: 1, total: articles.length })

  const options = useMemo(
    () => ({
      type: "loop",
      autoplay: true,
      interval: 3200,
      pauseOnHover: true,
      speed: 650,
      perMove: 1,
      autoWidth: true,
      gap: "1.25rem",
      padding: { left: "1rem", right: "1rem" },
      focus: "center",
      arrows: false,
      pagination: false,
      drag: "free",
      snap: true,
      keyboard: "global",
      trimSpace: true,
      breakpoints: {
        1024: { padding: { left: "0.75rem", right: "0.75rem" }, gap: "1rem" },
        640: { padding: { left: "0.5rem", right: "0.5rem" }, gap: "0.75rem" },
      },
    }),
    [],
  )

  function onMounted(splide) {
    splideRef.current = splide
    setFraction({ curr: 1, total: articles.length })
  }

  function onMoved(splide) {
    const base = ((splide.index % articles.length) + articles.length) % articles.length
    setFraction({ curr: base + 1, total: articles.length })
  }

  function goPrev() {
    splideRef.current?.go("<")
  }
  function goNext() {
    splideRef.current?.go(">")
  }

  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
          <p className="text-sm font-medium text-muted-foreground">In the Press</p>
          <h2 className="text-pretty text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Featured{" "}
            <span className="relative">
<span >Across</span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-1 left-0 h-2 w-full rounded-full bg-primary/20"
              />
            </span>
          </h2>
        </div>

          {/* Fraction + desktop arrows */}
          <div className="hidden items-center gap-3 md:flex">
            <span className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground shadow-sm">
              {fraction.curr} / {fraction.total}
            </span>
            <button
              onClick={goPrev}
              aria-label="Previous"
              className="rounded-full border border-border bg-card/70 p-2 text-foreground shadow-sm backdrop-blur transition hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowIcon dir="left" />
            </button>
            <button
              onClick={goNext}
              aria-label="Next"
              className="rounded-full border border-border bg-card/70 p-2 text-foreground shadow-sm backdrop-blur transition hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowIcon dir="right" />
            </button>
          </div>
        </div>

        {/* Track with edge fades and floating arrows on mobile */}
        <div className="relative">
          {/* left fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-background to-transparent md:w-16" />
          {/* right fade */}
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-background to-transparent md:w-16" />

          <Splide options={options} onMounted={onMounted} onMoved={onMoved} className="relative">
            {articles.map((item, idx) => {
              const wide = idx % 3 === 0 // alternate to create a more dynamic reel
              const widthClass = wide ? "w-[420px] md:w-[480px]" : "w-[300px] md:w-[360px]"
              return (
                <SplideSlide key={idx} className={`${widthClass}`}>
                  <article className="group relative h-full overflow-hidden rounded-3xl border border-border/70 bg-card/90 shadow-md transition-transform duration-300 hover:-translate-y-0.5">
                    {/* accent stripe */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-y-0 left-0 w-[6px] bg-gradient-to-b from-primary/90 via-primary/70 to-primary/40"
                    />
                    <div className="flex h-full flex-col p-5">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-border bg-background/70 shadow-sm">
                          <img
                            src={item.logo || "/placeholder.svg"}
                            alt="publisher logo"
                            className="h-6 w-6 object-contain opacity-90"
                            loading="lazy"
                          />
                        </div>
                        <span className="text-xs text-muted-foreground">Press</span>
                      </div>

                      <h3 className="text-pretty text-base font-semibold leading-relaxed md:text-lg line-clamp-3">
                        {item.title}
                      </h3>

                      <div className="mt-5 flex items-center justify-between">
                        <a
                          href={item.href}
                          className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground shadow-sm transition hover:bg-primary hover:text-primary-foreground"
                        >
                          Read more
                          <ArrowIcon dir="right" />
                        </a>
                        <div className="text-[11px] text-muted-foreground">Article</div>
                      </div>
                    </div>

                    {/* subtle glow */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-12 -z-10 opacity-0 blur-2xl transition duration-300 group-hover:opacity-40"
                      style={{
                        background: "radial-gradient(600px 80px at 10% 10%, hsl(var(--primary)/.25), transparent 60%)",
                      }}
                    />
                  </article>
                </SplideSlide>
              )
            })}
          </Splide>

          {/* Mobile arrows */}
          <div className="pointer-events-none absolute inset-x-0 bottom-2 z-10 flex items-center justify-between px-3 md:hidden">
            <button
              onClick={goPrev}
              aria-label="Previous"
              className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/80 text-foreground shadow-sm backdrop-blur transition hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowIcon dir="left" />
            </button>
            <span className="pointer-events-auto rounded-full border border-border bg-card/80 px-3 py-1 text-[11px] font-medium text-foreground shadow-sm backdrop-blur">
              {fraction.curr} / {fraction.total}
            </span>
            <button
              onClick={goNext}
              aria-label="Next"
              className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/80 text-foreground shadow-sm backdrop-blur transition hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowIcon dir="right" />
            </button>
          </div>
        </div>

        {/* View all */}
        <div className="mt-8 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-6 py-3 text-sm font-medium text-foreground shadow-sm transition hover:bg-primary hover:text-primary-foreground"
          >
            View All
          </a>
        </div>
      </div>
    </section>
  )
}
