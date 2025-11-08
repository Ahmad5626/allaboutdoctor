export default function EligibilityApply() {
  const eligibilityPoints = [
    "Government Medical Colleges",
    "Private & Deemed Universities",
    "Central / National Medical Institutions",
  ];

  return (
    <section className="w-full  bg-primary/5">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-14">
        {/* Section Heading */}
        <div className=" mb-8">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            Who Can Apply for{" "}
            <span className="text-primary">NEET PG Counselling?</span>
          </h1>
          
        </div>

        {/* Description */}
        <p className=" max-w-3xl  text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
          Candidates who have qualified in the{" "}
          <strong>NEET PG Entrance Examination</strong> and hold a valid scorecard are
          eligible to take part in the counselling process for seats in:
        </p>

        {/* Eligibility Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {eligibilityPoints.map((point, index) => (
            <div
              key={index}
              className="p-6 border border-border rounded-xl hover:border-primary transition-all bg-card/40 shadow-sm hover:shadow-md text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary text-white font-bold text-xl">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {point}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
