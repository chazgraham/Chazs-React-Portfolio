import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

import './App.css';
import './index.css';

import Home from './components/Home/Home';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import ScrollToTop from './utils/helpers';


function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route
            path="/Chazs-React-Portfolio"
            element={<Home />}
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
        <Footer />
      </Router>
    </>
  );
}

export default App;
