export default function NeetCounsellingProcess() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT – Sticky Title */}
          <div className="lg:sticky lg:top-28 space-y-6">
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer fade-item">
              NEET UG Counselling Process – Step-by-Step Guide
             
            </h2>

            
          </div>

          {/* RIGHT – Steps */}
          <div className="space-y-6">

            <ProcessRow
              step="01"
              title="Online Registration"
              content="Candidates must register on the official counselling portals for AIQ and/or State Quota based on eligibility."
            />

            <ProcessRow
              step="02"
              title="Document Upload & Verification"
              content="Students submit personal details, NEET score, category, domicile, and academic records for verification."
            />

            <ProcessRow
              step="03"
              title="Choice Filling & Locking"
              content="Candidates select and prioritize preferred colleges and courses before the deadline."
            />

            <ProcessRow
              step="04"
              title="Seat Allotment Rounds"
              content="Seats are allotted through multiple rounds such as Round 1, Round 2, Mop-Up Round, and Stray Vacancy Round, depending on availability."
            />

            <ProcessRow
              step="05"
              title="Seat Acceptance & College Reporting"
              content="After allotment, candidates must confirm the seat and report to the allotted college to complete admission formalities."
            />

          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Row ---------- */

function ProcessRow({ step, title, content }) {
  return (
    <div className="group relative rounded-3xl bg-white p-[1px] transition hover:shadow-xl">

      {/* gradient border */}
      <div className="rounded-3xl bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 p-6">

        {/* inner card */}
        <div className="rounded-2xl bg-white px-8 py-6">

          <div className="flex items-start gap-6">
            
            {/* Step number */}
            <div className="text-2xl font-semibold text-primary/40 group-hover:text-primary transition">
              {step}
            </div>

            {/* Content */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                {title}
              </h3>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {content}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

