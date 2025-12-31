"use client"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function StateMbbsWorkflow() {
  return (
    <section className="relative overflow-hidden bg-primary py-10 text-white">

      {/* 🔹 Background Design Layers */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-10 h-[520px] w-[520px] bg-secondary/30 blur-[200px] rounded-full" />
        <div className="absolute bottom-0 right-10 h-[520px] w-[520px] bg-white/10 blur-[220px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* 🔹 Header */}
        <div className="max-w-5xl mb-24">
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer fade-item">
            Rajasthan MBBS Counseling &{" "}
           Admission Workflow
          </h2>

          <p className="mt-6 text-lg text-white/80 fade-item">
           The counseling process in Rajasthan is rigorous. Below is the step-by-step timeline and strategic roadmap that All About Doctor Education Pvt. Ltd. manages for every student:
          </p>
        </div>

        {/* 🔹 Vertical Workflow */}
        <div className="relative">

          {/* Center guide line */}
          <div className="absolute left-6 top-0 h-full w-[2px] bg-white/20 hidden md:block fade-item" />

          {/* PHASE 1 */}
          <WorkflowBlock
            phase="Phase 1"
            title="Initial Rounds (Round 1 & 2)"
            points={[
           "Qualifying Marks: Verification of NEET UG scores against Category A, B, and C requirements.",
              "Form fill-up/online registration: Managing the Rajasthan State Medical & Dental Counseling Board portal.",
              "Online/offline state-wise form fill-up: Ensuring accurate entry of domicile and category details.",
              "Document Verification: Assistance with physical or online verification of mark sheets, certificates, and bonds.",
              "Choice fill-up (Very Very Sensitive Round): Strategic ordering of colleges based on rank, fee structure, and hospital patient flow.",
              "Merit list declared: Analyzing the state rank vs. All India Rank (AIR).",
              "First round cut-off: Real-time data analysis to predict seat shifts.",
              "Seat vacant situation: Tracking surrendered seats from Round 1.",
              "Round 2 jump process: Navigating the transition from Round 1 to Round 2 for seat upgradation.",
              "Choice fill-up (Very Very Sensitive Round): Re-ordering preferences based on vacant seat data.",
              "Merit list declared: Finalizing the Round 2 state position.",
              "Second round cut-off: The final benchmark for many top government colleges.",
            ]}
          />

          {/* PHASE 2 */}
          <WorkflowBlock
            phase="Phase 2"
            title="Mop-Up & Stray Vacancy"
            points={[
              "Seat vacant situation: Identifying seats remaining in private and management quotas.",
              "Mop-up round fresh registration: Opening for new candidates or those who didn't get a seat.",
              "Mop-Up round process: Managing the high-pressure offline or online seat allotment.",
              "After mop-up round process: Dealing with leftover institutional/stray vacancy seats.",
            ]}
          />

          {/* PHASE 3 */}
          <WorkflowBlock
            phase="Phase 3"
            title="Administrative & Logistics Support"
            points={[
                           "Accurate time of submission of fees: We provide precise timelines for fee submission in both cases—whether you are selected (to secure the seat) or not selected (to manage refunds of security deposits).",
              "Time Management (Multiple States): In case there is a date clash for 2 or 4 states (e.g., Rajasthan, Haryana, and UP counseling dates overlapping), we guide you on how to apply and appear in all of them via proxy or strategic timing.",
            ]}
          />
        </div>

          {/* ===== Fees Table ===== */}
        <div className="mt-32">
          <h3 className="text-3xl font-semibold mb-8 text-secondary fade-item">
            Counselling Fees Structure
          </h3>

          <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur fade-item">
            <table className="w-full text-sm md:text-base">
              <thead className="bg-white/15 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Fee Type</th>
                  <th className="px-6 py-4 text-left">Candidate Category</th>
                  <th className="px-6 py-4 text-left">Amount (approx.)</th>
                  <th className="px-6 py-4 text-left">Nature</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {[
                  ["Registration Fee", "General / OBC (Creamy Layer)", "₹2,500", "Non-Refundable"],
                  ["Registration Fee", "SC / ST / ST-STA (Rajasthan Domicile)", "₹1,500", "Non-Refundable"],
                  ["Security Deposit", "Government Medical College Seats", "₹50,000", "Refundable*"],
                  ["Security Deposit", "Management Seats (Govt. Society/RUHS)", "₹2,00,000", "Refundable*"],
                  ["Security Deposit", "Private Medical College Seats", "₹5,00,000", "Refundable*"],
                  ["Security Deposit", "NRI Seats (Govt. & Private)", "₹5,00,000", "Refundable*"],
                  ["Security Deposit", "BDS (Dental) Seats", "₹10,000", "Refundable*"],
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition">
                    {row.map((cell, j) => (
                      <td key={j} className="px-6 py-4 text-white/85">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>


        {/* 🔹 CTA */}
        <div className="mt-24 rounded-3xl bg-white/10 backdrop-blur border border-white/20 p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 fade-item">
          <div>
            <h3 className="text-2xl font-semibold">
              Want to know more about Free Exit Round in NEET UG Counselling?
            </h3>
            <p className="mt-2 text-white/80">
              Get personalised counselling strategy from expert mentors.
            </p>
          </div>

        <button className="group relative inline-flex items-center gap-3 rounded-full px-9 py-4 
bg-secondary text-primary font-semibold overflow-hidden 
transition-all duration-300 hover:scale-[1.08] active:scale-95
animate-cta-float">

  {/* continuous glow layer */}
  <span className="absolute inset-0 bg-gradient-to-r 
  from-secondary via-white/70 to-secondary
  opacity-30 blur-xl animate-cta-glow" />

  {/* hover sweep */}
  <span className="absolute inset-0 bg-gradient-to-r 
  from-transparent via-white/80 to-transparent
  translate-x-[-120%] group-hover:translate-x-[120%]
  transition-transform duration-700" />

  {/* border pulse */}
  <span className="absolute inset-0 rounded-full ring-2 ring-secondary/60 
  animate-cta-ring" />

  {/* content */}
  <span className="relative z-10">Talk to Expert</span>

  {/* arrow */}
  <ArrowRight className="relative z-10 transition-transform duration-300 
  group-hover:translate-x-1 group-hover:scale-110" />
</button>


        </div>

      </div>
    </section>
  )
}

/* ===== Workflow Block ===== */

function WorkflowBlock({ phase, title, points }) {
  return (
    <div className="relative mb-20 pl-14">

      {/* Phase Tag */}
      <span className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary font-bold">
        {phase.split(" ")[1]}
      </span>

      <div className="rounded-3xl bg-white/10 backdrop-blur border border-white/20 p-8">
        <h3 className="text-2xl font-semibold text-secondary mb-6">
          {title}
        </h3>

        <div className="grid md:grid-cols-2 gap-5">
          {points.map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              <CheckCircle className="h-5 w-5 text-secondary mt-1" />
              <p className="text-sm text-white/85 leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
