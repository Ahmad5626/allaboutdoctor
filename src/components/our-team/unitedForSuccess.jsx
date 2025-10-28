export default function UnitedForSuccess() {
  return (
    <section
      id="united-for-success"
      className="bg-gradient-to-b from-background to-muted/30 border-t border-border py-20"
    >
      <div className="mx-auto max-w-5xl px-6 text-center">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          United for <span className="text-primary">Student Success</span>
        </h2>

        {/* Description */}
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Our team’s strength lies in collaboration — doctors, educators, and managers working as
          one family to guide medical aspirants from counseling to convocation.
        </p>

        <p className="mt-4 text-muted-foreground text-base italic">
          At <strong>All About Doctor</strong>, mentorship isn’t a service — it’s a lifelong
          commitment.
        </p>

        {/* Button */}
        <div className="mt-8">
          <a
            href="/about-us/our-branches"
            className="inline-block px-6 py-3 text-sm font-medium rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-sm"
          >
            Explore More
          </a>
        </div>
      </div>
    </section>
  );
}
