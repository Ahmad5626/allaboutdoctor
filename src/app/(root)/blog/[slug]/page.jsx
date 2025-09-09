"use client"

import Link from "next/link"
import { posts } from "@/lib/blog"
import BlogSlider from "@/components/blog/blog-slider"
import { AuthContext } from "@/app/context/page"
import { useContext } from "react"
import Navbar from "@/components/Hedaer"
import { useParams } from "next/navigation"
import BlogDetails from "@/components/blog-details"

export default function BlogDetail() {
  const params = useParams()
  console.log(params.slug);
  
  const { blogData } = useContext(AuthContext)
  const post = blogData.find((p) => p.slug === params.slug)

  if (!post) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-2xl font-semibold text-slate-900">Article not found</h1>
        <Link href="/blog" className="mt-4 inline-block text-rose-600">
          ← Back to Blog
        </Link>
      </main>
    )
  }

  // const related = posts.filter((p) => p.slug !== post.slug).slice(0, 5)

  return (
  <>
  <Navbar fixed={true} />
    <BlogDetails post={post}  />
  </>
  )
}
