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

import PopularSearches from '@/components/home/popular-searches'
import DownloadAppSection from '@/components/home/download-app-section'
import WeddingStoriesSection from '@/components/home/wedding-stories-section'
import GallerySection from '@/components/home/gallery-section'
import SuccessStories from '@/components/home/SuccessStories'
import MbbsCta from '@/components/home/MbbsCta'
import VideoSection from '@/components/home/Video'

const page = () => {
  return (
    <div>
      <Hedaer/>
      <HeroSection/>
      <MbbsCta/>
      <SuccessStories />
      <VideoSection/>
        

        
          
           {/* <PopularSearches />
         
      <ServicesSection/>
      <CategoriesSlider/>
      <Listing/>
      <DownloadAppSection/>
      <WeddingStoriesSection/>
      <GallerySection/>  */}
      <TestimonialsSection/>
      {/* <HomeBlogSection/> */}

      <Footer/>
      
    </div>
  )
}

export default page
