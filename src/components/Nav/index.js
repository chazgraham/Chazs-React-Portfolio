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
            <span onClick={() => setContactSelected(false, setPortfolioSelected(false), setAboutMeSelected(true), setResumeSelected(false))}>About me</span>
          </li>
          <li className={`mx-2 ${portfolioSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(false, setPortfolioSelected(true), setAboutMeSelected(false), setResumeSelected(false))}>Portfolio</span>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true, setPortfolioSelected(false), setAboutMeSelected(false),setResumeSelected(false))}>Contact</span>
          </li>
          <li className={`mx-2 ${ResumeSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(false, setPortfolioSelected(false), setAboutMeSelected(false), setResumeSelected(true))}>Resume</span>
            </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;