"use client"

import Image from "next/image"

export default function HeroSection() {
  return (
    <main className="relative overflow-hidden">
      {/* Background accent (subtle, solid + light vignette) */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        {/* Soft vignette using tokens */}
        <div className="absolute inset-0 bg-background" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            background: "radial-gradient(700px 340px at 80% 25%, currentColor, transparent 60%)",
            color: "hsl(var(--primary))",
          }}
        />
      </div>

      <section className="mx-auto max-w-7xl px-4 py-12 md:py-10">
        <div className="grid grid-cols-1  gap-10 lg:grid-cols-2">
          {/* LEFT: Copy & CTAs */}
          <div className="space-y-6">
            <span
              className="inline-flex items-center rounded-full border border-border/60 bg-card px-3 py-1 text-xs font-medium text-muted-foreground animate-fade-up"
              style={{ animationDelay: "40ms" }}
            >
              Your Future, Our Best Creation
            </span>

            <h1
              className="text-pretty text-4xl font-semibold leading-tight sm:text-5xl animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              Unlock Your <span className="text-primary">Global Dream</span> with Expert Guidance
            </h1>

            <p
              className="max-w-xl text-muted-foreground leading-relaxed animate-fade-up"
              style={{ animationDelay: "180ms" }}
            >
              We transform complex study abroad journeys into a smooth, personalised path — from shortlisting to
              scholarships — powered by experienced counsellors and modern tools.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row animate-fade-up" style={{ animationDelay: "260ms" }}>
              <a
                href="#get-started"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Get Your Free Plan
              </a>
              <a
                href="#talk"
                className="inline-flex items-center justify-center rounded-xl border border-input bg-background px-5 py-3 text-sm font-medium text-foreground hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Talk to a Counsellor
              </a>
            </div>

            {/* Trust copy */}
            <div className="space-y-3 animate-fade-up" style={{ animationDelay: "320ms" }}>
              <p className="text-sm text-muted-foreground">95% of our students receive admits in less than 4 weeks</p>
              <div className="flex flex-wrap items-center gap-3">
                {/* Compact trust pills instead of only logos */}
                <MetricPill label="850+ universities" />
                <MetricPill label="150k+ courses" />
                <MetricPill label="$40M+ scholarships" />
              </div>
            </div>

            {/* Partner logos */}
            {/* <div className="animate-fade-up" style={{ animationDelay: "380ms" }}>
              <p className="mb-3 text-xs font-medium text-muted-foreground">Proudly associated with</p>
              <div className="flex items-center gap-6 opacity-80">
                <Image src="/university-crest.jpg" alt="University Crest" width={80} height={28} />
                <Image src="/british-council-logo.jpg" alt="British Council" width={120} height={28} />
                <Image src="/icef-logo.jpg" alt="ICEF" width={80} height={28} />
              </div>
            </div> */}
          </div>

          {/* RIGHT: Visual Composition */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-card p-6 shadow-md ring-1 ring-border md:p-8">
              {/* rotating ring accent */}
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-60 w-60 rounded-full border-2 border-primary/30 animate-spin-slow"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -left-6 bottom-10 h-24 w-24 rounded-full border border-primary/20"
                aria-hidden="true"
              />

              {/* Main Illustration */}
              <div className="relative z-10 mt-2 flex items-end justify-center h-[450px]">
               <img
                  src="/assets/img/desktopGirlImg.webp"
                  alt="Student with laptop and AI assistant"
                 
                  className="max-w-full animate-float drop-shadow-md w-full h-full object-cover rounded-3xl"
                  
                />
              </div>

              {/* Floating badges */}
              <FloatingBadge className="left-4 top-4" delay="120ms" text="1:1 Live Meeting " />
              <FloatingBadge className="right-4 top-20" delay="220ms" text="Scholarship Guidance" />
            </div>
          </div>
        </div>
      </section>

      {/* Updated animation set */}
      <style jsx>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes floaty {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-fade-up { opacity: 0; animation: fadeUp 700ms ease forwards; }
        .animate-float { animation: floaty 6s ease-in-out infinite; }
        .animate-spin-slow { animation: spinSlow 24s linear infinite; }
      `}</style>
    </main>
  )
}

// New small UI helpers for the redesigned hero
function MetricPill({ label }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground/80">
      {label}
    </span>
  )
}

function FloatingBadge({ text, className = "", delay = "0ms" }) {
  return (
    <div
      className={`absolute z-10 inline-flex items-center gap-2 rounded-xl border border-border bg-background/90 px-3 py-2 text-xs font-medium text-foreground shadow backdrop-blur animate-fade-up ${className}`}
      style={{ animationDelay: delay }}
    >
      <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary" aria-hidden="true" />
      {text}
    </div>
  )
}
