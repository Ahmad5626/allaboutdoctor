export default function Hero() {
  return (
    <header className="relative border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        
      
        {/* Right Side - Content */}
        <div>
          <span
            className="inline-flex items-center rounded-full border border-border/60 bg-card px-3 py-1 text-xs font-medium text-muted-foreground animate-fade-up"
            style={{ animationDelay: "40ms" }}
          >
            All About Doctor Education Pvt Ltd
          </span>

          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-5xl animate-fade-up mt-4"
            style={{ animationDelay: "100ms" }}
          >
            About{" "}
            <span className="text-primary">All About Doctor Education Pvt Ltd</span>
          </h1>

          <div className="mt-6 space-y-4 text-muted-foreground text-sm/6 md:text-base/7">
            <p>
              All About Doctor Education Pvt. Ltd. is a doctor-led medical education consultancy dedicated to guiding aspiring doctors toward globally recognized MBBS programs. Founded in 2015 by Dr. Anand Sharma (MD Physician) and Ms. Deeksha Bhargava, All About Doctor was built on one mission — to make medical education transparent, ethical, and globally accessible.
            </p>

            <p>
              Over the years, we have helped thousands of students secure admission to NMC and WHO-approved universities across India and abroad. Our expert team of doctors, counsellors, and education strategists ensures every student receives genuine guidance — from the first counselling session to post-arrival support.
            </p>

            <p>
              Explore our{" "}
              <span className="text-primary font-semibold">
                Leadership & Experts
              </span>{" "}
              or find your nearest counselling centre at{" "}
              <span className="text-primary font-semibold">
                Our Indian Branches.
              </span>
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/about-us/our-team"
              className="inline-flex items-center justify-center rounded-lg border bg-secondary px-6 py-3 text-sm font-medium text-white hover:opacity-85 transition"
            >
              Our Team
            </a>
            <a
              href="/about-us/our-branches"
              className="inline-flex items-center justify-center rounded-lg border bg-primary px-6 py-3 text-sm font-medium text-white hover:opacity-85 transition"
            >
              Our Branches
            </a>
          </div>
        </div>
          {/* Left Side - Image */}
        <div className="relative flex justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvtWnu1a8-m7GprreiGLCalQj3ytINQctr2A&s"
            alt="All About Doctor Education Pvt Ltd"
            className="w-full max-w-md rounded-2xl shadow-lg border border-border/60 object-cover"
          />
        </div>

      </div>

      {/* Stats Section */}
 
    </header>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-lg bg-background p-4 text-center ring-1 ring-border/60 hover:bg-muted/30 transition">
      <div className="text-xs uppercase tracking-wide text-muted-foreground">
        {label}
      </div>
      <div className="mt-1 text-lg md:text-xl font-semibold">{value}</div>
    </div>
  );
}
