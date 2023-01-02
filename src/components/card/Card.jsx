import React from 'react'
import "./card.css"

const Card = () => {
  return (
    <div className='card'>
    <img src="src/assets/popular-08.jpg" alt="myname" />
    <div className="meta">
    
        <div className="name">Fortnite</div>
        <div className="star">3</div>
        <div className="company">Sandbox</div>
        <div className="download">3M</div>
    </div>
      
    </div>
  )
}

export default Card
