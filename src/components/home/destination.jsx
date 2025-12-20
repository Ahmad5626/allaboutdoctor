"use client";


import Link from "next/link";
import { useEffect, useRef } from "react";

const destinations = [
  {
    name: "Armenia",
    image: "https://flagcdn.com/w640/am.png",
    title: "Historic universities with advanced labs",
    link : "/abroad/armenia/mbbs"
  },
  {
    name: "Bulgaria",
    image: "https://flagcdn.com/w640/bg.png",
    title: "EU-recognized degrees & modern campuses",
    link : "/abroad/bulgaria/mbbs"
  },
  {
    name: "Georgia",
    image: "https://flagcdn.com/w640/ge.png",
    title: "European standards & safe student life",
    link : "/abroad/georgia/mbbs"
  },
  {
    name: "Kazakhstan",
    image: "https://flagcdn.com/w640/kz.png",
    title: "Modern infrastructure & clinical exposure",
    link : "/abroad/kazakhstan/mbbs"
  },
  {
    name: "Kyrgyzstan",
    image: "https://flagcdn.com/w640/kg.png",
    title: "Affordable MBBS with English-medium teaching",
    link : "/abroad/kyrgyzstan/mbbs"
  },
  {
    name: "Nepal",
    image: "https://flagcdn.com/w640/np.png",
    title: "Cultural proximity & NMC-approved colleges",
    link : "/abroad/nepal/mbbs"
  },
  {
    name: "Romania",
    image: "https://flagcdn.com/w640/ro.png",
    title: "EU medical education & clinical exposure",
    link : "/abroad/romania/mbbs"
  },
  {
    name: "Russia",
    image: "https://flagcdn.com/w640/ru.png",
    title: "Globally recognized, affordable programs",
    link : "/abroad/russia/mbbs"
  },

   {
    name: "Serbia",
    image: "/assets/img/Serbia.png",
    title: "EU medical education & clinical exposure",
    link : "/abroad/serbia/mbbs"
  },
  {
    name: "Tajikistan",
    image: "/assets/img/Tajikistan.png",
    title: "Globally recognized, affordable programs",
    link : "/abroad/tajikistan/mbbs"
  },
  {
    name: "Uzbekistan",
    image: "/assets/img/Uzbekistan.png",
    title: "EU medical education & clinical exposure",
    link : "/abroad/uzbekistan/mbbs"
  },
  {
    name: "Vietnam",
    image: "/assets/img/Vietnam.png",
    title: "Globally recognized, affordable programs",
    link : "/abroad/vietnam/mbbs"
  },
];





export default function FeaturedCountries() {
  const itemsRef = useRef([]);

  /* fade-up on scroll */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-14 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="mx-auto max-w-7xl px-4 md:px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Study Abroad Destinations
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Explore trusted countries for quality medical education
          </p>
        </div>

        {/* Grid (2 rows automatically) */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
          {destinations.map((d, i) => (
            <div
              key={d.name}
              ref={(el) => (itemsRef.current[i] = el)}
              className="fade-item group relative rounded-2xl  overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <Link href={d.link}>
            
              {/* Image */}
              <div className="relative h-30 overflow-hidden">
            
                <img
                  src={d.image}
                  alt={d.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
               
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="px-4 py-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {d.name}
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  {d.title}
                </p>
              </div>
               </Link>
            </div>
          ))}
          
        </div>
      </div>

      {/* animations */}
      <style jsx>{`
        .fade-item {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.7s ease;
        }
        .fade-item.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
