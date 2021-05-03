import './App.css';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Resume from './Resume';
import Skills from './Skills';
import Navbar from './Navbar';
import Footer from './Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <div className="Content">
          <Switch>
            <Route exact path = "/">
              <AboutMe/>
            </Route>
            <Route path = '/Projects'>
              <Projects/>
            </Route>
            <Route path= '/Resume'>
              <Resume/>
            </Route>
            <Route path = '/Skills'>
              <Skills/>
            </Route>
          </Switch>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
