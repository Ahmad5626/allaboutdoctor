import Footer from '@/components/Footer'
import Hedaer from '@/components/Hedaer'
import HomeBlogSection from '@/components/home/home-blog-section'
import CategoriesSlider from '@/components/home/categories-slider'
import HeroSection from '@/components/home/HeroSection'
import Listing from '@/components/home/Listing'
import Pricing from '@/components/home/Pricing'
import TestimonialsSection from '@/components/home/Testimonial'
import React from 'react'
import ServicesSection from '@/components/home/services-section'
import PopularVenueSearches from '@/components/home/popular-venue-searches'
import PopularSearches from '@/components/home/popular-searches'
import DownloadAppSection from '@/components/home/download-app-section'
import WeddingStoriesSection from '@/components/home/wedding-stories-section'
import GallerySection from '@/components/home/gallery-section'

const page = () => {
  return (
    <div>
      <Hedaer/>
      <HeroSection/>
      <div className="mt-12">
            <PopularVenueSearches />
          </div>

          {/* Popular Searches section */}
          <div className="mt-8">
            <PopularSearches />
          </div>
      <ServicesSection/>
      <CategoriesSlider/>
      <Listing/>
      <DownloadAppSection/>
      <WeddingStoriesSection/>
      <GallerySection/> 
      <TestimonialsSection/>
      <HomeBlogSection/>
      <Footer/>
      
    </div>
  )
}

export default page
