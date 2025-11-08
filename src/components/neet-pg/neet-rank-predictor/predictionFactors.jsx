export default function PredictionFactors() {
  const factors = [
    {
      factor: "NEET PG Score & Rank",
      role: "Primary selection basis",
    },
    {
      factor: "Category (GEN/OBC/SC/ST/EWS)",
      role: "Reservation-based seat availability",
    },
    {
      factor: "Domicile (For State Quota)",
      role: "State preference & eligibility",
    },
    {
      factor: "College Type Preference",
      role: "Government / Private / Deemed",
    },
    {
      factor: "Specialization Demand",
      role: "Clinical vs Non-Clinical trends",
    },
    {
      factor: "Previous Year Cutoff Data",
      role: "Realistic outcome forecasting",
    },
  ];

  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        {/* Header */}
        <div className=" mb-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            Factors Considered in{" "}
            <span className="text-primary">Prediction</span>
          </h1>
          <p className="max-w-3xl  mt-3 text-muted-foreground text-base md:text-lg">
            The NEET PG Rank Predictor uses multiple key factors to generate accurate,
            data-backed predictions for your admission possibilities.
          </p>
          
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-border rounded-lg text-sm md:text-base text-left bg-card/40 shadow-sm">
            <thead className="bg-primary/10 text-foreground">
              <tr>
                <th className="px-4 py-3 border-b border-border w-1/2">
                  Factor
                </th>
                <th className="px-4 py-3 border-b border-border w-1/2">
                  Role in Prediction
                </th>
              </tr>
            </thead>
            <tbody>
              {factors.map((item, index) => (
                <tr
                  key={index}
                  className={`transition-colors hover:bg-primary/5 ${
                    index % 2 === 0 ? "bg-transparent" : "bg-foreground/2"
                  }`}
                >
                  <td className="px-4 py-3 border-b border-border font-medium text-foreground">
                    {item.factor}
                  </td>
                  <td className="px-4 py-3 border-b border-border text-foreground/80">
                    {item.role}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        
      </div>
    </section>
  );
}
