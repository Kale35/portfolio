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
import Button from '@material-ui/core/Button';

export default function Projects() {
    return (
        <div>
            <div className="Projects">
                <div className = "Project">
                        <h2>Game Streak:</h2>
                        <div className="Project__Content">
                        <Button className="Project__Button" href="https://drive.google.com/drive/u/0/folders/1AD0KAecB-82jh7ZS_fXoPHb5Wveyomg6">
                            <img className="Project_Image"  src={game}/>
                        </Button>
                        
                            <p>Game Streak was a concept I thought of my senior year of high school that I decided to create on Unity. This was one of my first experiences programming and I learned a lot from it. Game Streak had the user would play a series of mini games and each victory would add 1 to your streak. The goal is to keep your streak running for as long as possible.</p>  
                        </div>              
                    </div>
                    <div className = "Project">
                        <h2>Twitter Clone:</h2>
                        <div className="Project__Content">
                        <Button className="Project__Button" href="https://github.com/Kale35/whatsapp-clone">
                            <img className="Project_Image" src={tweet}/>
                        </Button>
                            <p>I have decided to design clones of popular websites and webapps and one of those being Twitter. The clone uses a realtime database from firebase to manage tweets added by users and displays them on a feed.</p>  
                        </div>              
                    </div>
                    <div className = "Project">
                        <h2>Airbnb Clone:</h2>
                        <div className="Project__Content">
                        <Button className="Project__Button" href="https://github.com/Kale35/Twitter-Clone">
                            <img className="Project_Image" src={air}/>
                        </Button>
                            <p>Another website I recreated was Airbnb and I made it both dynamic and responsive. The goal of this project was to create a frontend that looked professionally done and visually aesthetic.</p>  
                        </div>              
                    </div>
                    <div className = "Project">
                        <h2>Uber Clone:</h2>
                        <div className="Project__Content">
                        <Button className="Project__Button" href="https://github.com/Kale35/Uber-Clone">
                            <img className="Project_Image" src="https://cdn.mos.cms.futurecdn.net/5ij5qdSHFzJ2piPRuoTL5F-1200-80.jpg"/>
                        </Button>
                            <p>I learned many new APIs and tools creating this clone, including NextJS, Mapbox API, and Tailwind CSS. This clone also uses Google authentication from Firebase.</p>  
                        </div>              
                    </div>
                    <div className = "Project">
                        <h2>College King:</h2>
                        <div className="Project__Content">
                        <Button className="Project__Button" href="https://github.com/Kale35/college-king">
                            <img className="Project_Image" src="https://media.istockphoto.com/vectors/crown-icon-on-red-background-red-flat-style-vector-illustration-vector-id1205041691?k=20&m=1205041691&s=170667a&w=0&h=-UasDO1A8nYboMvT7qSNhR4SNhDQCduoDfEZXBBs-Mk="/>
                        </Button>
                            <p>College King was a concept I thought of that would ease the college application process as well as help currently enrolled students. Students and faculty would be able to select a college and post on forums and communicate with one another. While this is only a frontend design, it is very dynamic and even includes an email and password based authentication.</p>  
                        </div>              
                    </div>
                </div>
            </div>
        
    )
}
