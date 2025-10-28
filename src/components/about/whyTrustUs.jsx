import Link from "next/link";

export default function WhyTrustUs() {
  const trustPoints = [
    "9+ Years of Industry Experience",
    "20+ Doctor-Led Counsellors",
    "100% Verified Global University Partners",
    "Offices Across Major Indian Cities",
    "24/7 Student Support System",
  ];

  return (
    <section
      id="why-trust-us"
      className="relative bg-gradient-to-r from-primary/5 via-background to-muted/20 border-t border-border py-20"
    >
    <div className="max-w-7xl mx-auto px-6 text-center">
         <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Why <span className="text-primary">Students Trust Us</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Over the years, our commitment to transparency, expertise, and student care has made us
            one of the most trusted names in medical education consultancy.
          </p>
    </div>
      <div className="mx-auto max-w-7xl px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        
        <div className="flex-1 space-y-6">
         

          {/* Trust Points List */}
          <ul className="mt-6 space-y-4">
            {trustPoints.map((point, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-base text-muted-foreground leading-relaxed"
              >
                <span className="text-primary text-xl">✔</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* Call to Action */}
          <div className="pt-8">
            <Link
              href="/about-us/our-team"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline underline-offset-4"
            >
              Learn more about the people behind our success — visit our Expert Team Page →
            </Link>
          </div>
        </div>

        {/* Right Side Illustration or Accent Box */}
        <div className="flex-1 relative">
          <div className="rounded-2xl bg-card shadow-md ring-1 ring-border p-8 lg:p-12 text-center">
            <h3 className="text-3xl font-bold text-primary mb-4">9+ Years</h3>
            <p className="text-muted-foreground text-lg">
              of empowering future doctors with trusted global education pathways.
            </p>
          </div>

          {/* Decorative Element */}
          <div className="absolute -z-10 top-0 right-0 w-40 h-40 bg-primary/10 blur-3xl rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
