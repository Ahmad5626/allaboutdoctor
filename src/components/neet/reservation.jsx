export default function Reservation() {
  return (
    <section className="w-full ">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
        <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}>Reservation <span className="text-primary">Criteria</span> </h1>

        <div className="p-8 border-l-4 border-secondary rounded-lg py-6">
          <p className="text-foreground/80 leading-relaxed mb-4">
            Category-based reservation is followed as per Government of India guidelines.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            Seats are allotted for SC, ST, OBC, PwD, and EWS candidates based on merit and category-wise quotas.
          </p>
        </div>
      </div>
    </section>
  )
}
