export default function EntranceExam() {
  return (
    <section className="w-full ">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <div>
          <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-5xl animate-fade-up my-4"
              style={{ animationDelay: "100ms" }}>Entrance Exam &  <span className="text-primary">Admission Process</span></h1>
        
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">About NEET-UG</h3>
            <p className="text-foreground leading-relaxed">
              The National Eligibility cum Entrance Test (NEET-UG) is the only entrance exam for MBBS admissions in
              India. Conducted by NTA, it evaluates students on Physics, Chemistry, and Biology.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Counselling & Seat Allotment</h3>
            <ul className="space-y-2">
              <li className="text-foreground text-sm flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span>MCC (All India Quota – 15%)</span>
              </li>
              <li className="text-foreground text-sm flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span>State-level Counselling (85%)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border border-border rounded-lg p-6 space-y-4 my-6">
          <h3 className="text-xl font-bold text-primary">Admission Steps</h3>
          <ol className="space-y-3">
            {[
              "Register for NEET-UG on the NTA portal",
              "Appear and qualify with required percentile",
              "Register for MCC or State Counselling",
              "Choose preferred colleges and lock choices",
              "Complete document verification and admission formalities",
            ].map((step, idx) => (
              <li key={idx} className="text-foreground text-sm flex items-start">
                <span className="text-primary font-bold mr-3">{idx + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="border-l-4 border-primary pl-6 py-4 space-y-2">
          <p className="font-semibold text-primary">All About Doctor Support:</p>
          <p className="text-foreground text-sm leading-relaxed">
            We simplify the entire admission journey — from NEET form filling to college seat confirmation — through
            personalized counseling and doctor-led guidance.
          </p>
        </div>
      </div>
    </section>
  )
}
