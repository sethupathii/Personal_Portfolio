import style from './App.module.css';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Experience from './components/experience/experience';
import { Projects } from './components/Projects/Projects';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div className={style.App}>
      {/* <h1>Hello Sethu</h1> */}
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
