export default function ImportantDates() {
  return (
    <section className="w-full">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <div>
          <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}>Important <span className="text-primary">Dates</span> </h1>
         
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6">
          <div className="space-y-4">
            <p className="text-foreground/80 leading-relaxed">
              Our experts provide updated counselling schedules per NBEMS and DGHS notifications.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold mt-1">•</span>
                <span className="text-foreground/80">Registration opening date</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold mt-1">•</span>
                <span className="text-foreground/80">Choice filling deadline</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold mt-1">•</span>
                <span className="text-foreground/80">Seat allotment rounds</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold mt-1">•</span>
                <span className="text-foreground/80">Result announcement dates</span>
              </li>
            </ul>
          </div>

          <div className="border-2 border-secondary rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Official Resources</h3>
            <p className="text-foreground/80">
              Access all official NEET PG resources directly from the National Board of Examinations portal.
            </p>
            <a
              href="https://nbe.edu.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 border-2 border-secondary text-secondary font-semibold rounded-lg hover:bg-secondary/5 transition-colors"
            >
              Visit Official Portal →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
