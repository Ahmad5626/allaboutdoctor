"use client";

import { useRouter } from "next/navigation";

export default function Guideline() {
  const router = useRouter();

  // Sample News Data
  const mainNews = [
    {
      id: 1,
      title:
        "Health Ministry Asks NMC To Review Uniform Stipend For MBBS Interns In Govt And Private Colleges",
      author: "Anshika Mishra",
      date: "11 Nov 2025",
      time: "5:36 PM",
      image: "/assets/img/letest-img.webp",
      excerpt:
        "The long-pending issue of stipend disparity between MBBS interns at the Government and Private medical colleges may soon end as the Union Ministry has requested NMC to review uniform stipend regulations...",
    },
    {
      id: 2,
      title: "Health Bulletin 11/November/2025",
      author: "Anshika Mishra",
      date: "11 Nov 2025",
      time: "5:26 PM",
      image: "/assets/img/letest-img1.webp",
      excerpt:
        "Here are the top health stories for the day: Health Ministry Asks NMC to review stipend policy, new notices for NEET-PG schedule, and other healthcare updates...",
    },
  ];

  const sideNews = [
    {
      id: 3,
      title:
        "Risk Beyond Control: Inherited and Causal CV Risk Factors and the Role of Aspirin",
      image: "/assets/img/letest-img.webp",
    },
    {
      id: 4,
      title:
        "Explainer Video: Advising Patients about Addressing Glycemic and Weight Goals",
      image: "/assets/img/letest-img1.webp",
    },
    {
      id: 5,
      title:
        "Long-Acting Relief in Allergic Rhinitis: Clinical Update on Dual Molecule Approach",
      image: "/assets/img/letest-img.webp",
    },
    {
      id: 6,
      title:
        "H2 Receptor Antagonists in Neonatal Gastrointestinal Care: Indian Insights",
      image: "/assets/img/letest-img1.webp",
    },
    {
      id: 7,
      title:
        "Early Dose Adjustments Help Complete 2-Year Treatment Without Losing Efficacy",
      image: "/assets/img/letest-img.webp",
    },
  ];

  return (
    <section className="w-full bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-16">
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-8">
          Latest <span className="text-primary">NMC News & Announcements</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column – Main News */}
          <div className="lg:col-span-2 space-y-8">
            {mainNews.map((item) => (
              <div
                key={item.id}
                onClick={() => router.push(`/nmc-updates/latest/${item.id}`)}
                className="cursor-pointer border-b border-border pb-6 hover:shadow-md transition-all"
              >
                <div className="flex flex-col md:flex-row gap-5">
                  <div className="md:w-2/5 overflow-hidden rounded-md">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="md:w-3/5 space-y-2">
                    <h2 className="text-xl font-semibold text-foreground hover:text-primary transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-xs text-muted-foreground">
                      {item.author} • {item.date} • {item.time}
                    </p>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column – Side News */}
          <div className="space-y-4">
            {sideNews.map((item) => (
              <div
                key={item.id}
                onClick={() => router.push(`/nmc-updates/latest/${item.id}`)}
                className="cursor-pointer flex items-center gap-3 hover:bg-foreground/5 rounded-md p-2 transition-all"
              >
                <div className="w-20 h-16 flex-shrink-0 overflow-hidden rounded-md">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-foreground/90 font-medium hover:text-primary transition-colors">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
}
