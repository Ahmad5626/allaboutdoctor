"use client"

import { useRef } from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"

const services = [
  { title: "Career Counselling", img: "assets/img/doctor/doctor-1.jpg", value: "doctor-1" },
  { title: "University Shortlist", img: "assets/img/doctor/doctor-2.jpg", value: "doctor-2" },
  { title: "Admission Letter", img: "assets/img/doctor/doctor-3.jpg", value: "doctor-3" },
  { title: "Document Apostille & Translation", img: "assets/img/doctor/doctor-4.jpg", value: "doctor-4" },
  { title: "Visa Process & Documentation", img: "assets/img/doctor/doctor-5.jpg", value: "doctor-5" },
  { title: "Passport Translation", img: "assets/img/doctor/doctor-6.jpg", value: "doctor-6" },
  { title: "Ministry Approval", img: "assets/img/doctor/doctor-7.jpg", value: "doctor-7" },
  { title: "Health Insurance", img: "assets/img/doctor/doctor-8.jpg", value: "doctor-8" },
  { title: "Education Loan", img: "assets/img/doctor/doctor-9.jpg", value: "doctor-9" },
  { title: "Currency Exchange", img: "assets/img/doctor/doctor-10.jpg", value: "doctor-10" },
  { title: "Air Tickets Booking", img: "assets/img/doctor/doctor-11.jpg", value: "doctor-11" },
  { title: "Pre Departure Orientation", img: "assets/img/doctor/doctor-12.jpg", value: "doctor-12" },
  { title: "Airport Pickup & Drop", img: "assets/img/doctor/doctor-13.jpg", value: "doctor-13" },
  { title: "Providing Local Sim Card", img: "assets/img/doctor/doctor-14.jpg", value: "doctor-14" },
  { title: "Orientation in University", img: "assets/img/doctor/doctor-15.jpg", value: "doctor-15" },
  { title: "Local Guardian Support", img: "assets/img/doctor/doctor-16.jpg", value: "doctor-16" },
  { title: "Hostel & Food Mess Facilities", img: "assets/img/doctor/doctor-17.jpg", value: "doctor-17" },
  { title: "FMGE / Next Preparation", img: "assets/img/doctor/doctor-18.jpg", value: "doctor-18" },
];

// Simple image helper – swap with your own icons later
function ServiceIcon({ label }) {
  return (
    <div className="relative size-20 md:size-24 rounded-full bg-muted/40 ring-2 ring-primary/30 flex items-center justify-center overflow-hidden">
      <img
        src={`/.jpg?height=96&width=96&query=${encodeURIComponent(label + " icon")}`}
        alt={label}
        className="h-full w-full object-cover"
        crossOrigin="anonymous"
      />
      <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-border/60" />
    </div>
  )
}

export default function DoctorServicesSlider() {
  const splideRef = useRef(null)

  const options = {
    type: "loop",
    drag: "free",
    gap: "1rem",
    perPage: 6,
    pagination: false,
    arrows: false, // we use custom arrows
    autoplay: true,
    interval: 3500,
    pauseOnHover: true,
    breakpoints: {
      1536: { perPage: 6 },
      1280: { perPage: 5 },
      1024: { perPage: 4 },
      768: { perPage: 3 },
      640: { perPage: 2 },
      420: { perPage: 1 },
    },
  }

  return (
    <section className="relative py-14 md:py-16">
      {/* soft radial background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30"
      />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <header className="text-center mb-8 md:mb-10">
          <h2 className="text-pretty text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Exclusive All About <span className="text-primary">Doctor Services</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-primary/60" />
          <p className="mt-4 text-sm md:text-base text-muted-foreground">
            Everything you’ll need from admission to arrival — simplified and supported.
          </p>
        </header>

        {/* slider with custom controls anchored bottom-right */}
        <div className="relative">
          <Splide aria-label="Doctor Services" options={options} ref={splideRef} className="pb-2">
            {services.map((s, i) => (
              <SplideSlide key={i}>
                <div className="group h-full">
                  <div className="flex h-full flex-col items-center justify-start rounded-xl border border-border/70 bg-card/70 p-4 md:p-5 shadow-sm transition-shadow hover:shadow-md">
                    <img src={s.img} alt="doctor" className="h-20 w-20 rounded-full" />
                    <h3 className="mt-3 text-center text-sm md:text-base font-medium text-foreground/90">{s.title}</h3>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>

          {/* custom controls */}
          <div className="pointer-events-none absolute -bottom-4 right-2 flex items-center gap-2 md:-bottom-6 md:right-0">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => splideRef.current?.go("<")}
              className="pointer-events-auto inline-flex size-9 items-center justify-center rounded-full border border-border bg-card text-foreground/70 hover:text-foreground hover:bg-accent transition"
            >
              <span aria-hidden>‹</span>
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => splideRef.current?.go(">")}
              className="pointer-events-auto inline-flex size-9 items-center justify-center rounded-full border border-border bg-card text-foreground/70 hover:text-foreground hover:bg-accent transition"
            >
              <span aria-hidden>›</span>
            </button>
          </div>
        </div>

        {/* show all */}
        <div className="mt-10 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground hover:bg-accent transition"
          >
            Show all
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
