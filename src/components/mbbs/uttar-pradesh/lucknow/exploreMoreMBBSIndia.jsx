const { ArrowRight } = require("lucide-react");

// Explore More UP Section
export default function ExploreMoreUP() {
  return (
    <section className="px-4 md:px-8 py-16 border-b border-primary/20">
      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-4xl font-semibold text-foreground mb-4">
          Explore More – <span className="text-primary">MBBS in Uttar Pradesh</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
          UP offers multiple cities with reputed medical colleges, rich clinical exposure, and structured MBBS programs.
        </p>
        <a
          href="/india/uttar-pradesh/mbbs"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
        >
          Explore Full Guide Here → MBBS in Uttar Pradesh
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  )
}