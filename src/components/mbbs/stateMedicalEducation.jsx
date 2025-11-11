export default function StateMedicalEducation() {
  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Delhi (NCT)",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu & Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  return (
    <section className="w-full bg-primary/5">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <h1
            className="text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            State Name <span className="text-primary">(Medical Education)</span>
          </h1>
          <p className="max-w-3xl mx-auto mt-3 text-muted-foreground text-base md:text-lg">
            Explore MBBS programs and medical education opportunities across every Indian
            state and union territory.
          </p>
         
        </div>

        {/* States Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {states.map((state, index) => (
            <div
              key={index}
              className="p-5 border border-border rounded-xl bg-card/40 hover:border-primary hover:shadow-md transition-all"
            >
              <h2 className="text-lg font-semibold text-foreground mb-2">
                {state}
              </h2>
              <p className="text-foreground/80 text-sm">
                • MBBS in {state}
              </p>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}
