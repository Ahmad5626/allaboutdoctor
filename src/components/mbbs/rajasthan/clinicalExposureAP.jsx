"use client"

export default function ClinicalExposure() {
  return (
    <section className="relative bg-white py-10 overflow-hidden">

      {/* ===== BACKGROUND DESIGN LAYERS ===== */}
      <div className="absolute inset-0">
        {/* diagonal gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(1,52,158,0.04),rgba(246,139,30,0.04))]" />

        {/* soft blobs */}
        <div className="absolute -top-40 left-1/4 h-[520px] w-[520px] rounded-full bg-primary/10 blur-[160px]" />
        <div className="absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-secondary/10 blur-[160px]" />

        {/* grid texture */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ===== HEADER ===== */}
        <div className="max-w-5xl mb-28">
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer fade-item">
          
              Clinical Exposure & Internship
           
          
            in Indian Hospitals
          </h2>

          <p className="mt-8 text-xl text-muted-foreground leading-relaxed fade-item">
          Students gain extensive hands-on experience in:
          </p>
        </div>

        {/* ===== FEATURE STRIP ===== */}
        <div className="grid lg:grid-cols-3 gap-10 mb-32">

          {[
            "General Medicine",
            "Pediatrics",
            "General & Laparoscopic Surgery",
            "Orthopedics",
            "Obstetrics & Gynecology",
            "Radiology",
            "Emergency & Trauma Care",
            "Dermatology",
            "Psychiatry",
            "Community & Rural Health",
          ].map((text, i) => (
            <div
              key={i}
              className="group relative rounded-[28px] p-[1px] bg-gradient-to-br  via-transparent
                         from-primary to-secondary transition-all duration-500 fade-item"
            >
              <div className="relative rounded-[26px] bg-white px-10 py-4 h-full overflow-hidden fade-item">

                {/* glow */}
                <div className="absolute -top-20 -right-20 h-30 w-30 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition" />

                <div className="relative z-10">
                  <div className="text-7xl font-extrabold text-primary/10 mb-6">
                    {`${i + 1}`}
                  </div>

                  <p className="text-2xl font-semibold text-foreground leading-snug">
                    {text}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      

      </div>
    </section>
  )
}
