import React from 'react';

function Nav(props) {
    const {
        AboutMeSelected,
        setAboutMeSelected,
        contactSelected,
        setContactSelected,
        portfolioSelected,
        setPortfolioSelected,
        ResumeSelected,
        setResumeSelected
      } = props;

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          Chaz Graham
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className={`mx-2 ${AboutMeSelected && 'navActive'}`}>
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false, setPortfolioSelected(false), setAboutMeSelected(true), setResumeSelected(false))}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${portfolioSelected && 'navActive'}`}>
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false, setPortfolioSelected(true), setAboutMeSelected(false), setResumeSelected(false))}>
              Portfolio
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true, setPortfolioSelected(false), setAboutMeSelected(false),setResumeSelected(false))}>Contact</span>
          </li>
          <li className={`mx-2 ${ResumeSelected && 'navActive'}`}>
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false, setPortfolioSelected(false), setAboutMeSelected(false), setResumeSelected(true))}>
              Resume
            </a>
            </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;