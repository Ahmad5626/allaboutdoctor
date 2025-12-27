export default function NeetCounsellingProcess() {
const steps = [
  { step: "01", title: "Qualifying marks" },
  { step: "02", title: "Form filling / online registration" },
  { step: "03", title: "Online or offline state-wise form filling" },
  { step: "04", title: "Document verification" },
  { step: "05", title: "Choice filling (very sensitive round)" },
  { step: "06", title: "Merit list declaration" },
  { step: "07", title: "First round cut-off" },
  { step: "08", title: "Seat vacancy status" },
  { step: "09", title: "Round 2 jump process" },
  { step: "10", title: "Choice filling (very sensitive round)" },
  { step: "11", title: "Merit list declaration" },
  { step: "12", title: "Second round cut-off" },
  { step: "13", title: "Seat vacancy status" },
  { step: "14", title: "Mop-up round fresh registration" },
  { step: "15", title: "Mop-up round process" },
  { step: "16", title: "Process after mop-up round" },
  { step: "17", title: "Accurate timing for submission of fees in both cases (whether selected or not selected)" },
  { step: "18", title: "Time management in case of date clashes between 2 or 4 states of your choice and how to apply for all" },
];

  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* LEFT – Sticky Content */}
          <div className="lg:sticky lg:top-28 space-y-6">
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer">
              NEET UG Counselling Process
            </h2>

            <h3 className="text-lg text-muted-foreground leading-relaxed">
              The NEET UG counselling process follows a structured and time-bound
              system. Each step must be completed carefully, as missing deadlines
              or making incorrect choices can result in the loss of a medical
              seat.
            </h3>

            
          </div>

          {/* RIGHT – Process Steps */}
          <div className="space-y-6">
            {steps.map((item, index) => (
              <ProcessRow
                key={index}
                step={item.step}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Process Row ---------- */

function ProcessRow({ step, title, content }) {
  return (
    <div className="group relative rounded-3xl bg-white p-[1px] transition hover:shadow-xl">
      {/* gradient border */}
      <div className="rounded-3xl bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 p-6">
        {/* inner card */}
        <div className="rounded-2xl bg-white px-8 py-6">
          <div className="flex items-start gap-6">
            {/* Step number */}
            <div className="text-2xl font-semibold text-primary/40 group-hover:text-primary transition">
              {step}
            </div>

            {/* Content */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                {title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
