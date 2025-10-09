"use client"

import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"

const features = [
  {
    title: "AI-powered course search",
    desc: "Shortlist courses with the best success rates based on your eligibility.",
    image: "https://media.edvoy.com/apply-new-01-b8f7555e1e.png?w=3840&q=80",
  },
  {
    title: "Dedicated personal counsellor",
    desc: "Receive virtual counselling on course selection through to visa guidance.",
    image: "https://media.edvoy.com/apply-new-02-47ec45331a.png?w=3840&q=80",
  },
  {
    title: "Seamless application process",
    desc: "Apply directly to your dream university and get real-time updates.",
    image: "https://media.edvoy.com/apply-new-03-998dca012b.png?w=3840&q=80",
  },
  {
    title: "Funding insights",
    desc: "Scholarships and costs summarized per course and country.",
    image: "https://media.edvoy.com/apply-new-01-b8f7555e1e.png?w=3840&q=80",
  },
  {
    title: "Document vault",
    desc: "Keep passports, scores and SOPs safe with quick sharing.",
    image: "https://media.edvoy.com/apply-new-02-47ec45331a.png?w=3840&q=80",
  },
]

export default function AppSectionSlider() {
  return (
    <section
      aria-labelledby="confidence-title"
      className="relative overflow-hidden  text-secondary-foreground py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <header className="text-center max-w-3xl mx-auto">
          <h2 id="confidence-title" className="text-pretty text-3xl md:text-5xl font-semibold tracking-tight">
            Apply with confidence
          </h2>
          <p className="mt-3 md:mt-4 text-muted-foreground">Our app empowers you to make smart academic decisions</p>
        </header>

        {/* Content */}
        <div className="mt-12 md:mt-16 grid gap-10 md:grid-cols-2 items-center">
        

          {/* Right: Splide feature cards */}
          <div className="relative">
            <Splide
              aria-label="Key app features"
              options={{
                type: "loop",
                perPage: 3,
                gap: "1rem",
                padding: "0.5rem",
                autoplay: true,
                interval: 3500,
                pauseOnHover: true,
                arrows: true,
                pagination: false,
                breakpoints: {
                  1280: { perPage: 2 },
                  768: { perPage: 1 },
                },
              }}
            >
              {features.map((f, i) => (
                <SplideSlide key={i}>
                  <article className="h-full rounded-xl bg-card text-card-foreground p-6 ring-1 ring-border shadow-sm flex flex-col">
                    <h3 className="text-center text-md font-semibold leading-tight">{f.title}</h3>
                    <p className="mt-2 text-center text-[10px] text-muted-foreground">{f.desc}</p>
                    <div className="mt-6">
                      <img
                        src={f.image || "/placeholder.svg?height=240&width=400&query=feature%20image"}
                        alt={f.title}
                        className="w-full aspect-video rounded-lg object-cover ring-1 ring-border"
                        draggable="false"
                      />
                    </div>
                  </article>
                </SplideSlide>
              ))}
            </Splide>
          </div>

            {/* Left: phone mockups + badges */}
          <div className="relative">
            <div className="relative mx-auto max-w-sm">
              <img
                src={"https://media.edvoy.com/home-app-image-d11b21d83d.png?w=384&q=80"}
                alt="App screen"
                className="relative z-20 w-60 md:w-64 rounded-[28px] ring-1 ring-border shadow-2xl"
                draggable="false"
              />
              <img
                src={"https://media.edvoy.com/home-app-image-d11b21d83d.png?w=384&q=80"}
                alt="App screen"
                className="absolute -left-12 top-8 hidden md:block w-56 rounded-[28px] ring-1 ring-border shadow-xl opacity-95"
                draggable="false"
              />
              <img
                src={"https://media.edvoy.com/home-app-image-d11b21d83d.png?w=384&q=80"}
                alt="App screen"
                className="absolute -right-12 bottom-8 hidden md:block w-52 rounded-[28px] ring-1 ring-border shadow-xl opacity-90"
                draggable="false"
              />
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg md:text-xl font-semibold">An all‑in‑one app for your study‑abroad needs</p>
              <div className="mt-4 flex items-center justify-center gap-3">
                {/* Badge-style buttons as lightweight stand-ins for store badges */}
                <a
                  href="#"
                  aria-label="Download on the App Store"
                  className="inline-flex items-center gap-2 rounded-lg bg-foreground text-background px-3 py-2 text-xs font-medium shadow"
                >
                  <img src={"/placeholder.svg?height=18&width=18&query=apple%20logo"} alt="" className="h-4 w-4" />
                  <span>App Store</span>
                </a>
                <a
                  href="#"
                  aria-label="Get it on Google Play"
                  className="inline-flex items-center gap-2 rounded-lg bg-foreground text-background px-3 py-2 text-xs font-medium shadow"
                >
                  <img
                    src={"/placeholder.svg?height=18&width=18&query=google%20play%20logo"}
                    alt=""
                    className="h-4 w-4"
                  />
                  <span>Google Play</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
