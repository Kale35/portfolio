import React from 'react'
import './Showcase.css'
import gamestreak from './gamestreak.PNG'
import air from './airbnblogo.jpg'
import tweet from './tweet.jpg'
import Button from '@material-ui/core/Button';
import { Avatar } from '@material-ui/core'
function Showcase() {
    return (
        <div className="Showcase">
            <div className="Showcase__Header">
                <h2>Showcase:</h2>
            </div>
            <div className="Showcase__Content">
           
                <div className="Showcase__Item">
                    <Button className="Showcase__Button" href="https://github.com/Kale35/airbnb-clone" >
                                <img className="Showcase__Image" src={air}></img>
                    </Button>
                    <p>Airbnb Clone</p>
                </div>
                <div className="Showcase__Item">
                    <Button className="Showcase__Button" href="https://github.com/Kale35/uber-clone" >
                        <img className="Showcase__Image" src="https://cdn.mos.cms.futurecdn.net/5ij5qdSHFzJ2piPRuoTL5F-1200-80.jpg"></img>
                    </Button>
                    <p>Uber Clone</p>
                </div>
                <div className="Showcase__Item">
                    <Button className="Showcase__Button" href="https://drive.google.com/drive/folders/1AD0KAecB-82jh7ZS_fXoPHb5Wveyomg6?usp=sharing" >
                        <img className="Showcase__Image" src={gamestreak}></img>
                    </Button>
                    <p>Game Streak</p>
                </div>
                <div className="Showcase__Item">
                    <Button className="Showcase__Button" href="https://github.com/Kale35/college-king" >
                        <img className="Showcase__Image" src="https://media.istockphoto.com/vectors/crown-icon-on-red-background-red-flat-style-vector-illustration-vector-id1205041691?k=20&m=1205041691&s=170667a&w=0&h=-UasDO1A8nYboMvT7qSNhR4SNhDQCduoDfEZXBBs-Mk="></img>
                    </Button>
                    <p>College King</p>
                </div>
                
            
        </div>
        </div>
    )
}

export default Showcase
