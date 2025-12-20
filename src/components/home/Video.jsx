"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const videos = [
  {
    id: "v1",
    title: "From Dreamer to Doctor",
    instaUrl: "https://www.instagram.com/p/DPbSrpZD3E4/",
  },
  {
    id: "v2",
    title: "Visa Approved in 10 Days",
    instaUrl: "https://www.instagram.com/p/DPbXzSFj00b/",
  },
  {
    id: "v3",
    title: "Campus Life Abroad",
    instaUrl: "https://www.instagram.com/reel/DK107FMqNkS/",
  },
  {
    id: "v4",
    title: "Scholarship Journey",
    instaUrl: "https://www.instagram.com/reel/DPK_F6jgaIH/",
  },
  {
    id: "v5",
    title: "Parents Speak",
    instaUrl: "https://www.instagram.com/reel/DOp6MMAj1Xv/",
  },
  
];

export default function VideoSection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="relative pt-6 pb-24  bg-gradient-to-br from-primary via-primary to-[#0d1929] text-white overflow-hidden">

      {/* Soft BG Lights */}
      <div className="absolute -top-28 right-10 w-[450px] h-[450px] bg-purple-300/20 blur-[130px] rounded-full"></div>
      <div className="absolute -bottom-32 left-10 w-[500px] h-[500px] bg-blue-300/20 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 relative">

        {/* 👑 PREMIUM HEADING */}
        <header className="text-center mb-14">
          <span className="px-5 py-1.5 text-xs rounded-full border bg-white/60 backdrop-blur-md shadow-sm inline-flex items-center gap-2">
            ⭐ Trending Reels
          </span>

          <h2
            data-aos="fade-up"
            className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer"
          >
            Moments That Inspire,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold mt-1">
              Captured on Instagram
            </span>
          </h2>
        </header>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
          {videos.map((v, i) => (
            <div
              key={i}
              data-aos="zoom-in-up"
              data-aos-delay={i * 120}
              className="
                rounded-3xl overflow-hidden 
                bg-white/60 border border-white/40 
                backdrop-blur-xl shadow-lg 
                hover:shadow-2xl transition-all duration-500
                hover:-translate-y-2 hover:scale-[1.03]
                
              "
            >
              {/* Instagram Styled Frame */}
              <div className="relative ">
                <div className="rounded-[18px] overflow-hidden shadow-md border border-gray-200 h-full object-cover">
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={v.instaUrl}
                    data-instgrm-version="14"
                    style={{
                      width: "100%",
                      borderRadius: "14px",
                      overflow: "hidden",
                    }}
                  ></blockquote>
                </div>
              </div>

              {/* Text Area */}
              {/* <div className="px-5 pb-5 pt-1">
                <h3 className="text-[15px] font-semibold text-gray-800 leading-tight">
                  {v.title}
                </h3>

                <a
                  href={v.instaUrl}
                  target="_blank"
                  className="mt-2 inline-block text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  Watch on Instagram →
                </a>
              </div> */}
            </div>
          ))}
        </div>

      </div>
      
      
    </section>
  );
}
