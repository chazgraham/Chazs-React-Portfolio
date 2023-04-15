import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

import './App.css';
import './index.css';

import Home from './components/Home/Home';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio'
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/Chazs-React-Portfolio"
            element={<Home />}
          />
          <Route
            path="/About"
            element={<About />}
          />
          <Route 
          path="/portfolio"
          element={<Portfolio />}
          />
          <Route
            path="contact"
            element={<ContactForm />}
          />
          <Route
            path="resume"
            element={<Resume />}
          />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
