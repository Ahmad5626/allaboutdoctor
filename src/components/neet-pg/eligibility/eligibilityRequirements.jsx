export default function EligibilityRequirements() {
  return (
    <section className="w-full">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-14">
        {/* Section Header */}
        <div className=" mb-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            Eligibility Requirements <span className="text-primary">(Detailed)</span>
          </h1>
         
        </div>

        {/* Requirement Sections */}
        <div className="space-y-10 text-muted-foreground">
          {/* 1. Educational Qualification */}
          <div className="p-6 border border-border rounded-xl hover:border-primary transition-all bg-card/40 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Educational Qualification
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Must hold an MBBS degree from a recognized medical college.</li>
              <li>College must be recognized by NMC / MCI.</li>
              <li>
                Must have completed or be completing the compulsory rotatory internship on
                or before the counselling deadline.
              </li>
              <li>
                Must hold a provisional or permanent registration certificate issued by:
                <ul className="list-disc pl-6 mt-2">
                  <li>NMC / MCI, or</li>
                  <li>State Medical Council (SMC)</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* 2. Internship Completion Requirement */}
          <div className="p-6 border border-border rounded-xl hover:border-primary transition-all bg-card/40 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. Internship Completion Requirement
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                A 1-year internship must be completed on or before the date specified in
                the NEET PG Information Bulletin.
              </li>
              <li>
                Internship completion certificate is mandatory during document verification.
              </li>
            </ul>
          </div>

          {/* 3. Minimum Qualifying NEET PG Score */}
          <div className="p-6 border border-border rounded-xl hover:border-primary transition-all bg-card/40 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. Minimum Qualifying NEET PG Score (Cut-Off)
            </h2>
            <p className="mb-4">
              Candidates must meet the minimum percentile to qualify:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border border-border rounded-lg text-sm text-left">
                <thead className="bg-primary/10 text-foreground">
                  <tr>
                    <th className="px-4 py-2 border-b border-border">Category</th>
                    <th className="px-4 py-2 border-b border-border">Minimum Percentile</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-b border-border">
                      General / Unreserved
                    </td>
                    <td className="px-4 py-2 border-b border-border">50th Percentile</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-border">SC / ST / OBC</td>
                    <td className="px-4 py-2 border-b border-border">40th Percentile</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-border">UR-PwD</td>
                    <td className="px-4 py-2 border-b border-border">45th Percentile</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm mt-3 italic">
              (Cut-off scores vary yearly based on result statistics.)
            </p>
          </div>

          {/* 4. Age Limit */}
          <div className="p-6 border border-border rounded-xl hover:border-primary transition-all bg-card/40 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Age Limit</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>No upper age limit for NEET PG Counselling.</li>
              <li>
                Candidates must meet only the MBBS completion + internship criteria.
              </li>
            </ul>
          </div>

          {/* 5. Nationality & Participation Eligibility */}
          <div className="p-6 border border-border rounded-xl hover:border-primary transition-all bg-card/40 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Nationality & Participation Eligibility
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border border-border rounded-lg text-sm text-left">
                <thead className="bg-primary/10 text-foreground">
                  <tr>
                    <th className="px-4 py-2 border-b border-border">Candidate Type</th>
                    <th className="px-4 py-2 border-b border-border">Eligibility</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-b border-border">Indian Citizens</td>
                    <td className="px-4 py-2 border-b border-border">Fully Eligible</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-border">NRI Candidates</td>
                    <td className="px-4 py-2 border-b border-border">
                      Eligible under NRI quota / Deemed Universities
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-border">Foreign Nationals</td>
                    <td className="px-4 py-2 border-b border-border">
                      Eligible for MCC AIQ counselling with temporary registration
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
