import Link from "next/link"

export default function NeetDocumentsRequiredV3() {
  return (
    <section className="bg-primary py-10">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer fade-item">
          Documents Required for NEET UG Counselling
          </h2>
          <p className="mt-4 text-lg text-white/80 fade-item">
            Candidates should keep the following documents ready during counselling:
          </p>
        </div>

        {/* Data Blocks */}
        <div className="space-y-10">

          <DataItem text="NEET UG Scorecard" />
          <Divider />

          <DataItem text="Class 10th & 12th Mark Sheets and Certificates" />
          <Divider />

          <DataItem text="Valid Photo Identity Proof" />
          <Divider />

          <DataItem text="Category Certificate (if applicable)" />
          <Divider />

          <DataItem text="Domicile Certificate (for State Quota)" />
          <Divider />

          <DataItem text="Recent Passport-Size Photographs" />

        </div>

        {/* Bottom Note */}
        <div className="mt-24 border-t border-white/20 pt-10 flex items-center justify-between">
          <p className="text-base md:text-lg text-white/80 max-w-3xl">
            <span className="font-semibold text-white">
              Recommended:
            </span>{" "}
            Download the NEET UG Counselling Training & Documentation Guide (PDF)
            for step-by-step assistance.
          </p>

          <Link
                  href="#get-started"
                  className="mt-6 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                >
               Download
                </Link>
        </div>

      </div>
    </section>
  )
}

/* ---------- Pieces ---------- */

function DataItem({ text }) {
  return (
    <div className="flex items-center gap-6 fade-item">
      <span className=" text-sm tracking-widest uppercase text-secondary">
        Document
      </span>
      <span className="text-xl md:text-2xl text-white font-medium">
        {text}
      </span>
    </div>
  )
}

function Divider() {
  return <div className="h-px bg-white/15" />
}
