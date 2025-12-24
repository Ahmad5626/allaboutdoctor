"use client"
import { useEffect, useRef, useState } from "react"

function ScrollCounter({ end, suffix = "" }) {
  const ref = useRef(null)
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.6 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return

    let current = 0
    const duration = 1500
    const step = end / (duration / 16)

    const timer = setInterval(() => {
      current += step
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [started, end])

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export const Counter = () => {
  return (
    <section className="bg-primary py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <StatCard
            title="Total Medical Seats Available"
            value={90000}
            suffix="+"
          />

          <StatCard
            title="All India Quota Seats (AIQ)"
            value={15}
            suffix="%"
            desc="of Government MBBS seats including central institutions"
          />

          <StatCard
            title="State Quota Seats"
            value={85}
            suffix="%"
            desc="across all Indian states"
          />

          <StatCard
            title="Total Counselling Rounds"
            value={4}
            suffix="+"
            desc="AIQ & State level"
          />

        </div>
      </div>
    </section>
  )
}

function StatCard({ title, value, suffix, desc }) {
  return (
    <div className="rounded-2xl bg-white/10 backdrop-blur p-8 text-center hover:scale-105 transition">
      <div className="text-4xl font-bold text-white">
        <ScrollCounter end={value} suffix={suffix} />
      </div>
      <p className="mt-2 text-sm font-medium text-white">
        {title}
      </p>
      {desc && (
        <p className="mt-1 text-xs text-white/80">
          {desc}
        </p>
      )}
    </div>
  )
}
