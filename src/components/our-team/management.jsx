const members = [
  { name: "Ms. Deeksha Bhargava", role: "Director & CEO", img: "/assets/img/doctor/doctor-5.jpg" },
  { name: "Mrs. Neha Jain", role: "Institutional Collaborations Head", img: "/assets/img/doctor/doctor-6.jpg" },
  { name: "Mr. Rahul Bhatia", role: "Training, Development & Quality Assurance Head; Strategic Advisor", img: "/assets/img/doctor/doctor-7.jpg" },
  { name: "Mr. Satyajeet Kumar", role: "Co-Director & Counselling & Lead Management Head", img: "/assets/img/doctor/doctor-8.jpg" },
  { name: "Mr. Prem Charles", role: "Regional Relations & Multilingual Counseling Head", img: "/assets/img/doctor/doctor-9.jpg" },
  { name: "Mr. Anand Shekar", role: "Awareness Programs & Seminar Operations Head", img: "/assets/img/doctor/doctor-10.jpg" },
  { name: "Mr. Sarthak Shandilya", role: "Student Relation Manager", img: "/assets/img/doctor/doctor-11.jpg" },
  { name: "Mr. Avinash", role: "Operations Support Team", img: "/assets/img/doctor/doctor-12.jpg" },
  { name: "Mr. Naimish kr Mishra", role: "Marketing Head", img: "/assets/img/doctor/doctor-13.jpg" },
  { name: "Mr. Anubhav", role: "Marketing & Outreach Support", img: "/assets/img/doctor/doctor-14.jpg" },
  { name: "Entire Team", role: "Dedicated All About Doctor Education Pvt Ltd Team", img: "/assets/img/doctor/doctor-15.jpg" },
];

export default function Management() {
  return (
    <section className="border-t border-border bg-gradient-to-b from-background to-muted/20">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight animate-fade-up">
            Core Management <span className="text-primary">Team</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
           Leads organizational <strong>strategy, growth, and partnerships,</strong>  ensuring All About Doctor maintains its excellence in medical education and global collaborations.
           
          </p>
        </header>

        {/* CEO Highlight */}
        <div className="relative bg-card border border-border rounded-2xl p-8 md:p-10 mb-12 shadow-md overflow-hidden text-center">
          <img
            src="/assets/img/doctor/doctor-5.jpg"
            alt="Ms. Deeksha Bhargava"
            className="w-28 h-28 mx-auto rounded-full object-cover ring-4 ring-primary/20 mb-4"
          />
          <h3 className="text-2xl font-semibold">Ms. Deeksha Bhargava</h3>
          <p className="text-sm text-muted-foreground mt-1">Director & CEO</p>
          <div className="mt-4 flex justify-center flex-wrap gap-2">
            {["Leadership", "Strategy", "Vision", "Growth"].map((b) => (
              <span
                key={b}
                className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary ring-1 ring-primary/20"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {members.map((m) => (
            <Card key={m.name} name={m.name} role={m.role} img={m.img} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ name, role, img }) {
  return (
    <article className="rounded-2xl bg-card border border-border p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all text-center group">
      <div className="relative w-24 h-24 mx-auto mb-4">
        <img
          src={img || "/management/default.jpg"}
          alt={name}
          className="w-full h-full rounded-full object-cover ring-2 ring-primary/10 group-hover:ring-primary/30 transition-all"
        />
        <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-20 transition-opacity"></div>
      </div>
      <h4 className="font-semibold text-lg">{name}</h4>
      <p className="text-sm text-muted-foreground mt-1">{role}</p>
      <span className="inline-block mt-3 text-[11px] px-2 py-1 rounded-md bg-muted text-secondary border border-secondary/30">
        Management
      </span>
    </article>
  );
}
