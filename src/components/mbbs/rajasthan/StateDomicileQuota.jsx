"use client"
import { CheckCircle } from "lucide-react"

export default function StateDomicileQuota() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5">

      {/* background layers */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] bg-primary/20 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 -right-40 h-[500px] w-[500px] bg-secondary/20 blur-[180px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-4xl mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer fade-item">
            Domicile &{" "}
            
              Seat Quota System in Rajasthan
           
          </h2>
          <p className="mt-5 text-lg text-muted-foreground fade-item">
            Rajasthan follows a mixed system of closed and open seats for MBBS admissions.
          </p>
        </div>

        {/* Quota Cards */}
        <div className="grid lg:grid-cols-3 gap-10 mb-24 fade-item">

          {/* State Quota */}
          <QuotaCard
            title="State Quota (85%) – Closed State"
            points={[
              "Reserved only for Rajasthan domicile candidates",
              "Domicile certificate is mandatory",
              "Seats allotted through Rajasthan state counselling",
            ]}
            accent="from-primary/20 to-primary/5"
          />

          {/* AIQ */}
          <QuotaCard
            title="All India Quota (15%) – Open for All States"
            points={[
              "Open to candidates from any state in India",
              "No domicile requirement",
              "Counselling conducted by MCC (Medical Counselling Committee)",
            ]}
            accent="from-secondary/20 to-secondary/5"
          />

          {/* Private / NRI */}
          <QuotaCard
            title="Private / Management / NRI Seats"
            points={[
              "Open to all India candidates",
              "Management seats usually have higher fees",
              "NRI quota follows a separate and higher fee structure",
            ]}
            accent="from-primary/20 to-secondary/5"
          />
        </div>

        {/* Simple Summary Table */}
        <div className="mb-28">
          <h3 className="text-2xl font-semibold text-foreground mb-8 fade-item">
            Simple Summary
          </h3>

          <div className="overflow-hidden rounded-2xl border border-border bg-white/80 backdrop-blur shadow-sm">
            <div className="grid grid-cols-3 bg-muted/50 px-6 py-4 text-sm font-semibold fade-item">
              <div>Quota Type</div>
              <div>Domicile Required</div>
              <div>Open for Other States</div>
            </div>

            {[
              ["85% State Quota", "Yes (Rajasthan)", "No"],
              ["15% AIQ", "No", "Yes"],
              ["Private / Management", "No", "Yes"],
              ["NRI Quota", "No (special documents)", "Yes"],
            ].map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-3 px-6 py-4 border-t text-sm text-muted-foreground hover:bg-muted/40 transition fade-item"
              >
                <div className="font-medium text-foreground">{row[0]}</div>
                <div>{row[1]}</div>
                <div>{row[2]}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Reservation Matrix */}
        <div className="grid lg:grid-cols-2 gap-20 fade-item">

          {/* Left */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6 fade-item">
              Domicile & Social Reservation Matrix
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-8 fade-item">
              Rajasthan follows a strict reservation policy for its 85% State Quota
              (Category A) seats.
            </p>

            <ul className="space-y-3 text-muted-foreground">
              {[
                "Scheduled Caste (SC): 16%",
                "Scheduled Tribe (ST): 12%",
                "OBC (Non-Creamy Layer): 21%",
                "MBC (More Backward Classes): 5%",
                "EWS (Economically Weaker Section): 10%",
                "PwD (Physical Disability): 5% (Horizontal)",
                "Wards of Defence / Paramilitary: 1%",
                "Female Candidates: ~25–30% horizontal reservation",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 fade-item" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div className="relative rounded-3xl border border-border bg-gradient-to-br from-secondary/10 to-primary/10 p-10">
            <h3 className="text-2xl font-semibold text-foreground mb-6 fade-item">
              Management & NRI Quota (Category B & C)
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-4 fade-item">
         Open Quota: Management seats in private and some government society colleges are often open to candidates from other states once the state merit list is exhausted.

            </p>

            <p className="text-muted-foreground leading-relaxed fade-item">
             NRI Quota: Priority is given to NRIs with Rajasthan ancestry, followed by NRIs from other states.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

/* ---------- Card ---------- */

function QuotaCard({ title, points, accent }) {
  return (
    <div
      className={`relative rounded-3xl border border-border 
      bg-gradient-to-br ${accent} p-8 shadow-sm hover:shadow-xl transition`}
    >
      <h3 className="text-xl font-semibold text-foreground mb-5">
        {title}
      </h3>

      <ul className="space-y-3 text-muted-foreground text-sm">
        {points.map((p, i) => (
          <li key={i} className="flex gap-3 fade-item">
            <CheckCircle className="h-4 w-4 text-secondary mt-0.5" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}


