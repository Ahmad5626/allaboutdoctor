import Hedaer from '@/components/Hedaer'
import CategoriesSlider from '@/components/home/categories-slider'
import HeroSection from '@/components/home/HeroSection'
import Listing from '@/components/home/Listing'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hedaer/>
      <HeroSection/>
      <CategoriesSlider/>
      <Listing/>
      
    </div>
  )
}

export default page
