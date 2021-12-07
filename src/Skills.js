import React from 'react'
import './Skills.css'

function Skills() {
    return (
        <div className="Skills">
           <div className="Skill">
                <h2>Personal Strengths:</h2>
                <div className="Skill__Details">
                    <p>- Very flexible and able to adjust to a new schedule with ease.</p>
                    <p>- Amazing energy, I'm able to make any workplace much more enjoyable with a hospitable and engaging attitude.</p>
                    <p>- Solid time management skills, I am able to make progress under many circumstances.</p>
                    <p>- Great communication skills with clients and collegues alike.</p>
                </div>
            </div>
            <div className="Skill">
                <h2>Programming Experience:</h2>
                <div className="Skill__Details">
                    <p>- Familiar with a variety of programming languages: JavaScript, Python, Java, C# and more.</p>
                    <p>- Able to learn new languages, frameworks, and libraries, especially involving object oriented programming.</p>
                    <p>- Very knowledgeable in frontend development.</p>
                    <p>- Experience using React, NodeJS, Redux, and Firebase</p>
                </div>
            </div>
            <div className="Skill">
                <h2>Education:</h2>
                <div className="Skill__Details">
                    <p>- Graduated Mineola High School in 2019</p>
                    <p>- Currently enrolled at Adelphi University under merit scholarship</p>
                    <p>- Pursuing a degree in Computer Science, specializing in both software engineering and cybersecurity</p>
                </div>
            </div>
        </div>
    )
}

export default Skills
