export default function QuickComparisonTable() {
  const tableData = [
    {
      type: "Central (AIQ)",
      authority: "MCC",
      category: "Govt + Deemed + Central",
      domicile: "No",
      fees: "Govt & Deemed Fees",
    },
    {
      type: "State Quota",
      authority: "State DME / DMET",
      category: "Govt + Private (State)",
      domicile: "Yes (for Govt quota)",
      fees: "Govt + Private Fees",
    },
    {
      type: "Deemed Universities",
      authority: "MCC",
      category: "Deemed University Seats",
      domicile: "No",
      fees: "Higher Fee Structure",
    },
  ];

  return (
    <section className="w-full">
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            Quick <span className="text-primary">Comparison Table</span>
          </h1>
          <p className="max-w-3xl mx-auto mt-3 text-muted-foreground text-base md:text-lg">
            A concise comparison of Central, State, and Deemed University NEET PG
            Counselling types to help candidates make informed decisions.
          </p>
          {/* <div className="h-1 w-24 bg-primary mx-auto mt-4 rounded-full"></div> */}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-border rounded-lg text-sm md:text-base text-left bg-card/40 shadow-sm">
            <thead className="bg-primary/10 text-foreground">
              <tr>
                <th className="px-4 py-3 border-b border-border">Counselling Type</th>
                <th className="px-4 py-3 border-b border-border">Conducting Authority</th>
                <th className="px-4 py-3 border-b border-border">Seat Category</th>
                <th className="px-4 py-3 border-b border-border">Domicile Requirement</th>
                <th className="px-4 py-3 border-b border-border">Fee Structure</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr
                  key={index}
                  className={`transition-colors hover:bg-primary/5 ${
                    index % 2 === 0 ? "bg-transparent" : "bg-foreground/2"
                  }`}
                >
                  <td className="px-4 py-3 border-b border-border font-medium text-foreground">
                    {row.type}
                  </td>
                  <td className="px-4 py-3 border-b border-border text-foreground/80">
                    {row.authority}
                  </td>
                  <td className="px-4 py-3 border-b border-border text-foreground/80">
                    {row.category}
                  </td>
                  <td className="px-4 py-3 border-b border-border text-foreground/80">
                    {row.domicile}
                  </td>
                  <td className="px-4 py-3 border-b border-border text-foreground/80">
                    {row.fees}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-foreground/70 mt-8 italic">
          Understanding the differences between counselling types ensures candidates
          select the most suitable path for their NEET PG admission journey.
        </p>
      </div>
    </section>
  );
}
