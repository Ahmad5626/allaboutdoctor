export default function Eligibility() {
  const eligibilityPoints = [
    "Have completed 10+2 with Physics, Chemistry, and Biology.",
    "Score at least 50% marks (40% for reserved categories).",
    "Qualify NEET-UG exam in the admission year.",
    "Be at least 17 years of age as of 31st December of the admission year.",
    "Possess a valid passport.",
  ];

  return (
    <section className="w-full bg-primary/5">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <div>
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}
          >Eligibility Criteria
            <span className="text-primary">for MBBS Abroad</span> 
          </h1>
          <p className="text-foreground text-base md:text-lg mt-4">
            To apply for MBBS abroad, a student must:
          </p>
        </div>

        <ul className="space-y-3 mt-6 border border-border rounded-lg p-6">
          {eligibilityPoints.map((point, idx) => (
            <li
              key={idx}
              className="text-foreground text-sm md:text-base flex items-start"
            >
              <span className="text-secondary mr-2">✓</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
