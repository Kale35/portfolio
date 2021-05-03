import React from 'react'
import './Navbar.css'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
function Navbar() {
    return (
        <div className="Navbar">
            <div className="Navbar__Buttons">
                <Link to="/" className="Navbar__Link">
                    <Button>
                            About Me
                    </Button>
                </Link>
                <Link to="/Projects" className="Navbar__Link">
                    <Button>
                            Projects
                    </Button>
                </Link>
                <Link to="/Resume" className="Navbar__Link">
                    <Button>
                            Resume
                    </Button>
                </Link>
                <Link to="/Skills" className="Navbar__Link">
                    <Button>
                            Skills
                    </Button>
                </Link>
            </div>
           

        </div>
    )
}

export default Navbar
