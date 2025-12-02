// Hero Section
export default function LucknowHero() {
  return (
    <section className="w-full">
      <div className="md:flex justify-between items-center mx-auto max-w-7xl px-6 py-10 md:py-10">
        <div className="space-y-6">
          <div className="space-y-3">
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
              MBBS in Lucknow – <span className="text-primary">Complete Admission Guidance</span>
            </h1>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>
          <div className="pt-0 space-y-4">
            <p className="mt-4 text-muted-foreground text-lg md:text-xl">
              Pursuing MBBS in Lucknow is one of the best choices for medical aspirants seeking high-quality medical
              education, modern infrastructure, and strong clinical exposure. Lucknow is home to top government and
              private medical colleges known for experienced faculty, advanced hospitals, and patient-rich environments
              that support real-world medical training.
              <br />
              <br />
              With expert NEET counseling and personalized support, All About Doctor Education Pvt. Ltd. helps students
              secure MBBS admissions across the best medical colleges in Lucknow.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}