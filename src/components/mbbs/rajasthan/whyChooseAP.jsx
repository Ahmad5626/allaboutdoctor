export default function WhyChooseState() {
  const criteria = [
    {
      title: "NEET UG–Based, Transparent Admissions",
      desc: " Admissions are merit-based through NEET UG with valid scores and ranks.",
      icon: "✅",
      
    },
    {
      title: "Clear Eligibility & Academic Standards",
      desc: "Requires Class 12 with PCB & English and category-wise minimum marks as per NEET guidelines.",
     icon: "✅",
      
    },
    {
      title: "Closed + Open State Advantage",
      desc: "State Quota (85%) reserved for Rajasthan domicile; AIQ and private/management/NRI seats open for all states.",
      icon: "✅",
      
    },
    {
      title: "Competitive Yet Achievable Cut-offs",
      desc: " Government colleges have higher cut-offs; private colleges provide opportunities at lower NEET scores.",
      icon: "✅",
  
    },
    {
      title: "Structured Counselling Process",
      desc: " Smooth process with online registration, choice filling, seat allotment, and document verification.",
     icon: "✅",
     
    },
     {
      title: "Well-Established Medical Colleges",
      desc: "  Reputed colleges with experienced faculty, good infrastructure, and strong clinical exposure.",
     icon: "✅",
     
    }
   
  ];

  return (
    <section
      className="
        relative overflow-hidden py-20
        bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5
      "
    >
      {/* Soft background glows */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 fade-item">
            Why Choose 
          
             Rajasthan for MBBS?
            
          </h2>
       
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {criteria.map((item, index) => (
            <div
              key={index}
              className="
                group relative rounded-2xl
                bg-white/80 backdrop-blur-md
                border border-primary/10
                p-6 transition-all duration-500
                hover:-translate-y-2 hover:shadow-xl fade-item             "
            >
              {/* Left gradient strip */}
              <div
                className={`absolute left-0 top-0 h-full w-1.5 rounded-l-2xl bg-gradient-to-b from-primary to-secondary`}
              />

              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="mb-2 text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {item.desc}
              </p>

              {/* Hover glow */}
              {/* <div
                className={`pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr ${item.accent}/10`}
              /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
