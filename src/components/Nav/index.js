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
    <header>
      <h1>
          Chaz Graham
      </h1>
      <nav>
        <ul className="flex-row">
          <li className={`${AboutMeSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(false, setPortfolioSelected(false), setAboutMeSelected(true), setResumeSelected(false))}>About me</span>
          </li>
          <li className={`${portfolioSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(false, setPortfolioSelected(true), setAboutMeSelected(false), setResumeSelected(false))}>Portfolio</span>
          </li>
          <li className={`${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true, setPortfolioSelected(false), setAboutMeSelected(false),setResumeSelected(false))}>Contact</span>
          </li>
          <li className={`${ResumeSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(false, setPortfolioSelected(false), setAboutMeSelected(false), setResumeSelected(true))}>Resume</span>
            </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;