"use client"

import { useMemo, useState, useCallback } from "react"
import Image from "next/image"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"

export default function SuccessStories() {
  const [videoUrl, setVideoUrl] = useState(null)

  const slides = useMemo(
    () => [
      {
        id: "s1",
        quote:
          "I decided to pursue an MS and Leverage Edu’s guidance helped me focus on the right universities and move fast.",
        name: "Shrey Talan",
        at: "University of Glasgow",
        flag: "🇬🇧",
        avatar: "https://i.pravatar.cc/300",
        video: null,
      },
      {
        id: "s2",
        quote:
          "They held my hand like a friend and guided me patiently throughout the process. It made all the difference.",
        name: "Bushra Ansari",
        at: "Coast Mountain College",
        flag: "🇨🇦",
        avatar: "https://i.pravatar.cc/300",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
      },
      {
        id: "s3",
        quote:
          "I was rejected multiple times during VISA stage until Leverage Edu helped me find clarity. That changed everything.",
        name: "Ramasheesh",
        at: "UEA",
        flag: "🇬🇧",
        avatar: "https://i.pravatar.cc/300",
        video: null,
      },
      {
        id: "s4",
        quote: "I’m really grateful that I chose Leverage Edu. I’ll forever be thankful for their help and support.",
        name: "Palak Bhatt",
        at: "Cranfield University",
        flag: "🇬🇧",
        avatar: "https://i.pravatar.cc/300",
        video: "https://www.youtube.com/embed/ysz5S6PUM-U?autoplay=1",
      },
    ],
    [],
  )

  const openVideo = useCallback((url) => setVideoUrl(url), [])
  const closeVideo = useCallback(() => setVideoUrl(null), [])

  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 pt-10 md:pb-24 md:pt-14">
      <div className="mb-6 flex items-end justify-between gap-4 md:mb-8">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Success Stories</p>
          <h2 className="text-pretty text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            From Dreamers{" "}
            <span className="relative">
              <span className="text-primary">to Achievers</span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-1 left-0 h-2 w-full rounded-full bg-primary/20"
              />
            </span>
          </h2>
        </div>
      </div>

      <Splide
        aria-label="Student success stories"
        
        options={{
          type: "loop",
          focus: "center",
          perPage: 4,
          perMove: 1,
          gap: "1.5rem",
          padding: { left: "1.5rem", right: "1.5rem" },
          arrows: true,
          pagination: true,
          autoplay: true,
          interval: 5200,
          pauseOnHover: true,
          speed: 700,
          breakpoints: {
            1280: { perPage: 2, gap: "1.25rem", padding: { left: "1rem", right: "1rem" } },
            768: { perPage: 1.2, gap: "1rem", padding: { left: ".75rem", right: ".75rem" } },
            640: { perPage: 1, gap: "0.75rem", padding: { left: ".5rem", right: ".5rem" } },
          },
        }}
        className="stories-cover w-full overflow-hidden"
      >
        {slides.map((s) => (
          <SplideSlide key={s.id}>
            <article className="group relative overflow-hidden rounded-3xl shadow-[0_18px_50px_-18px_rgba(0,0,0,.35)] ring-1 ring-white/10">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-600 via-blue-600 to-indigo-700" />
              {/* Subtle texture overlay */}
              <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(80%_50%_at_20%_0%,white_0%,transparent_60%)]" />
              {/* Large translucent quote mark */}
              <div className="pointer-events-none absolute -top-6 -left-2 text-white/15">
                <QuoteIcon className="h-24 w-24" />
              </div>

              {/* Content */}
              <div className="relative p-7 md:p-8 lg:p-9 text-white">
                <blockquote className="text-pretty text-lg leading-8 md:text-sm md:leading-9">“{s.quote}”</blockquote>

                {/* Person + watch CTA */}
                <div className="mt-6 flex items-center justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <img
                      src={s.avatar || "/placeholder.svg"}
                      alt={`${s.name} avatar`}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-white/40"
                    />
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold">
                        {s.name} <span className="font-normal text-white/70">, studying at</span>
                      </p>
                      <p className="truncate text-sm text-white/70">
                        {s.at} <span className="ml-1">{s.flag}</span>
                      </p>
                    </div>
                  </div>

                  {s.video && (
                    <button
                      onClick={() => openVideo(s.video)}
                      className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/25 backdrop-blur transition hover:bg-white/25"
                    >
                      <PlayIcon className="h-5 w-5" />
                      Watch story
                    </button>
                  )}
                </div>
              </div>

              {/* Portrait accent circle on the right */}
              <div className="pointer-events-none absolute -right-8 bottom-[-28px] hidden aspect-square w-30 rounded-full bg-white/10 backdrop-blur md:block">
                <img
                  src={s.avatar || "/placeholder.svg"}
                  alt=""
                 
                  className="rounded-full object-cover opacity-90"
                />
              </div>
            </article>
          </SplideSlide>
        ))}
      </Splide>

      {/* Video Modal */}
      {videoUrl && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4"
          onClick={closeVideo}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close video"
              onClick={closeVideo}
              className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
            <div className="aspect-video w-full">
              <iframe
                src={videoUrl}
                title="Student story video"
                className="h-full w-full"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        :global(.stories-cover .splide__track) {
          overflow: visible;
        }
        :global(.stories-cover .splide__slide) {
          transform: scale(.94) translateY(6px);
          opacity: .7;
          transition: transform 320ms ease, opacity 320ms ease, filter 320ms ease;
          filter: saturate(.9);
        }
        :global(.stories-cover .splide__slide.is-active) {
          transform: scale(1) translateY(0);
          opacity: 1;
          filter: saturate(1);
        }
        :global(.stories-cover .splide__arrow) {
          height: 46px;
          width: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          background: rgba(255,255,255,.8);
          backdrop-filter: blur(6px);
          color: rgb(15 23 42 / .9);
          border: 1px solid rgba(255,255,255,.7);
          box-shadow: 0 8px 28px rgba(0,0,0,.12);
          transition: transform 160ms ease, background 160ms ease;
        }
        :global(.stories-cover .splide__arrow:hover) {
          background: white;
          transform: translateY(-2px);
        }
        :global(.stories-cover .splide__pagination) {
          margin-top: 1rem;
          gap: 10px;
          position: static;
        }
        :global(.stories-cover .splide__pagination__page) {
          height: 7px;
          width: 28px;
          border-radius: 9999px;
          background: rgba(255,255,255,.35);
          box-shadow: inset 0 0 0 1px rgba(255,255,255,.4);
          opacity: 1;
        }
        :global(.stories-cover .splide__pagination__page.is-active) {
          background: white;
          box-shadow: inset 0 0 0 0 rgba(255,255,255,0);
          transform: none;
        }
      `}</style>
    </section>
  )
}

function QuoteIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V20h8v-8H6.83A3.17 3.17 0 0 1 10 8.83V6H7.17Zm9 0A5.17 5.17 0 0 0 11 11.17V20h8v-8h-3.17A3.17 3.17 0 0 1 20 8.83V6h-3.83Z" />
    </svg>
  )
}
function PlayIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M8 5v14l11-7L8 5Z" />
    </svg>
  )
}
function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.4l-6.3 6.31-1.41-1.42ZM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    </svg>
  )
}
