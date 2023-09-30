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
          <h3>Chaz Graham</h3>
          <div className='resume_part1'>
            <p className='resume_p_title'><a href="mailto: chazhg80.cg@gmail.com" className='resume_link'>chazhg80.cg@gmail.com</a> • </p>
            <p className='resume_p_title'><a href='https://www.linkedin.com/in/chaz-graham-a95a43258' className='resume_link'> Linkedin</a> • </p>
            <p className='resume_p_title'><a href='https://github.com/chazgrahamChaz' className='resume_link'> GitHub</a> • </p>
            <p className='resume_p_title'><a href='http://chazgraham.github.io/Chazs-React-Portfolio' className='resume_link'> Portfolio</a></p>
          </div>
          <div>
            <h3>Full Stack Engineer | Software Engineer | Frontend Engineer</h3>
            <p className='resume_about'>
              Bootcamp certificate holder, multilingual software engineer with a broad set of technical skills including design,
              testing, and development. Love for learning new technologies and a passion for clean code.
            </p>
          </div>
          <div>
            <h4 className='left'>Skills</h4>
            <p className='resume_p'><strong>Programming: </strong>JavaScript, Node.js, HTML5, CSS</p>
            <p className='resume_p'><strong>Libraries/Platforms: </strong>Express, React, jQuery</p>
            <p className='resume_p'><strong>Data/Databases: </strong>SQL, NoSQL, MySQL, MongoDb</p>
            <p className='resume_p'><strong>Cloud/Technologies: </strong>Heroku, Stripe</p>
          </div>
        </section>
        <section>
          <h4 className='left'>Relative Experience</h4>
          <div>
            <div className='project_title'>
              <p className='resume_p_title2'>Arcadium</p>
              <a href='https://github.com/chazgraham/Arcadium' className='resume_link'>GitHub Repository</a>
              <p>Stack: Javascript, React, CSS</p>
              <p>2023</p>
            </div>
            <ul>
              <li>Developed a gaming library using Javascript and React, letting users choose a game of their choice. This helps destress and allows users to recharge.</li>
              <li>Defined 3 games- candy smasher, tic-tac-toe, and rock paper scissors, which increased variety and gave users options depending on their play preference.</li>
            </ul>
          </div>
          <div>
            <div className='project_title'>
              <p className='resume_p_title2'>Foodies</p>
              <a href='http://chazgraham.github.io/Foodies' className='resume_link'>GitHub Repository</a>
              <p>Stack: Javascript, React, Bootstrap</p>
              <p>2023</p>
            </div>
            <ul>
              <li>Created an application that assists users in cooking using 3rd party API calls to the spoonacular recipe database. This gives users thousands of new recipes to try.</li>
              <li>Using the React platform, I manipulated the data to display the necessary steps as well as a list of ingredients to recreate the recipe, allowing users to create dishes they have never attempted.</li>
            </ul>
          </div>
          <div>
            <div className='project_title'>
              <p className='resume_p_title2'>Game Seeker</p>
              <a href='https://github.com/chazgraham/Game-Seeker' className='resume_link'>GitHub Repository</a>
              <p>Stack: Javascript, React, MongoDb, Node.js</p>
              <p>2022</p>
            </div>
            <ul>
              <li>This application allows the user to search for their desired dish they would like to make and will give a short summary and provide the user will simple steps to recreate the dish.</li>
              <li>Solely contributed to design, styling, and API integration with efficient time management</li>
              <li>Technologies Used: JavaScript, React.js, Bootstrap</li>
            </ul>
          </div>
          <div>
            <div className='project_title'>
              <p className='resume_p_title2'>Express Shop</p>
              <a href='https://github.com/chazgraham/Express-shop' className='resume_link'>GitHub Repository</a>
              <p>Stack: Javascript, React, MongoDb, Node.js</p>
              <p>2022</p>
            </div>
            <ul>
              <li> Programmed an ecommerce application, using object data modeling (mongoose) to query the database, allows users to add/remove items from their cart</li>
              <li>Implemented stripe checkout, giving users secure checkout with a custom order recipient Giving the user an easy to navigate UI design.</li>
            </ul>
          </div>
          <div>
            <div className='project_title'>
              <p className='resume_p_title2'>Music Playlist</p>
              <a href='https://github.com/chazgraham/Music--Playlist' className='resume_link'>GitHub Repository</a>
              <p>Stack: Javascript, HTML, Bulma</p>
              <p>2022</p>
            </div>
            <ul>
              <li>Led application design in a team of 3 developers. Created an effective and interactive web-based music playlist creator using 3rd party API calls to mixcloud database.</li>
              <li>Updated application with 4 new features, giving users visual thumbnails, song names, ability to save songs to playlist, and display saved playlist. Enhanced user experience with individualistic playlist.</li>
            </ul>
          </div>
          <div>
            <div className='project_title'>
              <p className='resume_p_title2'>JavaScript Test</p>
              <a href='https://github.com/chazgraham/Chazs-JavaScript-Knowledge-Test' className='resume_link'>GitHub Repository</a>
              <p>Stack: Javascript, HTML, CSS</p>
              <p>2022</p>
            </div>
            <ul>
              <li>Built a knowledge testing application using javascript, testing the users knowledge and proficiency with the javascript language. Rates users knowledge on a 1-10 scale in basic javascript knowledge.</li>
              <li>Using set-timer functionality, the application tests the user in a timed environment. Allows users to gauge their speed of memory recall.</li>
            </ul>
          </div>
          <div>
            <div className='project_title'>
              <p className='resume_p_title2'>Socal Collective</p>
              <a href='https://github.com/DXHASE/Collective-Social-App' className='resume_link'>GitHub Repository</a>
              <p>Stack: Javascript, HTML, SQL</p>
              <p>2022</p>
            </div>
            <ul>
              <li>Co-developed on a team of 3 developers. Developed an interactive social media platform, allowing users to sign up, post, like, and comment on images with captions</li>
              <li>Defined database schemas and wrote efficient retrieval queries in SQLl for various user requirements.</li>
              <li>Implemented templating language (handlebars.js), simplified work load and decreased total lines of code.</li>
            </ul>
          </div>
        </section>
        <section>
          <h3>Education</h3>
          <div>
            <p className='resume_p_title'>Boot Camp Certificate: University of Texas at San Antonio, San Antonio, TX</p>
            <p className='resume_p'>A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS, Javascript, JQuery, Bootstrap, IndexDB, Node.js, MySQL, MongoDB, Express, Handelbars.js, and ReactJS.</p>
          </div>
        </section>
      </Container>
    </>
  );
}
export default Resume;