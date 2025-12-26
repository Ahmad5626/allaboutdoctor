"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const destinations = [
  {
    name: "Armenia",
    image: "https://flagcdn.com/w640/am.png",
    title: "Historic universities with advanced labs",
    link: "/abroad/armenia/mbbs"
  },
  {
    name: "Bulgaria",
    image: "https://flagcdn.com/w640/bg.png",
    title: "EU-recognized degrees & modern campuses",
    link: "/abroad/bulgaria/mbbs"
  },
  {
    name: "Georgia",
    image: "https://flagcdn.com/w640/ge.png",
    title: "European standards & safe student life",
    link: "/abroad/georgia/mbbs"
  },
  {
    name: "Kazakhstan",
    image: "https://flagcdn.com/w640/kz.png",
    title: "Modern infrastructure & clinical exposure",
    link: "/abroad/kazakhstan/mbbs"
  },
  {
    name: "Kyrgyzstan",
    image: "https://flagcdn.com/w640/kg.png",
    title: "Affordable MBBS with English-medium teaching",
    link: "/abroad/kyrgyzstan/mbbs"
  },
  {
    name: "Nepal",
    image: "https://flagcdn.com/w640/np.png",
    title: "Cultural proximity & NMC-approved colleges",
    link: "/abroad/nepal/mbbs"
  },
  {
    name: "Romania",
    image: "https://flagcdn.com/w640/ro.png",
    title: "EU medical education & clinical exposure",
    link: "/abroad/romania/mbbs"
  },
  {
    name: "Russia",
    image: "https://flagcdn.com/w640/ru.png",
    title: "Globally recognized, affordable programs",
    link: "/abroad/russia/mbbs"
  },

  {
    name: "Serbia",
    image: "/assets/img/Serbia.png",
    title: "EU medical education & clinical exposure",
    link: "/abroad/serbia/mbbs"
  },
  {
    name: "Tajikistan",
    image: "/assets/img/Tajikistan.png",
    title: "Globally recognized, affordable programs",
    link: "/abroad/tajikistan/mbbs"
  },
  {
    name: "Uzbekistan",
    image: "/assets/img/Uzbekistan.png",
    title: "EU medical education & clinical exposure",
    link: "/abroad/uzbekistan/mbbs"
  },
  {
    name: "Vietnam",
    image: "/assets/img/Vietnam.png",
    title: "Globally recognized, affordable programs",
    link: "/abroad/vietnam/mbbs"
  },
];

export default function FeaturedCountriesSlider() {
  const sliderRef = useRef(null);

  const scroll = (dir) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="md:flex items-center justify-between mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            Study Abroad Destinations
          </h2>

          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="h-10 w-10 rounded-full border flex items-center justify-center hover:bg-slate-100 transition"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => scroll("right")}
              className="h-10 w-10 rounded-full border flex items-center justify-center hover:bg-slate-100 transition"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {destinations.map((d) => (
            <Link
              href={d.link}
              className="group relative min-w-[220px] md:min-w-[300px] h-[210px] rounded-[28px] overflow-hidden"
            >
              {/* Background Image */}
              <img
                src={d.image}
                alt={d.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Soft dark overlay */}
              <div className="absolute inset-0 bg-black/10" />

              {/* Bottom curved gradient shape */}
              <div
                className="absolute bottom-0 left-0 w-full h-[50%]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(234,179,8,0.9) 0%, rgba(59,130,246,0.85) 50%, rgba(14,165,233,0.85) 100%)",
                  clipPath: "ellipse(60% 100% at 0% 100%)",
                }}
              />

              {/* Text */}
              <div className="absolute bottom-5 left-6 text-white z-10">
                <h3 className="text-xl font-bold leading-tight">{d.name}</h3>
                <p className="text-sm opacity-90">{d.country}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
