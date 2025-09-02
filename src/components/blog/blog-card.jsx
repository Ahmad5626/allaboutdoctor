"use client"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function BlogCard({ post, className }) {
  return (
    <article className={cn("rounded-lg border bg-white shadow-sm hover:shadow md:transition", className)}>
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="aspect-[16/10] w-full overflow-hidden rounded-t-lg bg-gray-100">
          <img src={post.cover || "/placeholder.svg"} alt={post.title} className="h-full w-full object-cover" />
        </div>
        <div className="p-4">
          <div className="mb-1 flex items-center gap-2 text-xs text-slate-600">
            <span className="rounded bg-rose-50 px-2 py-0.5 text-rose-600">{post.category}</span>
            <span>•</span>
            <span>{new Date(post.date).toLocaleDateString()}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <h3 className="text-lg font-semibold text-slate-900">{post.title}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-slate-600">{post.excerpt}</p>
          <div className="mt-3 text-rose-600">Read more →</div>
        </div>
      </Link>
    </article>
  )
}
