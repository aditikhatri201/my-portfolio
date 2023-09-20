import './App.css';
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience';
import Services from './components/Services';
import Contact from './components/Contact';
import {GiHamburgerMenu} from "react-icons/gi"
function App() {
  return (
    <div className="App">
      <div className='nav-bar'>
        <div className='logo'>Port<span className='color'>folio</span></div>
        <div className='hamburger'><GiHamburgerMenu/></div>
          <div className='navbar-elment'>
            
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#services">Services</a>
              <a href="#contact">Contact</a>
          </div>
      </div>
        <Home/>
        <About/>
        <Experience/>
        <Services/>
        <Contact/>
    </div>
  );
}

export default App;
