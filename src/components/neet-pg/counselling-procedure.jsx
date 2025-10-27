export default function CounsellingProcedure() {
  const steps = [
    { num: "01", title: "Register Online", desc: "Register through official counselling portal" },
    { num: "02", title: "Fill Details", desc: "Enter personal, academic, and NEET PG score details" },
    { num: "03", title: "Choose Colleges", desc: "Select colleges and courses based on merit and preference" },
    { num: "04", title: "Seat Allotment", desc: "Participate in rounds guided by expert counsellors" },
  ]

  return (
    <section className="w-full">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <div>
          <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}>Counselling <span className="text-primary">Procedure</span> </h1>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="p-6 border-2 border-border rounded-lg hover:border-secondary transition-colors space-y-3">
                <div className="text-4xl font-bold text-primary">{step.num}</div>
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm text-foreground/70">{step.desc}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-secondary/30"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
