import './App.css'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import SocialLinks from './Components/Social';

function App() {
  return (
    <div className="flex flex-col md:w-[70%] mx-auto font-montserrat"> {/* Center & limit to 70% */}
      <Navbar />
      <div id='Home'> 
      <Home />
      <About/>
      <Projects/>
      <SocialLinks/>
      <Contact/>
      </div>
    </div>
  )
}

export default App
