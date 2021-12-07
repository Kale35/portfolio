import React from 'react'
import './SkillSet.css'
import js from './javascript.jpg';
function SkillSet() {
    return (
        <div className="SkillSet">
            <div className="SkillSet__Header">
                <h2>Skill Set</h2>
            </div>
            <div className="SkillSet__Skills">
                <div className="SkillSet__Skill">
                    <img src={js}/>
                    <div className="SkillSet__Description">
                        <h3>Javascript</h3>
                        <p>I have been using Javascript for 2 years and I am very familiar with many frameworks and libraries. Javascript is almost essential to be used in any website or web application.</p>
                    </div>
                </div>
            </div>
            <div className="SkillSet__Skills">
                <div className="SkillSet__Skill">
                    <img src="https://www.logolynx.com/images/logolynx/c9/c91563682d5f5ee007db258f787d1d14.jpeg"/>
                    <div className="SkillSet__Description">
                        <h3>React JS & React Native</h3>
                        <p>Most of my frontend projects have been made in React and React Native. Using functional components makes creating and designing websites simpler and more organized than vanilla Javascript and HTML. React is also compatible with many APIs and libraries opening new horizons for any project.</p>
                    </div>
                </div>
            </div>
            <div className="SkillSet__Skills">
                <div className="SkillSet__Skill">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJEL4F-IqROVTyPGQAosbmqVPxYusr8TWgQ&usqp=CAU"/>
                    <div className="SkillSet__Description">
                        <h3>jQuery</h3>
                        <p>jQuery is a very practical Javascript library I have been using that simplifies DOM manipulation by integrating it with Javascript.</p>
                    </div>
                </div>
            </div>
            <div className="SkillSet__Skills">
                <div className="SkillSet__Skill">
                    <img src="https://firebase.google.com/images/brand-guidelines/logo-logomark.png"/>
                    <div className="SkillSet__Description">
                        <h3>Firebase</h3>
                        <p>Firebase is a very useful SDK provided by Google. It provides a cloud, realtime, noSQL database that can be integrated with your web app. Additionally, Firebase makes implementing authentication simple as well as a means to deploy your project.</p>
                    </div>
                </div>
            </div>
            <div className="SkillSet__Skills">
                <div className="SkillSet__Skill">
                    <img src="https://dev.java/assets/images/java-logo-vert-blk.png"/>
                    <div className="SkillSet__Description">
                        <h3>Java</h3>
                        <p>Java is an object-oriented programming language I have been using frequently. I am familiar with many different data structures as well as fundamentals when it comes to OOP</p>
                    </div>
                </div>
            </div>
            <div className="SkillSet__Skills">
                <div className="SkillSet__Skill">
                    <img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=630/uploads/users/30/posts/34224/image/figma-vs-xd-lg.png"/>
                    <div className="SkillSet__Description">
                        <h3>Adobe XD & Figma</h3>
                        <p>I have been using Adobe XD or Figma before starting most of my projects. Laying out a UI beforehand makes development much simpler.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillSet
