import React from 'react';
import style from './App.module.css';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Experience from './components/experience/experience';
import { Projects } from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className={style.App}>
        <Helmet>
          <title>Home</title>
          <meta property="og:title" content="SethuPathi M - Home" />
          <meta property="og:description" content="SEthu" />
          {/* <meta property="og:image" content="https://thumbs.dreamstime.com/b/web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-121903546.jpg" /> */}
          <meta property="og:type" content="website" />
          <meta property="og:image:type" content="image/jpg" />
          <meta property="og:image:width" content="300" />
          <meta property="og:image:height" content="300" />
          <meta property="og:url" content="https://main--bucolic-crisp-4bfe2d.netlify.app/#about" />
        </Helmet>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      {/* Add other content for the Home page */}
    </>
  );
}

export default App;
