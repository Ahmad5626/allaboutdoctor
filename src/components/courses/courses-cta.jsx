export default function CoursesCTA() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Start Your Medical Education Journey Today</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our courses and find the perfect path to achieve your dream of becoming a global doctor.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition">
            Explore All Courses
          </button>
          <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
