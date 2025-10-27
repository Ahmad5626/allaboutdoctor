export default function CounsellingFees() {
  const fees = [
    { category: "General", fee: "₹1,700" },
    { category: "General-EWS / OBC-NCL", fee: "₹1,600" },
    { category: "SC / ST / PwD / Third Gender", fee: "₹1,000" },
  ]

  return (
    <section className="w-full ">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}>Counselling <span className="text-primary">Fees</span> </h1>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-primary">
                <th className="text-left py-4 px-4 font-semibold text-foreground">Category</th>
                <th className="text-left py-4 px-4 font-semibold text-foreground">Fee</th>
              </tr>
            </thead>
            <tbody>
              {fees.map((item, idx) => (
                <tr key={idx} className="border-b border-border hover:bg-foreground/5 transition-colors">
                  <td className="py-4 px-4 text-foreground/80">{item.category}</td>
                  <td className="py-4 px-4 font-semibold text-primary">{item.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
