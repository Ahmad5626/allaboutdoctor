"use client"

import { useEffect } from "react"

const videos = [
  {
    id: "v1",
    title: "From Dreamer to Doctor",
    instaUrl: "https://www.instagram.com/",
    thumb: "https://www.instagram.com/p/DPbSrpZD3E4/",
    featured: true,
  },
  {
    id: "v2",
    title: "Visa Approved in 10 Days",
    instaUrl: "https://www.instagram.com/",
    thumb: "https://www.instagram.com/p/DPbXzSFj00b/",

  },
  {
    id: "v3",
    title: "Campus Life Abroad",
    instaUrl: "https://www.instagram.com/",
    thumb: "https://www.instagram.com/reel/DK107FMqNkS/",
  },
  {
    id: "v4",
    title: "Scholarship Journey",
    instaUrl: "https://www.instagram.com/",
    thumb: "https://www.instagram.com/reel/DPK_F6jgaIH/",
  },
  {
    id: "v5",
    title: "Parents Speak",
    instaUrl: "https://www.instagram.com/",
    thumb: "https://www.instagram.com/reel/DOp6MMAj1Xv/",
  },
  {
    id: "v6",
    title: "Day in Med School",
    instaUrl: "https://www.instagram.com/",
    thumb: "https://www.instagram.com/reel/DOpo126D8wA/",
  },
  {
    id: "v7",
    title: "How I Chose My University",
    instaUrl: "https://www.instagram.com/",
    thumb: "https://www.instagram.com/reel/DOnIYNUjwy-/",
  },
  {
    id: "v8",
    title: "Hostel Tour",
    instaUrl: "https://www.instagram.com/",
    thumb: "https://www.instagram.com/reel/DNfsoBQPPri/",
  },
]



function PlayBadge() {

  return (
    <span className="pointer-events-none inline-flex items-center gap-2 rounded-full bg-foreground/90 px-3 py-1 text-xs font-medium text-background shadow-sm ring-1 ring-foreground/10 backdrop-blur-md">
      <svg width="14" height="14" viewBox="0 0 24 24" className="fill-current">
        <path d="M8 5v14l11-7z" />
      </svg>
      Watch on Instagram
    </span>
  )
}

function Card({ item, variant = "default" }) {
  return (
    <a
      href={item.instaUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block overflow-hidden rounded-2xl ring-1 ring-border transition-shadow hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${variant === "feature" ? "aspect-[16/10]" : "aspect-[4/5]"
        }`}
      style={{
        backgroundImage: `url(${item.thumb})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label={`${item.title} — opens on Instagram`}
    >
      {/* gradient veil for readability */}

       <div className="flex justify-center">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={item.thumb}
        data-instgrm-version="14"
        style={{ width: "100%", maxWidth: "400px" }}
      ></blockquote>
    </div>


      {/* animated conic sweep border */}
      <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10">
        <span className="absolute inset-0 rounded-2xl ring-2 ring-transparent [background:conic-gradient(from_180deg_at_50%_50%,transparent_0deg,rgba(255,255,255,.35)_120deg,transparent_240deg)] [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] [mask-composite:exclude] p-[2px] animate-sweep" />
      </span>
    </a>
  )
}

export default function VideoSection() {
    useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  })
  const featured = videos.find((v) => v.featured) || videos[0]
  const others = videos.filter((v) => v.id !== featured.id)

  return (
    <section className="relative py-14 md:py-20 overflow-hidden">
      {/* background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-0 aspect-[1/1] w-[420px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,.25),transparent_60%)] blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-0 aspect-[1/1] w-[520px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,.22),transparent_60%)] blur-2xl"
      />

      <div className="mx-auto max-w-7xl px-4">
        <header className="mb-8 md:mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-foreground/80 backdrop-blur">
            In the Spotlight
            <span className="h-1 w-1 rounded-full bg-foreground/60" />
            Instagram Reels
          </div>
          <h2 className="text-pretty text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Stories that inspire. Moments that matter.
            <span className="block text-primary ">
              Tap to watch on Instagram
            </span>
          </h2>
        </header>

        {/* Mosaic grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
         

          {/* <div className="col-span-12 grid grid-cols-2 gap-4 md:col-span-5 md:grid-cols-2 md:gap-4 lg:col-span-4">
            {others.slice(0, 4).map((v) => (
              <Card key={v.id} item={v} />
            ))}
          </div> */}

          {/* More rows */}
          <div className="col-span-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {videos?.map((v,i)=>{
              return(
                      
    <div className="insta-wrapper" key={i}>
  <blockquote
    className="instagram-media"
    data-instgrm-permalink={v.thumb}
    data-instgrm-version="14"
    style={{
      width: "100%",
      maxWidth: "400px",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
    }}
  ></blockquote>
</div>
   
              )
            })}
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes sweep {
          0% {
            transform: rotate(0deg);
            opacity: 0.75;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: rotate(360deg);
            opacity: 0.75;
          }
        }
        .animate-sweep {
          animation: sweep 6s linear infinite;
        }
      `}</style>
    </section>
  )
}
