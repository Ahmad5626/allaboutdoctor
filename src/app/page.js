import Footer from '@/components/Footer'
import Hedaer from '@/components/Hedaer'
import CategoriesSlider from '@/components/home/categories-slider'
import HeroSection from '@/components/home/HeroSection'
import Listing from '@/components/home/Listing'
import Pricing from '@/components/home/Pricing'
import TestimonialsSection from '@/components/home/Testimonial'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hedaer/>
      <HeroSection/>
      <CategoriesSlider/>
      <Listing/>
     
      <TestimonialsSection/>
      <Footer/>
      
    </div>
  )
}

export default page
