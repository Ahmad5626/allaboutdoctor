export default function Page() {
  return (
    <main className="relative">
      {/* hero */}
      <section className="mx-auto w-full max-w-7xl px-4 md:px-6 py-10 md:py-16">
        <header className="text-center mb-10 md:mb-14">
          <h1 className="text-3xl md:text-5xl font-semibold text-balance">Apply with confidence</h1>
          <p className="mt-3 text-base md:text-lg text-muted-foreground">
            Our app empowers you to make smart academic decisions.
          </p>
        </header>

        {/* layout: phone mock + new slider */}
        <div className="grid gap-8 md:gap-12 lg:grid-cols-[minmax(0,420px),1fr] items-start">
          {/* phone mock */}
          <div className="relative mx-auto lg:mx-0 w-[280px] sm:w-[340px] lg:w-[400px]">
            <div className="aspect-[9/19] rounded-[2.4rem] border border-border shadow-lg bg-background/60 backdrop-blur overflow-hidden">
              <img alt="App preview" src="/mobile-app-ui-pink-header.jpg" className="h-full w-full object-cover" />
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              An all‑in‑one app for your study‑abroad needs
            </p>
          </div>

          {/* slider */}
          <div className="min-w-0">{typeof window !== "undefined" ? <ClientWrapper /> : null}</div>
        </div>
      </section>
    </main>
  )
}

function ClientWrapper() {
  // Dynamically import to keep page a server component while slider is client
  const ConfidenceCarousel = require("../../components/home/apply-confidence-alt").default
  return <ConfidenceCarousel />
}
