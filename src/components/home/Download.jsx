import Link from 'next/link'
import React from 'react'

const Download = () => {
  return (
    <div>
      <div className="flex justify-between items-center  gap-4 py-4 max-w-7xl mx-auto">
      <div className="">
      <div className=" w-40 h-40">
      <Link href="https://play.google.com/store/apps/details?id=com.allaboutdoctor">
        <video
      src="/assets/img/downalod.mp4"
      className="w-full h-full  cursor-pointer"
      autoPlay
      loop
      muted
      
    />
      </Link>
      
      </div>

      
      </div>

         <div className="">
      <Link href="https://play.google.com/store/apps/details?id=com.allaboutdoctor">
        <img src="/assets/img/download.google.png" alt="donwload" />
      </Link>
      
      </div>
         <div className=" w-40 h-40">
      <Link href="https://play.google.com/store/apps/details?id=com.allaboutdoctor">
        <video
      src="/assets/img/youbute.mp4"
      className="w-full h-full  cursor-pointer"
      autoPlay
      loop
      muted
      playsInline
    />
      </Link>
      
      </div>

      </div>
    </div>
  )
}

export default Download
