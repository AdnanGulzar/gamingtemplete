import React from 'react'
import "./popular.css"
import Card from '../card/Card'
const PopularSection = () => {
  return (
    <div className='popular '>
    <h2>Most pupular <span>Right Now</span></h2>
    <div className="cardcont">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <button>Discover Popular</button>
    </div>
      
    </div>
  )
}

export default PopularSection
