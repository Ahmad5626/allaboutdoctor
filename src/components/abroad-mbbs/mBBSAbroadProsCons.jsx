export default function MBBSAbroadProsCons() {
  const advantages = [
    "Affordable fees and global exposure",
    "English-medium education",
    "High-quality medical infrastructure",
    "Wide range of universities and locations",
  ];

  const challenges = [
    "Cultural and climatic differences",
    "Adaptation to new environment",
    "FMGE/NExT exam required for Indian practice",
  ];

  return (
    <section className="w-full py-10 bg-card">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="space-y-4  mb-8">
          <h1 className="text-pretty text-4xl font-semibold sm:text-4xl animate-fade-up" style={{ animationDelay: "100ms" }}>
            Pros & Cons of  Studying <span className="text-primary">MBBS Abroad</span> 
          </h1>
          <p className="text-foreground text-lg ">
            Understand the benefits and challenges to make an informed decision about pursuing MBBS abroad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Advantages */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Advantages</h3>
            <ul className="space-y-2">
              {advantages.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-foreground text-sm md:text-base">
                  <span className="text-secondary font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Challenges</h3>
            <ul className="space-y-2">
              {challenges.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-foreground text-sm md:text-base">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-foreground">
              With All About Doctor’s expert mentorship, students overcome these challenges successfully.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
