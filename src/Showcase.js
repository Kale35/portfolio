import React from 'react'
import './Showcase.css'
import whatsapp from './WhatsApp-Logo.png'
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
                    <Button className="Showcase__Button" href="https://github.com/Kale35/whatsapp-clone" >
                        <img className="Showcase__Image" src={tweet}></img>
                    </Button>
                    <p>Twitter Clone</p>
                </div>
                <div className="Showcase__Item">
                    <Button className="Showcase__Button" href="https://github.com/Kale35/twitter-clone" >
                        <img className="Showcase__Image" src={whatsapp}></img>
                    </Button>
                    <p>WhatsApp Clone</p>
                </div>
            
        </div>
        </div>
    )
}

export default Showcase
