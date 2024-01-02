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
          {/* Set default OG tags */}
          <title>SethuPathi M - Home</title>
          <meta property="og:title" content="SethuPathi M - Home" />
          <meta property="og:description" content="Your default description" />
          <meta property="og:image" content="URL_TO_DEFAULT_OG_IMAGE" />
          {/* Other meta tags */}
          {/* ... */}
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
