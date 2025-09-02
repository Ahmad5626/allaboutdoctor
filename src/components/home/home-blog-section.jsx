"use client"

import Link from "next/link"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import { useContext } from "react"
import { AuthContext } from "@/app/context/page"
// import { posts } from "@/lib/blog"

function truncate(text = "", n = 140) {
  const t = text.replace(/<[^>]+>/g, "")
  return t.length > n ? t.slice(0, n) + "..." : t
}

export default function HomeBlogSection() {
    const {blogData}=useContext(AuthContext)
//   const latest = (posts || []).slice(0, 9)

  return (
    <section className="w-full bg-gradient-to-b from-white to-transparent py-12 md:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">Read our latest blogs</h2>
          <Link
            href="/blog"
            className="inline-flex rounded-xl bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-rose-700"
          >
            More
          </Link>
        </div>

        <Splide
          aria-label="Latest Blogs"
          options={{
            gap: "1.25rem",
            perPage: 3,
            perMove: 1,
            arrows: true,
            pagination: false,
            rewind: true,
            breakpoints: {
              1024: { perPage: 2 },
              640: { perPage: 1 },
            },
          }}
          className="group"
        >
          {blogData?.map((post) => (
            <SplideSlide key={post.slug}>
              <article className="overflow-hidden rounded-2xl bg-white">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
                    <img
                      src={post.image || "/placeholder.svg?height=540&width=960&query=wedding%20blog%20cover"}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="pt-5">
                    <h3 className="text-pretty text-2xl font-semibold leading-snug text-slate-900 md:text-2xl">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-slate-600">
                      {post.shotDescription}
                    </p>
                    <span className="mt-4 inline-block text-rose-600 hover:underline">Read More</span>
                  </div>
                </Link>
              </article>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  )
}
