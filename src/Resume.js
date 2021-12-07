import React from 'react'
import Button from '@material-ui/core/Button';
import resume from './NewResume.PNG';
import Navbar from './Navbar';
import Footer from './Footer';
import './Resume.css';

function Resume() {
    const onDownload = () => {
        const link = document.createElement("a");
        link.download = "./Resume.png";
        link.href = "./Resume.png";
        link.click();
      };

    return ( 
        <div>
            <div className="Resume">
                <Button className="Resume__Button" onClick={onDownload}>
                    <img className="Resume__Image" src={resume}></img>
                </Button>
            </div>

            
        </div>
    )
}

export default Resume
