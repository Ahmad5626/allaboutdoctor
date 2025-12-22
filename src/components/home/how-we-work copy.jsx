"use client"

import { useEffect, useRef, useState } from "react"

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

function StepCard({ step, index, activeIndex, totalSteps }) {
  const diff = index - activeIndex
  const isActive = diff === 0
  const isPast = diff < 0

  // Calculate position and styling based on index difference
  let scale = 1
  let opacity = 1
  let translateY = 0
  let zIndex = totalSteps - Math.abs(diff)

  if (diff > 0) {
    // Cards below active
    scale = 1 - diff * 0.04
    opacity = 1 - diff * 0.12
    translateY = diff * 34
    zIndex = totalSteps - diff
  } else if (diff < 0) {
    // Cards above (past)
    opacity = 0
    translateY = diff * 70
  }

  return (
    <div
      className="absolute inset-x-0 transition-all duration-700 ease-out"
      style={{
        transform: `translateY(${translateY}px) scale(${scale})`,
        opacity: opacity,
        zIndex: zIndex,
      }}
    >
      <article
       className={`
    relative mx-auto max-w-3xl rounded-2xl
    bg-white border border-gray-200
    p-6 md:p-7
    transition-all duration-[900ms] ease-out

    ${isActive
      ? "shadow-xl ring-2 ring-primary/30 scale-[1.02]"
      : "shadow-sm opacity-80"}
  `}
      >
        {/* Soft subtle corner gradient */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent" />

        {/* CONTENT */}
        <div className="relative">

          {/* Top Row */}
          <div className="mb-6 flex items-center justify-between">

            {/* Number Badge */}
            <div className="
        flex h-14 w-14 items-center justify-center 
        rounded-xl bg-primary text-white 
        text-xl font-bold shadow-sm
      ">
              {step.number.toString().padStart(2, "0")}
            </div>

            {/* Icon Box */}
            <div className="
        flex h-14 w-14 items-center justify-center 
        rounded-xl bg-gray-100 border
      ">
              <img src={step.icon} alt="" className="h-8 w-8 opacity-80" />
            </div>

          </div>

          {/* Title */}
          <h3 className="mb-3 text-2xl md:text-3xl font-semibold text-gray-900">
            {step.title}
          </h3>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            {step.desc}
          </p>

          {/* Progress */}
          <div className="mt-6 flex items-center gap-2">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`
            h-1.5 flex-1 rounded-full transition-all duration-500 
            ${i === index ? "bg-primary" : i < index ? "bg-primary/30" : "bg-gray-200"}
          `}
              />
            ))}
          </div>

        </div>
      </article>


    </div>
  )
}

export default function VerticalStackingSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef(null)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length)
    }, 9000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Scroll handler for manual control
useEffect(() => {
  const container = containerRef.current
  if (!container) return

  let lastScrollTime = 0

  const handleScroll = (e) => {
    e.preventDefault()

    const now = Date.now()
    if (now - lastScrollTime < 1200) return // ⛔ throttle
    lastScrollTime = now

    setIsAutoPlaying(false)

    if (e.deltaY > 0 && activeIndex < steps.length - 1) {
      setActiveIndex((prev) => prev + 1)
    } else if (e.deltaY < 0 && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1)
    }

    setTimeout(() => setIsAutoPlaying(true), 9000)
  }

  container.addEventListener("wheel", handleScroll, { passive: false })
  return () => container.removeEventListener("wheel", handleScroll)
}, [activeIndex])

  const goToSlide = (index) => {
    setActiveIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 6000)
  }

  const goNext = () => {
    if (activeIndex < steps.length - 1) {
      goToSlide(activeIndex + 1)
    }
  }

  const goPrev = () => {
    if (activeIndex > 0) {
      goToSlide(activeIndex - 1)
    }
  }

  return (
    <section className="relative mx-auto  w-full overflow-hidden bg-primary px-4 py-6">
      {/* Header */}
      <header className="relative z-10 mx-auto mb-8 max-w-3xl text-center">
        <h2 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer">
          How We Work
        </h2>
        <h3 className="mt-3 text-pretty text-sm leading-relaxed text-secondary md:text-base">
          A clear, student‑first process from application to arrival.
        </h3>
      </header>

      {/* Main slider container */}
      <div ref={containerRef} className="relative mx-auto h-[300px] w-full max-w-4xl px-4 md:h-[400px]">
        {steps.map((step, index) => (
          <StepCard key={step.number} step={step} index={index} activeIndex={activeIndex} totalSteps={steps.length} />
        ))}
      </div>

      {/* Navigation controls */}
      <div className="relative z-10 mx-auto mt-0 flex max-w-4xl items-center justify-center gap-4">
        <button
          onClick={goPrev}
          disabled={activeIndex === 0}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground disabled:opacity-30 disabled:hover:scale-100 disabled:hover:bg-card"
          aria-label="Previous step"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>

        {/* Dot navigation */}
        <div className="flex gap-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${index === activeIndex ? "w-8 bg-primary" : "w-2.5 bg-muted hover:bg-muted-foreground/50"
                }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          disabled={activeIndex === steps.length - 1}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground disabled:opacity-30 disabled:hover:scale-100 disabled:hover:bg-card"
          aria-label="Next step"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Auto-play indicator */}
      {/* <div className="relative z-10 mx-auto mt-6 text-center">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {isAutoPlaying ? "⏸ Pause Auto-play" : "▶ Resume Auto-play"}
        </button>
      </div> */}

      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.05),transparent_70%)]" />
    </section>
  )
}
