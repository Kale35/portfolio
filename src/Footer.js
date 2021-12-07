import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div className="Footer">
            <h1>Contact Info</h1>
            <div className="Footer__Info">
                <p>Email: <a className="Footer__Link" href="mailto:bkales123@gmail.com">bales1801@gmail.com</a></p>
                <p>Github: <a className="Footer__Link" href="https://github.com/Kale35">github.com/Kale35</a></p>
                <p>Linkedin: <a className="Footer__Link" href="https://linkedin.com">linkedin.com/BeratKales</a></p>
            </div>
        </div>
    )
}

export default Footer
