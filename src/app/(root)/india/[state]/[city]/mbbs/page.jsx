import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import CityHero from '@/components/india/city/cityHero'
import React from 'react'

const mbbs = ({params}) => {
    const {state,city}=params


  return (
    <div>
    <Navbar/>
    <CityHero state={state} city={city}/>
    <Footer/>
      
    </div>
  )
}

export default mbbs
