import React from 'react'
import Button from '@material-ui/core/Button';
import resume from './resume.png';
import Navbar from './Navbar';
import Footer from './Footer';
import './Resume.css';

function Resume() {
    return (
        <div>
            <div className="Resume">
                <Button>
                    <img src={resume}></img>
                </Button>
            </div>

            
        </div>
    )
}

export default Resume
