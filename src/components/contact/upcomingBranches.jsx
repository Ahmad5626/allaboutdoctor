export default function UpcomingBranches() {
  const cities = [
    "Indore",
    "Coimbatore",
    "Sikar",
    "Hyderabad",
    "Srinagar",
    "Kolkata",
    "Ahmedabad",
    "Chennai",
  ];

  return (
    <section
      id="upcoming-branches"
      className="bg-gradient-to-b from-muted/20 to-white py-12 md:py-16 border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-6 text-center">
        {/* Header */}
        <header className="mb-8">
          <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Upcoming <span className="text-primary">Branches</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-sm md:text-base">
            Expanding to new cities soon to serve you better.
          </p>
        </header>

        {/* City Grid */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {cities.map((city, i) => (
            <span
              key={city}
              className="group relative overflow-hidden px-6 py-3 rounded-full border border-border bg-white shadow-sm hover:border-primary/40 hover:shadow-md transition-all text-sm md:text-base font-medium"
            >
              <span className="relative z-10 text-gray-800 group-hover:text-primary transition-colors">
                {city}
              </span>
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-all rounded-full" />
            </span>
          ))}
        </div>

        {/* Optional Footer Line */}
        {/* <p className="mt-10 text-sm text-muted-foreground">
          Stay tuned for announcements on our new branch openings!
        </p> */}
      </div>
    </section>
  );
}
