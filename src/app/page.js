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

const page = () => {
  return (
    <div>
      <Hedaer/>
      <HeroSection/>
      <ServicesSection/>
      <CategoriesSlider/>
      <Listing/>
     
      <TestimonialsSection/>
      <HomeBlogSection/>
      <Footer/>
      
    </div>
  )
}

export default page
