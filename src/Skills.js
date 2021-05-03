import React from 'react'
import './Skills.css'

function Skills() {
    return (
        <div>
           <div className="Skill">
                <h2>Personal Strengths:</h2>
                <div className="Skill__Details">
                    <p>- Great adaptability to any new environment or change in routine. I am able to fit in almost anywhere</p>
                    <p>- Amazing energy, I'm able to make any workplace much more enjoyable with a hospitable and memorable attitude</p>
                    <p>- Solid and improving time management skills and I can easily adjust to a new routine</p>
                    <p>- Creative thinker, I'm always looking forward to exciting new ways to get something done</p>
                </div>
            </div>
            <div className="Skill">
                <h2>Programming Experience:</h2>
                <div className="Skill__Details">
                    <p>- Familiar with a variety of programming languages: JavaScript, Python, Java, C# and more</p>
                    <p>- Able to learn new languages, frameworks, and libraries, especially involving object oriented programming</p>
                    <p>- Skillful with HTML and CSS and only getting better and better</p>
                    <p>- Experience using React, Node.js, Redux, and Firebase </p>
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
