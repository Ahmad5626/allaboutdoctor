export default function NeetCounsellingProcessPg() {
  const steps = [
{
      step: "01",
      title: "NEET PG Qualification & Cutoff Verification",
      desc: "Candidates must qualify NEET PG and secure the category-wise cutoff percentile to become eligible for counselling.",
    },
    {
      step: "02",
      title: "Online Registration for AIQ / State Counselling",
      desc: "Registration is completed on the MCC portal for All India Quota counselling and on respective state counselling portals.",
    },
    {
      step: "03",
      title: "Document Verification",
      desc: "Uploaded documents such as academic records, internship details, and medical registration certificates are verified by the counselling authority.",
    },
    {
      step: "04",
      title: "Choice Filling & Locking",
      desc: "Candidates select and lock their preferred colleges and MD/MS/Diploma branches. This is one of the most critical stages of counselling.",
    },
    {
      step: "05",
      title: "Seat Allotment (Round-wise)",
      desc: "Seat allotment is conducted through multiple rounds including Round 1, Round 2, and Mop-up rounds based on merit and availability.",
    },
    {
      step: "06",
      title: "Seat Acceptance or Upgradation Option",
      desc: "Candidates can accept the allotted seat or opt for upgradation in the next counselling round, as per eligibility.",
    },
    {
      step: "07",
      title: "Fee Payment",
      desc: "Admission fees and security deposits must be paid within the specified timeline to confirm participation or seat acceptance.",
    },
    {
      step: "08",
      title: "Reporting to the Allotted College",
      desc: "Candidates must report to the allotted medical college with original documents to complete admission formalities.",
    },
    {
      step: "09",
      title: "Mop-Up Round Counselling",
      desc: "Vacant seats remaining after regular rounds are filled through the mop-up round for eligible candidates.",
    },
    {
      step: "10",
      title: "Stray Vacancy Round",
      desc: "Final remaining seats are allotted as per official stray vacancy guidelines issued by the counselling authorities.",
    },
  ];

  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* LEFT – Sticky Content */}
          <div className="lg:sticky lg:top-28 space-y-6">
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer">
              NEET PG Counselling Process – Step-by-Step
            </h2>

            <h3 className="text-lg text-muted-foreground leading-relaxed">
            Important Steps for NEET PG Counselling
            </h3>
          </div>

          {/* RIGHT – Process Steps */}
          <div className="space-y-6">
            {steps.map((item, index) => (
              <ProcessRow
                key={index}
                step={item.step}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Process Row ---------- */

function ProcessRow({ step, title ,desc}) {
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

            {/* Title */}
            <div className="">
 <h3 className="text-lg md:text-xl font-semibold text-foreground">
              {title}
            </h3>
            <p className="pt-4">{desc}</p>
            </div>
           
            
          </div>
        </div>
      </div>
    </div>
  );
}
