"use client"

export default function CareerAfterMBBSCanvas() {
  const careers = [
    "MD/MS specialization",
    "NExT preparation",
    "Government medical officer roles",
    "Private hospital practice",
    "Teaching and research roles",
    "International pathways: USMLE, PLAB, AMC, DHA, HAAD",
  ]

  return (
    <section className="relative bg-primary py-10 text-white overflow-hidden">

      {/* ===== BACKGROUND DESIGN ===== */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(246,139,30,0.22),transparent_45%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.12),transparent_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15),transparent_30%,rgba(0,0,0,0.25))]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ===== HEADER ===== */}
      <div className="max-w-5xl mb-28">
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer fade-item">
          
           Career Opportunities After MBBS
          </h2>

       
        </div>

        {/* ===== HORIZONTAL CAREER CANVAS ===== */}
        <div className="relative">

          {/* top rail */}
          <div className="absolute top-8 left-0 w-full h-[2px] bg-white/20" />

          <div className="grid lg:grid-cols-6 gap-8 mt-20">

            {careers.map((item, index) => (
              <div
                key={index}
                className="group relative flex flex-col justify-between 
                           rounded-[28px] bg-white/10 backdrop-blur-lg 
                           px-8 py-10 transition-all duration-500
                           hover:-translate-y-3 hover:bg-white/15 fade-item"
              >
                {/* dot connector */}
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 
                                 h-5 w-5 rounded-full bg-secondary shadow-lg" />

                {/* number */}
                <div className="text-5xl font-extrabold text-white/15 mb-6">
                  {index + 1}
                </div>

                {/* title */}
                <h3 className="text-xl font-semibold leading-snug">
                  {item}
                </h3>

                {/* accent */}
                <div className="mt-8 h-1 w-12 bg-secondary rounded-full 
                                opacity-40 group-hover:opacity-100 transition" />
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}
