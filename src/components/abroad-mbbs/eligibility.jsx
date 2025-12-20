export default function Eligibility() {
  const highlights = [
    { label: "Course Duration", value: "5 to 6 Years (Including Internship)" },
    { label: "Eligibility", value: "10+2 with PCB (Minimum 50%) + NEET Qualified" },
    { label: "Medium of Instruction", value: "English" },
    { label: "NEET Requirement", value: "Mandatory for Indian Students" },
    { label: "Recognitions", value: "NMC, WHO, ECFMG, WFME" },
    { label: "Intake", value: "February / September (Varies by Country)" },
  ];

  return (
    <section className="w-full bg-primary/5">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        {/* Header */}
        <div className="mb-8">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}
          >
            Key Highlights of <span className="text-primary">MBBS Abroad</span>
          </h1>
        
        </div>

        {/* Highlights Table */}
        <div className="overflow-hidden border border-border rounded-lg shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead className="bg-card">
              <tr>
                <th className="px-6 py-3 text-sm font-semibold text-muted-foreground border-b border-border w-1/3">
                  Particulars
                </th>
                <th className="px-6 py-3 text-sm font-semibold text-muted-foreground border-b border-border">
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              {highlights.map((item, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-muted/40 transition-colors duration-200"
                >
                  <td className="px-6 py-4 text-sm font-medium text-foreground border-b border-border">
                    {item.label}
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground border-b border-border">
                    {item.value}
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
