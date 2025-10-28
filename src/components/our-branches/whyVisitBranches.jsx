export default function WhyVisitBranches() {
  return (
    <section
      id="why-visit-branches"
      className="bg-gradient-to-b from-background to-muted/30 border-t border-border py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Why Visit <span className="text-primary">Our Branches?</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            All branches maintain the same high standard of professionalism, transparency, and
            student-first support as our Jaipur head office.
          </p>
        </header>

        {/* Services / Features List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            "Personalized counseling for MBBS in India & abroad",
            "University selection & admission support",
            "Visa, travel, and documentation assistance",
            "Pre-departure & post-arrival guidance",
            "FMGE/NExT mentorship",
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl bg-card border border-border p-6 shadow-sm hover:shadow-md transition-all"
            >
              <p className="text-muted-foreground text-base leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Contact / Get in Touch Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-muted-foreground mb-2">
            Visit your nearest branch or contact our Head Office – Jaipur for appointments,
            counseling sessions, and student support:
          </p>

          <div className="mt-4 space-y-2 text-lg">
            <p>
              📍 <strong>Jaipur Head Office:</strong>{" "}
              <a
                href="tel:+919351018577"
                className="text-primary hover:underline"
              >
                +91 93510 18577
              </a>
            </p>
            <p>
              📧 <strong>Email:</strong>{" "}
              <a
                href="mailto:info@allaboutdoctor.in"
                className="text-primary hover:underline"
              >
                info@allaboutdoctor.in
              </a>
            </p>
          </div>

          {/* Links */}
          <div className="mt-6 flex justify-center gap-4">
            <a
              href="/about-us"
              className="px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-medium shadow-sm hover:bg-primary/90 transition-all"
            >
              About Us
            </a>
            <a
              href="/about-us/our-team"
              className="px-6 py-3 rounded-xl border border-primary text-primary text-sm font-medium hover:bg-primary/10 transition-all"
            >
              Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
