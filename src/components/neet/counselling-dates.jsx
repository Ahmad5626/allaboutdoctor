export default function CounsellingDates() {
  return (
    <section className="w-full ">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}>Counselling Dates <span className="text-primary"> & Resources</span> </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full"></span>
              Counselling Schedule
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-foreground/80">
                <span className="text-primary font-bold">•</span>
                <span>Our experts provide updated counselling schedules as per NTA and MCC notifications</span>
              </li>
              <li className="flex gap-3 text-foreground/80">
                <span className="text-primary font-bold">•</span>
                <span>Stay informed on all key dates, from registration to seat allotment</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <span className="w-1 h-6 bg-secondary rounded-full"></span>
              Official Resources
            </h3>
            <div className="p-4 border border-secondary/30 rounded-lg hover:border-secondary transition-colors">
              <p className="text-sm text-foreground/70 mb-2">NEET UG Official Portal</p>
              <a
                href="https://neet.nta.nic.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary font-semibold hover:underline"
              >
                https://neet.nta.nic.in
              </a>
              <p className="text-sm text-foreground/70 mt-3">
                Access admit cards, results, and counselling notifications directly from the official portal
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
