export default function ImportantNotes() {
  const notes = [
    "Candidates without internship completion on time cannot participate.",
    "Category claims must match NEET PG registration details.",
    "Incorrect or incomplete documentation may lead to seat cancellation.",
  ];

  return (
    <section className="w-full">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-14">
        {/* Header */}
        <div className=" mb-8">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up text-foreground"
            style={{ animationDelay: "100ms" }}
          >
            Important <span className="text-primary">Notes</span>
          </h1>
          
        </div>

        {/* Notes List */}
        <div className="space-y-4">
          {notes.map((note, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 border border-border rounded-lg bg-card/40 hover:border-primary transition-all shadow-sm"
            >
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white font-bold">
                {index + 1}
              </div>
              <p className="text-foreground/80 text-base leading-relaxed">
                {note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
