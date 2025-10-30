export default function Hero() {
  return (
    <header className="relative overflow-hidden border-b border-border">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <span
          className="inline-flex items-center rounded-full border border-border/60 bg-card px-3 py-1 text-xs font-medium text-muted-foreground animate-fade-up"
          style={{ animationDelay: "40ms" }}
        >
          All About Doctor Education Pvt Ltd
        </span>

        <h1
          className="text-pretty text-4xl font-semibold leading-tight sm:text-5xl animate-fade-up my-4"
          style={{ animationDelay: "100ms" }}
        >
          BVSc – <span className="text-primary">Bachelor of Veterinary Science</span>
        </h1>

        <p className="text-lg md:text-xl text-primary font-semibold">
          Begin your veterinary career with All About Doctor Education Pvt. Ltd.
        </p>

        <p className="mt-4 max-w-2xl text-sm/6 md:text-base/7 text-muted-foreground">
          India’s most trusted medical and veterinary education consultancy. We guide aspiring
          veterinarians toward successful BVSc admissions in top VCI-approved universities across
          India and abroad — helping students build rewarding careers in animal care, surgery, and
          public health.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg border bg-secondary px-5 py-3 text-sm font-medium text-white hover:opacity-85 transition"
          >
            Get Free Counselling
          </a>
        </div>
      </div>
    </header>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-lg p-4 ring-1 ring-border">
      <div className="text-xs uppercase tracking-wide text-muted-foreground">
        {label}
      </div>
      <div className="mt-1 text-lg md:text-xl font-semibold">{value}</div>
    </div>
  );
}
