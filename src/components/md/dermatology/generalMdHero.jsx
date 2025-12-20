import React from 'react'

export const GeneralMdHero = () => {
  return (
    <div>
      <header className="relative overflow-hidden border-b border-border">
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
          <span
            className="inline-flex items-center rounded-full border border-border/60 bg-card px-3 py-1 text-xs font-medium text-muted-foreground animate-fade-up"
            style={{ animationDelay: "40ms" }}
          >
            All About Doctor Education Pvt. Ltd.
          </span>

          <h1
            className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer fade-item"
            style={{ animationDelay: "100ms" }}
          >
            MD (Doctor of Medicine) – <span className="text-primary">Dermatology</span>
          </h1>

          <p className="text-lg md:text-xl text-primary font-semibold">
            All About Doctor Education Pvt. Ltd. provides end-to-end guidance to help aspiring doctors pursue MD in Dermatology, 
            a postgraduate program specializing in the diagnosis, management, and treatment of skin, hair, and nail disorders.
          </p>

          <p className="mt-4 max-w-2xl text-sm/6 md:text-base/7 text-muted-foreground">
            This course prepares medical professionals to become skilled dermatologists with strong clinical, diagnostic, 
            and cosmetic expertise — opening doors to careers in medical practice, aesthetic dermatology, and academic 
            research worldwide.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg border bg-secondary px-5 py-3 text-sm font-medium text-white hover:opacity-85 transition"
            >
              Get Free Counselling
            </a>
          </div>
        </div>
      </header>
    </div>
  )
}

function Stat({ label, value }) {
  return (
    <div className="rounded-lg p-4 ring-1 ring-border">
      <div className="text-xs uppercase tracking-wide text-muted-foreground">
        {label}
      </div>
      <div className="mt-1 text-lg md:text-xl font-semibold">{value}</div>
    </div>
  );
}
