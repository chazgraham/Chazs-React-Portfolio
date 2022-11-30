import React from 'react';

function Resume() {

  return (
    <section>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <div>
      <h2>Resume</h2>
      Download my<a href='resume.pdf' download="resume.pdf">
        <button className='resume-btn'><span class="material-symbols-outlined">description</span>Resume</button>
        </a>
      </div>
      <div>
        <h3>Front-end Proficiencies</h3>
        <ul>
          <li className='resume-li'>
            <p>HTML</p>
          </li>
          <li className='resume-li'>
            <p>CSS</p>
          </li>
          <li className='resume-li'>
            <p>JavaScript</p>
          </li>
          <li className='resume-li'>
            <p>React</p>
          </li>
          <li className='resume-li'>
            <p>Bootstrap</p>
          </li>
        </ul>
      </div>
      <div>
        <h3>Back-end Proficiencies</h3>
        <ul>
          <li className='resume-li'>
            <p>APIs</p>
          </li>
          <li className='resume-li'>
            <p>Node</p>
          </li>
          <li className='resume-li'>
            <p>Express</p>
          </li>
          <li className='resume-li'>
            <p>MySQL, Sequelize</p>
          </li>
          <li className='resume-li'>
            <p>MongoDB</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Resume;