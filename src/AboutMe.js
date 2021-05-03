import './App.css';
import Navbar from './Navbar';
import Info from './Info';
import Showcase from './Showcase';
import Referrals from './Referrals';
import Footer from './Footer';
function AboutMe() {
    return (
        <div>
            <div className="Content">
                <Info/>
                <Showcase/>
                <Referrals/>
            </div>

        </div>
    )
}

export default AboutMe
