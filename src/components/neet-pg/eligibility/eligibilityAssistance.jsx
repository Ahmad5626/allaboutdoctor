export default function EligibilityAssistance() {
  const services = [
    "Eligibility Confirmation",
    "Category/Quota Selection",
    "Document Verification & Upload Support",
    "Registration Guidance for AIQ + State Counselling",
  ];

  return (
    <section className="w-full bg-primary/5">
      <div className="relative mx-auto max-w-7xl px-6 py-14 md:py-16">
        {/* Header */}
        <div className="text-center mb-8">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up text-foreground"
            style={{ animationDelay: "100ms" }}
          >
            Need Assistance with{" "}
            <span className="text-primary">Eligibility Verification?</span>
          </h1>
          <p className="max-w-3xl mx-auto mt-4 text-muted-foreground text-base md:text-lg">
            All About Doctor Education Pvt. Ltd. guides medical graduates in:
          </p>
          <div className="h-1 w-24 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {services.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-5 border border-border rounded-xl bg-background hover:border-primary transition-all shadow-sm"
            >
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white font-bold">
                ✓
              </div>
              <p className="text-foreground/80 text-base">{item}</p>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-10">
          <p className="text-muted-foreground mb-4 text-base md:text-lg">
            Start your counselling preparation with expert support.
          </p>
          <button className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-md">
            Get Expert Assistance
          </button>
        </div>
      </div>
    </section>
  );
}
