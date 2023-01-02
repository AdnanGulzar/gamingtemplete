import React from 'react'
import "./gamingcard.css"

const GamingCard = () => {
  return (
    <div className='gcard'>
    <div className="image">
        <img src="src/assets/game-02.jpg" alt="" />
    </div>
    <div className="name">
        FortNight
    </div>
    <div className="date">
        03/04/2020
    </div>
    <div className="curr">Currently Active</div>
    <button>Download</button>
     
    </div>
  )
}

export default GamingCard
