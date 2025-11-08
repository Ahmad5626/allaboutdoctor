export default function KeyHighlightsOfCounselling() {
  const highlights = [
    {
      title: "Mode",
      description: "Entire process is conducted online",
    },
    {
      title: "Authority",
      description: "MCC (Central) + Individual State Counselling Boards",
    },
    {
      title: "Seat Types",
      description: "Government, Private, Deemed, Central Universities",
    },
    {
      title: "Required",
      description: "Internship completion & valid NEET PG score",
    },
  ];

  return (
    <section className="w-full bg-primary/5">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        {/* Header */}
        <div className=" mb-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            Key Highlights of{" "}
            <span className="text-primary">NEET PG Counselling</span>
          </h1>
          <p className="max-w-3xl  mt-3 text-muted-foreground text-base md:text-lg">
            A quick overview of the major features and requirements of the NEET PG
            Counselling process.
          </p>
        
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 border border-border rounded-xl bg-card/40 hover:border-primary hover:shadow-md transition-all text-center"
            >
              <div className="flex items-center justify-center w-12 h-12 mx-auto rounded-full bg-primary text-white font-semibold mb-4">
                {index + 1}
              </div>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h2>
              <p className="text-sm text-foreground/80">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-foreground/70 mt-10 italic">
          Understanding these highlights helps candidates prepare efficiently for all
          stages of NEET PG Counselling.
        </p>
      </div>
    </section>
  );
}
