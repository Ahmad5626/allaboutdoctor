
import Link from 'next/link'
import React from 'react'

const BlogDetails = ({post}) => {
  return (
    <div>
      <main className="mx-auto min-h-screen max-w-7xl px-4 py-8 md:py-12">
      <nav className="mb-6 text-sm text-slate-600">
        <Link href="/blog" className="text-rose-600 hover:underline">
          Blog
        </Link>
        <span> / </span>
        <span>{post.title}</span>
      </nav>

      <article className="mx-auto max-w-7xl">
        <header className="mb-6">
          <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-slate-600">
            <span className="rounded bg-rose-50 px-2 py-0.5 text-rose-600">{post.category}</span>
            <span>•</span>
            <span>{new Date(post.date).toLocaleDateString()}</span>
            <span>•</span>
            <span>{post.readTime}</span>
            <span>•</span>
            <span>By {post.author}</span>
          </div>
          <h1 className="text-pretty text-3xl font-bold text-slate-900 md:text-4xl">{post.title}</h1>
        </header>

        <div className="overflow-hidden rounded-lg">
          <img src={post.image || "/placeholder.svg"} alt={post.title} className="h-auto w-full object-cover" />
        </div>

        <div
          className="prose prose-slate mt-6 max-w-none prose-headings:font-semibold prose-a:text-rose-600"
          dangerouslySetInnerHTML={{ __html: post.description }}
        />

        <footer className="mt-8 flex flex-wrap items-center gap-2">
          {post.tags?.map((t) => (
            <span key={t} className="rounded-full bg-teal-50 px-3 py-1 text-xs text-teal-600">
              {t}
            </span>
          ))}
        </footer>
      </article>


      <div className="mx-auto mt-12 flex max-w-3xl items-center justify-between">
        <Link
          href="/blog"
          className="inline-flex h-10 items-center rounded-md border px-4 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          ← Back to Blog
        </Link>
        <Link
          href="/"
          className="inline-flex h-10 items-center rounded-md bg-rose-600 px-4 text-sm font-medium text-white hover:bg-rose-700"
        >
          Explore Vendors
        </Link>
      </div>
    </main>
    </div>
  )
}

export default BlogDetails
