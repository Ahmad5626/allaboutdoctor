export default function WhatWeDo() {
  const services = [
    {
      title: "Career Counselling & University Shortlisting",
      desc: "Personalized guidance to help you choose the right medical university based on your goals, budget, and eligibility.",
      icon: "🎯",
    },
    {
      title: "Admission to NMC & WHO-approved Universities",
      desc: "Secure direct admission in globally recognized medical universities with full transparency and verified credentials.",
      icon: "🏛️",
    },
    {
      title: "Visa, Travel & Documentation Support",
      desc: "Complete assistance with visa processing, embassy interviews, and travel arrangements for a smooth transition.",
      icon: "🛫",
    },
    {
      title: "Pre-departure & Post-arrival Guidance",
      desc: "From travel orientation to hostel arrangements — we ensure students feel confident and supported every step of the way.",
      icon: "🌍",
    },
    {
      title: "FMGE / NExT Preparation with Expert Doctors",
      desc: "Ongoing mentorship and exam preparation support from experienced medical professionals to ensure your success.",
      icon: "📘",
    },
  ];

  return (
    <section
      id="what-we-do"
      className="bg-gradient-to-b from-background to-muted/30 border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight animate-fade-up">
            What <span className="text-primary">We Do</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            At <span className="font-semibold text-foreground">All About Doctor</span>, we provide end-to-end support for students aspiring to pursue MBBS in India or abroad, including:
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  return (
    <div className="relative group rounded-2xl bg-card border border-border p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all overflow-hidden">
      {/* Icon */}
      <div className="text-4xl mb-4">{service.icon}</div>

      {/* Title */}
      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
        {service.title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{service.desc}</p>

      {/* Hover Accent Line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all"></div>
    </div>
  );
}
