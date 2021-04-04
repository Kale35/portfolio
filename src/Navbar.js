import React from 'react'
import './Navbar.css'
import Button from '@material-ui/core/Button';
function Navbar() {
    return (
        <div className="Navbar">
            <div className="Navbar__Buttons">
                <Button>About Me</Button>
                <Button>Projects</Button>
                <Button>Resume</Button>
                <Button>Skills</Button>
            </div>
           

        </div>
    )
}

export default Navbar
