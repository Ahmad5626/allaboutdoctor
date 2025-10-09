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
import FeaturedSlider from '@/components/home/featured-slider'
import Destination from '@/components/home/destination'

import AppSectionSlider from '@/components/home/app-section-slider'
import DestinationsSlider from '@/components/home/destinations-slider'

const page = () => {
  return (
    <div>
      <Hedaer/>
      <HeroSection/>
      <MbbsCta/>
      <SuccessStories />
      <FeaturedSlider/>
      <Destination/>

      <VideoSection/>
      
        <DestinationsSlider/>

         <DownloadAppSection/>
          
           {/* <PopularSearches />
         
      <ServicesSection/>
      <CategoriesSlider/>
      <Listing/>
     
      <WeddingStoriesSection/>
      <GallerySection/>  */}
      <TestimonialsSection/>
      {/* <HomeBlogSection/> */}

      <Footer/>
      
    </div>
  )
}

export default page
