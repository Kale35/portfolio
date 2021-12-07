import React from 'react'
import {Avatar} from '@material-ui/core';
import './Info.css'
import Berat from './BeratK.jpg';

function Info() {
    return (
        <div>
            <div className="Info__Header">
                <h2>About Me:</h2>
            </div>
            <div className="Info__Contents">
                <img src={Berat}></img>
            
                <p>Hello, my name is Berat Kales, I am an undergraduate computer science major at Adelphi University. I am specializing in software engineering and cybersecurity and I am also a very capable developer. I have extensive experience in UI/UX design as well as frontend development and a growing knowledge in backend. I am eager to learn new things and expand my mastery.</p>
            </div>
        </div>
    )
}

export default Info
