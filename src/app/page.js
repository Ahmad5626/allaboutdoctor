import Footer from '@/components/Footer'
import Hedaer from '@/components/Hedaer'

import HeroSection from '@/components/home/HeroSection'

import TestimonialsSection from '@/components/home/Testimonial'
import React from 'react'



import DownloadAppSection from '@/components/home/download-app-section'

import SuccessStories from '@/components/home/SuccessStories'
import MbbsCta from '@/components/home/MbbsCta'
import VideoSection from '@/components/home/Video'
import FeaturedSlider from '@/components/home/featured-slider'
import Destination from '@/components/home/destination'


import DestinationsSlider from '@/components/home/destinations-slider'
import DoctorServicesSlider from '@/components/home/doctor-services-slider'
import HowWeWork from '@/components/home/how-we-work'

const page = () => {
  return (
    <div>
      <Hedaer />
      <HeroSection />
      <MbbsCta />
      <SuccessStories />
      <FeaturedSlider />
      <Destination />

      <VideoSection />

      <DoctorServicesSlider />
      <HowWeWork />
      <DownloadAppSection />

      {/* <PopularSearches />
         
      <ServicesSection/>
      <CategoriesSlider/>
      <Listing/>
     
      <WeddingStoriesSection/>
      <GallerySection/>  */}
      <TestimonialsSection />
      {/* <HomeBlogSection/> */}

      <Footer />

    </div>
  )
}

export default page
