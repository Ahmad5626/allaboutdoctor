"use client"

import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"

const steps = [
  {
    number: 1,
    title: "Apply",
    desc: "We are connected to several NMC-approved universities and guide our candidates to get admission.",
    icon: "/assets/img/work/work-1.png",
  },
  {
    number: 2,
    title: "Receive Offer",
    desc: "As you finish your MBBS course, we guide you ahead for further studies.",
    icon: "/assets/img/work/work-2.png",
  },
  {
    number: 3,
    title: "Accept and Pay",
    desc: "We help you manage tuition fees, food expenses, and air tickets.",
    icon: "/assets/img/work/work-3.png",
  },
  {
    number: 4,
    title: "Invitation Letter",
    desc: "Our faculty checks your educational details and helps find the right university.",
    icon: "/assets/img/work/work-4.png",
  },
  {
    number: 5,
    title: "Apply for Visa",
    desc: "We assist you with course details and guide you to apply for a visa.",
    icon: "/assets/img/work/work-5.png",
  },
  {
    number: 6,
    title: "Ready to Fly",
    desc: "We help you book flight tickets and find accommodations near the university.",
    icon: "/assets/img/work/work-6.png",
  },
  {
    number: 7,
    title: "Pay Tuition Fee & Hostel",
    desc: "We are connected to NMC-approved universities and guide our candidates to get admission.",
    icon: "/assets/img/work/work-7.png",
  },
];


function StepCard({ step }) {
  return (
    <article
      className="group relative h-full rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
      aria-label={`Step ${step.number}: ${step.title}`}
    >
      {/* Number badge */}
      <div className="absolute -top-3 -left-3 rounded-md bg-muted px-2 py-1 text-xs font-semibold text-foreground shadow">
        {step.number.toString().padStart(2, "0")}
      </div>

      {/* Icon */}
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-muted/70 ring-1 ring-border">
        <img src={step.icon || "/placeholder.svg"} alt="" className="h-8 w-8" aria-hidden="true" />
      </div>

      {/* Title */}
      <h3 className="mb-2 text-lg font-semibold tracking-tight text-foreground">{step.title.toUpperCase()}</h3>

      {/* Copy */}
      <p className="text-sm leading-relaxed text-muted-foreground">{step.desc}</p>

      {/* Hover accent line */}
      <span className="pointer-events-none absolute inset-x-0 -bottom-px block h-px scale-x-0 bg-foreground/20 transition-transform duration-300 ease-out group-hover:scale-x-100" />
    </article>
  )
}

export default function HowWeWork() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-16">
      {/* Soft radial backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,hsl(0_0%_98%/_0.9),transparent_60%)]"
      />

      <header className="mx-auto mb-10 max-w-3xl text-center">
        <h2 className="text-pretty text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
          How <span className="text-primary">We Work</span>
        </h2>
        <p className="mt-3 text-balance text-sm leading-relaxed text-muted-foreground md:text-base">
          A clear, student‑first process from application to arrival.
        </p>
      </header>

      {/* Desktop / tablet grid */}
      <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
        {steps.map((s) => (
          <StepCard key={s.number} step={s} />
        ))}
      </div>

      {/* Mobile slider */}
      <div className="md:hidden">
        <Splide
          aria-label="How we work steps"
          options={{
            type: "loop",
            perPage: 1.1,
            gap: "1rem",
            pagination: true,
            arrows: true,
            autoplay: true,
            interval: 3500,
            pauseOnHover: true,
            classes: {
              arrows: "splide__arrows flex gap-2 justify-end mt-4",
              arrow:
                "splide__arrow rounded-full border border-border bg-card text-foreground/80 h-9 w-9 grid place-items-center shadow-sm",
              pagination: "splide__pagination mt-4 flex items-center justify-center gap-2",
              page: "splide__pagination__page h-1.5 w-6 rounded-full bg-muted aria-selected:bg-foreground",
            },
            breakpoints: {
              420: { perPage: 1 },
            },
          }}
        >
          {steps.map((s) => (
            <SplideSlide key={s.number}>
              <StepCard step={s} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  )
}
