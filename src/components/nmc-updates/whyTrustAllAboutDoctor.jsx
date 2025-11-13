export default function WhyTrustAllAboutDoctor() {
  const reasons = [
    "Doctor-led advisory team",
    "Verified and authentic NMC regulations",
    "Guidance for MBBS in India and Abroad",
    "Structured support from NEET to NExT and FMGE/NExT pathways",
  ];

  return (
    <section className="w-full bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <h1
            className="text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            Why Trust{" "}
            <span className="text-primary">
              All About Doctor Education Pvt. Ltd.?
            </span>
          </h1>
          <p className="max-w-3xl mx-auto mt-3 text-muted-foreground text-base md:text-lg">
            We are committed to providing transparent, reliable, and expert-driven
            guidance for every stage of your medical education journey.
          </p>
          <div className="h-1 w-24 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-6 border border-border rounded-xl bg-background hover:border-primary hover:shadow-md transition-all"
            >
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white font-bold">
                ✓
              </div>
              <p className="text-foreground/80 text-base leading-relaxed font-medium">
                {reason}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-10">
          <p className=" ">
            All About Doctor Education Pvt. Ltd. ensures every student receives
            <span className="text-primary font-semibold">
              {" "}
              reliable updates{" "}
            </span>
            and{" "}
            <span className="text-primary font-semibold">
              transparent guidance
            </span>{" "}
            throughout their medical education journey.
          </p>
        </div>
      </div>
    </section>
  );
}
