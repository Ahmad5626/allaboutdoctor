import Footer from '@/components/Footer'
import GalleryPage from '@/components/gallery/galleryPage'
import Navbar from '@/components/Hedaer'
import React from 'react'

const page = () => {
  return (
    <div>
    <Navbar/>
      <GalleryPage/>
      <Footer/>
    </div>
  )
}

export default page
