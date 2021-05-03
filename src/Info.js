import React from 'react'
import {Avatar} from '@material-ui/core';
import './Info.css'
function Info() {
    return (
        <div>
            <div className="Info__Header">
                <h2>Berat Kales:</h2>
            </div>
            <div className="Info__Contents">
                <img src='http://tcap.pbworks.com/f/1435170280/myAvatar.png'></img>
            
                <p>Hello and welcome to my portfolio, I am a CS undergrad going for software engineering     
and cybersecurity at Adelphi  University.  I am an aspiring full stack developer(currently pursing MERN Stack) and I have experience in JavaScript, ReactJS, UI/UX design and much more. </p>
            </div>
        </div>
    )
}

export default Info
