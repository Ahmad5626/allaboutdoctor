"use client"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const galleryCategories = [
  {
    id: 1,
    title: "Bridal Lehenga",
    image: "./assets/img/gallery-img-1.avif",
    slug: "bridal-lehenga",
    description: "Stunning bridal lehengas for your special day",
  },
  {
    id: 2,
    title: "Outfits",
    image: "./assets/img/gallery-img-2.avif",
    slug: "outfits",
    description: "Complete wedding outfit collections",
  },
  {
    id: 3,
    title: "Blouse Designs",
    image: "./assets/img/gallery-img-3.avif",
    slug: "blouse-designs",
    description: "Elegant blouse designs and patterns",
  },
  {
    id: 4,
    title: "Wedding Sarees",
    image: "./assets/img/gallery-img-4.avif",
    slug: "wedding-sarees",
    description: "Traditional and modern wedding sarees",
  },
  {
    id: 5,
    title: "Mehndi Designs",
    image: "./assets/img/gallery-img-5.avif",
    slug: "mehndi-designs",
    description: "Beautiful mehndi patterns and designs",
  },
  {
    id: 6,
    title: "Jewelry",
    image: "./assets/img/gallery-img-6.avif",
    slug: "jewelry",
    description: "Exquisite wedding jewelry collections",
  },
]

export default function GallerySection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-slate-900">Gallery to Look for</h2>
          <Link href="/gallery">
            <button className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
              View All
            </button>
          </Link>
        </div>

        <div className="relative">
          <Splide
            options={{
              type: "loop",
              perPage: 4,
              perMove: 1,
              gap: "1.5rem",
              pagination: false,
              arrows: true,
              breakpoints: {
                1024: { perPage: 3 },
                768: { perPage: 2 },
                640: { perPage: 1 },
              },
            }}
            className="gallery-slider"
          >
            {galleryCategories.map((category) => (
              <SplideSlide key={category.id}>
                <Link href={`/gallery/${category.slug}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                    <div className="relative overflow-hidden">
                      <img
                        src={category.image || "/placeholder.svg?height=300&width=400"}
                        alt={category.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4 text-center">
                      <h3 className="font-semibold text-lg text-slate-900 mb-2">{category.title}</h3>
                      <p className="text-sm text-slate-600">{category.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </section>
  )
}
