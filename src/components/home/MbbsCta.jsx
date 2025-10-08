"use client"

export default function MbbsCta() {
  return (
    <section id="mbbs-cta" className="relative isolate overflow-hidden max-w-7xl mx-auto" aria-labelledby="mbbs-cta-title">
      {/* Decorative, accessible-only description */}
     

      {/* Background accents */}
      {/* <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24  right-1/2 h-72 w-72 translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
        style={{ animation: "floatY 8s ease-in-out infinite" }}
      /> */}
     

      <div className="mx-auto max-w-7xl px-4  sm:py-20 md:py-4">
        <div
          className="relative rounded-2xl border border-border bg-card/60 backdrop-blur-md shadow-sm"
          style={{ animation: "fadeUp 600ms var(--ease) both" }}
        >
          {/* Thin gradient top bar */}
          <div className="h-1.5 w-full rounded-t-2xl bg-gradient-to-r from-primary/90 via-primary/50 to-primary/90" />

          <div className="px-6 py-10 sm:px-10 sm:py-12 md:p-14">
            <p className="text-center text-sm font-medium text-muted-foreground tracking-wide uppercase">
              Dreaming of Studying MBBS ?
            </p>

            <h2
              id="mbbs-cta-title"
              className="mt-3 text-center text-balance text-3xl sm:text-4xl md:text-5xl font-semibold"
            >
              <span className="text-foreground">We </span>
              <span className="text-primary">Make It Easy</span>
              <span className="text-foreground"> for You!</span>
            </h2>

            {/* Animated underline */}
            <div className="mx-auto mt-4 flex justify-center">
              <span
                className="h-[3px] w-28 rounded-full bg-primary/80"
                style={{ animation: "pulseLine 2.2s ease-in-out infinite" }}
                aria-hidden="true"
              />
            </div>

            <p
              className="mx-auto mt-6 max-w-3xl text-center text-pretty leading-relaxed text-muted-foreground"
              aria-describedby="mbbs-cta-desc"
            >
              Looking to pursue MBBS abroad ? All About Doctor MBBS abroad consultants makes your journey smooth and
              hassle-free ! From university selection to visa processing, test preparation, and travel assistance, we
              provide complete support to help you achieve your medical dreams. Start your journey with expert guidance
              today !
            </p>

            <div className="mt-10 flex justify-center">
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              >
                Read More
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h14M13 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        :root {
          --ease: cubic-bezier(0.22, 1, 0.36, 1);
        }
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes floatY {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes pulseLine {
          0%,
          100% {
            transform: scaleX(0.9);
            opacity: 0.8;
          }
          50% {
            transform: scaleX(1.1);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
}
