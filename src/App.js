import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio'
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

function App() {

  const [AboutMeSelected, setAboutMeSelected] = useState(true);
  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [ResumeSelected, setResumeSelected] = useState(false);

  return (
    <div className="App">
      <Nav
        AboutMeSelected={AboutMeSelected}
        setAboutMeSelected={setAboutMeSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        ResumeSelected={ResumeSelected}
        setResumeSelected={setResumeSelected}
      ></Nav>
      <main>
        {!AboutMeSelected ? (
          <>
          </>
        ) : (
          <About></About>
        )}
        {!contactSelected ? (
          <>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
        {!portfolioSelected ? (
          <>
          </>
        ) : (
          <Portfolio></Portfolio>
        )}
        {!ResumeSelected ? (
          <>
          </>
        ) : (
          <Resume></Resume>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
