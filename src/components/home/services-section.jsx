"use client"
import { useState } from "react"
import Modal from "./model"

const services = [
  {
    id: "wedsta",
    title: "Wedsta",
    subtitle: "WMG At Home, Family Makeup Services",
    image: "https://image.wedmegood.com/resized-nw/570X/uploads/wmg_services/wedsta_dweb.jpg",
    description:
      "Experienced makeup artists for brides and families. At-home trials, on-location service, and curated looks for every event.",
    bullets: [
      "On-location artists and hairstylists",
      "Customized bridal + family packages",
      "Pre-wedding trials and skin prep",
      "Verified professionals with reviews",
    ],
  },
  {
    id: "genie",
    title: "Genie Services",
    subtitle: "Plan your dream wedding in your budget",
    image: "https://image.wedmegood.com/resized-nw/570X/uploads/wmg_services/wedsta_dweb.jpg",
    description:
      "End-to-end planning assistance tailored to your budget—from venue discovery to vendor coordination and day-of execution.",
    bullets: [
      "Personalized vendor shortlists",
      "Budget planning & cost tracking",
      "Venue & logistics coordination",
      "On-day support team",
    ],
  },
  {
    id: "venue",
    title: "Venue Booking Service",
    subtitle: "Best Price Guaranteed",
    image: "https://image.wedmegood.com/resized-nw/570X/uploads/wmg_services/venue_dweb.jpg",
    description:
      "Discover and book verified venues with transparent pricing, availability, and exclusive perks negotiated for you.",
    bullets: [
      "Verified venues with real photos",
      "Date availability guidance",
      "Negotiated packages & perks",
      "Fast holds and secure booking",
    ],
  },
]

function ServiceCard({ item, onKnowMore }) {
  return (
    <div className="group overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-md">
      <img src={item.image || "/placeholder.svg"} alt={item.title} className="h-48 w-full object-cover md:h-56" />
      <div className="p-5 text-center">
        <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
        <p className="mt-1 text-sm text-slate-600">{item.subtitle}</p>
        <button
          onClick={() => onKnowMore(item)}
          className="mt-4 inline-flex items-center justify-center rounded-md border border-rose-200 px-4 py-2 text-sm font-medium text-rose-600 hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-rose-500"
        >
          Know More
        </button>
      </div>
    </div>
  )
}

export default function ServicesSection() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)

  const handleOpen = (item) => {
    setSelected(item)
    setOpen(true)
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 md:py-14">
      <div className="mb-6 flex items-center justify-between md:mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">WMG Inhouse Services</h2>
        
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {services.map((s) => (
          <ServiceCard key={s.id} item={s} onKnowMore={handleOpen} />
        ))}
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title={selected?.title || "More details"}>
        {selected && (
          <div className="flex flex-col gap-4 md:flex-row">
            <img
              src={selected.image || "/placeholder.svg"}
              alt={selected.title}
              className="h-40 w-full rounded-lg object-cover md:h-56 md:w-64"
            />
            <div className="flex-1">
              <p className="text-sm leading-6 text-slate-700">{selected.description}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
                {selected.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-rose-600 px-4 py-2 text-sm font-medium text-white hover:bg-rose-700"
                >
                  Get Started
                </a>
                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
