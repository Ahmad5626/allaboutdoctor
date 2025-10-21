export default function AdmissionProcess() {
  return (
    <section className="w-full ">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <div>
          <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-5xl animate-fade-up my-4"
              style={{ animationDelay: "100ms" }}>Admission  <span className="text-primary">Process</span> </h1>
          
          <p className="text-foreground leading-relaxed">
            Admission to MBBS in India is conducted through NEET-UG, organized by the National Testing Agency (NTA).
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-4 py-6">
            <h3 className="text-xl font-bold text-primary">Step-by-Step Process:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Register and appear for the NEET-UG exam",
                "Qualify with the required percentile",
                "Participate in MCC (All India Quota) or State-level Counseling",
                "Select preferred colleges and lock choices",
                "Complete document verification and finalize admission",
              ].map((step, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-3 border border-border rounded-lg">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">{idx + 1}</span>
                  </div>
                  <p className="text-foreground text-sm">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-l-4 border-primary pl-6 py-4 space-y-2">
            <p className="font-semibold text-primary">All About Doctor Support:</p>
            <p className="text-foreground text-sm leading-relaxed">
              We guide you at every step — from NEET registration to seat allotment — ensuring a transparent,
              stress-free admission experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
