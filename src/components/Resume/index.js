import React from 'react';
import resumeD from '../../assets/resume/resume.pdf';
import { Container } from 'react-bootstrap';

function Resume() {

  return (
    <>
      <section className='resume_img'>
        <div className='resume_title'>
          <h1 className='resume_h1'>Resume</h1>
          <a href={resumeD} download="resume.pdf">
            <button className='resume_btn'>Download .PDF</button>
          </a>
        </div>
      </section>
      <Container>
        <section>
          <div className='resume_part1'>
            <h3>Chaz Graham</h3>
            <p className='resume_p_title'>San Antonio, TX</p>
            <p className='resume_p_title'>Email: <a href="mailto: chazhg80.cg@gmail.com" className='resume_link'>chazhg80.cg@gmail.com</a></p>
            <p className='resume_p_title'>Linkedin: <a href='https://www.linkedin.com/in/chaz-graham-a95a43258' className='resume_link'>www.linkedin.com/in/chaz-graham-a95a43258</a></p>
            <p className='resume_p_title'>Portfolio: <a href='http://chazgraham.github.io/Chazs-React-Portfolio' className='resume_link'>http://chazgraham.github.io/Chazs-React-Portfolio</a></p>
            <p className='resume_p_title'>GitHub: <a href='https://github.com/chazgrahamChaz' className='resume_link'>https://github.com/chazgrahamChaz</a></p>
          </div>
          <div>
            <h3>Summary</h3>
            <p className='resume_p'>Full Stack Web Developer Effective at combining creativity and problem solving to develop user-friendly applications that are responsive and compelling. Experience working with APIs, either RESTful or GraphQL-based, using Javascript. Self-starting learner driven by curiosity paired with solid GitHub skills. I have a meticulous approach to my work with an excellent attention to detail. I am willing to travel for new roles.</p>
          </div>
          <div>
            <h3>Skills</h3>
            <p className='resume_p'>Technical Languages/Skills:  HTML/HTML5, JavaScript, React.js, jQuery, Express, Apollo, MongoDB, GraphQl, Bcrypt, WordPress</p>
            <p className='resume_p'>Soft Skills: Communication, Teamwork, Problem-solving, Flexibility, Adaptability.</p>
            <p className='resume_p'>Applications: Full Stack Web Development and WordPress</p>
          </div>
        </section>
        <section>
          <h3>Relative Experience</h3>
          <div>
            <p className='resume_p_title'>Arcadium: <a href='https://github.com/chazgraham/Arcadium' className='resume_link'>GitHub Repository</a> | <a href='http://chazgraham.github.io/Arcadium' className='resume_link'>Deployed Application</a></p>
            <ul>
              <li>An application that allows the user to choose a game that is posted on the homepage and allow them to play the game and view their score. All logic coded in JavaScript.</li>
              <li>This application cures boredom and allows the user to relax by playing simple games.</li>
              <li>Technologies Used: React, JavaScript, CSS</li>
            </ul>
          </div>
          <div>
            <p className='resume_p_title'>Game Seeker: <a href='https://github.com/chazgraham/Game-Seeker' className='resume_link'>GitHub Repository</a> | <a href='https://game-seeker.herokuapp.com/' className='resume_link'>Deployed Application</a></p>
            <ul>
              <li>The application allows users to track games they have played, are playing, and have completed. It also allows the user to make friends and view the same list on their profiles.</li>
              <li>I was fully responsible for all aspects of the application down to styling and database creation as well as API calls from front-end to back-end. Used effective time management skills to meet my deadline.</li>
              <li>Technologies Used: React, JavaScript, Apollo, MongoDb, GraphQl, Express, Bcrypt</li>
            </ul>
          </div>
          <div>
            <p className='resume_p_title'>The Collective: <a href='https://github.com/DXHASE/Collective-Social-App' className='resume_link'>GitHub Repository</a> | <a href='https://social-collective-app.herokuapp.com/' className='resume_link'>Deployed Application</a></p>
            <ul>
              <li>A social media platform that allows users to log in or sign up. Once the user is logged in they will be able to view past posts by other users and visit their own profile via the nav bar where they will be able to create, update, and delete their own posts.</li>
              <li>front end and backend communication via API calls as well as assist with styling</li>
              <li>Technologies Used: JavaScript, Handlebars, Express, Sequelize, MySQL, Node.js</li>
            </ul>
          </div>
        </section>
        <section>
          <h3>Experience</h3>
          <p className='resume_p_title'>United States Air Force</p>
          <p className='resume_p_title'>Aerospace Medical Technician / SSgt - From years 2015-2021</p>
          <p className='resume_p'>Led night shift operations managing 20 thousand appointments with a small team of 20 medical members. I have strong leadership and following qualities to fit the role I am placed in. Quick picking up new skills and applying them into the workplace. Key Accomplishments:</p>
          <ul>
            <li>Oversaw admin medical training program trained 20 medics on 65 critical items that lowered documentation errors by 30%</li>
            <li>Facilitated emergency vehicle rescue, coordinated with 3 agencies secured 70k in assets</li>
          </ul>
        </section>
        <section>
          <h3>Education</h3>
          <div>
            <p className='resume_p_title'>Boot Camp Certificate: University of Texas at San Antonio, San Antonio, TX</p>
            <p className='resume_p'>A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS, Javascript, JQuery, Bootstrap, IndexDB, Node.js, MySQL, MongoDB, Express, Handelbars.js, and ReactJS.</p>
          </div>
          <div>
            <p className='resume_p_title'>Basic Medical Technician Corpsman Program: Community College of the Air Force, San Antonio, TX</p>
            <p className='resume_p'>A 24-week intensive program focused on gaining technical skills in emergency medicine.</p>
          </div>
        </section>
      </Container>
    </>
  );
}
export default Resume;