export default function AdditionalCounsellingRounds() {
  const rounds = [
    {
      type: "Round 1",
      purpose: "First phase of seat allotment",
    },
    {
      type: "Round 2",
      purpose: "Chance for upgradation or better options",
    },
    {
      type: "Mop-Up Round",
      purpose: "Seats remaining after first two rounds",
    },
    {
      type: "Stray Vacancy Round",
      purpose: "Final seat allocation to eligible candidates",
    },
  ];

  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            Additional <span className="text-primary">Counselling Rounds</span>
          </h1>
          <p className="max-w-3xl mx-auto mt-3 text-muted-foreground text-base md:text-lg">
            These rounds ensure that all available NEET PG seats are filled through a
            transparent and fair allocation process.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-border rounded-lg text-sm md:text-base text-left bg-card/40 shadow-sm">
            <thead className="bg-primary/10 text-foreground">
              <tr>
                <th className="px-4 py-3 border-b border-border w-1/3">
                  Round Type
                </th>
                <th className="px-4 py-3 border-b border-border w-2/3">
                  Purpose
                </th>
              </tr>
            </thead>
            <tbody>
              {rounds.map((round, index) => (
                <tr
                  key={index}
                  className={`transition-colors hover:bg-primary/5 ${
                    index % 2 === 0 ? "bg-transparent" : "bg-foreground/2"
                  }`}
                >
                  <td className="px-4 py-3 border-b border-border font-medium text-foreground">
                    {round.type}
                  </td>
                  <td className="px-4 py-3 border-b border-border text-foreground/80">
                    {round.purpose}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-foreground/70 mt-8 italic">
          Candidates should actively participate in all applicable rounds to maximize
          their chances of securing a preferred seat.
        </p>
      </div>
    </section>
  );
}
