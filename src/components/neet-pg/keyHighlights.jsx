export default function KeyHighlights() {
  const highlights = [
    {
      title: "Conducting Authorities",
      description: "MCC & State Medical Counselling Boards",
    },
    {
      title: "Seat Categories",
      description: "Government, Private, Deemed, & Central Universities",
    },
    {
      title: "Quota Types",
      description: "50% AIQ & State Quota Seats",
    },
    {
      title: "Counselling Rounds",
      description: "Round 1, Round 2, Mop-Up Round & Stray Vacancy Round",
    },
    {
      title: "Mode of Counselling",
      description: "Fully Online (From Registration to Reporting Instructions)",
    },
  ];

  return (
    <section className="w-full">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-14">
        <div className=" mb-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            Key <span className="text-primary">Highlights</span>
          </h1>
         
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 border border-border rounded-xl bg-card/40 shadow-sm hover:shadow-md hover:border-primary transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-semibold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground/70">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
