"use client"

import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const weddingStories = [
  {
    id: 1,
    coupleNames: "Apsara and Pranjal",
    title: "A Dreamy Dharamshala Wedding Straight Out Of The Mountains!",
    description:
      "A beautiful mountain wedding with stunning views and traditional ceremonies that captured the essence of love.",
    date: "21 February 2025",
    image: "./assets/img/Real-Wedding-Stories-1.avif",
    slug: "apsara-pranjal-dharamshala-wedding",
  },
  {
    id: 2,
    coupleNames: "Sanjana and Viraaj",
    title: "A Serene All-White Home Wedding That Was Pure Minimalist Magic!",
    description: "An intimate home wedding with elegant white decor and minimalist aesthetics that created pure magic.",
    date: "23 February 2025",
    image: "./assets/img/Real-Wedding-Stories-2.avif",
    slug: "sanjana-viraaj-white-home-wedding",
  },
  {
    id: 3,
    coupleNames: "Harshita and Jay",
    title: "This Mahabalipuram Wedding Is Serving Major Aesthetic Goals",
    description: "A coastal wedding celebration with stunning beach views and traditional South Indian ceremonies.",
    date: "17 March 2025",
    image: "./assets/img/Real-Wedding-Stories-3.avif",
    slug: "harshita-jay-mahabalipuram-wedding",
  },
  {
    id: 4,
    coupleNames: "Riya and Arjun",
    title: "A Royal Rajasthani Wedding With Vintage Charm",
    description: "A grand celebration in the heart of Rajasthan with royal traditions and vintage elegance.",
    date: "5 April 2025",
    image: "./assets/img/Real-Wedding-Stories-1.avif",
    slug: "riya-arjun-rajasthani-wedding",
  },
]

export default function WeddingStoriesSection() {
  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-slate-900">Real Wedding Stories</h2>
          <Link href="/wedding-stories">
            <button className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
              View All Stories
            </button>
          </Link>
        </div>

        <div className="relative">
          <Splide
            options={{
              type: "loop",
              perPage: 3,
              perMove: 1,
              gap: "2rem",
              pagination: false,
              arrows: true,
              breakpoints: {
                1024: { perPage: 2 },
                768: { perPage: 1 },
              },
            }}
            className="wedding-stories-slider"
          >
            {weddingStories.map((story) => (
              <SplideSlide key={story.id}>
                <Link href={`/wedding-stories/${story.slug}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group h-full">
                    <div className="relative overflow-hidden">
                      <img
                        src={story.image || "/placeholder.svg?height=300&width=500"}
                        alt={story.coupleNames}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl text-slate-900 mb-2">{story.coupleNames}</h3>
                      {/* <h4 className="font-semibold text-lg text-slate-800 mb-3 line-clamp-2">{story.title}</h4> */}
                      <p className="text-slate-600 mb-4 line-clamp-3">{story.description}</p>
                      <p className="text-sm text-slate-500">{story.date}</p>
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
