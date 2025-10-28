export default function FoundersMessage() {
  return (
    <section
      id="founders-message"
      className="relative bg-gradient-to-b from-background to-muted/30 border-t border-border py-20"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
          Founders’ <span className="text-primary">Message</span>
        </h2>

        {/* Message Card */}
        <div className="rounded-2xl bg-card border border-border p-8 md:p-12 shadow-sm hover:shadow-md transition-all">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            <span className="font-semibold text-foreground">All About Doctor</span> was founded with
            a vision to redefine medical education consultancy through truth, mentorship, and
            doctor-led guidance. Every student deserves clarity, confidence, and career success — 
            and we make that happen.
          </p>

          {/* Signature */}
          <div className="mt-6">
            <p className="text-lg font-semibold text-primary">
              — Dr. Anand Sharma
            </p>
            <p className="text-sm text-muted-foreground">
              Founder & Managing Director
            </p>
          </div>
        </div>

        {/* Decorative Glow */}
        <div className="absolute inset-0 -z-10 flex justify-center">
          <div className="w-72 h-72 bg-primary/10 blur-3xl rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
