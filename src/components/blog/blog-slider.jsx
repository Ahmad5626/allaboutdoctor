"use client"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import Link from "next/link"

export default function BlogSlider({ posts }) {
  const featured = posts.filter((p) => p.featured)
  if (!featured.length) return null

  return (
    <section className="rounded-xl border bg-white p-2 md:p-4">
      <Splide
        aria-label="Featured Articles"
          options={{
          perPage: 3,
          gap: "1rem",
          pagination: true,
          arrows: true,
          rewind: true,
          autoplay: true,
          breakpoints: {
            1024: { perPage: 2 },
            640: { perPage: 1 },
          },
        }}
        className="featured-splide"
      >
        {posts.map((post) => (
          <SplideSlide key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group block overflow-hidden rounded-lg border">
              <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100">
                <img
                  src={post.cover || "/placeholder.svg"}
                  alt={post.title}
                  className="h-full w-full object-cover transition group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-4">
                <p className="text-xs text-slate-600">
                  {new Date(post.date).toLocaleDateString()} • {post.readTime}
                </p>
                <h3 className="mt-1 line-clamp-2 text-balance text-lg font-semibold text-slate-900">{post.title}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-slate-600">{post.excerpt}</p>
              </div>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  )
}
