import React from 'react';
import { Container } from 'react-bootstrap';
import resumeImg from '../../assets/profileImg/resume-img.jpg';
import resumeImg2 from '../../assets/profileImg/resume-img2.jpg';
import reume from '../../assets/resume/resume.pdf';

function Resume() {

  return (
    <Container className='resume-text'>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <div>
      <h2>Resume</h2>
      Download my<a href={reume} download="resume.pdf">
        <button className='resume-btn'><span class="material-symbols-outlined">description</span>Resume</button>
        </a>
      </div>
      <div>
        <img className='resume' src={resumeImg} alt='resume'/>
        <img className='resume' src={resumeImg2} alt='resume'/>
      </div>
    </Container>
  );
}
export default Resume;