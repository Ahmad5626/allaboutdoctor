export default function ServicesCTA() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="border border-primary rounded-lg p-8 md:p-12 text-center space-y-6">
        <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}>Begin Your Medical <span className="text-primary">Journey Today</span> </h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          At All About Doctor Education Pvt Ltd, we are dedicated to empowering future doctors with the right guidance,
          opportunities, and confidence. Start your journey toward a successful global medical career today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors">
            Schedule Consultation
          </button>
          <button className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  )
}
