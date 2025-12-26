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
import Trusted from '@/components/home/trusted'
import MedicalCareer from '@/components/home/medicalCareer'
import LatestUpdates from '@/components/home/LatestUpdates'
import Download from '@/components/home/Download'
import InternationalCollaboration from '@/components/home/International'
import Images from '@/components/home/Images'

const page = () => {
  return (
    <div>
      <Hedaer />
      <HeroSection />
   
      <MbbsCta />
      {/* <SuccessStories /> */}
      {/* <FeaturedSlider /> */}
      <Destination />
      <InternationalCollaboration/>
   <Images/>
      {/* <VideoSection /> */}

       {/* <DoctorServicesSlider />  */}
      <Trusted />
      {/* <Download/> */}
       <LatestUpdates/>
      <HowWeWork />

     
      <DownloadAppSection />
       <TestimonialsSection />
      <MedicalCareer />
    
     
      
      {/* <GallerySection/>  */}
     
      {/* <HomeBlogSection/> */}

      <Footer />

    </div>
  )
}

export default page
