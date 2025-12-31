import Link from 'next/link'
import React from 'react'

const Videomain = () => {
  return (
    <div>
      <div className=" w-full">
            <video
      src="/assets/img/video.mp4"
      className="w-full h-full  cursor-pointer"
      autoPlay
      loop
      muted
      
    />
     
      </div>
    </div>
  )
}

export default Videomain
