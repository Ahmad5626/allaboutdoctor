export default function ExpertGuidance() {
  const supportAreas = [
    "MCC (AIQ & Deemed) Counselling",
    "All State Medical Counselling Boards",
    "Private & NRI Quota Admission Assistance",
  ];

  const weHelpYou = [
    "Identify best seat possibilities based on rank & preference",
    "Understand fee structure & bond rules",
    "Optimize choice filling strategy",
    "Secure admission smoothly and transparently",
  ];

  return (
    <section className="w-full bg-card/40">
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-16">
        {/* Header */}
        <div className=" mb-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            Expert Guidance for{" "}
            <span className="text-primary">All Counselling Types</span>
          </h1>
          <p className="max-w-3xl mt-3 text-muted-foreground text-base md:text-lg">
            All About Doctor Education Pvt. Ltd. provides structured and transparent
            counselling support for every admission pathway.
          </p>
          
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left - Support Areas */}
          <div className="p-6 border border-border rounded-xl bg-background hover:border-primary transition-all shadow-sm">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              We Provide Support Across:
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              {supportAreas.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Right - We Help You */}
          <div className="p-6 border border-border rounded-xl bg-background hover:border-primary transition-all shadow-sm">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              We Help You:
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              {weHelpYou.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-10">
          <p className="text-muted-foreground mb-4 text-base md:text-lg">
            Get personalized counselling assistance and secure your NEET PG seat with
            confidence.
          </p>
          <button className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-md">
            Get Expert Support
          </button>
        </div>
      </div>
    </section>
  );
}
