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
          MD (Doctor of Medicine) – <span className="text-primary">General Medicine</span>
        </h1>

        <p className="text-lg md:text-xl text-primary font-semibold">
          All About Doctor Education Pvt. Ltd. brings you complete support to pursue MD in General Medicine — 
          a postgraduate program focused on developing advanced clinical knowledge and diagnostic expertise in adult medicine.
        </p>

        <p className="mt-4 max-w-2xl text-sm/6 md:text-base/7 text-muted-foreground">
          This specialization trains you to manage complex, multi-system diseases and prepares you for leadership roles 
          in hospitals, research, and healthcare administration — both in India and abroad.  
          <br />
          Our team provides doctor-led mentorship, university shortlisting, admission assistance, and exam preparation 
          to help you achieve your dream of becoming a certified physician.
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

