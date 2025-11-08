export default function CounsellingFocus() {
  const data = [
    {
      rank: "High Rank",
      option: "Central + State Govt Colleges",
    },
    {
      rank: "Mid Rank",
      option: "State Govt + Private Medical Colleges",
    },
    {
      rank: "Low Rank",
      option: "Deemed Universities + Stray Round Opportunities",
    },
    {
      rank: "NRI Applicants",
      option: "NRI Quota in Deemed & Private Colleges",
    },
  ];

  return (
    <section className="w-full bg-primary/5">
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            Which Counselling Should You{" "}
            <span className="text-primary">Focus On?</span>
          </h1>
          <p className="max-w-3xl mx-auto mt-3 text-muted-foreground text-base md:text-lg">
            Identify the ideal NEET PG counselling path based on your rank, eligibility,
            and admission goals.
          </p>
          
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-border rounded-lg text-sm md:text-base text-left bg-card/40 shadow-sm">
            <thead className="bg-primary/10 text-foreground">
              <tr>
                <th className="px-4 py-3 border-b border-border w-1/2">
                  Rank / Profile Type
                </th>
                <th className="px-4 py-3 border-b border-border w-1/2">
                  Suggested Counselling Option
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr
                  key={index}
                  className={`transition-colors hover:bg-primary/5 ${
                    index % 2 === 0 ? "bg-transparent" : "bg-foreground/2"
                  }`}
                >
                  <td className="px-4 py-3 border-b border-border font-medium text-foreground">
                    {row.rank}
                  </td>
                  <td className="px-4 py-3 border-b border-border text-foreground/80">
                    {row.option}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-foreground/70 mt-8 italic">
          Choosing the right counselling stream helps maximize your chances of admission
          based on rank, category, and personal preferences.
        </p>
      </div>
    </section>
  );
}
