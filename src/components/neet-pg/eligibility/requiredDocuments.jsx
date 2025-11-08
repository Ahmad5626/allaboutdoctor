export default function RequiredDocuments() {
  const documents = [
    {
      document: "NEET PG Scorecard",
      purpose: "Ranking & seat allotment",
    },
    {
      document: "MBBS Degree / Provisional Certificate",
      purpose: "Education verification",
    },
    {
      document: "Internship Completion Certificate",
      purpose: "Mandatory admission eligibility",
    },
    {
      document: "Provisional / Permanent Medical Registration (NMC/SMC)",
      purpose: "Practice verification",
    },
    {
      document: "Class 10 & 12 Mark Sheets",
      purpose: "Age & identity proof",
    },
    {
      document: "Government ID (Aadhaar / Passport / PAN)",
      purpose: "Identity verification",
    },
    {
      document: "Category Certificate (if applicable)",
      purpose: "Reservation claim",
    },
    {
      document: "NRI Documents (if applicable)",
      purpose: "For NRI quota admissions",
    },
  ];

  return (
    <section className="w-full bg-primary/5">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-14">
        {/* Section Header */}
        <div className=" mb-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            Required Documents for{" "}
            <span className="text-primary">NEET PG Counselling</span>
          </h1>
          
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-border rounded-lg text-sm text-left bg-card/40 shadow-sm">
            <thead className="bg-primary/10 text-foreground">
              <tr>
                <th className="px-4 py-3 border-b border-border w-1/2">
                  Document
                </th>
                <th className="px-4 py-3 border-b border-border w-1/2">
                  Purpose
                </th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc, index) => (
                <tr
                  key={index}
                  className={`transition-colors hover:bg-primary/5 ${
                    index % 2 === 0 ? "bg-transparent" : "bg-foreground/2"
                  }`}
                >
                  <td className="px-4 py-3 border-b border-border font-medium text-foreground">
                    {doc.document}
                  </td>
                  <td className="px-4 py-3 border-b border-border text-foreground/80">
                    {doc.purpose}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Note */}
        <p className="text-center text-sm text-foreground/70 mt-6 italic">
          All documents must be clear, valid, and uploaded as per portal instructions.
        </p>
      </div>
    </section>
  );
}
