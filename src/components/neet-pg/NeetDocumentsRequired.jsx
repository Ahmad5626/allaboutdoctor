import Link from "next/link"

export default function NeetDocumentsRequiredPg() {
  return (
    <section className="bg-primary py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer fade-item">
         Documents Required for NEET PG Counselling
          </h2>
          <p className="mt-4 text-lg text-white/80 fade-item">
            Candidates should keep the following documents ready during counselling:
          </p>
        </div>

        {/* Data Blocks */}
        <div className="space-y-10">

          <DataItem text="NEET PG Scorecard" />
          <Divider />

          <DataItem text="MBBS Degree / Provisional Certificate" />
          <Divider />

          <DataItem text="Internship Completion Certificate" />
          <Divider />

          <DataItem text="Permanent / Provisional Medical Registration Certificate" />
          <Divider />

          <DataItem text="Valid Photo Identity Proof" />
          <Divider />

          <DataItem text="Category Certificate (if applicable)" />
<Divider />
<DataItem text="Recent Passport-size Photographs" />
        </div>

        {/* Bottom Note */}
       

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
