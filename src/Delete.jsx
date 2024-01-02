import style from './App.module.css';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Experience from './components/experience/experience';
import { Projects } from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

import App from './App';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Apps() {
    return (
        <Router>
            <Routes>
                <Route>
                    <Route path='/' element={<App />} />
                    {/* <Route path='/about' element={<About />} />
                    <Route path='/sp' element={<Projects />} />
                    <Route path='/about' element={<About />} /> */}
                </Route>
            </Routes>
        </Router>
    )
}

export default Apps
