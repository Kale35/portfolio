import './App.css';
import Navbar from './Navbar';
import Info from './Info';
import Showcase from './Showcase';
function App() {
  return (
    <div className="App">
      <Navbar/>
     <div className="AboutMe">
        <Info/>
        <Showcase/>
      </div>
    </div>
  );
}

export default App;
