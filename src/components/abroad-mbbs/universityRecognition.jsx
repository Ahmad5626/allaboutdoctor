export default function UniversityRecognition() {
  const recognitions = [
    "Approved by NMC (National Medical Commission)",
    "Recognized by WHO, ECFMG, and WFME",
    "Listed in the World Directory of Medical Schools (WDOMS)",
  ]

  return (
    <section className="w-full py-10 bg-card">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="space-y-4  mb-8">
          <h1 className="text-pretty text-4xl font-semibold sm:text-4xl animate-fade-up" style={{ animationDelay: "100ms" }}>
            Recognition of <span className="text-primary">Universities</span> 
          </h1>
          <p className="text-foreground text-lg ">
            All universities recommended by All About Doctor Education Pvt Ltd are globally recognized to ensure your degree is valid worldwide.
          </p>
        </div>

        {/* Recognition List */}
        <div className=" mx-auto space-y-4">
          {recognitions.map((item, idx) => (
            <div key={idx} className="flex items-start space-x-3 p-4 border-l-4 border-primary bg-card/50 rounded-md">
              <span className="text-primary font-bold text-lg">✓</span>
              <p className="text-foreground text-sm md:text-base">{item}</p>
            </div>
          ))}
          <p className="text-foreground mt-4">
            This ensures your degree is valid globally and acceptable for higher education or medical licensing exams.
          </p>
        </div>
      </div>
    </section>
  )
}
