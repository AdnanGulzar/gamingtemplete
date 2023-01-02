import React from 'react'
import './hero.css'
import GamingLibrary from "../gaminglibrary/GamingLibrary"
import PopularSection from '../popularsection/PopularSection'
import HeroImage from '../heroimage/HeroImage'
const Hero = () => {
  return (
    <main className='hero'>
     <HeroImage/>
     <PopularSection/>
     <GamingLibrary/>
    
    </main>
  )
}

export default Hero
