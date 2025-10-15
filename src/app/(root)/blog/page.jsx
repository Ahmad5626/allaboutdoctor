import BlogSlider from "@/components/blog/blog-slider"
import BlogCard from "@/components/blog/blog-card"
import { posts } from "@/lib/blog"
import Link from "next/link"
import Navbar from "@/components/Hedaer"
import Footer from "@/components/Footer"
import HomeBlogSection from "@/components/home/home-blog-section"

export default function BlogPage() {
  return (
   <>
     <Navbar fixed={true} />
     <main className="mx-auto min-h-screen max-w-7xl px-4 py-8 md:py-12">
      <HomeBlogSection /> 
     </main>
    
    <Footer/>
   </>
  )
}
