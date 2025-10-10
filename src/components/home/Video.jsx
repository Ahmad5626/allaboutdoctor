"use client"

const videos = [
  {
    id: "v1",
    title: "From Dreamer to Doctor",
    instaUrl: "https://www.instagram.com/",
    thumb: "https://publicassets.leverageedu.com/homepage/homepageV2/media13.png",
    featured: true,
  },
  {
    id: "v2",
    title: "Visa Approved in 10 Days",
    instaUrl: "https://www.instagram.com/",
    thumb: "https://publicassets.leverageedu.com/homepage/homepageV2/media2.png",
   
  },
  {
    id: "v3",
    title: "Campus Life Abroad",
    instaUrl: "https://www.instagram.com/",
    thumb: "https://publicassets.leverageedu.com/homepage/homepageV2/media3.png",
  },
  {
    id: "v4",
    title: "Scholarship Journey",
    instaUrl: "https://www.instagram.com/",
    thumb: "https://publicassets.leverageedu.com/homepage/homepageV2/media8.png",
  },
  {
    id: "v5",
    title: "Parents Speak",
    instaUrl: "https://www.instagram.com/",
    thumb: "https://publicassets.leverageedu.com/homepage/homepageV2/media9.png",
  },
  {
    id: "v6",
    title: "Day in Med School",
    instaUrl: "https://www.instagram.com/",
    thumb: "https://publicassets.leverageedu.com/homepage/homepageV2/media4.png",
  },
  {
    id: "v7",
    title: "How I Chose My University",
    instaUrl: "https://www.instagram.com/",
    thumb: "https://publicassets.leverageedu.com/homepage/homepageV2/media5.png",
  },
  {
    id: "v8",
    title: "Hostel Tour",
    instaUrl: "https://www.instagram.com/",
    thumb: "https://publicassets.leverageedu.com/homepage/homepageV2/media6.png",
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
      className={`group relative block overflow-hidden rounded-2xl ring-1 ring-border transition-shadow hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
        variant === "feature" ? "aspect-[16/10]" : "aspect-[4/5]"
      }`}
      style={{
        backgroundImage: `url(${item.thumb})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label={`${item.title} — opens on Instagram`}
    >
      {/* gradient veil for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10 transition-opacity group-hover:from-black/80" />

      {/* bottom content and play */}
      <div className="absolute inset-x-0 bottom-4 flex items-end justify-between px-4">
        <div className="flex flex-col gap-2">
          <PlayBadge />
          <h3 className="max-w-[26ch] text-balance text-white/95 drop-shadow-sm">
            <span className="text-sm/5 font-medium tracking-wide text-white/80">Student Story</span>
            <br />
            <span className="text-lg font-semibold md:text-xl">{item.title}</span>
          </h3>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -m-1 rounded-full bg-white/30 blur-md opacity-60 group-hover:opacity-80 transition-opacity" />
          <div className="relative grid h-12 w-12 place-items-center rounded-full bg-foreground text-background shadow-md ring-1 ring-foreground/10 group-hover:scale-105 transition-transform">
            <svg width="20" height="20" viewBox="0 0 24 24" className="fill-current">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* animated conic sweep border */}
      <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10">
        <span className="absolute inset-0 rounded-2xl ring-2 ring-transparent [background:conic-gradient(from_180deg_at_50%_50%,transparent_0deg,rgba(255,255,255,.35)_120deg,transparent_240deg)] [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] [mask-composite:exclude] p-[2px] animate-sweep" />
      </span>
    </a>
  )
}

export default function VideoSection() {
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
          <div className="col-span-12 md:col-span-7 lg:col-span-8">
            <Card item={featured} variant="feature" />
          </div>

          <div className="col-span-12 grid grid-cols-2 gap-4 md:col-span-5 md:grid-cols-2 md:gap-4 lg:col-span-4">
            {others.slice(0, 4).map((v) => (
              <Card key={v.id} item={v} />
            ))}
          </div>

          {/* More rows */}
          <div className="col-span-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {others.slice(4).map((v) => (
              <Card key={v.id} item={v} />
            ))}
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
