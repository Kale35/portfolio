import './App.css';
import Navbar from './Navbar';
import Info from './Info';
import Showcase from './Showcase';
import Referrals from './Referrals';
import Footer from './Footer';
import Skills from './Skills'
import SkillSet from './SkillSet';
function AboutMe() {
    return (
        <div>
            <div className="Content">
                <Info/>
                <Showcase/>
                <SkillSet/>
            </div>

        </div>
    )
}

export default AboutMe
