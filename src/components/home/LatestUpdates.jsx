"use client"
import React from 'react';
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
const updates = [
  {
    title: "Uttar Pradesh – PG Medical DNB Seat Matrix 2026",
    type: "PDF",
    file: "/pdfs/up-pg-seat-matrix.pdf",
    isNew: true,
  },
  {
    title: "Rajasthan – PG Medical Registration Link",
    type: "LINK",
    file: "https://example.com",
    isNew: true,
  },
  {
    title: "Rajasthan – PG Medical Application Guidelines",
    type: "PDF",
    file: "/pdfs/rajasthan-pg-guidelines.pdf",
  },
  {
    title: "NEET PG 2025 Haryana – Medical Gazette",
    type: "PDF",
    file: "/pdfs/haryana-neet-pg.pdf",
  },
  {
    title: "Rajasthan – UG Medical Round 3 Vacant Seat Matrix",
    type: "PDF",
    file: "/pdfs/rajasthan-ug-round3.pdf",
  },
]

export default function LatestUpdates() {
  return (
    <section className="mx-auto max-w-7xl  py-14">

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">

        {/* LEFT NOTICE BOARD */}
        <div className="rounded-3xl bg-gradient-to-br from-[#0b5cff] to-[#003b99] text-white p-6 shadow-xl">
        
          <span className="inline-block mb-3 rounded-full bg-white/20 px-4 py-1 text-xs font-semibold tracking-wide">
            LIVE UPDATES
          </span>

          <h3 className="text-2xl font-bold leading-tight">
            NEET 2026 <br /> Latest Notices
          </h3>

          <p className="mt-3 text-sm text-white/80">
            Counselling, Seat Matrix, Registration & Official PDFs
          </p>

          <div className="mt-6 text-xs text-white/70">
            🔔 Updates auto-refresh
          </div>
        </div>

        {/* RIGHT RUNNING PANEL */}
        <div className="lg:col-span-3 rounded-3xl border bg-white/70 backdrop-blur-xl shadow-xl overflow-hidden">

          {/* HEADER STRIP */}
          <div className="flex items-center gap-3 bg-gradient-to-r from-[#f68b1e] to-[#ffb703] px-6 py-3 text-white font-semibold text-sm">
            📢 Important Notifications
          </div>

          {/* MARQUEE */}
          <div className="relative h-[350px] overflow-hidden group">

            <div className="animate-marquee space-y-4 px-6 py-4 group-hover:[animation-play-state:paused]">

              {[...updates, ...updates].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start justify-between gap-4 rounded-xl border bg-white p-4 shadow-sm hover:shadow-lg transition"
                >
                  <div className="flex gap-3">

                    {/* ICON */}
                    <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#eaf2ff] text-[#0057ff] text-sm">
                      📄
                    </div>

                    {/* TEXT */}
                    <div>
                      <p className="text-sm font-semibold text-gray-800 leading-snug">
                        {item.title}
                      </p>

                      <div className="mt-1 flex items-center gap-2">
                        {item.isNew && (
                          <span className="rounded-full bg-red-100 text-red-600 px-2 py-0.5 text-[10px] font-bold">
                            NEW
                          </span>
                        )}
                        <span className="text-[11px] text-gray-500">
                          Official Notification
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* ACTION */}
                  <a
                    href={item.file}
                    target={item.type === "LINK" ? "_blank" : undefined}
                    download={item.type === "PDF"}
                    className="shrink-0 rounded-full bg-[#0057ff] px-4 py-2 text-xs font-bold text-white hover:bg-[#003b99] transition"
                  >
                   Download
                  </a>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
