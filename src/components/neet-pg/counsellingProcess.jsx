export default function CounsellingProcess() {
  const steps = [
    {
      step: "Step 1: Registration",
      description:
        "Candidates register on MCC or State Counselling portals using NEET PG credentials.",
    },
    {
      step: "Step 2: Fee Payment & Security Deposit",
      description:
        "Pay registration and refundable security fees according to the selected category and institution type.",
    },
    {
      step: "Step 3: Choice Filling & Locking",
      description:
        "Select preferred specializations and colleges in order of priority and lock choices before the deadline.",
    },
    {
      step: "Step 4: Seat Allotment",
      description:
        "Seats are allotted based on NEET PG rank, reservation category, and seat availability.",
    },
    {
      step: "Step 5: Reporting & Document Verification",
      description:
        "Candidates must report to the allotted institution to verify documents and confirm admission.",
    },
    {
      step: "Step 6: Upgradation or Exit",
      description:
        "Choose to accept, upgrade, or exit for participation in upcoming rounds.",
    },
  ];

  return (
    <section className="w-full">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-14">
        <div className=" mb-8">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            NEET PG Counselling Process{" "}
            <span className="text-primary">(Step-by-Step)</span>
          </h1>
      
        </div>

        <div className="space-y-6">
          {steps.map((item, index) => (
            <div
              key={index}
              className="p-6 border border-border rounded-xl hover:border-primary transition-all bg-card/40 shadow-sm hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-semibold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {item.step}
                  </h3>
                  <p className="text-sm text-foreground/70">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
