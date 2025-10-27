export default function CounsellingProcedure() {
  const steps = [
    "Register online through the official MCC portal",
    "Fill personal, academic, and NEET score details",
    "Choose colleges and courses based on merit and preference",
    "Participate in seat allotment rounds guided by our expert counsellors",
  ]

  return (
    <section className="w-full ">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}>Counselling <span className="text-primary">Procedure</span> </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-6">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="p-6 border-2 border-primary/30 rounded-lg hover:border-primary transition-colors h-full">
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                  {idx + 1}
                </div>
                <p className="text-foreground/80 leading-relaxed pt-2">{step}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-primary/30"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
