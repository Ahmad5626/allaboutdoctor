export default function CounsellingProcedure() {
  const steps = [
    {
      title: "Step 1: Counselling Registration",
      description: (
        <>
          <p>
            Candidates must register on:
            <br />
            <strong>MCC Portal</strong> (for AIQ & Deemed Universities), and/or{" "}
            <strong>State Counselling Portal</strong> (for State Quota)
          </p>
          <p className="mt-2 font-medium text-foreground">
            Registration Includes:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Entering NEET PG Roll Number & Rank</li>
            <li>Personal & Academic Details</li>
            <li>Creating Login Credentials</li>
          </ul>
        </>
      ),
    },
    {
      title: "Step 2: Fee Payment & Security Deposit",
      description: (
        <>
          <p>
            Pay the non-refundable registration fee and refundable security deposit,
            based on:
          </p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Category (General / OBC / SC / ST)</li>
            <li>Institution Type (Government / Private / Deemed)</li>
          </ul>
          <p className="mt-2 italic text-foreground/80">
            Security deposit is refunded after counselling based on seat acceptance
            rules.
          </p>
        </>
      ),
    },
    {
      title: "Step 3: Choice Filling & Locking",
      description: (
        <>
          <p>Candidates select:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Preferred Medical Colleges</li>
            <li>Preferred Specializations (MD/MS/PG Diploma)</li>
          </ul>
          <p className="mt-2 text-foreground/80 font-medium">
            <strong>Important:</strong> Choices must be carefully arranged in priority
            order and locked before the deadline.
          </p>
        </>
      ),
    },
    {
      title: "Step 4: Seat Allotment Result",
      description: (
        <>
          <p>The system allocates seats based on:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>NEET PG Rank</li>
            <li>Category / Quota</li>
            <li>Seat Availability</li>
            <li>Preference Order</li>
          </ul>
          <p className="mt-2">
            Candidates can download:
            <br />
            <strong>Seat Allotment Letter</strong> & <strong>Reporting Instructions</strong>
          </p>
        </>
      ),
    },
    {
      title: "Step 5: Reporting & Document Verification",
      description: (
        <>
          <p>
            If allotted a seat, the candidate must either:
            <br />
            <strong>Report to the allotted college</strong> or{" "}
            <strong>report online</strong> as per instructions (when applicable)
          </p>
          <p className="mt-2 font-medium text-foreground">Verification Includes:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Academic Certificates</li>
            <li>Internship Completion</li>
            <li>Registration Certificate</li>
            <li>Identity & Category Proof</li>
          </ul>
        </>
      ),
    },
    {
      title: "Step 6: Upgradation, Retention, or Exit",
      description: (
        <>
          <p>After Round 1 / Round 2, candidates can:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Accept the seat and finalize admission</li>
            <li>Opt for Upgradation in the next round</li>
            <li>Exit to participate in further rounds / State Counselling</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <section className="w-full  bg-primary/5">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        {/* Header */}
        <div className=" mb-12">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            Step-by-Step{" "}
            <span className="text-primary">NEET PG Counselling Procedure</span>
          </h1>
          <p className="max-w-3xl  mt-3 text-muted-foreground text-base md:text-lg">
            Follow this structured process to successfully navigate your NEET PG
            counselling for MD, MS, and PG Diploma admissions.
          </p>
          
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 border border-border rounded-xl bg-card/40 hover:border-primary transition-all shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-semibold">
                  {index + 1}
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h2>
                  <div className="text-foreground/80 text-base leading-relaxed">
                    {step.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-foreground/70 mt-10 italic">
          Careful attention to each step ensures a smooth and transparent admission process
          during NEET PG Counselling.
        </p>
      </div>
    </section>
  );
}
