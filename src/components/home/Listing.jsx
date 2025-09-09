"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Heart, MapPin, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const listings = [
  {
    id: 1,
    title: "Saddle & Sip Saloon",
    category: "salon1",
    categoryColor: "bg-primary",
    owner: {
      name: "superbusiness47",
      avatar: "https://i.pravatar.cc/300",
    },
    image:
      "https://image.wedmegood.com/resized/450X/uploads/images/93d9aa860dcf4d0dacfeda4b17f64b1frealwedding/PTN_RUHI+KARTIK_DAY02-5452-3.jpg?crop=224,349,1626,914",
    rating: 4.5,
    reviewCount: 2,
    location: "Melbourne, Victoria, Australia",
    priceRange: "$40 - $999",
    isFavorited: false,
  },

  {
    id: 2,
    title: "Another Saloon",
    category: "salon2",
    categoryColor: "bg-blue-500",
    owner: {
      name: "anotherbusiness",
      avatar: "https://i.pravatar.cc/300",
    },
    image: "https://image.wedmegood.com/resized/450X/uploads/images/76286e68431a4c929007f48f19e380bbrealwedding/SRI01051.jpg?crop=285,1154,1630,917",
    rating: 4.0,
    reviewCount: 5,
    location: "Sydney, New South Wales, Australia",
    priceRange: "$50 - $1500",
    isFavorited: false,
  },
  {
    id: 3,
    title: "Third Saloon",
    category: "salon3",
    categoryColor: "bg-green-500",
    owner: {
      name: "thirdbusiness",
      avatar: "https://i.pravatar.cc/300",
    },
    image: "https://image.wedmegood.com/resized/450X/uploads/images/46f88aa94224455fbc3940697615a453realwedding/NT6_5075-EditLarge.jpeg?crop=145,253,1013,569",
    rating: 3.8,
    reviewCount: 8,
    location: "Brisbane, Queensland, Australia",
    priceRange: "$60 - $1200",
    isFavorited: false,
  },
  {
    id: 4,
    title: "Fourth Saloon",
    category: "salon4",
    categoryColor: "bg-purple-500",
    owner: {
      name: "fourthbusiness",
      avatar: "https://i.pravatar.cc/300",
    },
    image: "https://image.wedmegood.com/resized/450X/uploads/images/4bfb1109e25948b89a7c0fb3fd93adfdrealwedding/ABHI5060Large.jpeg?crop=140,218,1013,569",
    rating: 4.2,
    reviewCount: 10,
    location: "Adelaide, South Australia, Australia",
    priceRange: "$70 - $1300",
    isFavorited: false,
  },
]

const StarRating = ({ rating, reviewCount }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
          />
        ))}
      </div>
      <span className="text-sm text-gray-600">
        ({rating > 0 ? rating.toFixed(1) : "0"}) {reviewCount} Reviews
      </span>
    </div>
  )
}

const ListingCard = ({ listing, index }) => {
  const [isFavorited, setIsFavorited] = useState(listing.isFavorited)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
    >
      {/* Image Container */}
      <Link href={`/product-details`} className="relative overflow-hidden">
        <motion.img
          src={listing.image}
          alt={listing.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          whileHover={{ scale: 1.05 }}
        />

        {/* Favorite Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-md"
          onClick={() => setIsFavorited(!isFavorited)}
        >
          <Heart
            className={`w-5 h-5 transition-colors duration-200 ${
              isFavorited ? "fill-red-500 text-red-500" : "text-gray-600"
            }`}
          />
        </Button>
      </Link>

      {/* Content */}
      <div className="p-6">
        {/* Owner Info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <img
              src={listing.owner.avatar || "/placeholder.svg"}
              alt={listing.owner.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm text-gray-600">By {listing.owner.name}</span>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${listing.categoryColor}`}>
            {listing.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-200">
          {listing.title}
        </h3>

        {/* Rating */}
        <div className="mb-3">
          <StarRating rating={listing.rating} reviewCount={listing.reviewCount} />
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 mb-4 text-gray-600">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm">{listing.location}</span>
        </div>

        {/* Price */}
        <div className="text-lg font-semibold text-gray-900">
          <span className="text-gray-600 font-normal">From </span>
          {listing.priceRange}
        </div>
      </div>
    </motion.div>
  )
}

export default function Listing() {
  const splideRef = useRef(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("@splidejs/splide").then(({ Splide }) => {
        if (splideRef.current) {
          new Splide(splideRef.current, {
            type: "loop",
            perPage: 4,
            perMove: 1,
            gap: "1.5rem",
            pagination: true,
            arrows: true,
            breakpoints: {
              1024: {
                perPage: 3,
              },
              768: {
                perPage: 2,
              },
              640: {
                perPage: 1,
              },
            },
          }).mount()
        }
      })
    }
  }, [])

  return (
    <section className="py-16 bg-gray-50  max-w-7xl mx-auto">
      <div className="container  px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 relative inline-block">
            Featured Listings
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute bottom-0 left-0 h-1 bg-primary rounded-full"
            />
          </h2>
        </motion.div>

        {/* Listings Slider */}
        <div ref={splideRef} className="splide">
          <div className="splide__track">
            <ul className="splide__list">
              {listings.map((listing, index) => (
                <li key={listing.id} className="splide__slide">
                  <ListingCard listing={listing} index={index} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            View All Listings
          </Button>
        </motion.div>
      </div>

      {/* Splide CSS */}
      <style jsx>{`
        .splide__arrow {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid #e5e7eb;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .splide__arrow:hover {
          background: white;
        }
        .splide__arrow svg {
          fill: #374151;
        }
        .splide__pagination__page {
          background: #d1d5db;
        }
        .splide__pagination__page.is-active {
          background: #f97316;
        }
      `}</style>
    </section>
  )
}
