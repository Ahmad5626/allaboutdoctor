export default function Hero() {
  return (
    <section className="relative isolate">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>`  `
            <p className="text-teal-600 font-medium">Our Purpose</p>
            <h1 className="mt-2 text-balance text-3xl font-semibold text-slate-900 md:text-4xl">
              Crafting joyful wedding journeys with trusted vendors
            </h1>
            <p className="mt-4 text-slate-600 leading-relaxed">
              We bring couples and verified vendors together on one simple, transparent platform. From discovery to
              booking, we make every step effortless so you can focus on celebrating love.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="/vendor-dashboard"
                className="inline-flex items-center rounded-md bg-rose-600 px-4 py-2 text-white transition hover:bg-rose-700"
              >
                Become a Vendor
              </a>
              <a
                href="/"
                className="inline-flex items-center rounded-md border border-slate-200 px-4 py-2 text-slate-700 transition hover:bg-slate-50"
              >
                Explore Listings
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-slate-200 w-full h-100">
            <img
              src="https://i.pravatar.cc/300"
              alt="Happy couple celebrating at their wedding"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-black/0" />
          </div>
        </div>
      </div>
    </section>
  )
}
