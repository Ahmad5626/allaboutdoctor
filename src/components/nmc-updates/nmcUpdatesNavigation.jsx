"use client";

import { useRouter } from "next/navigation";

export default function NmcUpdatesNavigation() {
  const router = useRouter();

  const sections = [
    {
      title: "Latest NMC Updates",
      description:
        "Real-time announcements, official notifications, press releases, and changes affecting NEET, NExT, MBBS admission procedures, and medical licensing pathways in India and abroad. Updated regularly to keep students and parents informed.",
      image: "/assets/img/letest-img.webp", // replace with your actual image or use from public folder
      link: "/nmc-updates/latest/",
    },
    {
      title: "NMC Guidelines",
      description:
        "Clear, simplified, and student-friendly explanations of NMC rules, eligibility criteria, course duration formats, university recognition requirements, foreign medical graduate processes, and documentation standards. Designed to support informed decision-making.",
      image: "/assets/img/letest-img1.webp", // replace with your actual image
      link: "/nmc-updates/guidelines/",
    },
  ];

  return (
    <section className="w-full bg-primary/5">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-semibold leading-tight sm:text-4xl">
            NMC <span className="text-primary">Updates & Guidelines</span>
          </h1>
          <p className="max-w-3xl mx-auto mt-3 text-muted-foreground text-base md:text-lg">
            Stay updated with verified and transparent information directly
            from the National Medical Commission (NMC).
          </p>
          
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {sections.map((item, index) => (
            <div
              key={index}
              onClick={() => router.push(item.link)}
              className="group cursor-pointer border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all bg-background hover:border-primary"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-left space-y-3">
                <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h2>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {item.description}
                </p>
                <button className="mt-3 px-4 py-2 bg-primary text-white text-sm rounded-md hover:bg-primary/90 transition-colors">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}
