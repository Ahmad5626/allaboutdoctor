"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const destinations = [
  {
    name: "Armenia",
    flag: "/assets/img/Armenia-flag.png",
    title: "Historic universities with advanced labs",
    link: "/abroad/armenia/mbbs",
    image: "/assets/img/Armenia.jpg",
    gradient: "from-yellow-400 via-amber-500 to-orange-500",
  },
  {
    name: "Bulgaria",
    flag: "/assets/img/Bulgaria-flag.png",
    title: "EU-recognized degrees & modern campuses",
    link: "/abroad/bulgaria/mbbs",
    image: "/assets/img/Bulgaria.jpg",
    gradient: "from-blue-500 via-sky-500 to-cyan-500",
  },
  {
    name: "Georgia",
    flag: "/assets/img/Georgia-flag.png",
    title: "European standards & safe student life",
    link: "/abroad/georgia/mbbs",
    image: "/assets/img/Georgia.jpg",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  {
    name: "Kazakhstan",
    flag: "/assets/img/Kazakhstan-flag.png",
    title: "Modern infrastructure & clinical exposure",
    link: "/abroad/kazakhstan/mbbs",
    image: "/assets/img/Kazakhstan.jpg",
    gradient: "from-indigo-500 via-blue-600 to-sky-500",
  },
  {
    name: "Kyrgyzstan",
    flag: "/assets/img/Kyrgyzstan-flag.png",
    title: "Affordable MBBS with English-medium teaching",
    link: "/abroad/kyrgyzstan/mbbs",
    image: "/assets/img/Kyrgyzstan.jpeg",
    gradient: "from-purple-500 via-fuchsia-500 to-pink-500",
  },
  {
    name: "Nepal",
    flag: "/assets/img/Nepal-flag.png",
    title: "Cultural proximity & NMC-approved colleges",
    link: "/abroad/nepal/mbbs",
    image: "/assets/img/Nepal.jpg",
    gradient: "from-rose-500 via-red-500 to-orange-500",
  },
  {
    name: "Romania",
    flag: "/assets/img/Romania-flag.png",
    title: "EU medical education & clinical exposure",
    link: "/abroad/romania/mbbs",
    image: "/assets/img/Romania.jpg",
    gradient: "from-amber-500 via-orange-500 to-red-500",
  },
  {
    name: "Russia",
    flag: "/assets/img/Russia-flag.png",
    title: "Globally recognized, affordable programs",
    link: "/abroad/russia/mbbs",
    image: "/assets/img/Russia.jpg",
    gradient: "from-slate-600 via-slate-700 to-slate-800",
  },

  {
    name: "Seriba",
    flag: "/assets/img/Serbia.png",
    title: "EU medical education & clinical exposure",
    link: "/abroad/serbia/mbbs",
    image: "/assets/img/Russia.jpg",
    gradient: "from-cyan-600 via-blue-600 to-indigo-600",
  },
  {
    name: "Tajikistan",
    flag: "/assets/img/Tajikistan.png",
    title: "Globally recognized, affordable programs",
    link: "/abroad/tajikistan/mbbs",
    image: "/assets/img/Tajikistan1.jpg",
    gradient: "from-lime-500 via-green-500 to-emerald-500",
  },
  {
    name: "Uzbekistan",
    flag: "/assets/img/Uzbekistan.png",
    title: "EU medical education & clinical exposure",
    link: "/abroad/uzbekistan/mbbs",
    image: "/assets/img/Uzbekistan1.jpg",
    gradient: "from-sky-500 via-cyan-500 to-teal-500",
  },
  {
    name: "Vietnam",
    flag: "/assets/img/Vietnam.png",
    title: "Globally recognized, affordable programs",
    link: "/abroad/vietnam/mbbs",
    image: "/assets/img/Vietnam1.jpg",
    gradient: "from-orange-500 via-red-500 to-rose-500",
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
              key={d.name}
              className="group relative min-w-[220px] md:min-w-[300px] h-[210px] rounded-[28px] overflow-hidden"
            >
              {/* BIG Background Image */}
              <img
                src={d.image}
                alt={d.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Soft overlay */}
              <div className="absolute inset-0 bg-black/10" />

              {/* Bottom curved gradient */}
              <div
                className={`absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-tr ${d.gradient}`}
                style={{
                  clipPath: "ellipse(70% 100% at 0% 100%)",
                }}
              />

              {/* TEXT + FLAG */}
              <div className="absolute bottom-5 left-6 z-10 flex items-center gap-2 text-white">
                {/* Small Flag */}
                <img
                  src={d.flag}
                  alt={`${d.name} flag`}
                  className="h-5 w-7 rounded-sm object-cover shadow"
                />

                <div>
                  <h3 className="text-xl font-bold leading-tight">{d.name}</h3>
                  <p className="text-sm opacity-90">{d.country}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
