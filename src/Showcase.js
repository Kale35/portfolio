import React from 'react'
import './Showcase.css'
import game from './gamestreak.PNG'
import air from './airbnblogo.jpg'
import tweet from './tweet.jpg'
function Showcase() {
    return (
        <div className="Showcase">
            <div className="Showcase__Header">
                <h2>Showcase:</h2>
            </div>
            <div className="Showcase__Content">
                <img src={air}></img>
                <img src={game}></img>
                <img src={tweet}></img>
            </div>
        </div>
    )
}

export default Showcase
