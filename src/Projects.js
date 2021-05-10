import './App.css';
import Navbar from './Navbar';
import './Projects.css';
import Showcase from './Showcase';
import Referrals from './Referrals';
import Footer from './Footer';
import whatsapp from './WhatsApp-Logo.png'
import air from './airbnblogo.jpg'
import tweet from './tweet.jpg'
import game from './gamestreak.PNG'
import React from 'react'

export default function Projects() {
    return (
        <div>
            <div className="Projects">
                <div className = "Project">
                        <h2>Game Streak:</h2>
                        <div className="Project__Content">
                            <img src={game}/>
                            <p>Game Streak was a concept I thought of my senior year of high school that I decided to create on Unity. This was one of my first experiences programming and I learned a lot from it. Game Streak had the user would play a series of mini games and each victory would add 1 to your streak. The goal is to keep your streak running for as long as possible.</p>  
                        </div>              
                    </div>
                    <div className = "Project">
                        <h2>WhatsApp Clone:</h2>
                        <div className="Project__Content">
                            <img src={whatsapp}/>
                            <p>To sharpen my skills in front end, I decided to recreate WhatsApp. I was also able to give it functionality using Cloud Firestore and Firebase Authentication. You are able to sign into the app, create a chat, and send messages and it will be displayed to everyone.</p>  
                        </div>              
                    </div>
                    <div className = "Project">
                        <h2>Twitter Clone:</h2>
                        <div className="Project__Content">
                            <img src={tweet}/>
                            <p>After recreating WhatsApp, I decided to create some more recognizable websites. One of which is Twitter and using Cloud Firestore, users are able to create and display tweets that have text and images.</p>  
                        </div>              
                    </div>
                </div>
            </div>
        
    )
}
